import React, { useState } from 'react';
import { useGetBlogCategoryQuery } from '../../redux/features/api/blogCategory/blogCategoryApi';
import AllBlogPosts from './AllBlogPosts';

const ProductGroup = ({ latestArticles, setSelectedBlogId, sortedBlogs }) => {
    const { data, isLoading } = useGetBlogCategoryQuery();

    // Add default "All Categories" manually at the top
    const allCategories = data?.blogCat
        ? [{ id: 'all', cat_name: 'All Articles' }, ...data.blogCat]
        : [];

    // Set default selectedCategoryId
    const [selectedCategoryId, setSelectedCategoryId] = useState('all');

    if (isLoading) return <p>Loading categories...</p>;

    return (
        <div>
            <div className="border-y-[1px] border-[#FA8232] mt-20 mb-2">
                <div
                    className="
                        flex 
                        justify-between 
                        overflow-x-auto 
                        whitespace-nowrap 
                        gap-8
                        md:gap-4 
                        scroll-smooth 
                        scrollbar-hide
                        px-4
                        md:justify-between md:overflow-visible md:whitespace-normal
                    "
                >
                    {allCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategoryId(cat.id)}
                            className="my-8 h-11 shrink-0"
                        >
                            <h1
                                className={`font-semibold transition-all duration-300 ease-in-out transform
                                    ${
                                        selectedCategoryId === cat.id
                                            ? 'text-[#FA8232] text-3xl'
                                            : 'text-[#B9B9B9] text-2xl'
                                    }`}
                            >
                                {cat.cat_name}
                            </h1>
                        </button>
                    ))}
                </div>
            </div>

            {/* Pass props to AllBlogPosts */}
            <AllBlogPosts
                selectedCategoryId={selectedCategoryId}
                setSelectedBlogId={setSelectedBlogId}
                sortedBlogs={sortedBlogs}
            />
        </div>
    );
};

export default ProductGroup;