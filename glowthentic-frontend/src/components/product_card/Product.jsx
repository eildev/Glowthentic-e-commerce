import defaultImage from "../../assets/img/Product/20.png";
import Paragraph from "../typography/Paragraph";
import HeadTitle from "../typography/HeadTitle";
import { Link } from "react-router-dom";
import heartIcon from "../../assets/img/Product/heart.svg";
import cartIcon from "../../assets/img/Product/cart.svg";
import ProductIcon from "./ProductIcon";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Product = ({ product, isDark }) => {
  const { id, title, discountPercentage, description, thumbnail: image, price, stock } = product;

  const [isInCart, setIsInCart] = useState(false);
  const [isFav, setIsFav] = useState(false);


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    setIsInCart(cart.some((item) => item.id === id));
    setIsFav(favourite.some((item) => item.id === id));
  }, [id]);

  const handleAddToCart = (productItem) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart.some((item) => item.id === productItem.id)) {
      const newProduct = { ...productItem, quantity: 1 };
      cart.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      setIsInCart(true);
      toast.success(`${productItem.title} added to Cart!`);
    } else {
      toast.error("This product is already in your Cart.");
    }
  };
  
  const handleFav = (productItem) => {
    let favourite = JSON.parse(localStorage.getItem("favourite")) || [];

    if (!favourite.some((item) => item.id === productItem.id)) {
      const newProduct = productItem;
      favourite.push(newProduct);
      localStorage.setItem("favourite", JSON.stringify(favourite));
      setIsFav(true);
      toast.success(`${productItem.title} added to Wish list!`);
    } else {
      toast.error("This product is already in your Wish list.");
    }
  };

  // Calculate discount and final price
  const discountAmount = discountPercentage ? Math.ceil((discountPercentage * price) / 100) : 0;
  const finalPrice = discountPercentage ? (price - discountAmount).toFixed(2) : price.toFixed(2);

  return (
    <div
      className={`card w-auto hover:drop-shadow-md bg-light transition-all duration-300 ease-in-out transform rounded-[10px] lg:rounded-[30px] overflow-hidden ${
        isDark ? "h-[320px] lg:h-[500px]" : ""
      }`}
    >
      <figure className="relative">
        <Link to={`/product/${id}`}>
          <img
            className="lg:h-[380px] min-h-[180px] md:min-h-[380px] object-cover lg:py-5 py-2"
            src={image ?? defaultImage}
            alt={title ?? "product image"}
          />
        </Link>
        <span className="bg-secondary text-white lg:text-sm text-xs px-2 lg:px-5 py-1 rounded-r-[25px] absolute top-[20px] lg:top-[30px] left-0 font-semibold">
          {stock <= 0 ? "Stock Out" : `${discountPercentage}%`}
        </span>
        <ProductIcon
          image={heartIcon}
          className={`top-[15px] lg:top-[25px] hover:bg-secondary hover:text-white ${isFav ? "bg-secondary":""}`}
          imgClassName="h-4 w-4"
          product={product}
          handleFav={handleFav}
          name={"heart"}
        />
        {/* Change cart icon color if product is in cart */}
        <ProductIcon
          image={cartIcon}
          className={`bottom-[15px] lg:bottom-[25px] ${
            isInCart ? "bg-secondary" : "bg-primary"
          } hover:bg-secondary hover:text-white`}
          imgClassName=""
          product={product}
          handleAddToCart={handleAddToCart}
          name={"cart"}
        />
      </figure>

      <div
        className={`card-body px-3 lg:px-5 ${
          isDark ? "bg-primary text-white text-center" : "bg-white text-primary text-left "
        }`}
      >
        <Link to={`/product/${id}`}>
          <HeadTitle className={`text-sm lg:text-lg ${isDark ? "text-white" : "text-primary"}`}>
            {title ?? "Beautya Capture Total Dreamskin Care & Perfect"}
          </HeadTitle>
        </Link>
        <Paragraph className="text-xs lg:text-sm">
          {description
            ? window.innerWidth >= 1024
              ? description.slice(0, 80)
              : description.slice(0, 40) + "..."
            : "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"}
        </Paragraph>
        <div className={`flex gap-3 items-center ${isDark ? "justify-center" : ""}`}>
          <Paragraph className="lg:text-xl text-lg text-secondary">
            <span>{finalPrice}</span>
          </Paragraph>
          <Paragraph className="lg:text-sm text-xs text-gray-thin">
            <del>{price}</del>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Product;
