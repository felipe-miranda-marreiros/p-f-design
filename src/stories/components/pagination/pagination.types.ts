// ---- Direction ----

export type PaginationDirection = "prev" | "next";

// ---- Page item (number or ellipsis marker) ----

export type PaginationPage = number | "ellipsis";

// ---- Public: PaginationButton ----

export interface PaginationButtonProps {
	/** Navigation direction */
	direction: PaginationDirection;
	/** Whether the button is disabled */
	disabled?: boolean;
	/** Click handler */
	onClick?: () => void;
	/** Accessible label override */
	"aria-label"?: string;
}

// ---- Public: PaginationNumber ----

export interface PaginationNumberProps {
	/** Page number to display */
	page: number;
	/** Whether this is the current active page */
	active?: boolean;
	/** Click handler receiving the page number */
	onClick?: (page: number) => void;
}

// ---- Public: Pagination ----

export interface PaginationProps {
	/** Currently active page (1-indexed) */
	currentPage: number;
	/** Total number of pages */
	totalPages: number;
	/** Callback fired when the user selects a page */
	onPageChange: (page: number) => void;
	/** Accessible label for the nav landmark */
	"aria-label"?: string;
}
