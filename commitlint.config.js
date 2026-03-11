export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"docs",
				"style",
				"refactor",
				"perf",
				"test",
				"build",
				"ci",
				"chore",
				"revert",
			],
		],
		"scope-enum": [
			2,
			"always",
			["ui", "shell", "charts", "styles", "web", "root", "mcp"],
		],
		"scope-empty": [2, "never"],
		"subject-case": [2, "never", ["upper-case"]],
	},
};
