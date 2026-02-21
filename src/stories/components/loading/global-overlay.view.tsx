import { Box, Typography } from "@mui/material";
import {
	StyledCenterDot,
	StyledGlobalOverlay,
	StyledLogoLoader,
	StyledMorphRing,
	StyledProgressFill,
	StyledProgressTrack,
} from "./loading.styles";
import type { GlobalOverlayProps } from "./loading.types";

export function GlobalOverlay({
	label = "Carregando módulo",
	"aria-label": ariaLabel = "Loading",
}: GlobalOverlayProps) {
	return (
		<StyledGlobalOverlay
			role="progressbar"
			aria-busy="true"
			aria-label={ariaLabel}
		>
			<StyledLogoLoader>
				<StyledMorphRing />
				<StyledMorphRing />
				<StyledMorphRing />
				<StyledCenterDot />
			</StyledLogoLoader>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 3,
				}}
			>
				<Typography
					variant="body1"
					sx={(theme) => ({
						color: theme.palette.beige[100],
						fontWeight: 500,
						letterSpacing: 0.3,
					})}
				>
					{label}
				</Typography>

				<StyledProgressTrack>
					<StyledProgressFill />
				</StyledProgressTrack>
			</Box>
		</StyledGlobalOverlay>
	);
}
