import Container from "../../components/Container";
import { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import "swiper/css/pagination";
import "./ProductDetails.css";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProductReviews from "./ProductReviews";
import ProductSlider from "./pRODUCTsLIDER.JSX";
import RecommendedSlider from "./RecommendedSlider";
import ProductQueryNevigation from "./ProductQueryNevigation";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByDetailsQuery } from "../../redux/features/api/product-api/productApi.js";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/slice/cartSlice";
import toast from "react-hot-toast";
import ShowPrice from "./ShowPrice.jsx";
import IncrementDecrement from "../../components/typography/IncrementDecrement.jsx";

const TagElement = ({ value }) => {
  return <p>{value?.tagName ?? "No Value"}</p>;
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
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

  // const [variant, setVariant] = useState([0]);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    if (data?.data?.variants?.length > 0) {
      setSelectedVariant(data?.data?.variants[0]);
    }
  }, [data]);

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

  // const [openIndex, setOpenIndex] = useState(0);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const mainSwiperRef = useRef(null);
  // const thumbsSwiperRef = useRef(null);

  // const [expanded, setExpanded] = useState({
  //   productDetails: false,
  //   howToApply: false,
  //   ingredient: false,
  //   productSpecification: false,
  // });

  // const toggleReadMore = (key) => {
  //   setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  // };

  // const truncateText = (text, limit, isExpanded) =>
  //   isExpanded ? text : `${text.substring(0, limit)}...`;

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

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
          {/* Small Device Right Section Start */}
          <div className="sm:hidden block mt-4 p-2">
            <HeadTitle className="mb-2">
              {data?.data?.product_name ?? ""}
            </HeadTitle>
            <h4 className="font-bold line-clamp-3">
              {data?.data?.productdetails?.short_description}
            </h4>
            <p>
              <span className="font-thin text-sm text-gray">
                {data?.data?.product_tags.map(
                  (tagData, index) =>
                    `${tagData?.tag?.tagName ?? ""}${
                      index < data.data.product_tags.length - 1 ? " | " : ""
                    }`
                )}
              </span>
            </p>
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
          <div className="sm:col-span-3 md:pt-7 md:pl-4">
            {/* Show on big device, hidden on small device */}
            <div className="hidden sm:block w-full">
              <HeadTitle className="mb-2">
                {data?.data?.product_name ?? ""}
              </HeadTitle>
              <h4
                className="font-bold line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: data?.data?.productdetails?.short_description,
                }}
              ></h4>
              <p>
                <span className="font-thin text-sm text-gray">
                  {data?.data?.product_tags.map(
                    (tagData, index) =>
                      `${tagData?.tag?.tagName ?? ""}${
                        index < data.data.product_tags.length - 1 ? " | " : ""
                      }`
                  )}
                </span>
              </p>
            </div>
            {/* End of big device section */}
            {/* Out of Stock Badge */}
            {!stockAvailable && (
              <div className="mt-2 mb-2">
                <span className="bg-secondary text-white text-xs md:text-sm px-3 py-1 rounded-full font-semibold">
                  Out of Stock
                </span>
              </div>
            )}
            <ShowPrice selectedVariant={selectedVariant} />

            {/* Select price */}
            <div className="flex items-center justify-between mt-2">
              <div>
                <select
                  className="select focus:outline-none bg-transparent max-w-xs border-none text-sm font-semibold text-gray"
                  value={selectedVariant?.id || ""}
                  onChange={handleVariantChange}
                >
                  {data?.data?.variants?.map((variant) => (
                    <option
                      key={variant.id}
                      className="py-3"
                      value={variant.id}
                    >
                      {variant.size}
                    </option>
                  ))}
                </select>
              </div>

              <span className="text-lg font-semibold text-gray">
                {selectedVariant
                  ? `৳${
                      selectedVariant?.product_variant_promotion?.coupon
                        ? selectedVariant?.product_variant_promotion?.coupon
                            .discount_type === "fixed"
                          ? selectedVariant?.regular_price -
                            selectedVariant?.product_variant_promotion?.coupon
                              .discount_value
                          : selectedVariant?.regular_price -
                            (selectedVariant?.regular_price *
                              selectedVariant?.product_variant_promotion?.coupon
                                .discount_value) /
                              100
                        : selectedVariant?.regular_price
                    }`
                  : "Loading..."}
              </span>
            </div>

            <hr className="text-gray-bold" />
            {/* Select price end */}

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap justify-evenly items-center gap-3">
              <div>
                <IncrementDecrement
                  setItemCount={setItemCount}
                  item={selectedVariantData}
                  itemCount={itemCount}
                  status={"details"}
                />
              </div>
              <RegularButton
                isLoading={isLoading}
                isDisabled={!stockAvailable}
                className={`block text-sm text-nowrap justify-between ${
                  stockAvailable
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-gradient cursor-not-allowed"
                }`}
                onClick={handleAddToCart}
              >
                Add To Cart
              </RegularButton>
              <RegularButton
                isLoading={isLoading}
                className={`block text-sm text-nowrap justify-between ${
                  stockAvailable
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-gradient cursor-not-allowed"
                }`}
                onClick={handleCheckOut}
                isDisabled={!stockAvailable}
              >
                Buy Now
              </RegularButton>
            </div>
            <p className="text-sm mt-2 mb-5 lg:text-left lg:ml-3 text-center">
              Max Product Stock{" "}
              <span className="text-secondary font-semibold">
                {selectedVariantData?.product_stock?.StockQuantity || 0}
              </span>
            </p>
            {/* Buttons End */}

            {/* Conditionally Render Shipping/Policy Section */}
            {data?.data?.shipping_charge === "free" &&
              data?.data?.productdetails?.product_policy && (
                <div className="bg-[#fbeff2] p-2 font-normal text-sm mt-4">
                  <p className="flex items-center py-1">
                    <Icon icon="mdi:wallet-giftcard" width="2em" height="2em" />
                    <span className="ps-2">
                      <h1>Free Shipping</h1>
                    </span>
                  </p>
                  <p className="flex items-center py-1">
                    <Icon
                      icon="ic:baseline-discount"
                      width="2em"
                      height="2em"
                    />
                    <span className="ps-2 line-clamp-3">
                      {data?.data?.productdetails.product_policy}
                    </span>
                  </p>
                </div>
              )}
          </div>
          {/* Right Section End */}
        </div>

        {/* Product Description Big Device */}
        <div className="hidden sm:block">
          <ProductQueryNevigation data={data}></ProductQueryNevigation>
        </div>
        {/* Product Description Small Device */}
        <div className="block lg:hidden">
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Product Details
            </div>
            <div className="collapse-content font-normal text-sm text-justify">
              <p className="mt-4 text-lg font-normal text-[#0C0C0C]">
                <div
                  className="custom-html-content mt-4 text-sm md:text-[16px] font-normal text-[#0C0C0C]"
                  dangerouslySetInnerHTML={{
                    __html: productDetails,
                  }}
                />
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How To Apply
            </div>
            <div className="collapse-content font-normal text-sm text-justify">
              <p className="mt-4 text-lg font-normal text-[#0C0C0C]">
                <div
                  className="custom-html-content mt-4 text-sm md:text-[16px] font-normal text-[#0C0C0C]"
                  dangerouslySetInnerHTML={{
                    __html: apply,
                  }}
                />
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">Ingredient</div>
            <div className="collapse-content font-normal text-sm text-justify">
              <p className="mt-4 text-lg font-normal text-[#0C0C0C]">
                <div
                  className="custom-html-content mt-4 text-sm md:text-[16px] font-normal text-[#0C0C0C]"
                  dangerouslySetInnerHTML={{
                    __html: ingredients,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        {/* Review Section Start */}
        <div>
          <ProductReviews data={data}></ProductReviews>
        </div>
        {/* Review Section End */}

        {/* Recommended Products Slider */}
        <RecommendedSlider categoryId={categoryId}></RecommendedSlider>
      </Container>
    </div>
  );
};

export default ProductDetails;
