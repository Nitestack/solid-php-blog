import type { ParentComponent } from "solid-js";
import { Show } from "solid-js";
import type { GetBlogType } from "./blog.data";
import { useRouteData } from "solid-app-router";
import { Icon } from "solid-heroicons";
import { atSymbol, locationMarker, currencyDollar, calendar, pencil, link, check } from "solid-heroicons/solid";

const Blog: ParentComponent = () => {
    const response = useRouteData<GetBlogType>();
    return (
        <Show when={response.blog}>
            <div class="lg:flex lg:items-center lg:justify-between mb-5">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{response.blog.title}</h2>
                    <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <div class="flex items-center space-x-4">
                                {response.blog.author.imageUrl ?
                                    <img class="w-7 h-7 rounded-full" src={response.blog.author.imageUrl} alt={response.blog.author.name} /> :
                                    <Icon path={atSymbol} class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />}
                                <span class="font-medium dark:text-white">
                                    {response.blog.author.name}
                                </span>
                            </div>
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <Icon path={calendar} class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            {response.blog.createdAt.toLocaleDateString(undefined, {
                                day: "2-digit",
                                weekday: "long",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                        </div>
                    </div>
                </div>
                {/* <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <span class="hidden sm:block">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <Icon path={pencil} class="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                            Edit
                        </button>
                    </span>
                    <span class="hidden sm:block ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <Icon path={link} class="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                            View
                        </button>
                    </span>
                    <span class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <Icon path={check} class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            Publish
                        </button>
                    </span>
                </div>*/}
            </div>
            <p class="font-bold">{response.blog.description}</p>
            <p>{response.blog.content}</p>
        </Show>
    );
};
export default Blog;