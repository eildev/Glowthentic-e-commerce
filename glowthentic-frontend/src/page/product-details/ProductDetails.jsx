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


const TagElement = ({ value }) => {
  console.log("myValue", value);
  return <p>{value?.tagName ?? "No Value"}</p>
}

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Extracts the product ID from the URL
  const { data, isLoading, error } = useGetProductByDetailsQuery(id);
  const { token, user } = useSelector((state) => state.auth);

  console.log("my Products", data);

  console.log(user?.id);
  const navigate = useNavigate();
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/200",
    "https://picsum.photos/400/300",
  ];

  const faqs = [
    {
      question: "What is the best way to use this product?",
      answer:
        "Beautya s 1st revitalizing serum that concentrates the double power of the Rose de Granville from the stem to the flower torevitalize the skin twice as fast (1) and visibly rejuvenate. Created after 20 years of research, the 10,000 (2) micro-pearls rich in revitalizing rose micro-nutrients are now completed bythe power of the Rose sap. The next-generation,92%natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum is twice as concentrated,(4) combining the nourishing richness of an oil with the deep penetration of a serum. From the first application of the serum, the skin appears plumped. In 3 weeks, 2x improvement in the look or feel of skin elasticity.(5) With regular use, skin looks and feels transformed. As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced. Reveal your extraordinary beauty with Beautya Prestige. (1) Instrumental test, 32 panelists, after 30 min.",
    },
    {
      question: " Can this product be used on all skin types?",
      answer:
        "Our product is suitable for most skin types, including normal, oily, dry, and combination skin. However, if you have sensitive skin or a skin condition, we recommend performing a patch test before using the product all over your face. Apply a small amount of the product to the inside of your elbow and wait 24 hours to make sure you do not have an allergic reaction or irritation. If you experience any discomfort, discontinue use of the product immediately",
    },
    {
      question: "How often should I use this product?",
      answer:
        "Richness of an oil with the deep penetration of a serum. From the first application of the serum, the skin appears plumped. In 3 weeks, 2x improvement in the look or feel of skin lasticity.(5) With regular use, skin looks and feels transformed. As if replenished from within, the skin seems",
    },
    {
      question: "Can this product be used during pregnancy?",
      answer:
        "Created after 20 years of research, the 10,000 (2) micro-pearls rich in revitalizing rose micro-nutrients are now completed by the power of the Rose sap. The next-generation, 92% natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum is twice as concentrated",
    },
    {
      question: "How often should I use this product?",
      answer:
        "As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced. Reveal your extraordinary beauty with Beautya Prestige. (1) Instrumental test, 32 panelists",
    },
    {
      question: "How should I store this product?",
      answer:
        "As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced. Reveal your extraordinary beauty with Beautya Prestige. (1) Instrumental test, 32 panelists",
    },
    {
      question: "How long will it take to see results from using this product?",
      answer:
        "As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced. Reveal your extraordinary beauty with Beautya Prestige. (1) Instrumental test, 32 panelists",
    },
    {
      question: "Can this product be used in conjunction with other skincare",
      answer:
        " As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced. Reveal your extraordinary beauty with Beautya Prestige. (1) Instrumental test, 32 panelists",
    },
  ];

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

  // console.log("Selected Variants" + selectedVariant);

  const selectedVariantData = data?.data?.variants?.find(
    (variant) => variant.id === selectedVariant?.id
  );

  console.log("Selected Variants", selectedVariantData);

  const handleAddToCart = () => {
    // alert("Add to cart");
    const newProduct = { ...selectedVariantData, quantity: 1, user_id: user?.id || null };
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
    const newProduct = { ...selectedVariantData, quantity: 1, user_id: user?.id || null };
    dispatch(addToCart(newProduct));


    navigate('/checkout');
  }

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-4 ">
          {/* <---Small Device Right Section Start ----> */}
          <div className="sm:hidden block mt-4 p-2">
            <HeadTitle className="mb-2">
              {data?.data?.product_name ?? ""}
            </HeadTitle>
            <h4 className="font-bold">{data?.data?.productdetails[0]?.description ?? ""}</h4>
            <p>
              <span className="font-thin text-sm text-gray">
                {data?.data?.product_tags.map((tagData, index) => (
                  `${tagData?.tag?.tagName ?? ""}${index < data.data.product_tags.length - 1 ? " | " : ""}`
                ))}
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
              <HeadTitle className="mb-2">{data?.data?.product_name ?? ""}</HeadTitle>
              <h4 className="font-bold">{data?.data?.productdetails[0]?.description ?? ""}</h4>
              <p>
                <span className="font-thin text-sm text-gray">
                  {data?.data?.product_tags.map((tagData, index) => (
                    `${tagData?.tag?.tagName ?? ""}${index < data.data.product_tags.length - 1 ? " | " : ""}`
                  ))}
                </span>
              </p>
              {/* <h4 className=" text-sm font-semibold text-gray">
                Formulated with 92% natural-origin ingredients
              </h4> */}
            </div>
            {/* //show big device small device hidden End/ / */}
            <div className=" lg:mt-4 flex flex-wrap items-center">
              <span className="text-secondary  font-bold text-xl  pe-4">
                {data?.data?.variants?.regular_price}
              </span>
              <span className="text-gray  text-xs md:text-sm font-thin  pe-2 ">
                <del>$1040.00 |</del>
              </span>
              <span className="text-black text-nowrap text-xs md:text-sm pe-2 font-normal">
                Save ৳651.00
              </span>
              <span className="bg-secondary rounded-tl-[20px]  rounded-br-[20px] text-white  text-nowrap  text-xs p-1 px-2">
                {" "}
                50% OFF
              </span>
            </div>
            {/* //Select price// */}
            <div className="flex items-center justify-between mt-4">
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
                      {variant.weight}
                    </option>
                  ))}
                </select>
              </div>

              <span className="text-lg font-semibold text-gray">
                {" "}
                {selectedVariant
                  ? `৳${selectedVariant.regular_price}`
                  : "Loading..."}
              </span>
            </div>
            <hr className="text-gray-bold" />
            {/* //Select price end// */}
            {/* //Button// */}
            <div className="mt-4">
              <RegularButton isLoading={isLoading}
                className="me-4 my-1 px-6 text-sm"
                onClick={() => handleAddToCart()}
              >
                Add To Cart
              </RegularButton>
              <RegularButton isLoading={isLoading}
                className="me-4 my-1 px-6 text-sm"
                onClick={() => handleCheckOut()}
              >
                Buy Now
              </RegularButton>
              {/* <RegularButton className="px-6 text-sm">Buy Now</RegularButton> */}
            </div>
            {/* //Button End// */}
            <div className="bg-[#fbeff2] p-2 font-normal text-sm mt-4">
              <p className="flex items-center py-1">
                <Icon icon="mdi:wallet-giftcard" width="2em" height="2em" />
                <span className="ps-2">
                  Receive 2 free samples when you spend $100
                </span>
              </p>
              <p className="flex items-center py-1">
                <Icon icon="ic:baseline-discount" width="2em" height="2em" />
                <span className="ps-2">
                  Receive $2 when you return 5 empty containers
                </span>
              </p>
              <p className="flex items-center py-1">
                <Icon icon="mdi:question-answer" width="2em" height="2em" />
                <span className="ps-2">
                  Receive free 1-2-1 expert advice in branches
                </span>
              </p>
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
              <p>
                Beautya s 1st revitalizing serum that concentrates the double
                power of the Rose de Granville from the stem to the flower to
                revitalize the skin twice as fast (1) and visibly rejuvenate.
                Created after 20 years of research, the 10,000 (2) micro-pearls
                rich in revitalizing rose micro-nutrients are now completed by
                the power of the Rose sap. The next-generation, 92%
                natural-origin (3) formula of La Micro-Huile de Rose Advanced
                Serum is twice as concentrated,(4) combining the nourishing
                richness of an oil with the deep penetration of a serum. From
                the first application of the serum, the skin appears plumped. In
                3 weeks, 2x improvement in the look or feel of skin
                elasticity.(5) With regular use, skin looks and feels
                transformed. As if replenished from within, the skin seems
                denser and firmer, and wrinkles appear noticeably reduced. As if
                lifted, facial contours appear enhanced. Reveal your
                extraordinary beauty with Beautya Prestige. (1) Instrumental
                test, 32 panelists, after 30 min.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How To Apply
            </div>
            <div className="collapse-content font-normal text-sm text-justify">
              <p>
                step 1: Dispense two to three pumps into the palm of your hand.
                Then, using the pads of the fingers, apply the serum to the
                entire face from the centre outwards.
                <br /> step 2: Use gentle pressure to make the serum penetrate
                deeply.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">Ingredient</div>
            <div className="collapse-content font-normal text-sm text-justify">
              <p>
                Richness of an oil with the deep penetration of a serum. From
                the first application of the serum, the skin appears plumped. In
                3 weeks, 2x improvement in the look or feel of skin
                elasticity.(5) With regular use, skin looks and feels
                transformed. As if replenished from within, the skin seems
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              What Makes It Advance
            </div>
            <div className="collapse-content font-normal text-sm text-justify">
              <p>
                Created after 20 years of research, the 10,000 (2) micro-pearls
                rich in revitalizing rose micro-nutrients are now completed by
                the power of the Rose sap. The next-generation, 92%
                natural-origin (3) formula of La Micro-Huile de Rose Advanced
                Serum is twice as concentrated
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Product Specification
            </div>
            <div className="collapse-content font-normal text-sm text-justify">
              <p>
                As if replenished from within, the skin seems denser and firmer,
                and wrinkles appear noticeably reduced. As if lifted, facial
                contours appear enhanced. Reveal your extraordinary beauty with
                Beautya Prestige. (1) Instrumental test, 32 panelists
              </p>
            </div>
          </div>
        </div>
        {/* //-------------------------Review Section Start----------------------// */}
        <div>
          <ProductReviews images={images} data={data}></ProductReviews>
        </div>
        {/* //---------------------------Review Section End---------------------------// */}
        {/* //Banner section  big Screen// */}
        <div className="bg-primary my-6 hidden sm:block">
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
        </div>

        <section className=" py-10 px-">
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
                      className={`transition-transform transform rounded-full p-1 ${openIndex === index
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
                    className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-screen" : "max-h-0"
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
        </section>
        {/*  //Bottom Accordian  End*/}

        {/* recommended products slider */}

        <RecommendedSlider></RecommendedSlider>
      </Container>
    </div>
  );
};

export default ProductDetails;
