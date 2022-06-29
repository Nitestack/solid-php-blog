import type { ParentComponent } from "solid-js";
import { useLayout } from "../LayoutContext";

const AboutPage: ParentComponent = () => {
    const { Title, Description } = useLayout();
    return (
        <>
            <Title sameHeader>About Us</Title>
            <Description>Read something about us!</Description>
        </>
    );
};
export default AboutPage;