import type { ParentComponent } from "solid-js";
import { useRouteData } from "solid-app-router";
import uniqid from "uniqid";

//ID length: 
export interface Blog {
    author: {
        name: string;
        url?: string;
    };
    imageUrl: string;
    title: string;
    description: string;
    content: string;
    createdAt: Date;
};

const Blog: ParentComponent<{  }> = (props) => {
    const { blogs } = useRouteData();
    return (
        <div> test </div>
    );
};
export default Blog;