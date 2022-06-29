import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import Home from "./pages/home";
import { GetBlogs, GetBlog } from "./pages/blog.data";

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
            }
        ]
    },
    {
        path: "/admin",
        children: [
            {
                path: "/",
                component: lazy(() => import("./pages/admin/home"))
            },
            {
                path: "/create",
                component: lazy(() => import("./pages/admin/createBlog"))
            },
            {
                path: "/update",
                component: lazy(() => import("./pages/admin/updateBlog")),
                data: GetBlogs
            },
            {
                path: "/delete",
                component: lazy(() => import("./pages/admin/deleteBlog")),
                data: GetBlogs
            }
        ]
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404"))
    }
];