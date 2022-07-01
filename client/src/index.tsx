/* @refresh reload */
import "./index.css";
//Render
import { render } from "solid-js/web";
//Providers
import { Router } from "solid-app-router";
import { MetaProvider } from "solid-meta";
import { AppProvider } from "./AppContext";
import { LayoutProvider } from "./LayoutContext";
//Components
import App from "./App";

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