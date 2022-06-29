import type { ParentComponent } from "solid-js";
import { useLayout } from "../../LayoutContext";

const AdminPage: ParentComponent = (props) => {
    const { Title, Description } = useLayout();
    return (
        <>
            <Title sameHeader>Admin - Actions</Title>
            <Description>Choose what you wanna do with your blogs! CREATE, UPDATE, DELETE</Description>
        </>
    );
};
export default AdminPage;