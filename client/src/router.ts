import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import Home from "./pages/home";
import { BlogData } from "./pages/blog.data";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: lazy(() => import("./pages/about"))
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404"))
    },
    {
        path: "/blogs/:slug",
        component: lazy(() => import("./pages/blog")),
        data: BlogData
    }
];