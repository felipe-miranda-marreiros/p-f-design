import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import type { SidebarProps } from "./sidebar.types";
import { SidebarDesktop } from "./sidebar-desktop.view";
import { SidebarMobile } from "./sidebar-mobile.view";

export type {
	SidebarLogoProps,
	SidebarNavItem,
	SidebarProps,
	SidebarSlotProps,
	SidebarSlots,
	SidebarStatus,
} from "./sidebar.types";

export function Sidebar({
	items,
	status = "idle",
	errorMessage = "Failed to load navigation.",
	minimized: controlledMinimized,
	onMinimizeChange,
	"aria-label": ariaLabel = "Main navigation",
	slots,
	slotProps,
}: SidebarProps) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"), {
		noSsr: true,
	});

	const [internalMinimized, setInternalMinimized] = useState(false);
	const isMinimized =
		controlledMinimized ?? (isTablet ? true : internalMinimized);

	const handleToggle = () => {
		const next = !isMinimized;
		setInternalMinimized(next);
		onMinimizeChange?.(next);
	};

	if (isMobile) {
		return <SidebarMobile items={items} ariaLabel={ariaLabel} />;
	}

	return (
		<SidebarDesktop
			items={items}
			status={status}
			errorMessage={errorMessage}
			isMinimized={isMinimized}
			isTablet={isTablet}
			ariaLabel={ariaLabel}
			onToggle={handleToggle}
			slots={slots}
			slotProps={slotProps}
		/>
	);
}
