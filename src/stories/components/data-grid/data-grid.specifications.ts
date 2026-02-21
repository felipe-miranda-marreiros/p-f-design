import type { DataGridStatus } from "./data-grid.types";

export interface DataGridContext {
	status: DataGridStatus;
	isMobile: boolean;
	hasMobileRenderer: boolean;
}

export const DataGridSpec = {
	shouldRenderTable: (ctx: DataGridContext) =>
		ctx.status === "idle" && (!ctx.isMobile || !ctx.hasMobileRenderer),

	shouldRenderList: (ctx: DataGridContext) =>
		ctx.status === "idle" && ctx.isMobile && ctx.hasMobileRenderer,

	shouldRenderLoading: (ctx: DataGridContext) => ctx.status === "loading",

	shouldRenderRefetching: (ctx: DataGridContext) => ctx.status === "refetching",

	shouldRenderError: (ctx: DataGridContext) => ctx.status === "error",

	shouldRenderEmpty: (ctx: DataGridContext) => ctx.status === "empty",
} as const;
