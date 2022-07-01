import type { Component } from "solid-js";
import { useEditBlogContext } from "./EditBlogContext";
import { useI18n } from "@solid-primitives/i18n";
import { Icon } from "solid-heroicons";
import { annotation } from "solid-heroicons/solid";

const EditBlogDescriptionTextarea: Component = () => {
    const [translate] = useI18n();
    const { blogStore, defaultBlog, setBlogStore } = useEditBlogContext();
    function onDescriptionInput() {
        return (ev: InputEvent & { currentTarget: HTMLTextAreaElement; target: Element; }) => {
            const newDescription = ev.currentTarget.value;
            if (newDescription.length < 1) return setBlogStore("error", "description", translate("PROVIDE_SOMETHING", {
                PROVIDER: translate("DESCRIPTION_PROVIDE")
            }));
            setBlogStore("error", "description", "");
            setBlogStore("description", newDescription);
        };
    };
    return (
        <div class="form-control w-full">
            <label class="label">
                <span class="label-text">{translate("DESCRIPTION")}</span>
                <span class="label-text-alt text-red-600">{blogStore.error.description}</span>
            </label>
            <label class="input-group">
                <span><Icon class="w-5" path={annotation} /></span>
                <textarea value={defaultBlog.description} onInput={onDescriptionInput()} minLength={1} class="textarea textarea-bordered h-48 w-full" placeholder={translate("INPUT_PLACEHOLDER", {
                    PROVIDER: translate("DESCRIPTION_PROVIDE")
                })} />
            </label>
        </div>
    );
};
export default EditBlogDescriptionTextarea;