import type { PaginationPage } from "./pagination.types";

export type PaginationContext = {
	currentPage: number;
	totalPages: number;
};

export const PaginationSpec = {
	isFirstPage: (ctx: PaginationContext) => ctx.currentPage === 1,
	isLastPage: (ctx: PaginationContext) => ctx.currentPage === ctx.totalPages,
	hasPrev: (ctx: PaginationContext) => ctx.currentPage > 1,
	hasNext: (ctx: PaginationContext) => ctx.currentPage < ctx.totalPages,

	getVisiblePages: (ctx: PaginationContext): PaginationPage[] => {
		const { currentPage, totalPages } = ctx;

		if (totalPages <= 5) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const pages = new Set<number>();
		pages.add(1);
		pages.add(totalPages);
		pages.add(currentPage);
		if (currentPage > 1) pages.add(currentPage - 1);
		if (currentPage < totalPages) pages.add(currentPage + 1);

		const sorted = [...pages].sort((a, b) => a - b);
		const result: PaginationPage[] = [];

		for (let i = 0; i < sorted.length; i++) {
			if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
				result.push("ellipsis");
			}
			result.push(sorted[i]);
		}

		return result;
	},
} as const;
