import cn from "../../utils/cn";


const ProductIcon = ({ image, className, imgClassName, product, handleAddToCart, handleFav, name }) => {




  return (
    <div>
      {
        name === "cart" ? <div
        className={cn(
          "absolute bg-gray-light right-3 lg:right-5 rounded-full h-8 w-8 lg:h-10 lg:w-10 flex justify-center items-center cursor-pointer hover:drop-shadow-sm transition-all duration-300 ease-in-out transform",
          className
        )}
        onClick={() => handleAddToCart(product)}
      >
        <img
          className={cn("h-5 w-5 lg:h-6 lg:w-6 object-contain", imgClassName)}
          src={image}
          alt="heart icon"
        />
      </div> : <div
      className={cn(
        "absolute bg-gray-light right-3 lg:right-5 rounded-full h-8 w-8 lg:h-10 lg:w-10 flex justify-center items-center cursor-pointer hover:drop-shadow-sm transition-all duration-300 ease-in-out transform",
        className
      )}
      onClick={() => handleFav(product)}
    >
      <img
        className={cn("h-5 w-5 lg:h-6 lg:w-6 object-contain", imgClassName)}
        src={image}
        alt="heart icon"
      />
    </div>
      }
    </div>
  );
};

export default ProductIcon;
