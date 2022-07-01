import { createI18nContext, I18nContext } from "@solid-primitives/i18n";
import type { ParentComponent } from "solid-js";
import { useLocation } from "solid-app-router";
import { createContext, useContext, onMount } from "solid-js";
import deLanguage from "./lang/de.json";
import enLanguage from "./lang/en.json";
import Cookies from "js-cookie";

const AppContext = createContext({});

export const AppProvider: ParentComponent = (props) => {
    //Language support
    let lang: string;
    const langCookie = Cookies.get("language");
    if (langCookie) {
        lang = langCookie;
    } else {
        const browserLang = navigator.language.slice(0, 2);
        const location = useLocation();
        if (location.query.locale) {
            lang = location.query.locale;
        } else {
            lang = browserLang;
        };
        Cookies.set("language", lang, {
            expires: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000)
        });
    };
    const i18n = createI18nContext({
        de: deLanguage,
        en: enLanguage
    }, lang && lang.toLowerCase() == "de" ? "de" : "en");
    //on page mounted
    onMount(() => {
        document.documentElement.setAttribute("data-theme", "dark");
    });
    //Render
    return (
        <AppContext.Provider value={{}}>
            <I18nContext.Provider value={i18n}>
                {props.children}
            </I18nContext.Provider>
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);