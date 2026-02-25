import type { StorybookConfig } from "storybook-react-rsbuild";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-onboarding",
		"@storybook/addon-coverage",
	],
	framework: "storybook-react-rsbuild",
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			// Speeds up Storybook build time
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
			// Makes union prop types like variant and size appear as select controls
			shouldExtractLiteralValuesFromEnum: true,
			// Makes string and boolean types that can be undefined appear as inputs and switches
			shouldRemoveUndefinedFromOptional: true,
			// Filter out third-party props from node_modules except @mui packages
			propFilter: (prop) =>
				prop.parent
					? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
					: true,
		},
	},
};

export default config;
