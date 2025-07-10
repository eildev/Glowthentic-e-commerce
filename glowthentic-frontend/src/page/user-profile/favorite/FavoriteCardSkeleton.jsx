import { Icon } from "@iconify/react/dist/iconify.js";
import CommonTitle from "../../../components/user-profile/CommonTitle";

const FavoriteCardSkeleton = () => {
    return (
        <div className="w-full mx-auto">
            <CommonTitle title={"Favorites Product"} />
            <div className="grid gap-5">
                <div className="flex items-center pr-5 bg-white rounded-md overflow-hidden animate-pulse">
                    {/* Image Section */}
                    <div className="w-5/12 lg:w-3/12 bg-gray relative h-32 lg:h-48">
                        {/* Placeholder for heart icon */}
                        <div className="absolute right-4 bottom-4 bg-body p-2 rounded-full">
                            <Icon
                                className="w-4 h-4 lg:w-8 lg:h-8 text-body"
                                icon="mdi:cards-heart"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-7/12 lg:w-9/12 p-4">
                        {/* Product Name Placeholder */}
                        <div className="h-5 lg:h-6 bg-body rounded w-3/4 mb-2"></div>

                        {/* Categories and Rating Placeholder */}
                        <div className="flex justify-between items-center my-2">
                            <div className="flex justify-start gap-1">
                                {/* Category Placeholders */}
                                <div className="h-4 bg-body rounded w-16"></div>
                                <div className="h-4 bg-body rounded w-16"></div>
                            </div>
                            {/* Rating Placeholder */}
                            <div className="h-4 bg-body rounded w-20"></div>
                        </div>

                        {/* Price and Buttons Placeholder */}
                        <div className="w-full flex justify-between items-center mt-5">
                            {/* Price Placeholder */}
                            <div className="h-5 lg:h-6 bg-body rounded w-16"></div>
                            {/* Buttons Placeholder */}
                            <div className="flex gap-3">
                                <div className="bg-primary rounded-md px-5 py-2 h-8 w-10"></div>
                                <div className="bg-secondary rounded-md px-5 py-2 h-8 w-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pr-5 bg-white rounded-md overflow-hidden animate-pulse">
                    {/* Image Section */}
                    <div className="w-5/12 lg:w-3/12 bg-gray relative h-32 lg:h-48">
                        {/* Placeholder for heart icon */}
                        <div className="absolute right-4 bottom-4 bg-body p-2 rounded-full">
                            <Icon
                                className="w-4 h-4 lg:w-8 lg:h-8 text-body"
                                icon="mdi:cards-heart"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-7/12 lg:w-9/12 p-4">
                        {/* Product Name Placeholder */}
                        <div className="h-5 lg:h-6 bg-body rounded w-3/4 mb-2"></div>

                        {/* Categories and Rating Placeholder */}
                        <div className="flex justify-between items-center my-2">
                            <div className="flex justify-start gap-1">
                                {/* Category Placeholders */}
                                <div className="h-4 bg-body rounded w-16"></div>
                                <div className="h-4 bg-body rounded w-16"></div>
                            </div>
                            {/* Rating Placeholder */}
                            <div className="h-4 bg-body rounded w-20"></div>
                        </div>

                        {/* Price and Buttons Placeholder */}
                        <div className="w-full flex justify-between items-center mt-5">
                            {/* Price Placeholder */}
                            <div className="h-5 lg:h-6 bg-body rounded w-16"></div>
                            {/* Buttons Placeholder */}
                            <div className="flex gap-3">
                                <div className="bg-primary rounded-md px-5 py-2 h-8 w-10"></div>
                                <div className="bg-secondary rounded-md px-5 py-2 h-8 w-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteCardSkeleton;