import Product from "../../components/product_card/Product";
import Slider from "../../components/Slider/Slider";
import {SwiperSlide } from "swiper/react";
const TopProductsSection = () => {
  return (
    <>
      <Slider>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
      </Slider>
    </>
  );
};

export default TopProductsSection;
