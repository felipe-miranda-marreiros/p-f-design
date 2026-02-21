import { Box } from "@mui/material";
import { PaginationSpec } from "./pagination.specifications";
import { StyledPaginationEllipsis } from "./pagination.styles";
import type { PaginationProps } from "./pagination.types";
import { PaginationButton } from "./pagination-button.view";
import { PaginationNumber } from "./pagination-number.view";

export type {
	PaginationButtonProps,
	PaginationDirection,
	PaginationNumberProps,
	PaginationPage,
	PaginationProps,
} from "./pagination.types";

export { PaginationButton } from "./pagination-button.view";
export { PaginationNumber } from "./pagination-number.view";

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
	"aria-label": ariaLabel = "Pagination",
}: PaginationProps) {
	const ctx = { currentPage, totalPages };
	const visiblePages = PaginationSpec.getVisiblePages(ctx);

	return (
		<Box
			component="nav"
			aria-label={ariaLabel}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<PaginationButton
				direction="prev"
				disabled={PaginationSpec.isFirstPage(ctx)}
				onClick={() => onPageChange(currentPage - 1)}
			/>

			<Box sx={{ display: "flex", gap: 2 }}>
				{visiblePages.map((item, _index, arr) => {
					if (item === "ellipsis") {
						const ellipsisKey = `ellipsis-${arr[_index - 1] ?? "start"}`;
						return (
							<StyledPaginationEllipsis key={ellipsisKey} aria-hidden>
								&hellip;
							</StyledPaginationEllipsis>
						);
					}

					return (
						<PaginationNumber
							key={item}
							page={item}
							active={item === currentPage}
							onClick={onPageChange}
						/>
					);
				})}
			</Box>

			<PaginationButton
				direction="next"
				disabled={PaginationSpec.isLastPage(ctx)}
				onClick={() => onPageChange(currentPage + 1)}
			/>
		</Box>
	);
}
