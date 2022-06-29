import { useRouteData } from "solid-app-router";
import { ParentComponent } from "solid-js";
import { Show, For } from "solid-js";
import BlogPreview from "../components/BlogPreview";
import { useLayout } from "../LayoutContext";
import type { GetBlogsType } from "./blog.data";

const Blogs: ParentComponent = (props) => {
    const { Title, Description } = useLayout();
    const response = useRouteData<GetBlogsType>();
    return (
        <>
            <Title sameHeader>Blogs</Title>
            <Description>Get access to all blogs!</Description>
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