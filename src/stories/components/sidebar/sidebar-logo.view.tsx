import { Box } from "@mui/material";
import LogoDesktop from "../../../assets/logo-desktop-illustration.png";
import LogoMobile from "../../../assets/logo-mobile-illustration.png";
import type { SidebarLogoProps } from "./sidebar.types";

export function SidebarLogo({
	isMinimized,
	src,
	mobileSrc,
	alt = "Logo",
}: SidebarLogoProps) {
	const resolvedSrc = isMinimized
		? (mobileSrc ?? LogoMobile)
		: (src ?? LogoDesktop);

	return <Box component="img" src={resolvedSrc} alt={alt} />;
}
