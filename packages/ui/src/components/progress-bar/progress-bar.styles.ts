import { Box } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

export const ProgressBarTrack = styled(Box, {
	shouldForwardProp: (prop: string) =>
		prop !== "variant" && prop !== "trackColor",
})<{ variant?: "flat" | "rounded"; trackColor?: string }>(
	({
		theme,
		variant = "rounded",
		trackColor,
	}: {
		theme: Theme;
		variant?: "flat" | "rounded";
		trackColor?: string;
	}) => ({
		borderRadius: 8,
		backgroundColor: trackColor ?? theme.palette.grey[100],
		...(variant === "rounded" && {
			height: 24,
			padding: 4,
		}),
		...(variant === "flat" && {
			height: 8,
		}),
	}),
);

export const ProgressBarSegments = styled(Box)({
	display: "flex",
	height: "100%",
	borderRadius: "inherit",
	overflow: "hidden",
});

export const ProgressBarFill = styled(Box, {
	shouldForwardProp: (prop: string) => prop !== "fillColor",
})<{ fillColor?: string }>(
	({ theme, fillColor }: { theme: Theme; fillColor?: string }) => ({
		height: "100%",
		backgroundColor: fillColor ?? theme.palette.primary.main,
		transition: "width 0.4s ease",
		"&:last-child": {
			borderTopRightRadius: 4,
			borderBottomRightRadius: 4,
		},
	}),
);
