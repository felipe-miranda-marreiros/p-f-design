import type { BoxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

const StyledPaper = styled(Box)(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.common.white,
	borderRadius: 12,
	padding: theme.spacing(8),
	boxShadow: theme.shadows[1],
	[theme.breakpoints.down("sm")]: {
		paddingBlock: theme.spacing(6),
		paddingInline: theme.spacing(5),
	},
}));

export const Paper = ({ children, ...rest }: BoxProps) => (
	<StyledPaper {...rest}>{children}</StyledPaper>
);

interface PaperTitleProps {
	children: ReactNode;
	rightAction?: ReactNode;
}

export const PaperTitle = ({ children, rightAction }: PaperTitleProps) => (
	<Box
		sx={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			mb: 5,
		}}
	>
		<Typography variant="h2">{children}</Typography>
		{rightAction}
	</Box>
);
