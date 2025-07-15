import { useEffect, useState } from "react";
import HeadTitle from "../../components/typography/HeadTitle";
import capitalizeText from "../../utils/capitalizeText";
import ProductSlider from "./ProductSlider";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/features/slice/cartSlice";
import ProductDetailsRightSide from "../../components/product-details/ProductDetailsRightSide";
import ProductDetailsNameTagAndTagShow from "../../components/product-details/ProductDetailsNameTagAndTagShow";

const ProductDetailsTopSection = ({ data, isLoading }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [itemCount, setItemCount] = useState(1);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { token, user } = useSelector((state) => state.auth);
  const stockAvailable = data?.data?.product_stock?.[0]?.StockQuantity > 0;
  const selectedVariantData = data?.data?.variants?.find(
    (variant) => variant.id === selectedVariant?.id
  );

  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

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

    toast.success(`Added to Cart`);
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
  }, [data, location.search]);

  const handleVariantChange = (e) => {
    const variantId = e.target.value;
    const selected = data?.data?.variants?.find(
      (v) => v.id === parseInt(variantId)
    );
    setSelectedVariant(selected);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
      {/* Small Device Right Section Start */}
      <div className="sm:hidden block">
        <ProductDetailsNameTagAndTagShow data={data} />
      </div>
      {/* Small Device Right Section End */}

      {/* Slide Start */}
      <div className="sm:col-span-7 my-[35px]">
        <ProductSlider
          data={data}
          variantId={selectedVariant?.id}
        ></ProductSlider>
      </div>
      {/* Slide End */}

      {/* Right Section */}
      <ProductDetailsRightSide
        data={data}
        stockAvailable={stockAvailable}
        selectedVariant={selectedVariant}
        setItemCount={setItemCount}
        handleAddToCart={handleAddToCart}
        isLoading={isLoading}
        handleCheckOut={handleCheckOut}
        selectedVariantData={selectedVariantData}
        setSelectedVariant={setSelectedVariant}
        itemCount={itemCount}
      />
      {/* Right Section End */}
    </div>
  );
};

export default ProductDetailsTopSection;
