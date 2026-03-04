import { useRoutes } from "react-router";
import profile from "@/features/profile";
import shared from "@/features/shared";

const routes = [...shared, ...profile].flat();

export function AppRoutes() {
	return useRoutes(routes);
}
