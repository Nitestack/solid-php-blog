import type { ParentComponent } from "solid-js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Layout: ParentComponent = (props) => {
    return (
        <div class="min-h-screen">
            <Navbar />
            <main class="">
                {props.children}
            </main>
            <Footer />
        </div>
    );
};
export default Layout;