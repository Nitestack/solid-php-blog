import type { Component } from "solid-js";
import type { Blog as BlogType } from "../../pages/blog.data";
import BlogBody from "./Body";
import AllBlogsButton from "./AllBlogsButton";
import BlogDate from "./Date";
import BlogAuthor from "./Author";

const Blog: Component<{ blog: BlogType; }> = (props) => {
    return (
        <>
            <div class="lg:flex lg:items-center lg:justify-between mb-5">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{props.blog.title}</h2>
                    <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <BlogAuthor author={props.blog.author} />
                        <BlogDate createdAt={props.blog.createdAt} />
                    </div>
                </div>
                <AllBlogsButton />
            </div>
            <BlogBody description={props.blog.description} content={props.blog.content} imageUrl={props.blog.imageUrl} />
        </>
    );
};
export default Blog;