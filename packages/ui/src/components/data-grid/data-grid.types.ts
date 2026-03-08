import type { Table } from "@tanstack/react-table";
import type { ComponentType, ReactNode } from "react";

// ---- Status ----

export type DataGridStatus =
	| "idle"
	| "loading"
	| "refetching"
	| "error"
	| "empty";

// ---- Mobile row render prop ----

export interface DataGridMobileRowProps<TData> {
	row: TData;
}

// ---- Slots (component overrides) ----

export interface DataGridErrorSlotProps {
	message?: string;
}

export interface DataGridSlots {
	/** Override the loading state component */
	loading?: ComponentType;
	/** Override the refetching state component (default: skeleton overlay) */
	refetching?: ComponentType;
	/** Override the error state component */
	error?: ComponentType<DataGridErrorSlotProps>;
	/** Override the empty state component */
	empty?: ComponentType;
}

export interface DataGridSlotProps {
	error?: Partial<DataGridErrorSlotProps>;
}

// ---- Public props ----

export interface DataGridProps<TData> {
	/** TanStack Table instance — consumer creates with useReactTable() */
	table: Table<TData>;
	/** Data state */
	status?: DataGridStatus;
	/** Custom mobile row renderer. When provided, renders list layout on mobile */
	renderMobileRow?: (props: DataGridMobileRowProps<TData>) => ReactNode;
	/** Accessible label */
	"aria-label"?: string;
	/** Override slot components */
	slots?: DataGridSlots;
	/** Props forwarded to slot components */
	slotProps?: DataGridSlotProps;
}

// ---- Internal sub-component props ----

export interface DataGridTableProps<TData> {
	table: Table<TData>;
}

export interface DataGridListProps<TData> {
	table: Table<TData>;
	renderMobileRow: (props: DataGridMobileRowProps<TData>) => ReactNode;
}

export interface DataGridSkeletonProps {
	columnCount: number;
	rowCount?: number;
	variant?: "loading" | "refetching";
}
