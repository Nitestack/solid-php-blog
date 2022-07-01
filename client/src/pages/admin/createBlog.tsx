import type { Component } from "solid-js";
import { useLayout } from "../../LayoutContext";
import EditBlog from "../../components/EditBlog";
import { useI18n } from "@solid-primitives/i18n";

const CreateBlogPage: Component = () => {
    //Page info
    const { Title, Description } = useLayout();
    const [translate] = useI18n();
    //Render
    return (
        <>
            <Title sameHeader>{translate("CREATE_BLOG")}</Title>
            <Description>{translate("CREATE_BLOG_DESCRIPTION")}</Description>
            <EditBlog />
        </>
    );
};

export default CreateBlogPage;