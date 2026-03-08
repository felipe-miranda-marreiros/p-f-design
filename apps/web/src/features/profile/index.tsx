import { lazy } from "react";
import type { RouteObject } from "react-router";

const Pages = {
	Profile: lazy(() => import("./pages/profile")),
	Settings: lazy(() => import("./pages/settings")),
};

const RoutePath = {
	Profile: "/profile",
	Settings: "/profile/settings",
};

const routes: RouteObject[] = [
	{
		path: RoutePath.Profile,
		element: <Pages.Profile />,
	},
	{
		path: RoutePath.Settings,
		element: <Pages.Settings />,
	},
];

export default routes;
