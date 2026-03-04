import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import type { SidebarToggleProps } from "./sidebar.types";

export function SidebarToggle({ isMinimized, onToggle }: SidebarToggleProps) {
	return (
		<Box
			sx={{
				px: 6,
				py: 6,
				display: "flex",
				alignItems: "center",
				justifyContent: isMinimized ? "center" : "flex-start",
				gap: 2,
				mb: 25,
			}}
		>
			<IconButton
				onClick={onToggle}
				aria-label={isMinimized ? "Expand sidebar" : "Minimize sidebar"}
				aria-expanded={!isMinimized}
				size="small"
				sx={{ color: "grey.300", p: 1 }}
			>
				{isMinimized ? (
					<ChevronRightRounded fontSize="small" aria-hidden="true" />
				) : (
					<ChevronLeftRounded fontSize="small" aria-hidden="true" />
				)}
			</IconButton>
			{!isMinimized && (
				<Typography variant="h3" sx={{ color: "grey.300", userSelect: "none" }}>
					Minimize Menu
				</Typography>
			)}
		</Box>
	);
}
