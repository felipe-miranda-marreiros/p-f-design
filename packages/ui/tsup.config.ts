import { defineConfig } from "tsup";

export default defineConfig({
	entry: { index: "src/index.ts" },
	format: ["esm", "cjs"],
	dts: { compilerOptions: { skipLibCheck: true, preserveSymlinks: true } },
	sourcemap: true,
	clean: true,
	external: [
		"react",
		"react-dom",
		"@mui/material",
		"@mui/icons-material",
		"@mui/system",
		"@emotion/react",
		"@emotion/styled",
		"@felipe-miranda-marreiros/styles",
		"@tanstack/react-table",
	],
});
