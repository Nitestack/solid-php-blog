import type { Component } from "solid-js";
import { Link } from "solid-app-router";
import Logo from "../../assets/logo.png";
import Constants from "../../constants";

const NavbarLogo: Component = () => {
    return (
        <Link href="/" class="flex items-center">
            <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{Constants.APP_NAME}</span>
        </Link>
    );
};
export default NavbarLogo;