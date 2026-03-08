import type { DesignColor } from "@felipe-miranda-marreiros/styles";
import { Box, Typography } from "@mui/material";
import {
	ProgressBarFill,
	ProgressBarSegments,
	ProgressBarTrack,
} from "./progress-bar.styles";

export interface ProgressBarSegment {
	value: number;
	color?: DesignColor;
}

export interface ProgressBarProps {
	value?: number;
	segments?: ProgressBarSegment[];
	variant?: "flat" | "rounded";
	color?: DesignColor;
	trackColor?: DesignColor;
	showLabel?: boolean;
}

export function ProgressBar({
	value = 0,
	segments,
	variant = "rounded",
	color,
	trackColor,
	showLabel = false,
}: ProgressBarProps) {
	const resolvedSegments = segments ?? [{ value, color }];

	const fills = (
		<ProgressBarSegments>
			{resolvedSegments.map((segment) => {
				const clamped = Math.min(100, Math.max(0, segment.value));
				return (
					<ProgressBarFill
						key={`${segment.value}-${segment.color}`}
						fillColor={segment.color}
						sx={{ width: `${clamped}%` }}
					/>
				);
			})}
		</ProgressBarSegments>
	);

	if (!showLabel) {
		return (
			<ProgressBarTrack variant={variant} trackColor={trackColor}>
				{fills}
			</ProgressBarTrack>
		);
	}

	const totalValue = Math.min(
		100,
		resolvedSegments.reduce((sum, s) => sum + s.value, 0),
	);

	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
			<ProgressBarTrack
				variant={variant}
				trackColor={trackColor}
				sx={{ flexGrow: 1 }}
			>
				{fills}
			</ProgressBarTrack>
			<Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0 }}>
				{totalValue}%
			</Typography>
		</Box>
	);
}
