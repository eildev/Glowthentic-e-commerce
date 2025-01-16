// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';

import "./slider.css";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";


const Slider = ({children}) => {
  return (
    <div className="mycls custom-border px-5 overflow-visible">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        // centeredSlides={true}
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
        navigation={true}
        modules={[Autoplay, FreeMode, Navigation]}
        className="mySwiper px-5 overflow-visible custom-border"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
