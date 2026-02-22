import {
	formHelperTextClasses,
	InputAdornment,
	TextField as MuiTextField,
	menuItemClasses,
	outlinedInputClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(MuiTextField)(({ theme }) => ({
	[`& .${outlinedInputClasses.root}`]: {
		...theme.typography.body1,
		borderRadius: 8,
		backgroundColor: theme.palette.common.white,
		[`& .${outlinedInputClasses.notchedOutline}`]: {
			borderColor: theme.palette.grey[300],
			borderWidth: 1,
		},
	},
	[`& .${outlinedInputClasses.root}:hover:not(.${outlinedInputClasses.focused}):not(.${outlinedInputClasses.disabled})`]:
		{
			[`& .${outlinedInputClasses.notchedOutline}`]: {
				borderColor: theme.palette.grey[500],
			},
		},
	[`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused}`]: {
		[`& .${outlinedInputClasses.notchedOutline}`]: {
			borderColor: theme.palette.grey[900],
			borderWidth: 1,
		},
	},
	[`& .${outlinedInputClasses.root}.${outlinedInputClasses.disabled}`]: {
		backgroundColor: theme.palette.grey[100],
		[`& .${outlinedInputClasses.notchedOutline}`]: {
			borderColor: theme.palette.grey[300],
		},
	},
	[`& .${outlinedInputClasses.root}.${outlinedInputClasses.error}`]: {
		[`& .${outlinedInputClasses.notchedOutline}`]: {
			borderColor: theme.palette.error.main,
		},
		"&:hover": {
			[`& .${outlinedInputClasses.notchedOutline}`]: {
				borderColor: theme.palette.error.main,
			},
		},
	},
	[`& .${formHelperTextClasses.error}`]: {
		color: theme.palette.error.main,
	},
}));

export const ColorDot = styled("span", {
	shouldForwardProp: (prop) => prop !== "dotColor",
})<{ dotColor: string }>(({ dotColor }) => ({
	width: 12,
	height: 12,
	borderRadius: "50%",
	backgroundColor: dotColor,
	display: "inline-block",
	flexShrink: 0,
}));

export const StyledInputAdornment = styled(InputAdornment)({
	gap: 4,
});

const StyledSelectMenuList = styled("ul")(({ theme }) => ({
	[`& .${menuItemClasses.root}`]: {
		borderBottom: `1px solid ${theme.palette.grey[100]}`,
	},
}));

export const selectMenuProps = {
	slotProps: {
		paper: {
			sx: {
				marginTop: 4,
				borderRadius: 2,
				boxShadow: 2,
				maxHeight: 240,
				paddingBlock: "12px",
				paddingInline: "20px",
			},
		},
	},
	MenuListProps: {
		disablePadding: true,
		component: StyledSelectMenuList,
	},
};
