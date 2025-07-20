import Container from "../../components/Container";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import "./ProductDetails.css";
import ProductReviews from "./ProductReviews";
import RecommendedSlider from "./RecommendedSlider";
import ProductQueryNevigation from "./ProductQueryNevigation";
import { useNavigate, useParams, useLocation } from "react-router-dom"; // Added useLocation
import { useGetProductByDetailsQuery } from "../../redux/features/api/product-api/productApi.js";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/slice/cartSlice";
import toast from "react-hot-toast";
import ProductHelmet from "../../components/helmet/ProductHelmet";
import ProductDetailsTopSection from "./ProductDetailsTopSection";
import ComboProductSection from "./ComboProductSection";
import ProductDescriptionForSmallDevice from "./ProductDescriptionForSmallDevice";
import ProductVideoSection from "./ProductVideoSection";
import Breadcrumb from "../../components/navbar/Breadcrumb";
import ProductQueryNavigationSkeleton from "./ProductQueryNavigationSkeleton";
import ProductDescriptionForSmallDeviceSkeleton from "./ProductDescriptionForSmallDeviceSkeleton";
import ProductReviewSkeleton from "../../components/product-details/ProductReviewSkeleton";
import ProductVideoSectionSkeleton from "./ProductVideoSectionSkeleton";

const TagElement = ({ value }) => {
  return <p>{value?.tagName ?? "No Value"}</p>;
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation(); // Added to access query parameters
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { data, isLoading, error } = useGetProductByDetailsQuery(id);
  const { token, user } = useSelector((state) => state.auth);

  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

  const categoryId = data?.data?.category_id;
  const navigate = useNavigate();

  const stockAvailable = data?.data?.product_stock?.[0]?.StockQuantity > 0;
  const [itemCount, setItemCount] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);

  // Extract variant from query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const variantName = searchParams.get("variant");

    if (data?.data?.variants?.length > 0) {
      if (variantName) {
        // Find variant by variant_name matching the query parameter
        const matchedVariant = data.data.variants.find(
          (v) => v.variant_name.toLowerCase() === variantName.toLowerCase()
        );
        setSelectedVariant(matchedVariant || data.data.variants[0]);
      } else {
        // Default to first variant if no query param
        setSelectedVariant(data.data.variants[0]);
      }
    }
  }, [data, location.search]); // Re-run when data or query params change

  const handleVariantChange = (e) => {
    const variantId = e.target.value;
    const selected = data?.data?.variants?.find(
      (v) => v.id === parseInt(variantId)
    );
    setSelectedVariant(selected);
  };

  const productDetails = data?.data?.productdetails?.description;
  const apply = data?.data?.productdetails?.usage_instruction;
  const ingredients = data?.data?.productdetails?.ingredients;

  const selectedVariantData = data?.data?.variants?.find(
    (variant) => variant.id === selectedVariant?.id
  );

  const matchedItem = filteredCartItems.find(
    (item) => item.id === selectedVariantData?.id
  );

  const handleAddToCart = () => {
    const stockLimit =
      matchedItem?.product_stock?.StockQuantity ||
      selectedVariantData?.product_stock?.StockQuantity ||
      0;

    const totalRequested = (matchedItem?.quantity || 0) + itemCount;

    if (totalRequested > stockLimit) {
      toast.error("Cannot add more than available stock!");
      return;
    }

    const newProduct = {
      ...selectedVariantData,
      quantity: itemCount,
      user_id: user?.id || null,
    };

    toast.success("Added to Cart");
    dispatch(addToCart(newProduct));
    setItemCount(1);
  };

  const handleCheckOut = () => {
    const stockLimit =
      matchedItem?.product_stock?.StockQuantity ||
      selectedVariantData?.product_stock?.StockQuantity ||
      0;

    if (matchedItem) {
      const totalQuantity = matchedItem.quantity + itemCount;

      if (totalQuantity > stockLimit) {
        navigate("/checkout");
        return;
      }

      const newProduct = {
        ...selectedVariantData,
        quantity: itemCount,
        user_id: user?.id || null,
      };

      dispatch(addToCart(newProduct));
      navigate("/checkout");
    } else {
      const newProduct = {
        ...selectedVariantData,
        quantity: itemCount,
        user_id: user?.id || null,
      };

      dispatch(addToCart(newProduct));
      navigate("/checkout");
    }
  };

  // console.log("product Data", data?.data);
  return (
    <div>
      <ProductHelmet product={data?.data} />
      <Container>
        {/* product details Top section  */}
        <ProductDetailsTopSection data={data} isLoading={isLoading} />

        {/* combo product section  */}
        <ComboProductSection data={data} isLoading={isLoading} />

        {/* Product Description Big Device */}
        <div className="hidden sm:block">
          {!isLoading ? (
            <ProductQueryNevigation
              data={data}
              isLoading={isLoading}
            ></ProductQueryNevigation>
          ) : (
            <ProductQueryNavigationSkeleton />
          )}
        </div>
        {/* Product Description Small Device */}
        {!isLoading ? (
          <ProductDescriptionForSmallDevice
            productDetails={productDetails}
            apply={apply}
            ingredients={ingredients}
          />
        ) : (
          <ProductDescriptionForSmallDeviceSkeleton />
        )}
        {/* Review Section Start */}
        <div>
          {!isLoading ? (
            <ProductReviews data={data}></ProductReviews>
          ) : (
            <ProductReviewSkeleton />
          )}
        </div>
        {/* Review Section End */}

        {/* Product video section  */}
        {!isLoading ? (
          <ProductVideoSection data={data} />
        ) : (
          <ProductVideoSectionSkeleton />
        )}
        {/* Recommended Products Slider */}
        <RecommendedSlider
          categoryId={categoryId}
          productData={data}
          isLoading={isLoading}
        ></RecommendedSlider>
      </Container>
    </div>
  );
};

export default ProductDetails;
