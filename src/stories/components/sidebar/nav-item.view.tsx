import { ListItemIcon, ListItemText } from "@mui/material";
import type { ElementType } from "react";
import { Link, useMatch } from "react-router";
import { StyledListItemButton, StyledTooltip } from "./sidebar.styles";
import type { NavItemProps } from "./sidebar.types";

export function NavItem({ item, minimized }: NavItemProps) {
	const match = useMatch({ path: item.path, end: false });
	const isActive = !!match;

	const button = (
		<StyledListItemButton
			selected={isActive}
			aria-current={isActive ? "page" : undefined}
			component={Link as ElementType}
			to={item.path}
			isMinimized={minimized}
		>
			<ListItemIcon>
				<span aria-hidden="true">{item.icon}</span>
			</ListItemIcon>
			{!minimized && (
				<ListItemText
					primary={item.label}
					primaryTypographyProps={{ noWrap: true }}
				/>
			)}
		</StyledListItemButton>
	);

	if (minimized) {
		return (
			<StyledTooltip title={item.label} placement="right">
				{button}
			</StyledTooltip>
		);
	}

	return button;
}
