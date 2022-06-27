import { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";
import { Blog } from "./blog";
import axios from "axios";

export const BlogData: RouteDataFunc<{
    blogs: {
        [key: string]: Blog;
    };
}> = () => {
    const [response] = createResource<Blog & { id: string; }>(() => axios.get("http://localhost/blog/get_blogs.php").then(res => {
        console.log(res.data);
        return res.data;
    }));
    return null;
};