import { button, h1, text } from 'framer-motion/client';
import React, { useState } from 'react';
const productList = [
    "Lipsticks", "Makeup", "Cosmetics", "Shampoo", "Hair", "LifeStyle", "Health", "Food"
]
const ProductGroup = () => {
    const [selectedProduct, setSelectedProduct] = useState(productList[0])
   
    return (
        <div className='border-y-[1px] border-[#FA8232] mt-20 '>
            <div className='flex gap-4  justify-between'>
                {
                    productList.map((product) => (
                        <button 
                        key={product}
                        onClick={() => setSelectedProduct(product)}
                        className='py-3 '
                        ><h1  className={`gap-3  font-semibold text-2xl
                            ${selectedProduct == product ? "text-[#FA8232]" : "text-[#B9B9B9]"}
                            `}>{product}</h1></button>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default ProductGroup;