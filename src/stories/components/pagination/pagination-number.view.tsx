import { StyledPaginationNumber } from "./pagination.styles";
import type { PaginationNumberProps } from "./pagination.types";

export function PaginationNumber({
	page,
	active = false,
	onClick,
}: PaginationNumberProps) {
	return (
		<StyledPaginationNumber
			active={active}
			onClick={() => onClick?.(page)}
			aria-label={`Page ${page}`}
			aria-current={active ? "page" : undefined}
		>
			{page}
		</StyledPaginationNumber>
	);
}
