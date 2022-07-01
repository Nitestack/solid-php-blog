import { useI18n } from "@solid-primitives/i18n";
import type { ParentComponent } from "solid-js";

const BlogPreviewHeader: ParentComponent<{ createdAt: Date; }> = (props) => {
    const daysAgo = Math.floor((Date.now() - props.createdAt.getTime()) / 1000 / 60 / 60 / 24);
    const [translate] = useI18n();
    return (
        <div class="flex justify-between items-center mb-5 text-gray-500">
            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary text-base-300">
                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                {translate("ARTICLE")}
            </span>
            <span class="text-sm">{translate(daysAgo == 0 ? "TODAY" : (daysAgo == 1 ? "YESTERDAY" : "DAYS_AGO"), daysAgo >= 2 && {
                DAYS: daysAgo.toString()
            })}</span>
        </div>
    );
};
export default BlogPreviewHeader;