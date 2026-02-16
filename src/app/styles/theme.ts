import { createTheme } from "@mui/material";
import { colors } from "@/app/styles/colors";
import { typography } from "@/app/styles/typography";

export const theme = createTheme({
	palette: {
		beige: colors.beige,
		grey: colors.grey,
		secondaryColors: colors.secondaryColors,
		others: colors.others,
		common: {
			white: colors.white,
		},
		primary: {
			main: colors.secondaryColors.green,
		},
		secondary: {
			main: colors.secondaryColors.navy,
		},
		error: {
			main: colors.secondaryColors.red,
		},
		background: {
			default: colors.beige[100],
			paper: colors.white,
		},
		text: {
			primary: colors.grey[900],
			secondary: colors.grey[500],
		},
	},
	spacing: 4,
	typography,
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					h1: "h1",
					h2: "h2",
					h3: "h3",
					subtitle1: "p",
					subtitle2: "p",
					body1: "p",
					body2: "p",
				},
			},
		},
	},
});
