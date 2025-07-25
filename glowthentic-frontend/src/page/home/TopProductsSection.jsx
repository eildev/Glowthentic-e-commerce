import Product from "../../components/product_card/Product";
import Slider from "../../components/Slider/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import Loading from "../../components/spinners/Loading";
import HeadTitle from "../../components/typography/HeadTitle";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import ProductSkeleton from "../../components/product_card/ProductSkeleton";
const TopProductsSection = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (error) return <p>Error: {error}</p>;

  const enableLoop = data?.data?.length >= 5;

  return (
    <>
      <HeadTitle className="text-center mb-10 lg:text-3xl">
        Our Top Product
      </HeadTitle>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[44px]">
          {[...Array(4)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={enableLoop}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={{
              nextEl: ".button-next3",
              prevEl: ".button-prev3",
            }}
            modules={[Autoplay, FreeMode, Navigation]}
            className="mySwiper"
          >
            {data?.data?.slice(0, 10).map((product) => (
              <SwiperSlide key={product?.id}>
                <Product product={product} isDark={true} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="lg:flex hidden rounded button-prev3 cursor-pointer w-[40px] h-[40px] bg-white border border-[#CBCBCB] justify-center items-center absolute top-[50%] left-0 z-20 translate-x-[-50%] translate-y-[-100%]">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33301 0.33334L0.666341 7.00001L7.33301 13.6667L7.33301 0.33334Z"
                fill="#0C0C0C"
              />
            </svg>
          </div>
          <div className="lg:flex hidden rounded button-next3 cursor-pointer w-[40px] h-[40px] bg-white border border-[#CBCBCB] justify-center items-center absolute right-0 top-[50%] translate-x-[50%] translate-y-[-100%] z-20">
            <svg
              className="rotate-[180deg]"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33301 0.33334L0.666341 7.00001L7.33301 13.6667L7.33301 0.33334Z"
                fill="#0C0C0C"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default TopProductsSection;
