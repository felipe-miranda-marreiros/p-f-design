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
			1,
			"always",
			["ui", "shell", "charts", "styles", "web", "root"],
		],
		"subject-case": [2, "never", ["upper-case"]],
	},
};
