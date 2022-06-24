import type { ParentComponent, Accessor, FlowComponent } from "solid-js";
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

const LayoutContext = createContext<LayoutContextType>({  } as LayoutContextType);

const Title: FlowComponent<{ sameHeader?: boolean; }, string> = (props) => {
    const title = () => props.children;
    setTitle(title());
    if (props.sameHeader) setHeader(title());
    return (
        <MetaTitle> {props.children} </MetaTitle>
    );
};

const Description: FlowComponent<{}, string> = (props) => {
    const description = () => props.children;
    setDescription(description());
    return (
        <SolidMeta name="description" content={description()}></SolidMeta>
    )
};

const Header: FlowComponent<{}, string> = (props) => {
    setHeader(props.children);
    return null;
};

const Meta: FlowComponent<{}, { [key: string]: string }> = (props) => {
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
            
        </LayoutContext.Provider>
    );
};

export const useLayout = () => useContext(LayoutContext);