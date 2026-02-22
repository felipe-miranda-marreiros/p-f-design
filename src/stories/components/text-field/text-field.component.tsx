import type { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { InputAdornment, Typography } from "@mui/material";
import type { ReactNode } from "react";

import {
	ColorDot,
	StyledInputAdornment,
	StyledTextField,
	selectMenuProps,
} from "./text-field.styles";

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
			select: {
				MenuProps: selectMenuProps,
			},
		}}
		{...rest}
	/>
);
