import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@p-f-design/styles";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "storybook-react-rsbuild";

import "@fontsource/material-icons";
import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/700.css";

export const decorators = [
	withThemeFromJSXProvider({
		Provider: ThemeProvider,
		GlobalStyles: CssBaseline,
		themes: {
			light: theme,
		},
		defaultTheme: "light",
	}),
];

const preview: Preview = {
	parameters: {
		a11y: {
			test: "error",
			config: {
				rules: [{ id: "color-contrast", enabled: true }],
			},
			options: {
				runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] },
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
