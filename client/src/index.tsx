/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import { MetaProvider } from "solid-meta";
import { AppContextProvider } from "./AppContext";
import App from "./App";

render(() => (
    <MetaProvider>
        <Router>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </Router>
    </MetaProvider>
), document.getElementById("root") as HTMLElement);