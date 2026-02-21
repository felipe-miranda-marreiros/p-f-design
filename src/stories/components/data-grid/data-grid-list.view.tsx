import { StyledListContainer, StyledListItem } from "./data-grid.styles";
import type { DataGridListProps } from "./data-grid.types";

export function DataGridList<TData>({
	table,
	renderMobileRow,
}: DataGridListProps<TData>) {
	return (
		<StyledListContainer role="list">
			{table.getRowModel().rows.map((row) => (
				<StyledListItem key={row.id} role="listitem">
					{renderMobileRow({ row: row.original })}
				</StyledListItem>
			))}
		</StyledListContainer>
	);
}
