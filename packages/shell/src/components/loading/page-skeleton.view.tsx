import { Box } from "@mui/material";
import {
	StyledPageSkeletonContent,
	StyledPageSkeletonSidebar,
	StyledShimmerBox,
	StyledSkeletonCard,
} from "./loading.styles";
import type { PageSkeletonProps } from "./loading.types";

const DEFAULT_SIDEBAR_ITEMS = 5;
const DEFAULT_CARD_COUNT = 4;
const ACTIVE_ITEM_INDEX = 3;

function generateKeys(prefix: string, count: number): string[] {
	return Array.from({ length: count }, (_, i) => `${prefix}-${i}`);
}

function SidebarSkeleton({ itemCount }: { itemCount: number }) {
	const itemKeys = generateKeys("sidebar-item", itemCount);

	return (
		<StyledPageSkeletonSidebar>
			<Box
				sx={{
					width: 32,
					height: 12,
					bgcolor: "rgba(255, 255, 255, 0.15)",
					borderRadius: 1,
					mb: 3,
				}}
			/>
			{itemKeys.map((key, index) => (
				<Box
					key={key}
					sx={{
						width: 28,
						height: 28,
						borderRadius: 2,
						bgcolor:
							index === ACTIVE_ITEM_INDEX
								? "rgba(255, 255, 255, 0.15)"
								: "rgba(255, 255, 255, 0.06)",
					}}
				/>
			))}
		</StyledPageSkeletonSidebar>
	);
}

function ContentCardSkeleton() {
	return (
		<StyledSkeletonCard>
			<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
				<StyledShimmerBox
					className="shimmer-element"
					sx={{ width: 10, height: 10, borderRadius: "50%" }}
				/>
				<StyledShimmerBox
					className="shimmer-element"
					sx={{ width: "65%", height: 14 }}
				/>
			</Box>

			<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
				<StyledShimmerBox
					className="shimmer-element"
					sx={{ width: "50%", height: 10 }}
				/>
				<StyledShimmerBox
					className="shimmer-element"
					sx={{ width: "55%", height: 22, ml: "auto" }}
				/>
			</Box>

			<StyledShimmerBox
				className="shimmer-element"
				sx={{ width: "100%", height: 5, borderRadius: "3px" }}
			/>

			<Box sx={{ display: "flex", gap: "10px" }}>
				<StyledShimmerBox
					className="shimmer-element"
					sx={{ flex: 1, height: 32, borderRadius: 2 }}
				/>
				<StyledShimmerBox
					className="shimmer-element"
					sx={{ flex: 1, height: 32, borderRadius: 2 }}
				/>
			</Box>
		</StyledSkeletonCard>
	);
}

export function PageSkeleton({
	sidebarItemCount = DEFAULT_SIDEBAR_ITEMS,
	cardCount = DEFAULT_CARD_COUNT,
	"aria-label": ariaLabel = "Loading page",
}: PageSkeletonProps) {
	const cardKeys = generateKeys("page-card", cardCount);

	return (
		<Box
			role="status"
			aria-busy="true"
			aria-label={ariaLabel}
			sx={{ display: "flex", width: "100%", height: "100%", minHeight: 360 }}
		>
			<SidebarSkeleton itemCount={sidebarItemCount} />

			<StyledPageSkeletonContent>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<StyledShimmerBox
						className="shimmer-element"
						sx={{ width: 80, height: 24 }}
					/>
					<StyledShimmerBox
						className="shimmer-element"
						sx={{ width: 120, height: 36, borderRadius: 2 }}
					/>
				</Box>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: 4,
						flex: 1,
					}}
				>
					{cardKeys.map((key) => (
						<ContentCardSkeleton key={key} />
					))}
				</Box>
			</StyledPageSkeletonContent>
		</Box>
	);
}
