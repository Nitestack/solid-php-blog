import { useI18n } from "@solid-primitives/i18n";
import type { ParentComponent, Accessor, FlowComponent, Component } from "solid-js";
import { createContext, useContext, createSignal } from "solid-js";
import { Meta as SolidMeta, Title as MetaTitle } from "solid-meta";
import Constants from "./constants";

const [title, setTitle] = createSignal(Constants.APP_NAME);
const [description, setDescription] = createSignal("");
const [header, setHeader] = createSignal(Constants.APP_NAME);

interface LayoutContextType {
    Title: FlowComponent<{ sameHeader?: boolean; }, string>;
    Description: Component<{ children?: string; }>;
    Header: Component<{ children?: string; }>;
    Meta: FlowComponent<{}, { [key: string]: string; }>;
    title: Accessor<string>;
    description: Accessor<string>;
    header: Accessor<string>;
}

const LayoutContext = createContext<LayoutContextType>({} as LayoutContextType);

const Title: FlowComponent<{ sameHeader?: boolean; }, string> = (props) => {
    const newTitle = () => props.children;
    setTitle(newTitle());
    if (props.sameHeader) setHeader(newTitle());
    return (
        <MetaTitle> {newTitle()} - {Constants.APP_NAME} </MetaTitle>
    );
};

const Description: Component<{ children?: string }> = (props) => {
    const [translate] = useI18n();
    const newDescription = () => props.children || translate("APP_DESCRIPTION", {
        APP_NAME: Constants.APP_NAME
    });
    setDescription(newDescription());
    return (
        <SolidMeta name="description" content={newDescription()} />
    );
};

const Header: Component<{ children?: string; }> = (props) => {
    if (props.children) setHeader(props.children);
    return null;
};

const Meta: FlowComponent<{}, { [key: string]: string; }> = (props) => {
    return null;
};

export const LayoutProvider: ParentComponent = (props) => {
    const [translate] = useI18n();
    setDescription(translate("APP_DESCRIPTION", {
        APP_NAME: Constants.APP_NAME
    }));
    //Render
    return (
        <LayoutContext.Provider value={{
            Title,
            Description,
            Header,
            Meta,
            title,
            description,
            header
        }}>
            {props.children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => useContext(LayoutContext);