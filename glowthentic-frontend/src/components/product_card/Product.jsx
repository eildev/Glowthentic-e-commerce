import defaultImage from "../../assets/img/Product/20.png";
import Paragraph from "../typography/Paragraph";
import HeadTitle from "../typography/HeadTitle";
import { Link, useNavigate } from "react-router-dom";
import heartIcon from "../../assets/img/Product/heart.svg";
import cartIcon from "../../assets/img/Product/cart.svg";
import ProductIcon from "./ProductIcon";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../redux/features/slice/cartSlice";
import { useAddToWishlistMutation } from "../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import { imagePath } from "../../utils/imagePath";

const Product = ({ product, isDark }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isFav, setIsFav] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const { token, user } = useSelector((state) => state.auth);
  const [addToWishlist, { isLoading, isError, isSuccess, data }] =
    useAddToWishlistMutation();

  const { id, product_name, productdetails, variants, price, stock } = product;
  console.log(product);
  const defaultVariant = product.variants.find(
    (variant) => variant.status === "Default"
  );

  // console.log('product',product);

  // Find the variant with promotion
  const variantWithPromotion = variants.find(
    (variant) =>
      variant?.product_variant_promotion?.coupon?.discount_type ===
        "percentage" ||
      variant?.product_variant_promotion?.coupon?.discount_type === "fixed"
  );

  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

  // console.log('variantWithPromotion',variantWithPromotion);
  const promotion = variantWithPromotion?.product_variant_promotion?.coupon;
  // console.log("My Promotion", promotion);
  let discountPercentage = 0;
  let finalPrice = variants[0]?.regular_price;
  let stockStatus =
    product?.product_stock?.length > 0 ? "In Stock" : "Out Of Stock";

  if (promotion) {
    if (promotion.discount_type === "percentage") {
      discountPercentage = Math.round(promotion.discount_value);
      const discountAmount =
        (discountPercentage * variants[0].regular_price) / 100;
      finalPrice = (variants[0].regular_price - discountAmount).toFixed(2);
      stockStatus =
        product?.product_stock?.length > 0
          ? `${discountPercentage}% Off`
          : "Out Of Stock";

      // console.log("discount", finalPrice, stockStatus);
    } else {
      discountPercentage = promotion.discount_value;
      finalPrice = variants[0].regular_price - promotion.discount_value;
      stockStatus =
        product?.product_stock?.length > 0 ? "Flat Discount" : "Out Of Stock";
    }
  }

  useEffect(() => {
    const favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    setIsFav(favourite.some((item) => item.id === id));
    setIsInCart(
      filteredCartItems.some((item) => item.id === defaultVariant.id)
    );
  }, [id, filteredCartItems, defaultVariant]);

  const productImage = imagePath(variants[0]?.variant_image[0]?.image);

  const handleAddToCart = (productItem) => {
    if (isInCart) {
      dispatch(removeFromCart(productItem.id));
      toast.error(
        `${productItem?.product?.product_name ?? ""} removed from Cart!`
      );
    } else {
      const newProduct = {
        ...productItem,
        quantity: 1,
        user_id: user?.id || null,
      };
      dispatch(addToCart(newProduct));
      toast.success(
        `${productItem?.product?.product_name ?? ""} added to Cart!`
      );
    }
  };

  const handleFav = async (productItem) => {
    if (!user) {
      navigate("/login");
      return;
    }
    const variantId = productItem.variants[0]?.id;
    try {
      const wishlistData = {
        product_id: productItem.id,
        user_id: user?.id,
        variant_id: variantId,
      };
      const result = await addToWishlist(wishlistData).unwrap();
      if (result.status === 200) {
        setIsFav(true);
        toast.success(`${product_name} added to your wishlist!`);
      } else {
        toast.error(`Failed to add ${product_name} to wishlist.`);
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // Calculate discount and final price based on promotion
  // let discountPercentage = 0;
  // let finalPrice = variants[0].regular_price; // Default to first variant's price
  // let stockStatus = "In Stock";

  // if (promotion && promotion.cupon) {
  //   if (promotion.cupon.discount_type === "percentage") {
  //     discountPercentage = promotion.cupon.discount_value;
  //     const discountAmount = (discountPercentage * variants[0].regular_price) / 100;
  //     finalPrice = (variants[0].regular_price - discountAmount).toFixed(2);
  //     stockStatus = `${discountPercentage}%`;
  //   }
  // }

  const productName = product_name + " " + variants?.[0].variant_name;

  return (
    <div
      className={`card w-auto bg-light rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out ${
        isDark ? "h-[320px] lg:h-[500px]" : ""
      }`}
    >
      <figure className="relative overflow-hidden">
        <Link to={`/product/${product.slug}`}>
          <img
            className="lg:h-[380px] min-h-[180px] md:min-h-[380px] object-cover lg:pb-3 pb-2 transition-transform duration-500 hover:scale-105"
            src={productImage ?? defaultImage}
            alt={product_name ?? "product image"}
          />
        </Link>
        <span
          className={`bg-secondary text-white lg:text-sm text-xs px-2 lg:px-5 py-1 rounded-r-[25px] absolute top-[20px] lg:top-[30px] left-0 font-semibold transition-opacity duration-300 ${
            stock <= 0 ? "opacity-100" : "hover:opacity-75"
          }`}
        >
          {stock <= 0 ? "Stock Out" : stockStatus}
        </span>

        <ProductIcon
          image={heartIcon}
          className={`top-[15px] lg:top-[25px] hover:bg-secondary hover:text-white transition-all duration-200 ease-in-out transform hover:scale-110 ${
            isFav ? "bg-secondary text-white" : ""
          }`}
          imgClassName="h-4 w-4"
          product={product}
          handleFav={handleFav}
          name={"heart"}
        />
        <ProductIcon
          image={cartIcon}
          className={`bottom-[15px] lg:bottom-[25px] transition-all duration-200 ease-in-out transform hover:scale-110 ${
            isInCart ? "bg-secondary text-white" : "bg-primary text-white"
          } hover:bg-secondary`}
          imgClassName=""
          product={product}
          handleAddToCart={handleAddToCart}
          name={"cart"}
          defaultVariant={defaultVariant}
        />
      </figure>

      <div
        className={`card-body px-3 lg:px-5 rounded-b-2xl transition-colors duration-300 ${
          isDark
            ? "bg-primary text-white text-center"
            : "bg-white text-primary text-left"
        }`}
      >
        <Link to={`/product/${product.slug}`}>
          <HeadTitle
            className={`text-sm xl:text-lg transition-colors duration-200 hover:text-secondary ${
              isDark ? "text-white" : "text-primary"
            }`}
          >
            {`${product_name.slice(0, 50)} (${variants?.[0].variant_name})` ??
              "Beautya Capture Total Dreamskin Care & Perfect"}
          </HeadTitle>
        </Link>
        <Paragraph className="text-xs lg:text-sm transition-opacity duration-200 hover:opacity-80">
          <span
            dangerouslySetInnerHTML={{
              __html: productdetails[0].description
                ? window.innerWidth >= 1000
                  ? productdetails[0].description.slice(0, 80)
                  : productdetails[0].description.slice(0, 40) + "..."
                : "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
            }}
          />
        </Paragraph>
        <div
          className={`flex gap-3 items-center ${
            isDark ? "justify-center" : ""
          }`}
        >
          <Paragraph className="lg:text-xl text-lg text-secondary transition-transform duration-200 hover:scale-105">
            <span>৳ {finalPrice}</span>
          </Paragraph>
          {discountPercentage > 0 && (
            <Paragraph className="lg:text-sm text-xs text-gray-thin transition-opacity duration-200 hover:opacity-60">
              <del>৳ {variants[0].regular_price}</del>
            </Paragraph>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
