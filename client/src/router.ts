import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import Home from "./pages/home";
import { GetBlogs, GetBlog, CreateBlog } from "./pages/blog.data";

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
        path: "/blogs",
        children: [
            {
                path: "/",
                component: lazy(() => import("./pages/blogs")),
                data: GetBlogs
            },
            {
                path: "/:slug",
                component: lazy(() => import("./pages/blog")),
                data: GetBlog,
            },
            {
                path: "/create",
                component: lazy(() => import("./pages/createBlog")),
                data: CreateBlog
            }
        ]
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404"))
    }
];