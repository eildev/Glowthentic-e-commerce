// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

const Slider = ({ children }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      loop={true}
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
        nextEl: '.button-next3',
        prevEl: '.button-prev3',
    }}
      modules={[Autoplay, FreeMode, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export default Slider;
