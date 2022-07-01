import type { Component } from "solid-js";
import { useNavigate, useParams, useRouteData } from "solid-app-router";
import { Show } from "solid-js";
import type { GetBlogType } from "../blog.data";
import Blog from "../../components/Blog";
import { Icon } from "solid-heroicons";
import { trash, chevronDoubleRight } from "solid-heroicons/solid";
import { useLayout } from "../../LayoutContext";
import axios from "axios";
import { useI18n } from "@solid-primitives/i18n";

const DeleteBlogPage: Component = () => {
    //URL params
    const params = useParams<{ slug: string; }>();
    //Data Fetching on page loading
    const response = useRouteData<GetBlogType>();
    //Navigation
    const navigate = useNavigate();
    //Page Info
    const { Title, Description } = useLayout();
    const [translate] = useI18n();
    //Functions
    function onDelete() {
        return () => {
            const formData = new FormData();
            formData.set("id", params.slug);
            axios.post("http://localhost/blog/delete_blog.php", formData).then(res => {
                if (res.status == 200 && res.data.success) navigate("/admin");
            });
        };
    };
    //Render
    return (
        <Show when={!response.loading}>
            <div class="flex items-center justify-center">
                <button onClick={() => navigate("/admin/delete")} class="btn border-primary"><Icon class="w-5" path={chevronDoubleRight} />{translate("RETURN_TO_BLOG_OVERVIEW_BUTTON")}</button>
            </div>
            <Show when={response.blog}>
                <Title sameHeader>{translate("DELETE_BLOG")}</Title>
                <Description>{translate("DELETE_BLOG_DESCRIPTION")}</Description>
                <div class="flex items-center justify-center">
                    <button class="btn border-primary" onClick={onDelete()}><Icon class="w-5" path={trash} /> {translate("DELETE_BLOG_BUTTON")}</button>
                </div>
                <Blog blog={response.blog} />
                <div class="flex items-center justify-center">
                    <button class="btn border-primary" onClick={onDelete()}><Icon class="w-5" path={trash} /> {translate("DELETE_BLOG_BUTTON")}</button>
                </div>
            </Show>
        </Show>
    );
};
export default DeleteBlogPage;