import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { StyledPaginationButton } from "./pagination.styles";
import type { PaginationButtonProps } from "./pagination.types";

const directionConfig = {
	prev: { label: "Prev", icon: <ChevronLeft />, iconPosition: "start" },
	next: { label: "Next", icon: <ChevronRight />, iconPosition: "end" },
} as const;

export function PaginationButton({
	direction,
	disabled = false,
	onClick,
	"aria-label": ariaLabel,
}: PaginationButtonProps) {
	const config = directionConfig[direction];

	return (
		<StyledPaginationButton
			disabled={disabled}
			onClick={onClick}
			aria-label={ariaLabel ?? `Go to ${config.label.toLowerCase()} page`}
			startIcon={direction === "prev" ? config.icon : undefined}
			endIcon={direction === "next" ? config.icon : undefined}
		>
			{config.label}
		</StyledPaginationButton>
	);
}
