import { Box, Typography } from "@mui/material";
import { StyledBreathDot, StyledCoinBar } from "./loading.styles";
import type { InlineLoaderProps } from "./loading.types";

function CoinBars() {
	return (
		<Box
			sx={{ display: "flex", alignItems: "flex-end", gap: "6px", height: 56 }}
		>
			<StyledCoinBar />
			<StyledCoinBar />
			<StyledCoinBar />
			<StyledCoinBar />
			<StyledCoinBar />
		</Box>
	);
}

function BreathDots() {
	return (
		<Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
			<StyledBreathDot />
			<StyledBreathDot />
			<StyledBreathDot />
		</Box>
	);
}

export function InlineLoader({
	variant = "dots",
	label,
	"aria-label": ariaLabel = "Loading",
}: InlineLoaderProps) {
	return (
		<Box
			role="progressbar"
			aria-busy="true"
			aria-label={ariaLabel}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 4,
			}}
		>
			{variant === "bars" ? <CoinBars /> : <BreathDots />}

			{label && (
				<Typography
					variant="body2"
					sx={(theme) => ({
						color: theme.palette.grey[500],
						fontWeight: 500,
						textAlign: "center",
					})}
				>
					{label}
				</Typography>
			)}
		</Box>
	);
}
