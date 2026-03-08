import { Box, Skeleton } from "@mui/material";
import type { NavSkeletonProps } from "./sidebar.types";

export function NavSkeleton({ minimized, count }: NavSkeletonProps) {
	const skeletonKeys = Array.from({ length: count }, (_, i) => `skeleton-${i}`);

	return (
		<Box role="status" aria-label="Loading navigation" aria-busy="true">
			{skeletonKeys.map((key) => (
				<Box key={key} sx={{ mx: 3, my: 1 }}>
					<Skeleton
						variant="rounded"
						height={44}
						width={minimized ? 44 : undefined}
						sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
					/>
				</Box>
			))}
		</Box>
	);
}
