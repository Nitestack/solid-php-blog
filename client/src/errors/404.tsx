import type { Component } from "solid-js";
import { Link } from "solid-app-router";
import { useI18n } from "@solid-primitives/i18n";

const Error404Page: Component = () => {
    const [translate] = useI18n();
    return (
        <section>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl">{translate("ERROR_PAGE")}</p>
                    <p class="mb-4 text-lg font-light">{translate("ERROR_PAGE_DESCRIPTION")}</p>
                    <Link href="#" class="inline-flex bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">{translate("ERROR_BUTTON")} Homepage</Link>
                </div>
            </div>
        </section>
    );
};
export default Error404Page;