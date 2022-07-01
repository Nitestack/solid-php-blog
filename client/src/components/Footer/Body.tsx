import type { Component } from "solid-js";
import Constants from "../../constants";
import { useI18n } from "@solid-primitives/i18n";
import { Link } from "solid-app-router";
import { For } from "solid-js";

const FooterBody: Component<{ routes: {
    [key: string]: string;
}}> = (props) => {
    const [translate] = useI18n();
    return (
        <>
            <p class="my-6 text-gray-500 dark:text-gray-400">{translate("APP_DESCRIPTION", {
                APP_NAME: Constants.APP_NAME
            })}</p>
            <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <For each={Object.keys(props.routes)}>
                    {key => (
                        <li>
                            <Link href={props.routes[key]} class="mr-4 hover:underline md:mr-6 ">{key}</Link>
                        </li>
                    )}
                </For>
            </ul>
        </>
    );
};
export default FooterBody;