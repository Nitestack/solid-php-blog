import { useI18n } from "@solid-primitives/i18n";
import type { ParentComponent } from "solid-js";
import { Icon } from "solid-heroicons";
import { atSymbol, link, userCircle } from "solid-heroicons/solid";
import { useEditBlogContext } from "./EditBlogContext";

const EditBlogAuthorInput: ParentComponent = () => {
    const [translate] = useI18n();
    const { blogStore, defaultBlog, setBlogStore } = useEditBlogContext();
    const MAX_CHAR_AUTHOR_NAME = 30;
    function onAuthorNameInput() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const newAuthorName = ev.currentTarget.value;
            if (newAuthorName.length > MAX_CHAR_AUTHOR_NAME) return setBlogStore("error", "author", "name", translate("MAX_CHAR", {
                CHARACTERS: MAX_CHAR_AUTHOR_NAME.toString()
            }));
            else if (newAuthorName.length < 1) return setBlogStore("error", "author", "name", translate("PROVIDE_SOMETHING", {
                PROVIDER: translate("AUTHOR_NAME_PROVIDE")
            }));
            setBlogStore("error", "author", "name", "");
            setBlogStore("author", "name", newAuthorName);
        };
    };
    function onAuthorUrlInput() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const newAuthorUrl = ev.currentTarget.value;
            setBlogStore("author", "url", newAuthorUrl || "");
        };
    };
    function onAuthorImageUrlInput() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const newAuthorUrl = ev.currentTarget.value;
            setBlogStore("author", "imageUrl", newAuthorUrl || "");
        };
    };
    return (
        <div class="form-control w-full">
            <label class="label">
                <span class="label-text">{translate("AUTHOR")}</span>
                <span class="label-text-alt text-red-600">{blogStore.error.author.name}</span>
            </label>
            <label class="input-group">
                <span><Icon class="w-5" path={atSymbol} /></span>
                <input value={defaultBlog.author.name} onInput={onAuthorNameInput()} minLength={1} maxLength={MAX_CHAR_AUTHOR_NAME} type="text" placeholder={translate("INPUT_PLACEHOLDER", {
                    PROVIDER: translate("AUTHOR_NAME_PROVIDE")
                })} class="input input-bordered" />
                <span><Icon class="w-5" path={link} /></span>
                <input value={defaultBlog.author.url} onInput={onAuthorUrlInput()} type="text" placeholder={translate("INPUT_PLACEHOLDER_OPTIONAL", {
                    PROVIDER: translate("AUTHOR_URL_PROVIDE")
                })} class="input input-bordered w-full" />
                <span><Icon class="w-5" path={userCircle} /></span>
                <input value={defaultBlog.author.imageUrl} onInput={onAuthorImageUrlInput()} type="text" placeholder={translate("INPUT_PLACEHOLDER_OPTIONAL", {
                    PROVIDER: translate("AUTHOR_IMAGE_URL_PROVIDE")
                })} class="input input-bordered w-full" />
            </label>
            <label class="label">
                <span class="label-text-alt" />
                <span class="label-text-alt">{translate("MAX_CHAR_INFO", {
                    CHARACTERS: MAX_CHAR_AUTHOR_NAME.toString(),
                    ADDITIONAL_TEXT: translate("AUTHOR_NAME_ADDITIONAL_TEXT")
                })}</span>
            </label>
        </div>
    );
};
export default EditBlogAuthorInput;