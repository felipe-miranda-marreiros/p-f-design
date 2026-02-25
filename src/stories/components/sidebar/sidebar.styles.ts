import {
	BottomNavigation,
	bottomNavigationActionClasses,
	Drawer,
	drawerClasses,
	ListItemButton,
	listItemButtonClasses,
	listItemIconClasses,
	listItemTextClasses,
	Tooltip,
	tooltipClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ElementType } from "react";
import {
	SIDEBAR_EXPANDED_WIDTH,
	SIDEBAR_MINIMIZED_WIDTH,
} from "./sidebar.constants";

export const StyledDrawer = styled(Drawer, {
	shouldForwardProp: (prop) => prop !== "isMinimized",
})<{ isMinimized: boolean }>(({ theme, isMinimized }) => ({
	width: isMinimized ? SIDEBAR_MINIMIZED_WIDTH : SIDEBAR_EXPANDED_WIDTH,
	flexShrink: 0,
	[`& .${drawerClasses.paper}`]: {
		width: isMinimized ? SIDEBAR_MINIMIZED_WIDTH : SIDEBAR_EXPANDED_WIDTH,
		backgroundColor: theme.palette.grey[900],
		borderTopRightRadius: 24,
		borderBottomRightRadius: 24,
		overflowX: "hidden",
		display: "flex",
		flexDirection: "column",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
}));

export const StyledListItemButton = styled(ListItemButton, {
	shouldForwardProp: (prop) => prop !== "isMinimized",
})<{
	component?: ElementType;
	to?: string;
	isMinimized: boolean;
}>(({ theme, isMinimized }) => ({
	borderRadius: 8,
	padding: theme.spacing(3),
	paddingRight: theme.spacing(6),
	paddingLeft: isMinimized ? theme.spacing(4) : theme.spacing(8),
	marginRight: isMinimized ? theme.spacing(2) : theme.spacing(4),
	color: theme.palette.grey[300],
	gap: theme.spacing(3),
	minHeight: 44,
	whiteSpace: "nowrap",
	"&:hover": {
		backgroundColor: "rgba(255, 255, 255, 0.08)",
	},
	[`&.${listItemButtonClasses.selected}`]: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.grey[900],
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		"&:before": {
			content: '""',
			position: "absolute",
			left: 0,
			top: 0,
			bottom: 0,
			width: 4,
			backgroundColor: theme.palette.secondaryColors.green,
		},
		"&:hover": {
			backgroundColor: theme.palette.grey[100],
		},
		[`& .${listItemIconClasses.root}`]: {
			color: theme.palette.secondaryColors.green,
		},
	},
	[`& .${listItemIconClasses.root}`]: {
		minWidth: "unset",
		color: "inherit",
	},
	[`& .${listItemTextClasses.primary}`]: {
		...theme.typography.h3,
	},
}));

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
	position: "fixed",
	bottom: 0,
	left: 0,
	right: 0,
	height: 64,
	backgroundColor: theme.palette.grey[900],
	[`& .${bottomNavigationActionClasses.root}`]: {
		color: theme.palette.grey[300],
		minWidth: 0,
		padding: theme.spacing(2),
	},
	[`& .${bottomNavigationActionClasses.selected}`]: {
		color: theme.palette.secondaryColors.green,
	},
	[`& .${bottomNavigationActionClasses.label}`]: {
		...theme.typography.body2,
	},
}));

export const StyledTooltip = styled(Tooltip)(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.grey[500],
		color: theme.palette.common.white,
		...theme.typography.body2,
	},
}));
