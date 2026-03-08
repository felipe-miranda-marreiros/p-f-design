import { Box } from "@mui/material";
import type { SidebarLogoProps } from "./sidebar.types";

export function SidebarLogo({
	isMinimized,
	src,
	mobileSrc,
	alt = "Logo",
}: SidebarLogoProps) {
	const resolvedSrc = isMinimized ? mobileSrc : src;

	return <Box component="img" src={resolvedSrc} alt={alt} />;
}
