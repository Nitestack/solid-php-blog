/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import { MetaProvider } from "solid-meta";
import { AppProvider } from "./AppContext";
import App from "./App";
import { LayoutProvider } from "./LayoutContext";

render(() => (
    <MetaProvider>
        <Router>
            <AppProvider>
                <LayoutProvider>
                    <App />
                </LayoutProvider>
            </AppProvider>
        </Router>
    </MetaProvider>
), document.getElementById("root") as HTMLElement);