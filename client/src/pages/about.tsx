import type { ParentComponent } from "solid-js";
import { useLayout } from "../LayoutContext";

const AboutPage: ParentComponent = () => {
    const { Title } = useLayout();
    return (
        <Title>About Us</Title>
    );
};
export default AboutPage;