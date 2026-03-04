import { lazy } from "react";
import type { RouteObject } from "react-router";

const Pages = {
	Welcome: lazy(() => import("./pages/welcome")),
	NotFound: lazy(() => import("./pages/not-found")),
};

const RoutePath = {
	Welcome: "/",
	NotFound: "*",
};

const routes: RouteObject[] = [
	{
		path: RoutePath.Welcome,
		element: <Pages.Welcome />,
	},
	{
		path: RoutePath.NotFound,
		element: <Pages.NotFound />,
	},
];

export default routes;
