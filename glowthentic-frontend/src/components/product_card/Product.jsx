import { Link, useNavigate } from "react-router-dom";
import cartIcon from "../../assets/img/Product/cart.svg";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../redux/features/slice/cartSlice";
import {
  useAddToWishlistMutation,
  useGetWishlistByUserIdQuery,
} from "../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import { imagePath } from "../../utils/imagePath";
import useMediaQuery from "./useMediaQuery";
import ProductCardImage from "./ProductCardImage";
import ProductCardDetails from "./ProductCardDetails";

const Product = ({ product, isDark }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isFav, setIsFav] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [addToWishlist] = useAddToWishlistMutation();

  const { data: favorite } = useGetWishlistByUserIdQuery(user?.id, {
    skip: !user?.id,
  });
  const isMobile = useMediaQuery("(max-width: 767px)");

  const { productdetails } = product;

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
    (product.product_stock.reduce(
      (total, item) => total + (item.StockQuantity || 0),
      0
    ) > 0
      ? "In Stock"
      : "Out Of Stock");
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
    // const favorite = JSON.parse(localStorage.getItem("favourite")) || [];
    setIsFav(
      favorite?.wishlist?.some((item) => item.product_id === product.id)
    );
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
      <ProductCardImage
        product={product}
        productName={productName}
        isComboProduct={isComboProduct}
        defaultVariant={defaultVariant}
        isInCart={isInCart}
        comboImage={comboImage}
      />

      {/* product details Card */}
      <ProductCardDetails
        isDark={isDark}
        product={product}
        productName={productName}
        isComboProduct={isComboProduct}
        productdetails={productdetails}
        isPromotionValid={isPromotionValid}
        discountPercentage={discountPercentage}
        isMobile={isMobile}
        finalPrice={finalPrice}
      />
    </div>
  );
};

export default Product;
