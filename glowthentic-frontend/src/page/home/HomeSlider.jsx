// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../assets/img/homeslider/Hero.png";
import "swiper/css/pagination";

import "./HomeSlider.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const HomeSlider = () => {
  return (
    <div className="relative w-full h-fit">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Slider Image" />
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center "></div>
    </div>
  );
};

export default HomeSlider;
