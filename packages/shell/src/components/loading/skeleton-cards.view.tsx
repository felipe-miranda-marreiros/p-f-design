import { Box } from "@mui/material";
import { StyledShimmerBox, StyledSkeletonCard } from "./loading.styles";
import type { SkeletonCardsProps } from "./loading.types";

const DEFAULT_COUNT = 4;
const DEFAULT_COLUMNS = 2;

function generateCardKeys(count: number): string[] {
	return Array.from({ length: count }, (_, i) => `skeleton-card-${i}`);
}

function ShimmerElement({
	width,
	height,
	borderRadius,
	sx,
}: {
	width?: string | number;
	height: number;
	borderRadius?: string | number;
	sx?: Record<string, unknown>;
}) {
	return (
		<StyledShimmerBox
			className="shimmer-element"
			sx={{ width, height, borderRadius, ...sx }}
		/>
	);
}

function CardSkeleton() {
	return (
		<StyledSkeletonCard>
			<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
				<ShimmerElement width={12} height={12} borderRadius="50%" />
				<ShimmerElement width="70%" height={16} />
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<ShimmerElement width="50%" height={11} />
				<ShimmerElement width="60%" height={28} sx={{ marginLeft: "auto" }} />
			</Box>

			<ShimmerElement width="100%" height={6} borderRadius={4} />

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<ShimmerElement width="30%" height={10} />
				<ShimmerElement width="40%" height={10} sx={{ marginLeft: "auto" }} />
			</Box>

			<Box sx={{ display: "flex", gap: 3 }}>
				<ShimmerElement
					width="100%"
					height={40}
					borderRadius={8}
					sx={{ flex: 1 }}
				/>
				<ShimmerElement
					width="100%"
					height={40}
					borderRadius={8}
					sx={{ flex: 1 }}
				/>
			</Box>
		</StyledSkeletonCard>
	);
}

export function SkeletonCards({
	count = DEFAULT_COUNT,
	columns = DEFAULT_COLUMNS,
	"aria-label": ariaLabel = "Loading content",
}: SkeletonCardsProps) {
	const cardKeys = generateCardKeys(count);

	return (
		<Box
			role="status"
			aria-busy="true"
			aria-label={ariaLabel}
			sx={{
				display: "grid",
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: 4,
			}}
		>
			{cardKeys.map((key) => (
				<CardSkeleton key={key} />
			))}
		</Box>
	);
}
