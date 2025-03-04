import { button, h1 } from 'framer-motion/client';
import React from 'react';

const ProductGroup = () => {
    const productList = [
        "Lipsticks", "Makeup", "Cosmetics", "Shampoo", "Hair", "LifeStyle", "Health", "Food"
    ]
    return (
        <div className='border-y-[1px] border-[#FA8232] mt-20 '>
            <div className='flex gap-4  justify-between'>
                {
                    productList.map((product) => (
                        <button key={product}><h1  className='gap-3  py-3 text-[#B9B9B9] font-semibold text-2xl'>{product}</h1></button>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default ProductGroup;