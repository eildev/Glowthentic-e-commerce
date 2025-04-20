import React from 'react';
import Product from '../../components/product_card/Product';
import HeadTitle from '../../components/typography/HeadTitle';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../components/product_card/useMediaQuery';
import Paragraph from '../../components/typography/Paragraph';
import { imagePath } from '../../utils/imagePath';

const BlogCard = ({blog}) => {
    console.log("single blog", blog);
    const isMobile = useMediaQuery("(max-width: 767px)");
     const blogImage = imagePath(blog?.image);
    return (
        <div>
      <div
      className={`card w-auto bg-light rounded-2xl shadow-md min-h-full lg:min-h-[500px] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out `}
    >
      <figure className="relative overflow-hidden min-h-[180px] md:min-h-[380px] lg:h-[380px]">
        <Link to={`/product`}>
          <img
            className="lg:h-[380px] min-h-[250px] max-h-[250px] md:min-h-[280px] object-cover transition-transform duration-500 hover:scale-105"
            src={blogImage}
            alt={blog?.title ?? "product image"}
          />
        </Link>
    

        



      </figure>

      <div
        className={`card-body h-[200px] px-2 md:px-4 bg-white text-primary text-left rounded-b-2xl flex flex-col justify-center  transition-colors duration-300 
        `} // Use flex-col and justify-between to control alignment
      >
        <Link to={`/product`}>
        <HeadTitle
  className={`text-sm md:text-base lg:text-lg text-primary line-clamp-2 transition-colors duration-200 hover:text-secondary `}
>
 {blog?.title.slice(0, 40)}
   
</HeadTitle>

        </Link>
        {isMobile ? (
  <Paragraph className="text-xs  min-h-[40px] transition-opacity duration-200 hover:opacity-80">
    {blog?.desc.slice(0, 80)}
  </Paragraph>
) : (
  <Paragraph className="text-sm lg:mt-2  line-clamp-2 min-h-[44px] transition-opacity duration-200 hover:opacity-80">
    {blog?.desc.slice(0, 100)}
  </Paragraph>
)}


      </div>
    </div>
        </div>
    );
};

export default BlogCard;