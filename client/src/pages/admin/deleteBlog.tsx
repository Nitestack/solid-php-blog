import type { ParentComponent } from "solid-js";
import { useLayout } from "../../LayoutContext";

const DeleteBlogPage: ParentComponent = (props) => {
    const { Title, Description } = useLayout();
    return (
        <>
            <Title sameHeader>Delete Blog</Title>
            <Description>Choose which blog you want to delete</Description>
        </>
    );
};
export default DeleteBlogPage;