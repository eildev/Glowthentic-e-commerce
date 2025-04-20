import React, { useState } from 'react';
import { useGetBlogCategoryQuery } from '../../redux/features/api/blogCategory/blogCategoryApi';

const productList = [
    "Lipsticks", "Makeup", "Cosmetics", "Shampoo", "Hair", "LifeStyle", "Health", "Food"
];

const ProductGroup = () => {
   
    const {data} = useGetBlogCategoryQuery()
console.log("category", data?.blogCat);
const [selectedProduct, setSelectedProduct] = useState(data?.blogCat[0]?.cat_name);
    return (
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
                {data?.blogCat?.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedProduct(cat?.cat_name)}
                        className="my-8 h-11 shrink-0"
                    >
                        <h1
                            className={`font-semibold transition-all duration-300 ease-in-out transform
                            ${selectedProduct === cat?.cat_name
                                    ? "text-[#FA8232] text-3xl"
                                    : "text-[#B9B9B9] text-2xl"
                                }`}
                        >
                            {cat?.cat_name}
                        </h1>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGroup;
