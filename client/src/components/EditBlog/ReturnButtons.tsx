import { useNavigate } from "solid-app-router";
import type { Component } from "solid-js";
import { Icon } from "solid-heroicons";
import { chevronDoubleRight } from "solid-heroicons/solid";
import { useI18n } from "@solid-primitives/i18n";

const EditBlogReturnButtons: Component<{ isBlog: boolean; }> = (props) => {
    const [translate] = useI18n();
    const navigate = useNavigate();
    function onReturn() {
        return () => {
            if (props.isBlog) navigate("/admin/update");
            else navigate("/admin");
        };
    };
    return (
        <div class="flex items-center justify-center">
            {props.isBlog ?
                <button onClick={onReturn()} class="btn border-primary"><Icon class="w-5" path={chevronDoubleRight} />{translate("RETURN_TO_BLOG_OVERVIEW_BUTTON")}</button> :
                <button onClick={onReturn()} class="btn border-primary"><Icon class="w-5" path={chevronDoubleRight} />{translate("RETURN_TO_ADMIN_PAGE_BUTTON")}</button>
            }
        </div>
    );
};
export default EditBlogReturnButtons;