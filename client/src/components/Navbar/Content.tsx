import { Link } from "solid-app-router";
import type { Component } from "solid-js";
import { For } from "solid-js";
import { showMobileMenu } from "./index";

const NavbarContent: Component<{
    routes: {
        [key: string]: string;
    };
}> = (props) => {
    return (
        <div class={(showMobileMenu() ? "" : "hidden ") + "justify-between items-center w-full md:flex md:w-auto md:order-1"}>
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <For each={Object.keys(props.routes)}>
                    {key => (
                        <li>
                            <Link href={props.routes[key]} class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{key}</Link>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
};
export default NavbarContent;