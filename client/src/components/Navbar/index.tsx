import { Component, createSignal } from "solid-js";
import NavbarLogo from "./Logo";
import NavbarContent from "./Content";
import NavbarControl from "./Control";

export const [showMobileMenu, setShowMobileMenu] = createSignal(false);

const Navbar: Component<{
    routes: {
        [key: string]: string;
    };
}> = (props) => {
    return (
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <NavbarLogo />
                <NavbarControl />
                <NavbarContent routes={props.routes} />
            </div>
        </nav>

    );
};
export default Navbar;