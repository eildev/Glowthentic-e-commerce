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
import bannerImg1 from '../../assets/img/banner/banner-1.jpg';
import bannerImg2 from '../../assets/img/banner/banner-2.jpg';
import bannerImg3 from '../../assets/img/banner/banner-3.jpg';
import bannerImg4 from '../../assets/img/banner/banner-4.jpg';
import bannerImg5 from '../../assets/img/banner/banner-5.jpg';

const data = [
  {
    title: "Free Shipping Beauty",
    details: "",
    price: "",
    button: "Book Now",
    url: "#",
    image: [bannerImg1, bannerImg2, bannerImg3, bannerImg4],
    colspan: 2,
  },
  {
    title: "Beauty & Care",
    details: "",
    price: "",
    button: "Discover Now",
    url: "#",
    image: [bannerImg2],
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: [bannerImg3],
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: [bannerImg4],
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: [bannerImg5],
    colspan: 2,
  },
];

const BannerSection = () => {
  return (

    <div className="flex justify-between items-center flex-wrap gap-[30px] my-[30px]">
      {data.map((element, index) => (
        <div key={index} className={`rounded-2xl ${
          index === 0 ? "w-[62.5%] h-[543px]" : 
          index === 1 ? "w-[34.4%] h-[543px] " : 
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
  element.image.map((image, i) => (
    <SwiperSlide key={i} className={`cursor-pointer`}>
      <div className="w-full h-full absolute top-0 left-0 bg-[#0F1228] bg-opacity-50">
        <div className="pl-10">
        <h1 className={` ${
          index === 0 ? "custome-font text-5xl    font-bold max-w-[217px] leading-[46px] text-left text-white mt-[100px] mb-32 " : 
          index === 1 ? "custome-font text-white font-bold text-5xl text-center mt-12" : 
          index === 2 ? "" : 
          index === 3 ? "" : 
          index === 4 ? "" : "w-full h-full"
        }`}>{element?.title}</h1>
        <button className="bg-white py-3 px-11 rounded-3xl text-xl font-medium w-fit block">{element?.button}</button>
        </div>
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
