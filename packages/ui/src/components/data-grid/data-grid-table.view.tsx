import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import {
	StyledTable,
	StyledTableContainer,
	StyledTableSortLabel,
} from "./data-grid.styles";
import type { DataGridTableProps } from "./data-grid.types";

export function DataGridTable<TData>({ table }: DataGridTableProps<TData>) {
	return (
		<StyledTableContainer>
			<StyledTable>
				<TableHead>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								const canSort = header.column.getCanSort();
								const sorted = header.column.getIsSorted();

								return (
									<TableCell key={header.id}>
										{header.isPlaceholder ? null : canSort ? (
											<StyledTableSortLabel
												active={sorted !== false}
												direction={sorted || "asc"}
												onClick={header.column.getToggleSortingHandler()}
											>
												{flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
											</StyledTableSortLabel>
										) : (
											flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)
										)}
									</TableCell>
								);
							})}
						</TableRow>
					))}
				</TableHead>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<TableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</StyledTable>
		</StyledTableContainer>
	);
}
