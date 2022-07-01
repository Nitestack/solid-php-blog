import type { Component } from "solid-js";
import { BlogAuthor } from "../../pages/blog.data";
import { Link } from "solid-app-router";

const BlogPreviewAuthor: Component<{ author: BlogAuthor; }> = (props) => {
    return (
        <div class="flex items-center space-x-4">
            {props.author.imageUrl && <img class="w-7 h-7 rounded-full" src={props.author.imageUrl} alt={props.author.name} />}
            {props.author.url ?
                <Link href={props.author.url} class="link">
                    <span class="font-medium dark:text-white">
                        {props.author.name}
                    </span>
                </Link> :
                <span class="font-medium dark:text-white">
                    {props.author.name}
                </span>}
        </div>
    );
};
export default BlogPreviewAuthor;