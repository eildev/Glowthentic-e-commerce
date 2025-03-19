import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductSlider = ({ data, variantId }) => {
  // console.log(data?.data?.variants);

  const selectedVariantData = data?.data?.variants?.find(
    (variant) => variant.id === variantId
  );

  // console.log(selectedVariantData);
  const images = selectedVariantData?.variant_image || [];

  const swiperRef = useRef(null);

  const handleMouseMove = (event) => {
    swiperRef.current.swiper.autoplay.stop();
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    event.currentTarget.style.setProperty("--x", `${x}%`);
    event.currentTarget.style.setProperty("--y", `${y}%`);
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  // const images = [
  //     "https://swiperjs.com/demos/images/nature-1.jpg",
  //     "https://swiperjs.com/demos/images/nature-2.jpg",
  //     "https://swiperjs.com/demos/images/nature-3.jpg",
  //     "https://swiperjs.com/demos/images/nature-4.jpg",
  //     "https://swiperjs.com/demos/images/nature-5.jpg",
  //     "https://swiperjs.com/demos/images/nature-6.jpg",
  //     "https://swiperjs.com/demos/images/nature-7.jpg",
  //     "https://swiperjs.com/demos/images/nature-8.jpg",
  //     "https://swiperjs.com/demos/images/nature-9.jpg",
  //     "https://swiperjs.com/demos/images/nature-10.jpg",
  // ];
  return (
    <>
      {/* Large Device */}
      <div className="lg:flex hidden flex-row-reverse gap-6 items-center">
        <Swiper
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          ref={swiperRef}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2 max-h-[605px]"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index} className="cursor-crosshair">
              <div
                className="zoom-container"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={`https://backend.glowthentic.store/${image?.image}`}
                  // src={`${image}`}
                  className="zoom-image  object-cover max-h-[605px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="max-h-[605px] max-w-[80px] relative">
          <div className="button-prev w-[80px] h-[32px] border border-[#DFDFDF] flex justify-center items-center cursor-pointer">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.667 7.33317L7.00033 0.666504L0.33366 7.33317L13.667 7.33317Z"
                fill="#0C0C0C"
              />
            </svg>
          </div>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={24}
            slidesPerView={5.5}
            direction="vertical"
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper max-h-[541px]"
          >
            {images?.map((image, index) => (
              <SwiperSlide
                key={index}
                className="min-w-[75px] min-h-[78px] cursor-pointer"
              >
                <img
                  src={`https://backend.glowthentic.store/${image?.image}`}
                  // src={`${image}`}
                  className="min-h-[74px] max-h-[75px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-next w-[80px] h-[32px] border border-[#DFDFDF] flex justify-center items-center cursor-pointer">
            <svg
              className="rotate-[180deg]"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.667 7.33317L7.00033 0.666504L0.33366 7.33317L13.667 7.33317Z"
                fill="#0C0C0C"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="lg:hidden flex flex-col gap-2 items-center justify-center">
        <Swiper
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          thumbs={{ swiper: thumbsSwiper2 }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index} className="cursor-crosshair">
              <div
                className="zoom-container"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={`https://backend.glowthentic.store/${image?.image}`}
                  // src={`${image}`}
                  className="zoom-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="overflow-auto w-[100vw]">
          <Swiper
            onSwiper={setThumbsSwiper2}
            loop={true}
            spaceBetween={8}
            slidesPerView={4.5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper sm:max-w-[65%] max-w-[95%] opacity-80"
          >
            {images?.map((image, index) => (
              <SwiperSlide
                key={index}
                className="min-w-[80px] max-h-[80px] border-2 border-transparent cursor-pointer"
              >
                <img
                  src={`https://backend.glowthentic.store/${image?.image}`}
                  // src={`${image}`}
                  className="max-h-[74px] w-full object-cover "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
