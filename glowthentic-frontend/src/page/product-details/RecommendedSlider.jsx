import HeadTitle from "../../components/typography/HeadTitle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../../components/product_card/Product";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import Loading from "../../components/spinners/Loading";

const RecommendedSlider = ({ categoryId }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const simillerCategoryData = data?.data?.filter(
    (product) => product.category_id === categoryId
  );

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  const enableLoop = simillerCategoryData?.length >= 5;
  return (
    <div>
      <HeadTitle className="text-center pt-4 pb-1">
        Recommended Skincare Routine
      </HeadTitle>
      <div className="relative">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={enableLoop}
          navigation={{
            nextEl: ".button-next2",
            prevEl: ".button-prev2",
          }}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper my-8"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {simillerCategoryData?.slice(0, 10).map((product) => (
            <SwiperSlide key={product?.id}>
              <Product product={product} isDark={false} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="lg:flex hidden button-prev2 cursor-pointer w-[40px] h-[40px] bg-white border border-[#CBCBCB] justify-center items-center absolute top-[50%] left-0 z-20 translate-x-[-50%] translate-y-[-100%]">
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
        <div className="lg:flex hidden button-next2 cursor-pointer w-[40px] h-[40px] bg-white border border-[#CBCBCB] justify-center items-center absolute right-0 top-[50%] translate-x-[50%] translate-y-[-100%] z-20">
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
    </div>
  );
};

export default RecommendedSlider;
