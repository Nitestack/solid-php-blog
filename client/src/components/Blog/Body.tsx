import type { Component } from "solid-js";
import SolidMarkDown from "solid-markdown";
import remarkExtendedTable from "remark-extended-table";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkEmoji from "remark-emoji";

const BlogBody: Component<{ description: string; content: string; imageUrl: string; }> = (props) => {
    return (
        <>
            <img src={props.imageUrl} />
            <SolidMarkDown skipHtml class="mb-5" linkTarget="_blank" remarkPlugins={[remarkExtendedTable, remarkGfm, remarkToc, remarkEmoji]} children={props.description}></SolidMarkDown>
            <SolidMarkDown skipHtml class="mb-5" linkTarget="_blank" remarkPlugins={[remarkExtendedTable, remarkGfm, remarkToc, remarkEmoji]}>{props.content}</SolidMarkDown>
        </>
    );
};
export default BlogBody;