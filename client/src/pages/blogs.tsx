import { useRouteData, Link } from "solid-app-router";
import { ParentComponent } from "solid-js";
import { Show, For } from "solid-js";
import { useLayout } from "../LayoutContext";
import type { GetBlogsType } from "./blog.data";

const Blogs: ParentComponent<{}> = (props) => {
    const { Title, Description } = useLayout();
    const response = useRouteData<GetBlogsType>();
    return (
        <>
            <Title sameHeader>Blogs</Title>
            <Description>Get access to all blogs!</Description>
            <Show when={response.blogs}>
                <div class="flex items-center justify-center">
                    <div class="grid gap-8 lg:grid-cols-2">
                        <For each={Object.keys(response.blogs)}>
                            {key => {
                                const blog = response.blogs[key];
                                const daysAgo = Math.floor((Date.now() - blog.createdAt.getTime()) / 1000 / 60 / 60 / 24);
                                return (
                                    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <div class="flex justify-between items-center mb-5 text-gray-500">
                                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary text-base-300">
                                                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                                Article
                                            </span>
                                            <span class="text-sm">{daysAgo} days ago</span>
                                        </div>
                                        <h2 class="mb-2 link text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href={`/blogs/${key}`}>{blog.title}</a></h2>
                                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{blog.description}</p>
                                        <div class="flex items-center justify-center mb-5">
                                            <img class="w-full" src={blog.imageUrl} />
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <div class="flex items-center space-x-4">
                                                {blog.author.imageUrl && <img class="w-7 h-7 rounded-full" src={blog.author.imageUrl} alt={blog.author.name} />}
                                                <span class="font-medium dark:text-white">
                                                    {blog.author.name}
                                                </span>
                                            </div>
                                            <Link href={`/blogs/${key}`} class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                                Read more
                                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </Link>
                                        </div>
                                    </article>
                                );
                            }}
                        </For>
                    </div>
                </div>
            </Show>
        </>
    );
};
export default Blogs;