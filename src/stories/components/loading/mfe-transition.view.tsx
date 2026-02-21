import { Box, Typography } from "@mui/material";
import {
	StyledMfeBlock,
	StyledMfeLineFill,
	StyledMfeLineTrack,
} from "./loading.styles";
import type { MfeTransitionProps } from "./loading.types";

export function MfeTransition({
	label = "Montando interface",
	"aria-label": ariaLabel = "Loading module",
}: MfeTransitionProps) {
	return (
		<Box
			role="progressbar"
			aria-busy="true"
			aria-label={ariaLabel}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: 6,
				py: 8,
			}}
		>
			<Box sx={{ display: "flex", gap: 2 }}>
				<StyledMfeBlock />
				<StyledMfeBlock />
				<StyledMfeBlock />
				<StyledMfeBlock />
			</Box>

			<StyledMfeLineTrack>
				<StyledMfeLineFill />
			</StyledMfeLineTrack>

			<Typography
				variant="body2"
				sx={(theme) => ({
					color: theme.palette.grey[500],
					fontWeight: 500,
					letterSpacing: 0.4,
				})}
			>
				{label}
			</Typography>
		</Box>
	);
}
