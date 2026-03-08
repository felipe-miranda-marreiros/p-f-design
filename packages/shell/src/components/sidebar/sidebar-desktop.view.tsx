import { Box } from "@mui/material";
import { NavContent } from "./nav-content.view";
import { SidebarSpec } from "./sidebar.specifications";
import { StyledDrawer } from "./sidebar.styles";
import type { SidebarDesktopProps } from "./sidebar.types";
import { SidebarLogo } from "./sidebar-logo.view";
import { SidebarToggle } from "./sidebar-toggle.view";

export function SidebarDesktop({
	items,
	status,
	errorMessage,
	isMinimized,
	isTablet,
	ariaLabel,
	onToggle,
	slots,
	slotProps,
}: SidebarDesktopProps) {
	const LogoSlot = slots?.logo ?? SidebarLogo;
	const ctx = { status, isMinimized, isTablet };

	return (
		<StyledDrawer variant="permanent" anchor="left" isMinimized={isMinimized}>
			<Box
				component="nav"
				aria-label={ariaLabel}
				sx={{ flex: 1, display: "flex", flexDirection: "column", pt: 4 }}
			>
				<Box
					sx={{
						px: isMinimized ? 0 : 8,
						pb: 6,
						height: 120,
						display: "flex",
						alignItems: "center",
						justifyContent: isMinimized ? "center" : "flex-start",
					}}
				>
					{slotProps?.logo && (
						<LogoSlot {...slotProps.logo} isMinimized={isMinimized} />
					)}
				</Box>
				<NavContent
					status={status}
					items={items}
					isMinimized={isMinimized}
					errorMessage={errorMessage}
				/>
			</Box>
			{SidebarSpec.hasToggle(ctx) && (
				<SidebarToggle isMinimized={isMinimized} onToggle={onToggle} />
			)}
		</StyledDrawer>
	);
}
