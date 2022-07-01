import { useNavigate, useRouteData } from "solid-app-router";
import type { Component } from "solid-js";
import { Show, For } from "solid-js";
import { useLayout } from "../../LayoutContext";
import type { GetBlogsType } from "../blog.data";
import BlogPreview from "../../components/BlogPreview";
import { Icon } from "solid-heroicons";
import { chevronDoubleRight } from "solid-heroicons/solid";
import { useI18n } from "@solid-primitives/i18n";

const DeleteBlogPage: Component = () => {
    //Data fetching on page loading
    const response = useRouteData<GetBlogsType>();
    //Navigation
    const navigate = useNavigate();
    //Page info
    const { Title, Description } = useLayout();
    const [translate] = useI18n();
    //Render
    return (
        <>
            <Title sameHeader>{translate("DELETE_BLOG")}</Title>
            <Description>{translate("DELETE_BLOG_OVERVIEW_DESCRIPTION")}</Description>
            <div class="flex items-center justify-center">
                <button onClick={() => navigate("/admin")} class="btn border-primary"><Icon class="w-5" path={chevronDoubleRight} />{translate("RETURN_TO_ADMIN_PAGE_BUTTON")}</button>
            </div>
            <Show when={!response.loading}>
                <Show when={response.blogs}>
                    <div class="flex items-center justify-center">
                        <div class="grid gap-8 lg:grid-cols-2">
                            <For each={Object.keys(response.blogs)}>
                                {key => (
                                    <BlogPreview onClick={() => navigate(`/admin/delete/${key}`)} key={key} blog={response.blogs[key]} />
                                )}
                            </For>
                        </div>
                    </div>
                </Show>
            </Show>
        </>
    );
};
export default DeleteBlogPage;