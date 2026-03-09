import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "storybook-react-rsbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const config: StorybookConfig = {
	stories: [
		"../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../src/docs/**/*.mdx",
	],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-coverage",
		"@storybook/addon-themes",
	],
	framework: "storybook-react-rsbuild",
	rsbuildFinal: (config) => {
		if (process.env.STORYBOOK_BASE) {
			config.server = config.server || {};
			config.server.base = process.env.STORYBOOK_BASE;

			config.output = config.output || {};
			config.output.assetPrefix = process.env.STORYBOOK_BASE;
		}

		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...config.resolve.alias,
			"@ui": path.resolve(__dirname, "../../../packages/ui/src"),
			"@shell": path.resolve(__dirname, "../../../packages/shell/src"),
			"@charts": path.resolve(__dirname, "../../../packages/charts/src"),
			"@storybook/addon-docs/blocks": require.resolve(
				"@storybook/addon-docs/blocks",
			),
		};

		config.tools = config.tools || {};
		config.tools.swc = {
			jsc: {
				transform: {
					react: {
						runtime: "automatic",
					},
				},
			},
		};

		return config;
	},
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
			shouldExtractLiteralValuesFromEnum: true,
			shouldRemoveUndefinedFromOptional: true,
			propFilter: (prop) =>
				prop.parent
					? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
					: true,
		},
	},
};

export default config;
