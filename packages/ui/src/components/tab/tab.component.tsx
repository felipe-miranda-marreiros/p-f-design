import type {
	TabProps as MuiTabProps,
	TabsProps as MuiTabsProps,
} from "@mui/material";
import {
	buttonBaseClasses,
	Tab as MuiTab,
	Tabs as MuiTabs,
	tabClasses,
	tabsClasses,
} from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

export function tabA11yProps(index: number) {
	return {
		id: `tab-${index}`,
		"aria-controls": `tabpanel-${index}`,
	} as const;
}

const StyledTabs = styled(MuiTabs)(({ theme }: { theme: Theme }) => ({
	[`& .${tabsClasses.indicator}`]: { display: "none" },
	gap: theme.spacing(1),
}));

export const Tabs = ({ children, ...rest }: MuiTabsProps) => (
	<StyledTabs {...rest}>{children}</StyledTabs>
);

const StyledTab = styled(MuiTab)(({ theme }: { theme: Theme }) => ({
	...theme.typography.body1,
	textTransform: "none",
	color: theme.palette.grey[500],
	backgroundColor: "transparent",
	minHeight: "unset",
	padding: theme.spacing(3, 4),
	borderBottom: `4px solid transparent`,

	"&:hover": {
		color: theme.palette.grey[900],
		borderBottomColor: theme.palette.grey[900],
	},

	[`&.${tabClasses.selected}:hover`]: {
		backgroundColor: theme.palette.grey[500],
	},

	[`&.${buttonBaseClasses.focusVisible}`]: {
		outline: `2px solid ${theme.palette.grey[900]}`,
		outlineOffset: 2,
	},

	[`&.${tabClasses.selected}`]: {
		backgroundColor: theme.palette.grey[900],
		color: theme.palette.common.white,
	},

	[`&.${tabClasses.disabled}`]: {
		color: theme.palette.grey[300],
	},

	[`& .${tabClasses.icon}`]: { color: "inherit" },
}));

export const Tab = ({ ...rest }: MuiTabProps) => <StyledTab {...rest} />;

export interface TabPanelProps {
	children: ReactNode;
	value: number;
	index: number;
}

export function TabPanel({ children, value, index }: TabPanelProps) {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
		>
			{value === index && children}
		</div>
	);
}
