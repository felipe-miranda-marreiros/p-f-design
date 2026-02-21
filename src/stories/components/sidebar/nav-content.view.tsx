import { List } from "@mui/material";
import { NavError } from "./nav-error.view";
import { NavItem } from "./nav-item.view";
import { NavSkeleton } from "./nav-skeleton.view";
import { SidebarSpec } from "./sidebar.specifications";
import type { NavContentProps } from "./sidebar.types";

export function NavContent({
	status,
	isMinimized,
	items,
	errorMessage,
}: NavContentProps) {
	const ctx = { status, isMinimized, isTablet: false };

	if (SidebarSpec.isLoading(ctx)) {
		return <NavSkeleton minimized={isMinimized} count={items.length || 5} />;
	}

	if (SidebarSpec.isMinimizedError(ctx)) {
		return <NavError minimized message={errorMessage} />;
	}

	if (SidebarSpec.hasError(ctx)) {
		return <NavError message={errorMessage} />;
	}

	return (
		<List
			disablePadding
			sx={{ display: "flex", flexDirection: "column", gap: 1 }}
		>
			{items.map((item) => (
				<NavItem key={item.path} item={item} minimized={isMinimized} />
			))}
		</List>
	);
}
