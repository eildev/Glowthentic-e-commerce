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
import useMediaQuery from "./useMediaQuery";
import capitalizeText from "../../utils/capitalizeText";

const Product = ({ product, isDark }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isFav, setIsFav] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const { token, user } = useSelector((state) => state.auth);
  const [addToWishlist, { isLoading, isError, isSuccess, data }] =
    useAddToWishlistMutation();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const { id, product_name, productdetails, variants, price } = product;

  const isComboProduct = product?.comboproduct && !product?.variants;

  const defaultVariant =
    !isComboProduct &&
    product.variants?.find((variant) => variant.status === "Default");
  const variantWithPromotion =
    !isComboProduct &&
    product.variants?.find(
      (variant) =>
        variant?.product_variant_promotion?.coupon?.discount_type ===
          "percentage" ||
        variant?.product_variant_promotion?.coupon?.discount_type === "fixed"
    );

  const comboImage = isComboProduct && product.comboimage?.[0]?.image;
  const offerPrice = (isComboProduct && parseInt(product.offerd_price)) || 0;

  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

  const promotion =
    !isComboProduct && variantWithPromotion?.product_variant_promotion?.coupon;

  const currentDate = new Date();

  let isPromotionValid = false;
  if (promotion && promotion.start_date && promotion.end_date) {
    const startDate = new Date(promotion.start_date);
    const endDate = new Date(promotion.end_date);
    isPromotionValid = currentDate >= startDate && currentDate <= endDate;
  }

  let discountPercentage = 0;
  let finalPrice = !isComboProduct
    ? defaultVariant?.regular_price || product.variants?.[0]?.regular_price || 0
    : offerPrice;
  finalPrice = parseInt(finalPrice);
  let stockStatus =
    !isComboProduct &&
    (product?.product_stock?.length > 0 ? "In Stock" : "Out Of Stock");
  let badgeText = null;

  if (!isComboProduct && isPromotionValid && promotion) {
    if (promotion.discount_type === "percentage") {
      discountPercentage = Math.round(promotion.discount_value);
      const discountAmount = (discountPercentage * finalPrice) / 100;
      finalPrice = Math.round(finalPrice - discountAmount);
      badgeText = `${discountPercentage}% Off`;
    } else if (promotion.discount_type === "fixed") {
      discountPercentage = promotion.discount_value;
      finalPrice = Math.round(finalPrice - promotion.discount_value);
      badgeText = "Flat Discount";
    }
  }

  if (isComboProduct) {
    badgeText = "Combo";
  }

  useEffect(() => {
    const favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    setIsFav(favourite.some((item) => item.id === product.id));
    setIsInCart(
      filteredCartItems.some(
        (item) => item.id === (isComboProduct ? product.id : defaultVariant?.id)
      )
    );
  }, [product.id, filteredCartItems, defaultVariant, isComboProduct]);

  const productImage = !isComboProduct
    ? imagePath(product.variants?.[0]?.variant_image?.[0]?.image)
    : imagePath(comboImage);

  const handleAddToCart = (productItem) => {
    if (isInCart) {
      dispatch(removeFromCart(productItem.id));
      toast.error(
        `${
          productItem?.product_name ?? productItem?.name ?? ""
        } removed from Cart!`
      );
    } else {
      const newProduct = {
        ...productItem,
        quantity: 1,
        user_id: user?.id || null,
      };
      dispatch(addToCart(newProduct));
      toast.success(
        `${productItem?.product_name ?? productItem?.name ?? ""} added to Cart!`
      );
    }
  };

  const handleFav = async (productItem) => {
    if (!user) {
      navigate("/login");
      return;
    }
    const variantId = !isComboProduct && productItem.variants?.[0]?.id;
    try {
      const wishlistData = {
        product_id: productItem.id,
        user_id: user?.id,
        variant_id: variantId,
      };
      const result = await addToWishlist(wishlistData).unwrap();
      if (result.status === 200) {
        setIsFav(true);
        toast.success(
          `${
            productItem?.product_name ?? productItem?.name
          } added to your wishlist!`
        );
      } else {
        toast.error(
          `Failed to add ${
            productItem?.product_name ?? productItem?.name
          } to wishlist.`
        );
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  const productName = isComboProduct
    ? product.name
    : product.product_name +
      " " +
      (defaultVariant?.variant_name || product.variants?.[0]?.variant_name);

  return (
    <div
      className={`card w-auto bg-light rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out ${
        isDark ? "min-h-[320px] lg:min-h-[500px]" : ""
      }`}
    >
      <figure className="relative overflow-hidden min-h-[180px] md:min-h-[380px] lg:h-[380px]">
        <Link to={`/product/${product.slug || `combo/${product.id}`}`}>
          <img
            className="lg:h-[380px] min-h-[250px] md:min-h-[280px] object-cover transition-transform duration-500 hover:scale-105"
            src={productImage ?? defaultImage}
            alt={productName ?? "product image"}
          />
        </Link>
        <span
          className={`bg-secondary text-white lg:text-sm text-xs px-2 lg:px-5 py-1 rounded-r-[25px] absolute top-[20px] lg:top-[30px] left-0 font-semibold transition-opacity duration-300 ${
            !isComboProduct && product?.stock <= 0
              ? "opacity-100"
              : "hover:opacity-75"
          }`}
        >
          {!isComboProduct && product?.stock <= 0
            ? "Stock Out"
            : badgeText || stockStatus || "In Stock"}
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
          className={`bottom-[15px] lg:bottom-[25px] transition-all duration-200 ease-in-out transform ${
            (!isComboProduct && stockStatus === "In Stock") || isComboProduct
              ? "hover:scale-110 hover:bg-secondary cursor-pointer"
              : "cursor-not-allowed opacity-60"
          } ${
            isInCart
              ? "bg-secondary text-white"
              : (!isComboProduct && stockStatus === "In Stock") ||
                isComboProduct
              ? "bg-primary text-white"
              : "bg-gray text-white"
          }`}
          imgClassName=""
          product={product}
          handleAddToCart={
            (!isComboProduct &&
              product?.product_stock?.[0]?.StockQuantity > 0) ||
            isComboProduct
              ? handleAddToCart
              : () => {}
          }
          name={"cart"}
          defaultVariant={defaultVariant}
        />
      </figure>

      <div
        className={`card-body h-[200px] px-2 md:px-4 rounded-b-2xl flex flex-col justify-center transition-colors duration-300 ${
          isDark
            ? "bg-primary text-white text-center"
            : "bg-white text-primary text-left"
        }`}
      >
        <Link to={`/product/${product.slug || `combo/${product.id}`}`}>
          <HeadTitle
            className={`text-sm md:text-base lg:text-lg line-clamp-2 transition-colors duration-200 hover:text-secondary ${
              isDark ? "text-white" : "text-primary"
            }`}
          >
            {capitalizeText(productName) || "N/A"}
          </HeadTitle>
        </Link>
        {isMobile ? (
          <Paragraph className="text-xs min-h-[40px] transition-opacity duration-200 hover:opacity-80">
            {(!isComboProduct &&
              productdetails?.short_description?.slice(0, 40)) ||
              (isComboProduct &&
                product?.comboproduct?.[0]?.product?.productdetails?.short_description?.slice(
                  0,
                  40
                )) ||
              ""}
          </Paragraph>
        ) : (
          <Paragraph className="text-sm lg:mt-2 line-clamp-2 min-h-[44px] transition-opacity duration-200 hover:opacity-80">
            {(!isComboProduct &&
              productdetails?.short_description?.slice(0, 60)) ||
              (isComboProduct &&
                product?.comboproduct?.[0]?.product?.productdetails?.short_description?.slice(
                  0,
                  60
                )) ||
              ""}
          </Paragraph>
        )}

        <div
          className={`flex gap-1 sm:gap-2 md:gap-3 justify-start items-center w-full ${
            isDark ? "text-center" : "text-start"
          }`}
        >
          <Paragraph
            className={`text-sm sm:text-base md:text-lg lg:text-xl mx-0 px-0 md:w-0 transition-transform duration-200 hover:scale-105 ${
              isDark
                ? "text-white border-gray-700"
                : "text-secondary border-gray-300"
            }`}
          >
            <span aria-label={`Price: ${finalPrice} Bangladeshi Taka`}>
              ৳ {finalPrice}
            </span>
          </Paragraph>
          {!isComboProduct && isPromotionValid && discountPercentage > 0 && (
            <Paragraph
              className={`text-xs sm:text-sm md:text-base px-0 transition-opacity duration-200 hover:opacity-60 ${
                isDark
                  ? "text-gray-300 border-gray-700 ml-1 sm:ml-2 md:ml-3"
                  : "text-gray-400 border-gray-300 ml-1 sm:ml-2 md:ml-3"
              }`}
            >
              <del
                aria-label={`Original price: ${defaultVariant?.regular_price} Bangladeshi Taka`}
              >
                ৳ {defaultVariant?.regular_price}
              </del>
            </Paragraph>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
