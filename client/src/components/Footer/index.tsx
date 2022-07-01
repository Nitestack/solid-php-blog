import type { Component } from "solid-js";
import FooterLogo from "./Logo";
import FooterBody from "./Body";
import FooterCopyright from "./Copyright";

const Footer: Component<{
    routes: {
        [key: string]: string;
    };
}> = (props) => {
    return (
        <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div class="mx-auto max-w-screen-xl text-center">
                <FooterLogo />
                <FooterBody routes={props.routes} />
                <FooterCopyright />
            </div>
        </footer>
    );
};
export default Footer;