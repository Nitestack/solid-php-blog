import type { ParentComponent, Accessor, FlowComponent, Component } from "solid-js";
import { createContext, useContext, createSignal } from "solid-js";
import { Meta as SolidMeta, Title as MetaTitle } from "solid-meta";
import Constants from "./constants";

const [title, setTitle] = createSignal(Constants.APP_NAME);
const [description, setDescription] = createSignal(Constants.APP_DESCRIPTION);
const [header, setHeader] = createSignal(Constants.APP_NAME);

interface LayoutContextType {
    Title: FlowComponent<{ sameHeader?: boolean; }, string>;
    Description: FlowComponent<{}, string>;
    Header: FlowComponent<{}, string>;
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
    const newDescription = () => props.children;
    if (newDescription()) setDescription(newDescription());
    return (
        <SolidMeta name="description" content={newDescription() ? newDescription() : description()} />
    );
};

const Header: FlowComponent<{}, string> = (props) => {
    setHeader(props.children);
    return null;
};

const Meta: FlowComponent<{}, { [key: string]: string; }> = (props) => {
    return null;
};

export const LayoutProvider: ParentComponent = (props) => {
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