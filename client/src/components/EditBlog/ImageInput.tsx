import { useI18n } from "@solid-primitives/i18n";
import type { ParentComponent } from "solid-js";
import { useEditBlogContext } from "./EditBlogContext";
import { Icon } from "solid-heroicons";
import { link } from "solid-heroicons/solid";

const EditBlogImageInput: ParentComponent = () => {
    const [translate] = useI18n();
    const { blogStore, defaultBlog, setBlogStore } = useEditBlogContext();
    function onImageUrlInput() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const newImageUrl = ev.currentTarget.value;
            if (newImageUrl.length < 1) return setBlogStore("error", "imageUrl", translate("PROVIDE_SOMETHING", {
                PROVIDER: translate("IMAGE_PROVIDE")
            }));
            setBlogStore("error", "imageUrl", "");
            setBlogStore("imageUrl", newImageUrl);
        };
    };
    return (
        <div class="form-control w-full">
            <label class="label">
                <span class="label-text">{translate("IMAGE")} URL</span>
                <span class="label-text-alt text-red-600">{blogStore.error.imageUrl}</span>
            </label>
            <label class="input-group">
                <span><Icon class="w-5" path={link} /></span>
                <input value={defaultBlog.imageUrl} onInput={onImageUrlInput()} minLength={1} type="text" placeholder={translate("INPUT_PLACEHOLDER", {
                    PROVIDER: translate("IMAGE_PROVIDE")
                })} class="input input-bordered w-full" />
            </label>
        </div>
    );
};
export default EditBlogImageInput;