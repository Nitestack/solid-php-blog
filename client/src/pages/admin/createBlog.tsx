import { ParentComponent } from "solid-js";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { Blog } from "../blog.data";
import { Icon } from "solid-heroicons";
import { link, userCircle, annotation, atSymbol, informationCircle, menu, upload } from "solid-heroicons/solid";
import axios from "axios";
import uniqid from "uniqid";
import { useNavigate } from "solid-app-router";
import BlogPreview from "../../components/BlogPreview";
import { useLayout } from "../../LayoutContext";

type BlogStore = Omit<Blog, "createdAt"> & {
    error: Omit<Blog, "createdAt">;
};

const CreateBlogPage: ParentComponent = (props) => {
    const { Title, Description } = useLayout();
    const [preview, setPreview] = createSignal(false);
    const requiredPropertiesDefined = () => !!(blogStore.title && blogStore.content && blogStore.description && blogStore.imageUrl && blogStore.author.name);
    const navigate = useNavigate();
    const [blogStore, setBlogStore] = createStore<BlogStore>({
        title: "",
        author: {
            name: "",
            imageUrl: "",
            url: ""
        },
        content: "",
        description: "",
        imageUrl: "",
        error: {
            author: {
                name: "",
                imageUrl: "",
                url: ""
            },
            content: "",
            description: "",
            imageUrl: "",
            title: ""
        }
    });
    const MAX_CHAR_TITLE = 60;
    const MAX_CHAR_AUTHOR_NAME = 30;
    function onTitleInput() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const newTitle = ev.currentTarget.value;
            if (newTitle.length > MAX_CHAR_TITLE) return setBlogStore("error", "title", `Max. ${MAX_CHAR_TITLE} characters allowed!`);
            else if (newTitle.length < 1) return setBlogStore("error", "title", "Please provide a title!");
            setBlogStore("error", "title", "");
            setBlogStore("title", newTitle);
        };
    };
    function onDescriptionInput() {
        return (ev: InputEvent & { currentTarget: HTMLTextAreaElement; target: Element; }) => {
            const newDescription = ev.currentTarget.value;
            if (newDescription.length < 1) return setBlogStore("error", "description", "Please provide a description!");
            setBlogStore("error", "description", "");
            setBlogStore("description", newDescription);
        };
    };
    function onContentInput() {
        return (ev: InputEvent & { currentTarget: HTMLTextAreaElement; target: Element; }) => {
            const newContent = ev.currentTarget.value;
            if (newContent.length < 1) return setBlogStore("error", "content", "Please provide a content!");
            setBlogStore("error", "content", "");
            setBlogStore("content", newContent);
        };
    };
    function onAuthorNameInput() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const newAuthorName = ev.currentTarget.value;
            if (newAuthorName.length > MAX_CHAR_AUTHOR_NAME) return setBlogStore("error", "author", "name", `Max. ${MAX_CHAR_AUTHOR_NAME} characters allowed!`);
            else if (newAuthorName.length < 1) return setBlogStore("error", "author", "name", "Please provide an author name!");
            setBlogStore("error", "author", "name", "");
            setBlogStore("author", "name", newAuthorName);
        };
    };
    function onImageUrlInput() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const newImageUrl = ev.currentTarget.value;
            if (newImageUrl.length < 1) return setBlogStore("error", "imageUrl", "Please provide an image url!");
            setBlogStore("error", "imageUrl", "");
            setBlogStore("imageUrl", newImageUrl);
        };
    };
    function onUpload() {
        return () => {
            if (requiredPropertiesDefined()) {
                const formData = new FormData();
                const id = uniqid("blog-");
                formData.set("id", id);
                formData.set("title", blogStore.title);
                formData.set("description", blogStore.description);
                formData.set("content", blogStore.content);
                formData.set("imageUrl", blogStore.imageUrl);
                formData.set("author", blogStore.author.name);
                if (blogStore.author.url) formData.set("authorUrl", blogStore.author.url);
                else formData.set("authorUrl", "");
                if (blogStore.author.imageUrl) formData.set("authorImageUrl", blogStore.author.imageUrl);
                else formData.set("authorImageUrl", "");
                axios.post<{
                    success: boolean;
                    error?: string;
                }>("http://localhost/blog/create_blog.php", formData).then(res => {
                    if (res.status == 200 && res.data.success) navigate(`/blogs/${id}`);
                });
            };
        };
    };
    function onPreview() {
        return () => {
            if (requiredPropertiesDefined()) {
                setPreview(currentPreview => !currentPreview);
            };
        };
    };
    return (
        <>
            <Title sameHeader>Create a blog</Title>
            <Description>Create a blog to show off your thoughts on an specific topic!</Description>
            <div class="flex items-center justify-center flex-col">
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Author</span>
                        <span class="label-text-alt text-red-600">{blogStore.error.author.name}</span>
                    </label>
                    <label class="input-group">
                        <span><Icon class="w-5" path={atSymbol} /></span>
                        <input onInput={onAuthorNameInput()} minLength={1} maxLength={MAX_CHAR_AUTHOR_NAME} type="text" placeholder="Enter an author name" class="input input-bordered" />
                        <span><Icon class="w-5" path={link} /></span>
                        <input type="text" placeholder="Optional author url" class="input input-bordered w-full" />
                        <span><Icon class="w-5" path={userCircle} /></span>
                        <input type="text" placeholder="Optional author avatar url" class="input input-bordered w-full" />
                    </label>
                    <label class="label">
                        <span class="label-text-alt" />
                        <span class="label-text-alt">Max. {MAX_CHAR_AUTHOR_NAME} characters for author name </span>
                    </label>
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Title</span>
                        <span class="label-text-alt text-red-600">{blogStore.error.title}</span>
                    </label>
                    <label class="input-group">
                        <span><Icon class="w-5" path={informationCircle} /></span>
                        <input onInput={onTitleInput()} type="text" placeholder="Enter a title here" minLength={1} maxLength={MAX_CHAR_TITLE} class="input input-bordered w-full" />
                    </label>
                    <label class="label">
                        <span class="label-text-alt" />
                        <span class="label-text-alt">Max. {MAX_CHAR_TITLE} characters</span>
                    </label>
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Description</span>
                        <span class="label-text-alt text-red-600">{blogStore.error.description}</span>
                    </label>
                    <label class="input-group">
                        <span><Icon class="w-5" path={annotation} /></span>
                        <textarea onInput={onDescriptionInput()} minLength={1} class="textarea textarea-bordered h-48 w-full" placeholder="Enter a description here" />
                    </label>
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Content</span>
                        <span class="label-text-alt text-red-600">{blogStore.error.content}</span>
                    </label>
                    <label class="input-group">
                        <span><Icon class="w-5" path={menu} /></span>
                        <textarea onInput={onContentInput()} minLength={1} class="textarea textarea-bordered h-96 w-full" placeholder="Enter a content here" />
                    </label>
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Image URL</span>
                        <span class="label-text-alt text-red-600">{blogStore.error.imageUrl}</span>
                    </label>
                    <label class="input-group">
                        <span><Icon class="w-5" path={link} /></span>
                        <input onInput={onImageUrlInput()} minLength={1} type="text" placeholder="Enter an image url here" class="input input-bordered w-full" />
                    </label>
                </div>
                {preview() && <BlogPreview blog={{
                    author: blogStore.author,
                    title: blogStore.title,
                    content: blogStore.content,
                    description: blogStore.description,
                    createdAt: new Date(),
                    imageUrl: blogStore.imageUrl
                }} />}
                <div class="flex items-center justify-center">
                    <button onClick={onPreview()} class="btn border-primary"><Icon class="w-5" path={informationCircle} />Preview</button>
                    <button onClick={onUpload()} class="btn border-primary"><Icon class="w-5" path={upload} />Upload</button>
                </div>
            </div>
        </>
    );
};

export default CreateBlogPage;