import { Box, Skeleton } from "@mui/material";
import { StyledSkeletonRow } from "./data-grid.styles";
import type { DataGridSkeletonProps } from "./data-grid.types";

const DEFAULT_ROW_COUNT = 5;

function generateRowKeys(count: number): string[] {
	return Array.from({ length: count }, (_, i) => `skeleton-row-${i}`);
}

function generateColKeys(count: number): string[] {
	return Array.from({ length: count }, (_, i) => `skeleton-col-${i}`);
}

export function DataGridSkeleton({
	columnCount,
	rowCount = DEFAULT_ROW_COUNT,
	variant = "loading",
}: DataGridSkeletonProps) {
	const rowKeys = generateRowKeys(rowCount);
	const colKeys = generateColKeys(Math.max(1, columnCount - 1));

	return (
		<Box
			role="status"
			aria-busy="true"
			aria-label={variant === "loading" ? "Loading data" : "Refreshing data"}
		>
			{rowKeys.map((rowKey) => (
				<StyledSkeletonRow key={rowKey}>
					<Skeleton variant="circular" width={40} height={40} />
					<Box sx={{ flex: 1, display: "flex", gap: 4 }}>
						{colKeys.map((colKey) => (
							<Skeleton
								key={colKey}
								variant="rounded"
								height={20}
								sx={{ flex: 1, borderRadius: 1 }}
							/>
						))}
					</Box>
				</StyledSkeletonRow>
			))}
		</Box>
	);
}
