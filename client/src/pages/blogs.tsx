import { useI18n } from "@solid-primitives/i18n";
import { useRouteData } from "solid-app-router";
import { Component } from "solid-js";
import { Show, For } from "solid-js";
import BlogPreview from "../components/BlogPreview";
import { useLayout } from "../LayoutContext";
import type { GetBlogsType } from "./blog.data";

const Blogs: Component = () => {
    //Page info
    const { Title, Description } = useLayout();
    const [translate] = useI18n();
    //Data fetching on page loading
    const response = useRouteData<GetBlogsType>();
    //Render
    return (
        <>
            <Title sameHeader>Blogs</Title>
            <Description>{translate("BLOGS_PAGE_DESCRIPTION")}</Description>
            <Show when={!response.loading}>
                <div class="flex items-center justify-center">
                    <div class="grid gap-8 lg:grid-cols-2">
                        <For each={Object.keys(response.blogs)}>
                            {key => (
                                <BlogPreview key={key} blog={response.blogs[key]} readMore />
                            )}
                        </For>
                    </div>
                </div>
            </Show>
        </>
    );
};
export default Blogs;