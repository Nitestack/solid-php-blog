import type { Component } from "solid-js";
import { Icon } from "solid-heroicons";
import { calendar } from "solid-heroicons/solid";

const BlogDate: Component<{ createdAt: Date; }> = (props) => {
    return (
        <div class="mt-2 flex items-center text-sm text-gray-500">
            <Icon path={calendar} class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {props.createdAt.toLocaleDateString(undefined, {
                day: "2-digit",
                weekday: "long",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            })}
        </div>
    );
};
export default BlogDate;