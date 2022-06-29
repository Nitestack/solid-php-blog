import type { ParentComponent } from "solid-js";
import { useLayout } from "../../LayoutContext";

const UpdateBlogPage: ParentComponent = (props) => {
    const { Title, Description } = useLayout();
    return (
        <>
            <Title sameHeader>Update Blog</Title>
            <Description>Choose the blog you want to update</Description>
        </>
    );
};
export default UpdateBlogPage;