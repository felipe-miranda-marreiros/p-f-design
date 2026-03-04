type LeafValues<T> = T extends string
	? T
	: { [K in keyof T]: LeafValues<T[K]> }[keyof T];

export type DesignColor = LeafValues<typeof colors>;

export const colors = {
	beige: {
		500: "#98908B",
		100: "#F8F4F0",
	},
	grey: {
		900: "#201F24",
		500: "#696868",
		300: "#B3B3B3",
		100: "#F2F2F2",
	},
	secondaryColors: {
		green: "#277D78",
		yellow: "#F2CDAC",
		cyan: "#82C9D7",
		navy: "#626070",
		red: "#B03525",
		purple: "#826CB0",
	},
	others: {
		purpleLight: "#AF81BA",
		turquoise: "#597C7C",
		brown: "#93674F",
		magenta: "#934F6F",
		blue: "#3F82B2",
		navyGrey: "#97A0AC",
		armyGreen: "#7F9161",
		gold: "#CAB361",
		orange: "#BE6C49",
	},
	white: "#FFFFFF",
};
