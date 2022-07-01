import type { Component } from "solid-js";
import { BlogAuthor } from "../../pages/blog.data";
import BlogPreviewAuthor from "./Author";
import BlogPreviewReadMoreLink from "./ReadMoreLink";

const BlogPreviewFooter: Component<{ author: BlogAuthor; key: string; readMore: boolean; }> = (props) => {
    return (
        <div class="flex justify-between items-center">
            <BlogPreviewAuthor author={props.author} />
            {props.readMore && <BlogPreviewReadMoreLink key={props.key} />}
        </div>
    );
};
export default BlogPreviewFooter;