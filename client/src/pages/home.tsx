import type { ParentComponent } from "solid-js";
import { useLayout } from "../LayoutContext";

const HomePage: ParentComponent = () => {
    const { Title, Description } = useLayout();
    return (
        <>
            <Title sameHeader>Home</Title>
            <Description />
        </>
    );
};
export default HomePage;