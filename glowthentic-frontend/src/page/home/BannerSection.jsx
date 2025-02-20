// import HeadTitle from "../../components/typography/HeadTitle";
// import Banner from "../../components/banner/Banner";
// import RegularButton from "../../components/typography/RegularButton";
import bannerImage1 from "../../assets/img/banner/b1.png";
import bannerImage2 from "../../assets/img/banner/b2.png";
import bannerImage3 from "../../assets/img/banner/b3.png";
import bannerImage4 from "../../assets/img/banner/b4.png";
// import bannerImage5 from "../../assets/img/banner/banner-image-5.png";
import DynamicBanner from "../../components/banner/DynamicBanner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const data = [
  {
    title: "Free Shipping Beauty",
    details: "",
    price: "",
    button: "book now",
    url: "#",
    image: [bannerImage1, bannerImage2, bannerImage3, bannerImage4],
    colspan: 2,
  },
  {
    title: "Beauty & Care",
    details: "",
    price: "",
    button: "Discover Now",
    url: "#",
    image: [bannerImage2],
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: [bannerImage3],
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: [bannerImage4],
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: [bannerImage4],
    colspan: 2,
  },
];

const BannerSection = () => {
  return (

    <div className="flex justify-between items-center flex-wrap gap-[30px] my-[30px]">
      {data.map((element, index) => (
        <div key={index} className={`rounded-2xl ${
          index === 0 ? "w-[62.5%] h-[543px]" : 
          index === 1 ? "w-[34.4%] h-[543px]" : 
          index === 2 ? "w-[55.2%] h-[277px]" : 
          index === 3 ? "w-[19.4%] h-[277px]" : 
          index === 4 ? "w-[19.4%] h-[277px]" : "w-full h-full"
        }`}> 
 <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
    className={`mySwiper rounded-2xl`}
  >
            
{
  element.image.map((image, index) => (
    <SwiperSlide key={index} className={`cursor-pointer`}>
      <div className="w-full h-full absolute top-0 left-0 bg-[#0F1228] bg-opacity-50">
        <h1>{element?.title}</h1>
      </div>
      <img src={image} alt="" className={`object-cover w-full h-full rounded-2xl`}/>
    </SwiperSlide>
  ))
 
}
  </Swiper>
        </div>
      ))}
    </div>
  );
};

export default BannerSection;
