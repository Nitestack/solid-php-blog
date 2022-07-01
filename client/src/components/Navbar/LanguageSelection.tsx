import type { Component } from "solid-js";
import { For } from "solid-js";
import { useI18n } from "@solid-primitives/i18n";
import Cookies from "js-cookie";

const NavbarLangSelection: Component = () => {
    const [_, { locale }] = useI18n();
    return (
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost rounded-btn">{locale().toLowerCase() == "en" ? "English" : "Deutsch"}</label>
            <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-4">
                <For each={["English", "Deutsch"]}>
                    {language => (
                        <li>
                            <button class="disabled:bg-primary" disabled={language.toLowerCase().includes(locale().toLowerCase())} onClick={() => {
                                Cookies.set("language", language.toLowerCase() == "english" ? "en" : "de");
                                location.reload();
                            }}>{language}</button>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
};
export default NavbarLangSelection;