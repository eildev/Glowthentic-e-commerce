import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg1 from '../../assets/img/banner/banner-1.jpg';
import bannerImg2 from '../../assets/img/banner/banner-2.jpg';
import bannerImg3 from '../../assets/img/banner/banner-3.jpg';
import bannerImg4 from '../../assets/img/banner/banner-4.jpg';
import bannerImg5 from '../../assets/img/banner/banner-5.jpg';

const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4, bannerImg5];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const BannerCollection = () => {
  return (
    <div className="  grid  gap-4">
      {/* Left: Slider */}
      <div className="relative w-[765px] h-[543px] rounded-lg overflow-hidden">
        <Slider {...sliderSettings} className="pointer-events-auto">
          {bannerImages.map((image, index) => (
            <div key={index} className="relative w-full">
              <img src={image} alt={`Banner ${index + 1}`} className="w-full h-[543px] object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
            </div>
          ))}
        </Slider>

        {/* Static Text on Top */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 w-[217px] pointer-events-none">
          <h2 className="custome-font leading-[46px] text-5xl font-bold mb-32">Free Shipping Beauty</h2>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-full pointer-events-auto">Book Now</button>
        </div>
      </div>

      {/* Right: Beauty & Care Section */}
      <div className="relative bg-[#E5C8B5] p-8 rounded-lg flex flex-col justify-between items-center  w-[440px] h-[543px]">
        <img src={bannerImg2} alt="Beauty & Care" className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg" />
        <h2 className="custome-font text-5xl font-bold relative z-10">Beauty & Care</h2>
        <button className="  px-4 py-2 bg-white text-black rounded-full relative z-10">Discover Now</button>
      </div>

         {/* Bottom Row */}
         <div className="col-span-2 grid grid-cols-12 gap-4">
        {/* Discount Box - Larger Section */}
        <div className="relative bg-[#6B4936] text-white p-4 rounded-lg w-full h-[277px] flex flex-col justify-center items-start col-span-6">
          <img src={bannerImg3} alt="Discount" className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg" />
          <h3 className="text-xl font-bold relative z-10">Get Your 50% Off</h3>
          <p className="text-sm relative z-10">Nourish your skin with toxin-free products.</p>
          <button className="mt-2 px-3 py-1 bg-white text-black rounded-full text-sm relative z-10">Shop Now</button>
        </div>

        {/* Check This Out */}
        <div className="relative bg-[#532E43] text-white p-4 rounded-lg h-[277px] flex flex-col justify-center items-start col-span-3">
          <img src={bannerImg4} alt="Check This Out" className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg" />
          <h3 className="text-xl font-bold relative z-10">Check This Out</h3>
          <p className="text-sm relative z-10">FROM $169</p>
        </div>

        {/* Body Lotion */}
        <div className="relative bg-[#AFA8A3] text-white p-4 rounded-lg h-[277px] flex flex-col justify-center items-start col-span-3">
          <img src={bannerImg5} alt="Body Lotion" className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg" />
          <h3 className="text-xl font-bold relative z-10">Body Lotion</h3>
          <p className="text-sm relative z-10">FROM $169</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCollection;
