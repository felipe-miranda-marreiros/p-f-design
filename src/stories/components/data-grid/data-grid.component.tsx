import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DataGridSpec } from "./data-grid.specifications";
import { StyledRefetchingBox } from "./data-grid.styles";
import type { DataGridProps } from "./data-grid.types";
import { DataGridList } from "./data-grid-list.view";
import { DataGridSkeleton } from "./data-grid-skeleton.view";
import { DataGridTable } from "./data-grid-table.view";

export function DataGrid<TData>({
	table,
	status = "idle",
	renderMobileRow,
	"aria-label": ariaLabel = "Data grid",
	slots,
	slotProps,
}: DataGridProps<TData>) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const ctx = {
		status,
		isMobile,
		hasMobileRenderer: !!renderMobileRow,
	};

	const columnCount = table.getAllColumns().length;

	const LoadingComponent = slots?.loading;
	const RefetchingComponent = slots?.refetching;
	const ErrorComponent = slots?.error;
	const EmptyComponent = slots?.empty;

	const renderContent = () => {
		if (isMobile && renderMobileRow) {
			return <DataGridList table={table} renderMobileRow={renderMobileRow} />;
		}

		return <DataGridTable table={table} />;
	};

	if (DataGridSpec.shouldRenderLoading(ctx)) {
		return (
			<Box component="section" aria-label={ariaLabel}>
				{LoadingComponent ? (
					<LoadingComponent />
				) : (
					<DataGridSkeleton columnCount={columnCount} variant="loading" />
				)}
			</Box>
		);
	}

	if (DataGridSpec.shouldRenderRefetching(ctx)) {
		return (
			<Box component="section" aria-label={ariaLabel} aria-busy="true">
				{RefetchingComponent ? (
					<RefetchingComponent />
				) : (
					<StyledRefetchingBox>{renderContent()}</StyledRefetchingBox>
				)}
			</Box>
		);
	}

	if (DataGridSpec.shouldRenderError(ctx)) {
		return (
			<Box component="section" aria-label={ariaLabel}>
				{ErrorComponent ? <ErrorComponent {...slotProps?.error} /> : null}
			</Box>
		);
	}

	if (DataGridSpec.shouldRenderEmpty(ctx)) {
		return (
			<Box component="section" aria-label={ariaLabel}>
				{EmptyComponent ? <EmptyComponent /> : null}
			</Box>
		);
	}

	return (
		<Box component="section" aria-label={ariaLabel}>
			{renderContent()}
		</Box>
	);
}
