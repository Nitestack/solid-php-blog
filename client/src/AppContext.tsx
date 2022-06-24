import type { Accessor, ParentComponent, Resource, Setter } from "solid-js";
import { createContext, useContext, onMount, createSignal, createResource } from "solid-js";

interface AppContextType {
    theme: Accessor<"light" | "dark">;
    toggleTheme: () => () => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: ParentComponent = (props) => {
    //Page Theme Settings
    const [theme, setTheme] = createSignal<"light" | "dark">("light");
    function toggleTheme() {
        return () => {
            setTheme(currentTheme => {
                const newTheme = currentTheme == "dark" ? "light" : "dark";
                document.documentElement.setAttribute("data-theme", newTheme);
                return newTheme;
            });
        };
    };
    onMount(() => {
        setTheme(matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    });
    return (
        <AppContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {props.children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);