import type { ParentComponent } from "solid-js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Constants from "./constants";
import { useLayout } from "./LayoutContext";
const Layout: ParentComponent = (props) => {
    //Page info displayed
    const { header, description } = useLayout();
    //Routes for Navbar and Footer
    const routes: {
        [key: string]: string;
    } = {
        "Blogs": "/blogs",
        "Admin": "/admin"
    };
    //Render
    return (
        <>
            <div class="min-h-screen flex flex-col">
                <Navbar routes={routes} />
                <div class="py-12">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <h2 class="text-base font-semibold tracking-wide text-primary uppercase">{Constants.APP_NAME}</h2>
                            <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                {header()}
                            </p>
                            <p class="max-w-2xl mt-4 text-xl lg:mx-auto">
                                {description()}
                            </p>
                        </div>
                        <div class="mt-10">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer routes={routes} />
        </>
    );
};
export default Layout;