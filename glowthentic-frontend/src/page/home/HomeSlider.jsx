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
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} className="w-full h-full object-cover" alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} className="w-full h-full object-cover" alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} className="w-full h-full object-cover" alt="Slider Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} className="w-full h-full object-cover" alt="Slider Image" />
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center "></div>
    </div>
  );
};

export default HomeSlider;
