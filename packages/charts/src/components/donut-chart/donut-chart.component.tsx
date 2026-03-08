import { Box, Typography } from "@mui/material";
import { colors } from "@p-f-design/styles";
import { buildArcs, type DonutChartSegment } from "./donut-chart.utils";

export interface DonutChartProps {
	segments: DonutChartSegment[];
	centerText: { main: string; sub: string };
	size?: number;
	strokeWidth?: number;
	gapDegrees?: number;
	trackColor?: string;
	trackOpacity?: number;
	"aria-label"?: string;
}

const DEFAULT_SIZE = 240;
const DEFAULT_STROKE_WIDTH = 36;
const DEFAULT_GAP_DEGREES = 0;
const DEFAULT_TRACK_COLOR = colors.white;
const DEFAULT_TRACK_OPACITY = 0.35;

export function DonutChart({
	segments,
	centerText,
	size = DEFAULT_SIZE,
	strokeWidth = DEFAULT_STROKE_WIDTH,
	gapDegrees = DEFAULT_GAP_DEGREES,
	trackColor = DEFAULT_TRACK_COLOR,
	trackOpacity = DEFAULT_TRACK_OPACITY,
	"aria-label": ariaLabel = "Donut chart",
}: DonutChartProps) {
	const arcs = buildArcs(segments, size, strokeWidth, gapDegrees);
	const cx = size / 2;
	const cy = size / 2;
	const r = cx - strokeWidth / 2 - 2;

	return (
		<Box
			role="img"
			aria-label={ariaLabel}
			sx={{ position: "relative", width: size, height: size, flexShrink: 0 }}
		>
			<svg
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				aria-hidden="true"
			>
				{arcs.map((arc) => (
					<path
						key={arc.id}
						d={arc.d}
						fill="none"
						stroke={arc.color}
						strokeWidth={strokeWidth}
						strokeLinecap="butt"
					>
						{arc.label && <title>{arc.label}</title>}
					</path>
				))}
				<circle
					cx={cx}
					cy={cy}
					r={r - strokeWidth / 4}
					fill="none"
					stroke={trackColor}
					strokeWidth={strokeWidth / 2}
					opacity={trackOpacity}
				/>
			</svg>

			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					textAlign: "center",
					pointerEvents: "none",
				}}
			>
				<Typography variant="h2" component="span" display="block">
					{centerText.main}
				</Typography>
				<Typography variant="body2" color="text.secondary" display="block">
					{centerText.sub}
				</Typography>
			</Box>
		</Box>
	);
}
