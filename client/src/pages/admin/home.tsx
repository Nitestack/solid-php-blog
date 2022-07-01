import type { Component } from "solid-js";
import { useLayout } from "../../LayoutContext";
import { Icon } from "solid-heroicons";
import { cloudUpload, upload, trash } from "solid-heroicons/solid";
import { useNavigate } from "solid-app-router";
import { useI18n } from "@solid-primitives/i18n";

const AdminPage: Component = () => {
    //Page info
    const { Title, Description } = useLayout();
    const [translate] = useI18n();
    //Navigation
    const navigate = useNavigate();
    //Render
    return (
        <>
            <Title sameHeader>{translate("ADMIN_ACTIONS")}</Title>
            <Description>{translate("ADMIN_DESCRIPTION")}</Description>
            <div class="flex items-center justify-center flex-col">
                <button onClick={() => navigate("/admin/create")} class="btn border-primary"><Icon class="w-5" path={upload} />{translate("CREATE_BLOG")}</button>
                <button onClick={() => navigate("/admin/update")} class="btn border-primary"><Icon class="w-5" path={cloudUpload} />{translate("UPDATE_BLOG")}</button>
                <button onClick={() => navigate("/admin/delete")} class="btn border-primary"><Icon class="w-5" path={trash} />{translate("DELETE_BLOG")}</button>
            </div>
        </>
    );
};
export default AdminPage;