
import Product from "../../components/product_card/Product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {Navigation, FreeMode, Pagination } from 'swiper/modules';
const TopProducts = () => {
  return (
    <div className="flex">

      <Swiper
        slidesPerView={4}
        spaceBetween={150}
        freeMode={true}
        navigation={true}
        modules={[Navigation, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
        <SwiperSlide><Product /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopProducts;
