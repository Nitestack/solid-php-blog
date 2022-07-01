import type { ParentComponent } from "solid-js";
import { Icon } from "solid-heroicons";
import { informationCircle, cloudUpload } from "solid-heroicons/solid";
import axios from "axios";
import { useI18n } from "@solid-primitives/i18n";
import { useNavigate } from "solid-app-router";
import { useEditBlogContext } from "./EditBlogContext";

const EditBlogActionButtons: ParentComponent<{ isBlog: boolean; key: string; }> = (props) => {
    const { blogStore, reqPropsDefined, setPreview } = useEditBlogContext();
    const [translate] = useI18n();
    const navigate = useNavigate();
    function onUpload() {
        return () => {
            if (reqPropsDefined()) {
                const formData = new FormData();
                const id = props.key;
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
                }>(`http://localhost/blog/${props.isBlog ? "update" : "create"}_blog.php`, formData).then(res => {
                    if (res.status == 200 && res.data.success) navigate(`/blogs/${id}`);
                });
            };
        };
    };
    function onPreview() {
        return () => {
            if (reqPropsDefined()) {
                setPreview(currentPreview => !currentPreview);
            };
        };
    };
    return (
        <div class="flex items-center justify-center">
            <button onClick={onPreview()} class="btn border-primary"><Icon class="w-5" path={informationCircle} />{translate("PREVIEW")}</button>
            <button onClick={onUpload()} class="btn border-primary"><Icon class="w-5" path={cloudUpload} />{props.isBlog ? translate("UPDATE_BUTTON") : translate("CREATE_BUTTON")}</button>
        </div>
    );
};
export default EditBlogActionButtons;