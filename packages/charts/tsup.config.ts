import { defineConfig } from "tsup";

export default defineConfig({
	entry: { index: "src/index.ts" },
	format: ["esm", "cjs"],
	dts: { compilerOptions: { skipLibCheck: true } },
	sourcemap: true,
	clean: true,
	external: [
		"react",
		"react-dom",
		"@mui/material",
		"@emotion/react",
		"@emotion/styled",
		"@felipe-miranda-marreiros/styles",
	],
});
