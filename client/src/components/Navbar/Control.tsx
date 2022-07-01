import type { Component } from "solid-js";
import NavbarLangSelection from "./LanguageSelection";
import { Icon } from "solid-heroicons";
import { menu, x } from "solid-heroicons/solid";
import { showMobileMenu, setShowMobileMenu } from "./index";

const NavbarControl: Component = () => {
    return (
        <div class="flex md:order-2 items-center">
            <button onClick={() => setShowMobileMenu(currentShow => !currentShow)} type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                {showMobileMenu() ? <Icon class="w-6 h-6" path={x} /> : <Icon class="w-6 h-6" path={menu} />}
            </button>
            <NavbarLangSelection />
        </div>
    );
};
export default NavbarControl;