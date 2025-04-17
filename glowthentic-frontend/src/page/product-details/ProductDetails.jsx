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
  // console.log("myValue", value);
  return <p>{value?.tagName ?? "No Value"}</p>;
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Extracts the product ID from the URL
  const { data, isLoading, error } = useGetProductByDetailsQuery(id);
  const { token, user } = useSelector((state) => state.auth);

  console.log("my Products", data?.data);

  // console.log(user?.id);
  const navigate = useNavigate();
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/200",
    "https://picsum.photos/400/300",
  ];
  // Find the variant with promotion
  // const variantWithPromotion = data.variants.find(
  //   (variant) =>
  //     variant?.product_variant_promotion?.coupon?.discount_type ===
  //       "percentage" ||
  //     variant?.product_variant_promotion?.coupon?.discount_type === "fixed"
  // );

  // const promotion = variantWithPromotion?.product_variant_promotion?.coupon;

  // let discountPercentage = 0;
  // let finalPrice = data.variants[0]?.regular_price;
  // let stockStatus =
  //   data?.product_stock?.length > 0 ? "In Stock" : "Out Of Stock";

  // if (promotion) {
  //   if (promotion.discount_type === "percentage") {
  //     discountPercentage = Math.round(promotion.discount_value);
  //     const discountAmount =
  //       (discountPercentage * data.variants[0].regular_price) / 100;
  //     finalPrice = (data.variants[0].regular_price - discountAmount).toFixed(2);
  //     stockStatus =
  //       data?.product_stock?.length > 0
  //         ? `${discountPercentage}% Off`
  //         : "Out Of Stock";
  //   } else {
  //     discountPercentage = promotion.discount_value;
  //     finalPrice = data.variants[0].regular_price - promotion.discount_value;
  //     stockStatus =
  //       data?.product_stock?.length > 0 ? "Flat Discount" : "Out Of Stock";
  //   }
  // }
  const stockAvailable = data?.data?.product_stock?.[0]?.StockQuantity > 0;
  const [itemCount, setItemCount] = useState(1);
  console.log(itemCount)
  const [variant, setVariant] = useState([0]);
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

  // console.log("Selected Variants", selectedVariant);

  const selectedVariantData = data?.data?.variants?.find(
    (variant) => variant.id === selectedVariant?.id
  );

  // console.log("Selected Variants", selectedVariantData);

  const handleAddToCart = () => {
    // alert("Add to cart");
    const newProduct = {
      ...selectedVariantData,
      quantity: itemCount,
      user_id: user?.id || null,
    };
    dispatch(addToCart(newProduct));
    toast.success(`${data?.data?.product_name ?? ""} added to Cart!`);
  };

  const [openIndex, setOpenIndex] = useState(0);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  const [expanded, setExpanded] = useState({
    productDetails: false,
    howToApply: false,
    ingredient: false,
    productSpecification: false,
  });
  const toggleReadMore = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const truncateText = (text, limit, isExpanded) =>
    isExpanded ? text : `${text.substring(0, limit)}...`;

  const handleCheckOut = () => {
    const newProduct = {
      ...selectedVariantData,
      quantity: itemCount,
      user_id: user?.id || null,
    };
    dispatch(addToCart(newProduct));

    navigate("/checkout");
  };
