import type { Component } from "solid-js";
import { Show } from "solid-js";
import type { GetBlogType } from "./blog.data";
import { useRouteData } from "solid-app-router";
import { useLayout } from "../LayoutContext";
import Blog from "../components/Blog";

const BlogPage: Component = () => {
    //Page info
    const { Header, Title, Description } = useLayout();
    //Data fetching on page loading
    const response = useRouteData<GetBlogType>();
    //Render
    return (
        <Show when={!response.loading}>
            <Title>{response.blog.title}</Title>
            <Header> </Header>
            <Description> </Description>
            <Blog blog={response.blog} />
        </Show>
    );
};
export default BlogPage;