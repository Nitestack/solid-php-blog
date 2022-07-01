import { useRoutes } from "solid-app-router";
import type { Component } from "solid-js";
import { Suspense } from "solid-js";
import { routes } from "./router";
import Layout from "./Layout";

const App: Component = () => {
    //Routing system
    const Route = useRoutes(routes);
    //Render app
    return (
        <Layout>
            <Suspense>
                <Route />
            </Suspense>
        </Layout>
    );
};

export default App;