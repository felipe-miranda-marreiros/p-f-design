import { Box, type BoxProps } from "@mui/material";

interface DotProps extends Omit<BoxProps, "color"> {
	color?: string;
}

export default function Dot({ color, sx, ...rest }: DotProps) {
	return (
		<Box
			sx={{
				width: 16,
				height: 16,
				borderRadius: "50%",
				backgroundColor: color,
				...sx,
			}}
			{...rest}
		/>
	);
}
