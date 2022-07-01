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
                children: [
                    {
                        path: "/",
                        component: lazy(() => import("./pages/admin/updateBlogOverview")),
                        data: GetBlogs
                    },
                    {
                        path: "/:slug",
                        component: lazy(() => import("./pages/admin/updateBlog")),
                        data: GetBlog
                    }
                ]
            },
            {
                path: "/delete",
                children: [
                    {
                        path: "/",
                        component: lazy(() => import("./pages/admin/deleteBlogOverview")),
                        data: GetBlogs
                    },
                    {
                        path: "/:slug",
                        component: lazy(() => import("./pages/admin/deleteBlog")),
                        data: GetBlog
                    }
                ]
            }
        ]
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404"))
    }
];