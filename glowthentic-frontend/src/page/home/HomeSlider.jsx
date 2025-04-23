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
import { useGetBannersQuery } from "../../redux/features/api/homeBannerApi/homeBannerApi";
import HomeBannerImage from "../../components/HomeBannerImage";
const HomeSlider = () => {
  const { data, error, isLoading } = useGetBannersQuery();
  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }
  if (error) {
    return <span>Error</span>;
  }
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
        {data?.banners?.map((banner) => (
          <SwiperSlide key={banner.id} className="h-[537px] w-full">
            <HomeBannerImage banner={banner}></HomeBannerImage>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center "></div>
    </div>
  );
};

export default HomeSlider;
