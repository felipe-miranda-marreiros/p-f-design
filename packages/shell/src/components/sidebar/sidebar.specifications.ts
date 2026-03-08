import type { SidebarStatus } from "./sidebar.types";

export type SidebarContext = {
	status: SidebarStatus;
	isMinimized: boolean;
	isTablet: boolean;
};

export const SidebarSpec = {
	isLoading: (ctx: SidebarContext) => ctx.status === "loading",
	hasError: (ctx: SidebarContext) => ctx.status === "error",
	isIdle: (ctx: SidebarContext) => ctx.status === "idle",
	isMinimizedError: (ctx: SidebarContext) =>
		ctx.status === "error" && ctx.isMinimized,
	isExpandedError: (ctx: SidebarContext) =>
		ctx.status === "error" && !ctx.isMinimized,
	hasToggle: (ctx: SidebarContext) => !ctx.isTablet,
	showsLabel: (ctx: SidebarContext) => !ctx.isMinimized,
} as const;
