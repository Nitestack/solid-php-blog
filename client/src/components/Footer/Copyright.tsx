import type { Component } from "solid-js";
import Constants from "../../constants";
import { Link } from "solid-app-router";
import { useI18n } from "@solid-primitives/i18n";

const FooterCopyright: Component = () => {
    const [translate] = useI18n();
    return (
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getUTCFullYear()} <Link href="/" class="hover:underline">{Constants.APP_NAME}</Link>. {translate("FOOTER_COPYRIGHT")}</span>
    );
};
export default FooterCopyright;