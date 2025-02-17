// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../assets/img/homeslider/Hero.png";
import image2 from "../../assets/img/homeslider/banner-2.jpg";
import image3 from "../../assets/img/homeslider/banner-4.jpg";
import image4 from "../../assets/img/homeslider/banner-5.jpg";
import "swiper/css/pagination";

import "./HomeSlider.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const HomeSlider = () => {
  return (
    <div className="relative w-full h-fit">
      <Swiper
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="lg:h-[537px] sm:h-[350px] h-[137px]">
          <img src={image} className="w-full object-center object-cover lg:h-[537px] sm:h-[350px] h-[137px]" alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide className="h-[537px]">
          <img src={image2} className="w-full object-center object-cover lg:h-[537px] sm:h-[350px] h-[137px]" alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide className="h-[537px]">
          <img src={image3} className="w-full object-center object-cover lg:h-[537px] sm:h-[350px] h-[137px]" alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide className="h-[537px]">
          <img src={image4} className="w-full object-center object-cover lg:h-[537px] sm:h-[350px] h-[137px]" alt="Slider Image" />
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center "></div>
    </div>
  );
};

export default HomeSlider;
