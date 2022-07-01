import type { ParentComponent } from "solid-js";

const BlogPreviewImage: ParentComponent<{ imageUrl: string; }> = (props) => {
    return (
        <div class="flex items-center justify-center mb-5">
            <img class="w-full" src={props.imageUrl} />
        </div>
    );
};
export default BlogPreviewImage;