import type { Component } from "solid-js";
import Constants from "../../constants";
import { Link } from "solid-app-router";
import Logo from "../../assets/logo.png";

const FooterLogo: Component = () => {
    return (
        <Link href="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img src={Logo} class="mr-2 h-8" />
            {Constants.APP_NAME}
        </Link>
    );
};
export default FooterLogo;