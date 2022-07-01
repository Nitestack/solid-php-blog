import { useI18n } from "@solid-primitives/i18n";
import type { Component } from "solid-js";
import { Link } from "solid-app-router";

const BlogPreviewReadMoreLink: Component<{ key: string; }> = (props) => {
    const [translate] = useI18n();
    return (
        <Link href={props.key && `/blogs/${props.key}`} class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
            {translate("READ_MORE")}
            <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    );
};
export default BlogPreviewReadMoreLink;