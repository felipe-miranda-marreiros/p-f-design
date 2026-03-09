import "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		beige: {
			500: string;
			100: string;
		};
		secondaryColors: {
			green: string;
			yellow: string;
			cyan: string;
			navy: string;
			red: string;
			purple: string;
		};
		others: {
			purpleLight: string;
			turquoise: string;
			brown: string;
			magenta: string;
			blue: string;
			navyGrey: string;
			armyGreen: string;
			gold: string;
			orange: string;
		};
	}

	interface PaletteOptions {
		beige?: {
			500?: string;
			100?: string;
		};
		secondaryColors?: {
			green?: string;
			yellow?: string;
			cyan?: string;
			navy?: string;
			red?: string;
			purple?: string;
		};
		others?: {
			purpleLight?: string;
			turquoise?: string;
			brown?: string;
			magenta?: string;
			blue?: string;
			navyGrey?: string;
			armyGreen?: string;
			gold?: string;
			orange?: string;
		};
	}
}
