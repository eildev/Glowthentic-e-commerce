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
    <div className=" mx-auto ">
      {/* Mobile & Tablet View (Slider Only) */}
      <div className="block lg:hidden mt-6 relative w-full h-[200px] md:h-[500px] rounded-md overflow-hidden">
        <Slider {...sliderSettings} className="pointer-events-auto">
          {bannerImages.map((image, index) => (
            <div key={index} className="relative w-full">
              <img src={image} alt={`Banner ${index + 1}`} className="w-full h-[200px] md:h-[400px] object-cover" />
              <div className="absolute inset-0 bg-[#0F1228] opacity-50 pointer-events-none"></div>
            </div>
          ))}
        </Slider>

        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-3 sm:translate-y-[-10%] py-1 w-[82px] md:w-[217px] pointer-events-none ">
          <h2 className="custome-font leading-[17px] md:leading-10 text-lg l md:text-5xl font-bold mb-2 md:mb-10">
            Free Shipping Beauty
          </h2>
          <button className=" font-normal text-[7px] md:text-xl leading-3 md:leading-7 px-2 md:px-4 py-1 md:py-2 bg-white text-black rounded-full pointer-events-auto">Book Now</button>
        </div>
      </div>

      {/* Large Screens View */}
      <div className="hidden lg:block mt-8 space-y-8">
        <div className="flex gap-8">
          {/* Left: Slider */}
          <div className="relative w-[765px] h-[543px] rounded-lg overflow-hidden">
            <Slider {...sliderSettings} className="pointer-events-auto">
              {bannerImages.map((image, index) => (
                <div key={index} className="relative w-full">
                  <img src={image} alt={`Banner ${index + 1}`} className="w-full h-[543px] object-cover" />
                  <div className="absolute inset-0 bg-[#0F1228] opacity-50 pointer-events-none"></div>
                </div>
              ))}
            </Slider>

          
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 w-[217px] pointer-events-none">
              <h2 className="custome-font leading-[46px] text-5xl font-bold mb-32">Free Shipping Beauty</h2>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-full pointer-events-auto">Book Now</button>
            </div>
          </div>

          {/* Right: Beauty & Care Section */}
          <div className="relative bg-[#0F1228] p-8 rounded-lg flex flex-col justify-between items-center w-[420px] h-[543px]">
            <img src={bannerImg2} alt="Beauty & Care" className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-lg" />
            <h2 className="custome-font text-white text-5xl font-bold relative z-10">Beauty & Care</h2>
            <button className="px-4 py-2 bg-white text-black rounded-full relative z-10">Discover Now</button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex gap-8">
       
          <div className="relative bg-[#0F1228] text-white p-4 rounded-lg w-[676px] h-[277px] flex flex-col justify-center items-start">
            <img src={bannerImg3} alt="Discount" className="absolute inset-0 transform scale-x-[-1] w-full h-full object-cover opacity-50 rounded-lg" />
            <h3 className="text-3xl font-medium relative z-10">Get Your 50% Off</h3>
            <p className="text-base w-[278px] font-normal relative z-10">
              Nourish your skin with toxin-free cosmetic products.
            </p>
            <button className="mt-4 px-3 py-1 bg-white text-black rounded-full text-sm relative z-10">Shop Now</button>
          </div>

       
          <div className="relative bg-[#0F1228] text-white p-4 rounded-lg w-[238px] h-[277px] flex flex-col justify-center items-start">
            <img src={bannerImg4} alt="Check This Out" className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg" />
            <h3 className="text-3xl font-medium w-[123px] leading-[34px] relative z-10">Check This Out</h3>
            <p className="text-base font-medium mt-4 relative leading-4 z-10 w-[70px]">
              FROM <span className="font-bold text-3xl leading-[30px]">$169</span>
            </p>
          </div>

        
          <div className="relative bg-[#0F1228] text-white p-4 rounded-lg w-[238px] h-[277px] flex flex-col justify-center items-start">
            <img src={bannerImg5} alt="Body Lotion" className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg" />
            <h3 className="text-3xl font-medium w-[123px] leading-[34px] relative z-10">Body Lotion</h3>
            <p className="text-base font-medium mt-4 relative leading-4 z-10 w-[70px]">
              FROM <span className="font-bold text-3xl leading-[30px]">$169</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCollection;
