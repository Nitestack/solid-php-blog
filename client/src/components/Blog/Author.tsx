import type { Component } from "solid-js";
import type { BlogAuthor as BlogAuthorType } from "../../pages/blog.data";
import { Icon } from "solid-heroicons";
import { atSymbol } from "solid-heroicons/solid";

const BlogAuthor: Component<{ author: BlogAuthorType; }> = (props) => {
    return (
        <div class="mt-2 flex items-center text-sm text-gray-500">
            <div class="flex items-center space-x-4">
                {props.author.imageUrl ?
                    <img class="w-7 h-7 rounded-full" src={props.author.imageUrl} alt={props.author.name} /> :
                    <Icon path={atSymbol} class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />}
                <span class="font-medium">
                    {props.author.name}
                </span>
            </div>
        </div>
    );
};
export default BlogAuthor;