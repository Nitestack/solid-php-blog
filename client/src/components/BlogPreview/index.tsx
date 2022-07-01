import type { Component, JSX } from "solid-js";
import type { Blog } from "../../pages/blog.data";
import BlogPreviewFooter from "./Footer";
import BlogPreviewImage from "./Image";
import BlogPreviewBody from "./Body";
import BlogPreviewHeader from "./Header";

const BlogPreview: Component<{ blog: Blog; key?: string; readMore?: boolean; onClick?: JSX.EventHandlerUnion<HTMLElement, MouseEvent>; }> = (props) => {
    //Blog Info
    const blog = () => props.blog;
    //Render
    return (
        <article onClick={props.onClick} class={(props.onClick ? "cursor-pointer " : "") + "p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"}>
            <BlogPreviewHeader createdAt={blog().createdAt} />
            <BlogPreviewBody key={props.key} title={blog().title} description={blog().description} />
            <BlogPreviewImage imageUrl={blog().imageUrl} />
            <BlogPreviewFooter author={blog().author} key={props.key} readMore={props.readMore} />
        </article>
    );
};
export default BlogPreview;