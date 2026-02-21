import { Box, Button, buttonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPaginationButton = styled(Button)(({ theme }) => ({
	...theme.typography.subtitle1,
	textTransform: "none",
	fontWeight: 400,
	borderRadius: 8,
	border: `1px solid ${theme.palette.grey[300]}`,
	backgroundColor: "transparent",
	color: theme.palette.grey[900],
	padding: theme.spacing(3, 4),
	gap: theme.spacing(4),
	minWidth: "unset",
	"&:hover": {
		backgroundColor: theme.palette.beige[100],
		border: `1px solid ${theme.palette.grey[300]}`,
	},
	[`&.${buttonClasses.disabled}`]: {
		border: `1px solid ${theme.palette.grey[100]}`,
		color: theme.palette.grey[300],
	},
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

export const StyledPaginationEllipsis = styled(Box)(({ theme }) => ({
	...theme.typography.subtitle1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	minWidth: 40,
	width: 40,
	height: 40,
	color: theme.palette.grey[900],
	userSelect: "none",
}));

export const StyledPaginationNumber = styled(Button, {
	shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme }) => ({
	...theme.typography.subtitle1,
	textTransform: "none",
	fontWeight: 700,
	borderRadius: 8,
	border: `1px solid ${theme.palette.grey[300]}`,
	backgroundColor: "transparent",
	color: theme.palette.grey[900],
	minWidth: 40,
	width: 40,
	height: 40,
	padding: 0,
	"&:hover": {
		backgroundColor: theme.palette.beige[500],
		color: theme.palette.common.white,
		border: `1px solid ${theme.palette.beige[500]}`,
	},
	variants: [
		{
			props: { active: true },
			style: {
				backgroundColor: theme.palette.grey[900],
				color: theme.palette.common.white,
				border: `1px solid ${theme.palette.grey[900]}`,
				"&:hover": {
					backgroundColor: theme.palette.grey[900],
					border: `1px solid ${theme.palette.grey[900]}`,
				},
			},
		},
	],
}));
