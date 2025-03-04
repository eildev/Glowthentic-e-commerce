import { button, h1, text } from 'framer-motion/client';
import React, { useState } from 'react';
const productList = [
    "Lipsticks", "Makeup", "Cosmetics", "Shampoo", "Hair", "LifeStyle", "Health", "Food"
]
const ProductGroup = () => {
    const [selectedProduct, setSelectedProduct] = useState(productList[0])
   
    return (
        <div className='border-y-[1px] border-[#FA8232] mt-20 mb-2'>
            <div className='flex  justify-between'>
                {
                    productList.map((product) => (
                        <button 
                        key={product}
                        onClick={() => setSelectedProduct(product)}
                        className='my-8 h-11 '
                        ><h1  className={`  font-semibold  transition-all duration-300 ease-in-out transform
                            ${selectedProduct == product ? "text-[#FA8232] text-3xl " : "text-[#B9B9B9] text-2xl"}
                            `}>{product}</h1></button>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default ProductGroup;