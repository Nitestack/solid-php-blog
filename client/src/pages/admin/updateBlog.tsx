import type { Component } from "solid-js";
import { useRouteData } from "solid-app-router";
import { Show } from "solid-js";
import type { GetBlogType } from "../blog.data";
import EditBlog from "../../components/EditBlog";
import { useLayout } from "../../LayoutContext";
import { useI18n } from "@solid-primitives/i18n";

const UpdateBlogPage: Component = () => {
    //Data Fetching on page loading
    const response = useRouteData<GetBlogType>();
    //Page Info
    const { Title, Description } = useLayout();
    const [translate] = useI18n();
    //Render
    return (
        <Show when={!response.loading}>
            <Show when={response.blog}>
                <Title sameHeader>{translate("UPDATE_BLOG")}</Title>
                <Description>{translate("UPDATE_BLOG_DESCRIPTION")}</Description>
                <EditBlog blog={response.blog} />
            </Show>
        </Show>
    );
};
export default UpdateBlogPage;