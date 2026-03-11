import { defineConfig } from "tsup";

export default defineConfig({
	entry: { index: "src/index.ts" },
	format: ["esm"],
	target: "node20",
	sourcemap: true,
	clean: true,
	banner: {
		js: "#!/usr/bin/env node",
	},
});
