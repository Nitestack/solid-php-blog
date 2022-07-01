import { useParams } from "solid-app-router";
import type { ParentComponent, Component } from "solid-js";
import type { Blog } from "../../pages/blog.data";
import BlogPreview from "../BlogPreview";
import uniqid from "uniqid";
import { EditBlogContextProvider, useEditBlogContext } from "./EditBlogContext";
import EditBlogReturnButtons from "./ReturnButtons";
import EditBlogActionButtons from "./ActionButtons";
import EditBlogAuthorInput from "./AuthorInput";
import EditBlogTitleInput from "./TitleInput";
import EditBlogDescriptionTextarea from "./DescriptionTextarea";
import EditBlogContentTextArea from "./ContentTextarea";
import EditBlogImageInput from "./ImageInput";

const EditBlogInContext: Component<{ blog?: Blog; }> = (props) => {
    const { blogStore, preview } = useEditBlogContext();
    //URL params
    const params = useParams<{ slug?: string; }>();
    //Blog key
    const genKey = uniqid("blog-");
    const key = () => params.slug || genKey;
    //Render
    return (
        <>
            <EditBlogReturnButtons isBlog={!!props.blog} />
            <div class="flex items-center justify-center flex-col">
                <EditBlogAuthorInput />
                <EditBlogTitleInput />
                <EditBlogDescriptionTextarea />
                <EditBlogContentTextArea />
                <EditBlogImageInput />
                {preview() && <BlogPreview blog={{
                    author: blogStore.author,
                    title: blogStore.title,
                    content: blogStore.content,
                    description: blogStore.description,
                    createdAt: new Date(),
                    imageUrl: blogStore.imageUrl
                }} />}
                <EditBlogActionButtons key={key()} isBlog={!!props.blog} />
            </div>
        </>
    );
};

const EditBlog: ParentComponent<{ blog?: Blog; }> = (props) => {
    return (
        <EditBlogContextProvider blog={props.blog}>
            <EditBlogInContext blog={props.blog} />
        </EditBlogContextProvider>
    );
};

export default EditBlog;