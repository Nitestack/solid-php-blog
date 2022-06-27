import type { ParentComponent } from "solid-js";
import { useLayout } from "../LayoutContext";

const HomePage: ParentComponent = () => {
    const { Title, Header } = useLayout();
    return (
        <>
            <Title>Home</Title>
            <Header>Welcome to Blog with PHP!</Header>
            <div> Test </div>
        </>
    );
};
export default HomePage;