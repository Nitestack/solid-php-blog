import type { Component } from "solid-js";
import { useLayout } from "../LayoutContext";
import { useI18n } from "@solid-primitives/i18n";
import Constants from "../constants";

const HomePage: Component = () => {
    //Page info
    const { Title, Header, Description } = useLayout();
    const [translate] = useI18n();
    //Render
    return (
        <>
            <Title>Home</Title>
            <Header>{translate("WELCOME_PAGE", {
                APP_NAME: Constants.APP_NAME
            })}</Header>
            <Description />
        </>
    );
};
export default HomePage;