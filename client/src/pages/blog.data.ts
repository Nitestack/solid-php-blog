import { useParams } from "solid-app-router";
import { createResource, splitProps } from "solid-js";
import type { Setter } from "solid-js";
import type { RouteDataFunc } from "solid-app-router";
import axios from "axios";

interface BaseBlog {
    author: BlogAuthor;
    imageUrl: string;
    title: string;
    description: string;
    content: string;
}

export interface BlogAuthor {
    name: string;
    url?: string;
    imageUrl?: string;
}

export interface Blog extends BaseBlog {
    createdAt: Date;
}

interface DatabaseBlog extends BaseBlog {
    id: string;
    createdAt: {
        date: string;
        timezone: string;
        timezone_type: number;
    };
}

interface Response<DataType = any> {
    success: boolean;
    error?: string;
    data?: DataType;
}

type BlogType<Property, DataType> = Property & {
    loading: boolean;
    error: any;
    refetch: (info?: unknown) => Response<DataType> | Promise<Response<DataType>> | undefined | null;
    mutate: Setter<Response<DataType>>;
};

export type GetBlogsType = BlogType<{
    blogs: {
        [key: string]: Blog;
    };
}, Array<DatabaseBlog>>;

export const GetBlogs: RouteDataFunc<GetBlogsType> = () => {
    const [response, { refetch, mutate }] = createResource<Response<Array<DatabaseBlog>>>(async () => axios.get("http://localhost/blog/get_blogs.php").then(res => res.data));
    return {
        get blogs() {
            if (response.loading || response.error) return {};
            if (response().success) {
                const newBlogs: {
                    [key: string]: Blog;
                } = {};
                for (const blog of response().data.sort((a, b) => new Date(b.createdAt.date).getTime() - new Date(a.createdAt.date).getTime())) {
                    const [local, others] = splitProps(blog, ["id", "createdAt"]);
                    newBlogs[local.id] = {
                        ...others,
                        createdAt: new Date(local.createdAt.date)
                    };
                };
                return newBlogs;
            } else return {};
        },
        get loading() {
            return response.loading;
        },
        get error() {
            return response.error;
        },
        get refetch() {
            return refetch;
        },
        get mutate() {
            return mutate;
        }
    };
};

export type GetBlogType = BlogType<{
    blog: Blog;
}, DatabaseBlog>;

export const GetBlog: RouteDataFunc<GetBlogType> = () => {
    const params = useParams<{ slug: string; }>();
    const [response, { refetch, mutate }] = createResource<Response<DatabaseBlog>, string>(() => params.slug, async slug => {
        const formData = new FormData();
        formData.set("id", slug);
        return axios.post("http://localhost/blog/get_blog.php", formData).then(res => res.data);
    });
    return {
        get blog() {
            if (response.loading || response.error) return null;
            if (response().success) {
                const [local, others] = splitProps(response().data, ["createdAt"]);
                return {
                    ...others,
                    createdAt: new Date(local.createdAt.date)
                } as Blog;
            } else return null;
        },
        get loading() {
            return response.loading;
        },
        get error() {
            return response.error;
        },
        get refetch() {
            return refetch;
        },
        get mutate() {
            return mutate;
        }
    };
};