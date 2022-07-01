import type { Accessor, ParentComponent, Setter } from "solid-js";
import { createContext, useContext, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import type { SetStoreFunction } from "solid-js/store";
import type { Blog } from "../../pages/blog.data";

interface EditBlogStoreContextType {
    blogStore: BlogStore;
    setBlogStore: SetStoreFunction<BlogStore>;
    defaultBlog: OptionalCreation;
    reqPropsDefined: () => boolean;
    preview: Accessor<boolean>;
    setPreview: Setter<boolean>;
}

type OptionalCreation = Omit<Blog, "createdAt"> | Blog;

type BlogStore = OptionalCreation & {
    error: Omit<Blog, "createdAt">;
};

const EditBlogContext = createContext<EditBlogStoreContextType>({} as EditBlogStoreContextType);

export const EditBlogContextProvider: ParentComponent<{ blog?: Blog; }> = (props) => {
    //Preview mode
    const [preview, setPreview] = createSignal(false);
    //Default props for input/textarea fields
    const defaultBlog: OptionalCreation = props.blog || {
        title: "",
        author: {
            name: "",
            imageUrl: "",
            url: ""
        },
        content: "",
        description: "",
        imageUrl: ""
    };
    //Store
    const [blogStore, setBlogStore] = createStore<BlogStore>({
        ...defaultBlog,
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
    //Functions
    const reqPropsDefined = () => !!(blogStore.title && blogStore.content && blogStore.description && blogStore.imageUrl && blogStore.author.name);
    return (
        <EditBlogContext.Provider value={{ blogStore, setBlogStore, defaultBlog, reqPropsDefined, preview, setPreview }}> {props.children} </EditBlogContext.Provider>
    );
};

export const useEditBlogContext = () => useContext(EditBlogContext);