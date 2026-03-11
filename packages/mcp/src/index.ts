import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import pkg from "../package.json" with { type: "json" };

const BASE_RAW_URL =
	"https://raw.githubusercontent.com/felipe-miranda-marreiros/p-f-design/main";

const COMPONENT_PACKAGES = ["ui", "shell", "charts"] as const;
type ComponentPackage = (typeof COMPONENT_PACKAGES)[number];

async function fetchRaw(path: string): Promise<string | null> {
	try {
		const res = await fetch(`${BASE_RAW_URL}/${path}`);
		if (!res.ok) return null;
		return await res.text();
	} catch {
		return null;
	}
}

function parseBarrelComponents(content: string): string[] {
	const matches = content.matchAll(/export \* from "\.\/components\/([^"]+)"/g);
	return [...matches].map((m) => m[1]);
}

const server = new McpServer({
	name: "design-system",
	version: pkg.version,
});

server.registerTool(
	"list_components",
	{
		description:
			"List all available components per package in the @felipe-miranda-marreiros design system",
		inputSchema: {},
	},
	async () => {
		const results = await Promise.all(
			COMPONENT_PACKAGES.map(async (pkg) => {
				const content = await fetchRaw(`packages/${pkg}/src/index.ts`);
				const components = content ? parseBarrelComponents(content) : [];
				return { pkg, components };
			}),
		);

		const text = results
			.filter(({ components }) => components.length > 0)
			.map(
				({ pkg, components }) =>
					`**@felipe-miranda-marreiros/${pkg}:**\n${components.map((c) => `  - ${c}`).join("\n")}`,
			)
			.join("\n\n");

		return { content: [{ type: "text" as const, text }] };
	},
);

server.registerTool(
	"get_component_docs",
	{
		description:
			"Get TypeScript props interface, variants, colors, and usage examples for a specific component",
		inputSchema: {
			package: z
				.enum(["ui", "shell", "charts"])
				.describe("Package name: ui, shell, or charts"),
			component: z
				.string()
				.describe(
					"Component name in kebab-case (e.g. button, data-grid, modal, sidebar)",
				),
		},
	},
	async ({
		package: pkg,
		component,
	}: {
		package: ComponentPackage;
		component: string;
	}) => {
		const componentBase = `packages/${pkg}/src/components/${component}/${component}`;
		const storyPath = `apps/storybook/src/stories/${pkg}/${component}.stories.tsx`;

		const [sourceMain, sourceView, story] = await Promise.all([
			fetchRaw(`${componentBase}.component.tsx`),
			fetchRaw(`${componentBase}.view.tsx`),
			fetchRaw(storyPath),
		]);

		const source = sourceMain ?? sourceView;

		if (!source && !story) {
			return {
				content: [
					{
						type: "text" as const,
						text: `Component "${component}" not found in package "${pkg}". Use list_components to see available components.`,
					},
				],
			};
		}

		const parts: string[] = [];

		if (source) {
			parts.push(
				`## Component Source — props interface, variants, and color tokens\n\n\`\`\`tsx\n${source}\n\`\`\``,
			);
		}

		if (story) {
			parts.push(
				`## Story — usage examples and default args\n\n\`\`\`tsx\n${story}\n\`\`\``,
			);
		}

		return {
			content: [{ type: "text" as const, text: parts.join("\n\n---\n\n") }],
		};
	},
);

server.registerTool(
	"get_design_tokens",
	{
		description:
			"Get the full color palette, MUI theme configuration (palette aliases, spacing), and typography scale from the styles package",
		inputSchema: {},
	},
	async () => {
		const [colors, theme, typography] = await Promise.all([
			fetchRaw("packages/styles/src/colors.ts"),
			fetchRaw("packages/styles/src/theme.ts"),
			fetchRaw("packages/styles/src/typography.ts"),
		]);

		const parts: string[] = [];
		if (colors) parts.push(`## Colors\n\n\`\`\`ts\n${colors}\n\`\`\``);
		if (theme)
			parts.push(
				`## Theme (palette aliases, spacing)\n\n\`\`\`ts\n${theme}\n\`\`\``,
			);
		if (typography)
			parts.push(`## Typography\n\n\`\`\`ts\n${typography}\n\`\`\``);

		return {
			content: [{ type: "text" as const, text: parts.join("\n\n---\n\n") }],
		};
	},
);

const transport = new StdioServerTransport();
await server.connect(transport);
