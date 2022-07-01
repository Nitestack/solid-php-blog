import type { Component } from "solid-js";
import SolidMarkDown from "solid-markdown";
import remarkExtendedTable from "remark-extended-table";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkEmoji from "remark-emoji";

const BlogPreviewBody: Component<{ key: string; title: string; description: string; }> = (props) => {
    return (
        <>
            <h2 class="mb-2 link text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href={props.key && `/blogs/${props.key}`}>{props.title}</a></h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400"><SolidMarkDown skipHtml class="mb-5" linkTarget="_blank" remarkPlugins={[remarkExtendedTable, remarkGfm, remarkToc, remarkEmoji]} children={props.description}></SolidMarkDown></p>
        </>
    );
};
export default BlogPreviewBody;