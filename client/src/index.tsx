/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import { MetaProvider } from "solid-meta";
import { AppContextProvider } from "./AppContext";
import App from "./App";
import { LayoutProvider } from "./LayoutContext";

render(() => (
    <MetaProvider>
        <Router>
            <AppContextProvider>
                <LayoutProvider>
                    <App />
                </LayoutProvider>
            </AppContextProvider>
        </Router>
    </MetaProvider>
), document.getElementById("root") as HTMLElement);