console.log(data?.data?.shipping_charge);
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-4 ">
          {/* <---Small Device Right Section Start ----> */}
          <div className="sm:hidden block mt-4 p-2">
            <HeadTitle className="mb-2">
              {data?.data?.product_name ?? ""}
            </HeadTitle>
            <h4 className="font-bold">
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
            {/* <h4 className=" text-sm font-semibold text-gray mt-1">
              Formulated with 92% natural-origin ingredients
            </h4> */}
          </div>
          {/* <---Small Device Right Section End ----> */}
          {/* -----------------------Slide Start----------------------------- */}
          <div className="sm:col-span-7 my-[35px]">
            <ProductSlider
              data={data}
              variantId={selectedVariant?.id}
            ></ProductSlider>
          </div>

          {/*-------------------------- Slide End----------------------------*/}

          {/* ///Right Section // */}
          <div className="sm:col-span-3 md:pt-7 md:pl-4 ">
            {/* //show big device small device hidden Start// */}
            <div className="hidden sm:block w-full">
              <HeadTitle className="mb-2">
                {data?.data?.product_name ?? ""}
              </HeadTitle>
              <h4
                className="font-bold"
                dangerouslySetInnerHTML={{
                  __html:   data?.data?.productdetails?.short_description
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
              {/* <h4 className=" text-sm font-semibold text-gray">
                Formulated with 92% natural-origin ingredients
              </h4> */}
            </div>
            {/* //show big device small device hidden End/ / */}
            <ShowPrice selectedVariant={selectedVariant} />
            {/* //Select price// */}
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
                {" "}
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
            {/* //Select price end// */}
            {/* //Button// */}
            <div className="mt-4">
           <div>
           <IncrementDecrement setItemCount={setItemCount} item={data} />
           </div>
           <RegularButton
                isLoading={isLoading}
                className={`me-4 my-1 px-6 text-sm ${
                  stockAvailable
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-gradient cursor-not-allowed"
                }`}
                onClick={handleAddToCart}
                disabled={!stockAvailable}
              >
                Add To Cart
              </RegularButton>
              <RegularButton
                isLoading={isLoading}
                className={`me-4 my-1 px-6 text-sm ${
                  stockAvailable
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-gradient  cursor-not-allowed"
                }`}
                onClick={handleCheckOut}
                disabled={!stockAvailable}
              >
                Buy Now
              </RegularButton>
              {/* <RegularButton className="px-6 text-sm">Buy Now</RegularButton> */}
            </div>
            {/* //Button End// */}
            <div className="bg-[#fbeff2] p-2 font-normal text-sm mt-4">
              {
data?.data?.shipping_charge === "free" &&  <p className="flex items-center py-1">
<Icon icon="mdi:wallet-giftcard" width="2em" height="2em" />
<span className="ps-2">
  
   <h1>Free Shipping</h1>
  
  
</span>
</p> 
              }
             
              <p className="flex items-center py-1">
                <Icon icon="ic:baseline-discount" width="2em" height="2em" />
                <span className="ps-2">
                  {data?.data?.productdetails.product_policy}
                </span>
              </p>
              {/* <p className="flex items-center py-1">
                <Icon icon="mdi:question-answer" width="2em" height="2em" />
                <span className="ps-2">
                  Receive free 1-2-1 expert advice in branches
                </span>
              </p> */}
            </div>
          </div>
          {/* //Right Section  End // */}
        </div>

        {/* //-----Product Description Big Device--------// */}
        <div className="hidden sm:block">
          <ProductQueryNevigation data={data}></ProductQueryNevigation>
        </div>
        {/* //-----Product Description Small device--------// */}
        <div className="block lg:hidden">
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Product Details
            </div>
            <div className="collapse-content font-normal text-sm  text-justify">
            <p className="mt-4 text-lg font-normal text-[#0C0C0C]">
                <div
                  className="custom-html-content mt-4 text-lg font-normal text-[#0C0C0C]"
                  dangerouslySetInnerHTML={{
                    __html: productDetails
                     
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
                  className="custom-html-content mt-4 text-lg font-normal text-[#0C0C0C]"
                  dangerouslySetInnerHTML={{
                    __html: apply
                     
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
                  className="custom-html-content mt-4 text-lg font-normal text-[#0C0C0C]"
                  dangerouslySetInnerHTML={{
                    __html: ingredients
                     
                  }}
                />
              </p>
            </div>
          </div>
       
        </div>
        {/* //-------------------------Review Section Start----------------------// */}
        {/* <div>
          <ProductReviews images={images} data={data}></ProductReviews>
        </div> */}
        {/* //---------------------------Review Section End---------------------------// */}
        {/* //Banner section  big Screen// */}
        {/* <div className="bg-primary my-6 hidden sm:block">
          <div className="grid grid-cols-4 gap-4 p-6 mx-10   text-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
          <div className="text-center text-white pb-7 text-sm">
            <p className="pb-1">
              In just 1 week:{" "}
              <span className="text-gray-thin ">
                {" "}
                it appears firmer, stronger and smoother.
              </span>
            </p>
            <p className="pb-1">
              In 3 weeks:{" "}
              <span className="text-gray-thin">
                2x improvement in the look or feel of skin elasticity
              </span>
            </p>
            <p className="pb-1">
              After 1 month:{" "}
              <span className="text-gray-thin">
                {" "}
                The skin looks firmer+60% | The skin looks denser +56%
              </span>{" "}
            </p>
          </div>
        </div> */}

        {/* <section className=" py-10 px-">
          <div className="text-center pt-4 pb-1">
            <HeadTitle className="text-2xl font-semibold text-center text-[#0C0C0C] lg:text-3xl">
              Prestige lA micro-huile serum frequently asked questions
            </HeadTitle>

            <div className="mt-12 bg-white">
              {faqs.map((faq, index) => (
                <div key={index} className="border-t  border-t-[#CBCBCB]">
                  <button
                    className="flex items-center justify-between w-full py-4 md:py-6 px-2 md:px-4"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <h2 className="font-semibold md:font-bold text-start text-sm md:text-xl text-[#0C0C0C]">
                      {faq.question}
                    </h2>
                    <span
                      className={`transition-transform transform rounded-full p-1 ${
                        openIndex === index
                          ? "text-[#0C0C0C] "
                          : "text-[#0C0C0C]"
                      }`}
                    >
                      {openIndex === index ? (
                        <FiMinus className="text-xl"></FiMinus>
                      ) : (
                        <FiPlus className="text-xl"></FiPlus>
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                      openIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {faq.answer && (
                      <div>
                        <hr className="border-[0.5] border-t-[#CBCBCB]" />
                        <p className="p-4 text-xs md:text-lg text-start font-normal text-[#0C0C0C]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/*  //Bottom Accordian  End*/}

        {/* recommended products slider */}

        <RecommendedSlider></RecommendedSlider>
      </Container>
    </div>
  );
};

export default ProductDetails;
