import { Box, Typography } from "@mui/material";
import { StyledTypingDot, StyledWaveBar } from "./loading.styles";
import type { SectionLoaderProps } from "./loading.types";

export function SectionLoader({
	label = "Carregando dados",
	"aria-label": ariaLabel = "Loading section",
}: SectionLoaderProps) {
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
				gap: 7,
				py: 8,
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
				<StyledWaveBar />
				<StyledWaveBar />
				<StyledWaveBar />
				<StyledWaveBar />
				<StyledWaveBar />
			</Box>

			<Box
				sx={(theme) => ({
					display: "flex",
					alignItems: "center",
					gap: 1,
					...theme.typography.body2,
					fontWeight: 500,
					color: theme.palette.grey[500],
				})}
			>
				<Typography component="span" variant="body2" sx={{ fontWeight: 500 }}>
					{label}
				</Typography>
				<Box
					component="span"
					sx={{ display: "inline-flex", gap: "3px" }}
					aria-hidden="true"
				>
					<StyledTypingDot />
					<StyledTypingDot />
					<StyledTypingDot />
				</Box>
			</Box>
		</Box>
	);
}
