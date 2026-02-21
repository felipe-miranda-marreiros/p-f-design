import type { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import {
	formHelperTextClasses,
	InputAdornment,
	TextField as MuiTextField,
	outlinedInputClasses,
	Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

export interface TextFieldProps
	extends Omit<MuiTextFieldProps, "variant" | "slotProps"> {
	/** Small colored circle on the left */
	colorTag?: string;
	/** Text prefix (e.g. "$") on the left */
	prefix?: string;
	/** Icon on the left */
	startIcon?: ReactNode;
	/** Icon on the right */
	endIcon?: ReactNode;
}

const ColorDot = styled("span", {
	shouldForwardProp: (prop) => prop !== "dotColor",
})<{ dotColor: string }>(({ dotColor }) => ({
	width: 12,
	height: 12,
	borderRadius: "50%",
	backgroundColor: dotColor,
	display: "inline-block",
	flexShrink: 0,
}));

const StyledInputAdornment = styled(InputAdornment)({
	gap: 4,
});

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
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

function buildStartAdornment(
	colorTag?: string,
	prefix?: string,
	startIcon?: ReactNode,
): ReactNode | undefined {
	if (!colorTag && !prefix && !startIcon) return undefined;

	return (
		<StyledInputAdornment position="start">
			{colorTag && <ColorDot dotColor={colorTag} />}
			{prefix && (
				<Typography variant="body1" color="text.secondary" component="span">
					{prefix}
				</Typography>
			)}
			{!colorTag && !prefix && startIcon}
		</StyledInputAdornment>
	);
}

function buildEndAdornment(endIcon?: ReactNode): ReactNode | undefined {
	if (!endIcon) return undefined;
	return <InputAdornment position="end">{endIcon}</InputAdornment>;
}

export const TextField = ({
	colorTag,
	prefix,
	startIcon,
	endIcon,
	...rest
}: TextFieldProps) => (
	<StyledTextField
		variant="outlined"
		slotProps={{
			input: {
				startAdornment: buildStartAdornment(colorTag, prefix, startIcon),
				endAdornment: buildEndAdornment(endIcon),
			},
		}}
		{...rest}
	/>
);
