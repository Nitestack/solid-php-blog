import { useI18n } from "@solid-primitives/i18n";
import type { ParentComponent } from "solid-js";
import { useEditBlogContext } from "./EditBlogContext";
import { Icon } from "solid-heroicons";
import { menu } from "solid-heroicons/solid";

const EditBlogContentTextArea: ParentComponent = () => {
    const [translate] = useI18n();
    const { blogStore, defaultBlog, setBlogStore } = useEditBlogContext();
    function onContentInput() {
        return (ev: InputEvent & { currentTarget: HTMLTextAreaElement; target: Element; }) => {
            const newContent = ev.currentTarget.value;
            if (newContent.length < 1) return setBlogStore("error", "content", translate("PROVIDE_SOMETHING", {
                PROVIDER: translate("CONTENT_PROVIDE")
            }));
            setBlogStore("error", "content", "");
            setBlogStore("content", newContent);
        };
    };
    return (
        <div class="form-control w-full">
            <label class="label">
                <span class="label-text">{translate("CONTENT")}</span>
                <span class="label-text-alt text-red-600">{blogStore.error.content}</span>
            </label>
            <label class="input-group">
                <span><Icon class="w-5" path={menu} /></span>
                <textarea value={defaultBlog.content} onInput={onContentInput()} minLength={1} class="textarea textarea-bordered h-96 w-full" placeholder={translate("INPUT_PLACEHOLDER", {
                    PROVIDER: translate("CONTENT_PROVIDE")
                })} />
            </label>
        </div>
    );
};
export default EditBlogContentTextArea;