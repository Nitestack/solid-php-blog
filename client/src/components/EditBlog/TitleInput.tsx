import { useI18n } from "@solid-primitives/i18n";
import type { Component } from "solid-js";
import { useEditBlogContext } from "./EditBlogContext";
import { Icon } from "solid-heroicons";
import { informationCircle } from "solid-heroicons/solid";

const EditBlogTitleInput: Component = () => {
    const [translate] = useI18n();
    const { defaultBlog, blogStore, setBlogStore } = useEditBlogContext();
    const MAX_CHAR_TITLE = 60;
    function onTitleInput() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const newTitle = ev.currentTarget.value;
            if (newTitle.length > MAX_CHAR_TITLE) return setBlogStore("error", "title", translate("MAX_CHAR", {
                CHARACTERS: MAX_CHAR_TITLE.toString()
            }));
            else if (newTitle.length < 1) return setBlogStore("error", "title", translate("PROVIDE_SOMETHING", {
                PROVIDER: translate("TITLE_PROVIDE")
            }));
            setBlogStore("error", "title", "");
            setBlogStore("title", newTitle);
        };
    };
    return (
        <div class="form-control w-full">
            <label class="label">
                <span class="label-text">{translate("TITLE")}</span>
                <span class="label-text-alt text-red-600">{blogStore.error.title}</span>
            </label>
            <label class="input-group">
                <span><Icon class="w-5" path={informationCircle} /></span>
                <input value={defaultBlog.title} onInput={onTitleInput()} type="text" placeholder={translate("INPUT_PLACEHOLDER", {
                    PROVIDER: translate("TITLE_PROVIDE")
                })} minLength={1} maxLength={MAX_CHAR_TITLE} class="input input-bordered w-full" />
            </label>
            <label class="label">
                <span class="label-text-alt" />
                <span class="label-text-alt">{translate("MAX_CHAR_INFO", {
                    CHARACTERS: MAX_CHAR_TITLE.toString()
                })}</span>
            </label>
        </div>
    );
};
export default EditBlogTitleInput;