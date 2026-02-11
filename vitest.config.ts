import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const testExclude = [
	"**/node_modules/**",
	"**/dist/**",
	"**/.{idea,git,cache,output,temp}/**",
	"**/*.config.{ts,js}",
	"src/app/i18n/**",
	"src/__mocks__/**",
];

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	test: {
		environment: "happy-dom",
		globals: true,
		setupFiles: "./vitest.setup.ts",
		css: true,

		include: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
		exclude: testExclude,

		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			include: ["src/**/*.{ts,tsx}"],
			exclude: testExclude,
			thresholds: {
				statements: 93,
				branches: 93,
				functions: 93,
				lines: 93,
			},
		},
	},
});
