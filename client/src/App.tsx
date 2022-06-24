import { useRoutes } from "solid-app-router";
import type { Component } from "solid-js";
import { Suspense } from "solid-js";
import { routes } from "./router";
import Layout from "./Layout";

const App: Component = () => {
    const Route = useRoutes(routes);
    return (
        <Layout>
            <Suspense>
                <Route />
            </Suspense>
        </Layout>
    );
};

export default App;