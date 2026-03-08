import { BottomNavigationAction, Box } from "@mui/material";
import type { ElementType } from "react";
import { Link, useLocation } from "react-router";
import { StyledBottomNavigation } from "./sidebar.styles";
import type { SidebarMobileProps } from "./sidebar.types";

export function SidebarMobile({ items, ariaLabel }: SidebarMobileProps) {
	const location = useLocation();
	const mobileValue =
		items.find((item) => location.pathname.startsWith(item.path))?.path ??
		false;

	return (
		<Box component="nav" aria-label={ariaLabel}>
			<StyledBottomNavigation value={mobileValue} showLabels>
				{items.map((item) => (
					<BottomNavigationAction
						key={item.path}
						label={item.label}
						icon={<span aria-hidden="true">{item.icon}</span>}
						value={item.path}
						component={Link as ElementType}
						to={item.path}
						aria-current={
							location.pathname.startsWith(item.path) ? "page" : undefined
						}
					/>
				))}
			</StyledBottomNavigation>
		</Box>
	);
}
