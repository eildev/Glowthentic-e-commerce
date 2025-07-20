import { Link, useNavigate } from "react-router-dom";
import ProductIcon from "./ProductIcon";
import heartIcon from "../../assets/img/Product/heart.svg";
import defaultImage from "../../assets/img/Product/20.png";
import { imagePath } from "../../utils/imagePath";
import { useEffect, useState } from "react";
import {
  useAddToWishlistMutation,
  useGetWishlistByUserIdQuery,
} from "../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import cartIcon from "../../assets/img/Product/cart.svg";
import { addToCart } from "../../redux/features/slice/cartSlice";

const ProductCardImage = ({
  product,
  productName,
  isComboProduct,
  defaultVariant,
  comboImage,
  isPromotionValid,
  promotion,
  discountPercentage,
  finalPrice,
}) => {
  const [isFav, setIsFav] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [addToWishlist] = useAddToWishlistMutation();
  const { data: favorite } = useGetWishlistByUserIdQuery(user?.id, {
    skip: !user?.id,
  });

  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

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

  // badge Text
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

  // stock Status
  let stockStatus =
    !isComboProduct &&
    (product.product_stock.reduce(
      (total, item) => total + (item.StockQuantity || 0),
      0
    ) > 0
      ? "In Stock"
      : "Out Of Stock");

  //  handle Favorite Function
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

  // handle ad to Cart Function
  const handleAddToCart = (productItem) => {
    console.log("productItem", productItem);
    if (isInCart) {
      toast.error(
        `${productItem?.product?.product_name ?? "N/A"} Already In Cart`
      );
    } else {
      const newProduct = {
        ...productItem,
        quantity: 1,
        user_id: user?.id || null,
      };
      dispatch(addToCart(newProduct));
      toast.success(
        `${productItem?.product?.product_name ?? "N/A"} added to Cart!`
      );
    }
  };

  return (
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
            : (!isComboProduct && stockStatus === "In Stock") || isComboProduct
            ? "bg-primary text-white"
            : "bg-gray text-white"
        }`}
        imgClassName=""
        product={product}
        handleAddToCart={
          (!isComboProduct && product?.product_stock?.[0]?.StockQuantity > 0) ||
          isComboProduct
            ? handleAddToCart
            : () => {}
        }
        name={"cart"}
        defaultVariant={defaultVariant}
      />
    </figure>
  );
};

export default ProductCardImage;
