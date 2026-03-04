import type { ComponentType, ReactNode } from "react";

// ---- Status ----

export type SidebarStatus = "idle" | "loading" | "error";

// ---- Nav item ----

export interface SidebarNavItem {
	/** MUI icon element, e.g. <HomeRounded /> */
	icon: ReactNode;
	/** Text label shown next to the icon */
	label: string;
	/** Route path for active-state detection */
	path: string;
}

// ---- Slot types ----

export interface SidebarLogoProps {
	isMinimized: boolean;
	/** Expanded logo image source */
	src: string;
	/** Minimized logo image source */
	mobileSrc: string;
	alt?: string;
}

export interface SidebarSlots {
	/** Replace the entire logo slot component. Receives SidebarLogoProps. */
	logo?: ComponentType<SidebarLogoProps>;
}

export interface SidebarSlotProps {
	logo?: SidebarLogoProps;
}

// ---- Public component props ----

export interface SidebarProps {
	/** Navigation items to render */
	items: SidebarNavItem[];
	/** Data state: "idle" renders normally, "loading" shows skeletons, "error" shows error UI */
	status?: SidebarStatus;
	/** Custom error message when status="error" */
	errorMessage?: string;
	/** Controlled minimized state (desktop only) */
	minimized?: boolean;
	/** Callback when the user toggles the minimize button */
	onMinimizeChange?: (minimized: boolean) => void;
	/** Accessible label for the nav landmark */
	"aria-label"?: string;
	/** Override slot components */
	slots?: SidebarSlots;
	/** Props forwarded to slot components */
	slotProps?: SidebarSlotProps;
}

// ---- Internal sub-component props ----

export interface NavItemProps {
	item: SidebarNavItem;
	minimized: boolean;
}

export interface NavSkeletonProps {
	minimized: boolean;
	count: number;
}

export interface NavErrorProps {
	message: string;
	minimized?: boolean;
}

export interface NavContentProps {
	status: SidebarStatus;
	items: SidebarNavItem[];
	isMinimized: boolean;
	errorMessage: string;
}

export interface SidebarDesktopProps {
	items: SidebarNavItem[];
	status: SidebarStatus;
	errorMessage: string;
	isMinimized: boolean;
	isTablet: boolean;
	ariaLabel: string;
	onToggle: () => void;
	slots?: SidebarSlots;
	slotProps?: SidebarSlotProps;
}

export interface SidebarMobileProps {
	items: SidebarNavItem[];
	ariaLabel: string;
}

export interface SidebarToggleProps {
	isMinimized: boolean;
	onToggle: () => void;
}
