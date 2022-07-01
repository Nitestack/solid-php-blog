import { useI18n } from "@solid-primitives/i18n";
import type { ParentComponent } from "solid-js";
import { Icon } from "solid-heroicons";
import { arrowCircleRight } from "solid-heroicons/solid";
import { Link } from "solid-app-router";

const AllBlogsButton: ParentComponent = () => {
    const [translate] = useI18n();
    return (
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <Link href="/blogs">
                <span class="block ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Icon path={arrowCircleRight} class="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                        {translate("VIEW_ALL_BLOGS")}
                    </button>
                </span>
            </Link>
        </div>
    );
};
export default AllBlogsButton;