import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg1 from "../../assets/img/banner/banner-1.jpg";
import bannerImg2 from "../../assets/img/banner/banner-2.jpg";
import bannerImg3 from "../../assets/img/banner/banner-3.jpg";
import bannerImg4 from "../../assets/img/banner/banner-4.jpg";
import bannerImg5 from "../../assets/img/banner/banner-5.jpg";
import { useGetOfferBannerQuery } from "../../redux/features/api/offerBanner/offerBanner";
import { Link } from "react-router-dom";

const bannerImages = [
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
];
const baseURL = "http://127.0.0.1:8000/";

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
  const { data, isLoading, error } = useGetOfferBannerQuery();
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error</span>;
  }

  const cart1 =
    data?.offerbanners?.find((item) => item.status == "cart1") || {};
  const cart2 =
    data?.offerbanners?.find((item) => item.status == "cart2") || {};
  const cart3 =
    data?.offerbanners?.find((item) => item.status == "cart3") || {};
  const cart4 =
    data?.offerbanners?.find((item) => item.status == "cart4") || {};
  const cart5 =
    data?.offerbanners?.find((item) => item.status == "cart5") || {};

  // console.log(cart2);

  // console.log(data);

  return (
    <div className=" mx-auto ">
      {/* Mobile & Tablet View (Slider Only) */}
      <div className="block lg:hidden mt-6 relative w-full h-[200px] md:h-[500px] rounded-md overflow-hidden">
        <Slider {...sliderSettings} className="pointer-events-auto">
          {cart1.images?.map((image, index) => (
            <div key={index} className="relative w-full">
              <img
                src={`${baseURL + image?.image}`}
                alt={`Banner ${index + 1}`}
                className="w-full h-[200px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-[#0F1228] opacity-50 pointer-events-none"></div>
            </div>
          ))}
        </Slider>

        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-3 sm:translate-y-[-10%] py-1 w-[82px] md:w-[217px] pointer-events-none ">
          <h2 className="custome-font leading-[17px] md:leading-10 text-lg l md:text-5xl font-bold mb-2 md:mb-10">
            {cart1?.head}
          </h2>
          <Link
            to={cart1?.link}
            className=" font-normal text-[7px] md:text-xl leading-3 md:leading-7 px-2 md:pxz-4 py-1 md:py-2 bg-white text-black rounded-full pointer-events-auto"
          >
            {cart1?.link_button}
          </Link>
        </div>
      </div>

      {/* Large Screens View */}
      <div className="hidden lg:block mt-8 space-y-8">
        <div className="flex gap-8">
          {/* Left: Slider */}
          <div className="relative w-[765px] h-[543px] rounded-lg overflow-hidden">
            <Slider {...sliderSettings} className="pointer-events-auto">
              {cart1?.images?.map((image, index) => (
                <div key={index} className="relative w-full">
                  <img
                    src={`${baseURL + image?.image}`}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-[543px] object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0F1228] opacity-50 pointer-events-none"></div>
                </div>
              ))}
            </Slider>

            <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 w-[217px] pointer-events-none">
              <h2 className="custome-font leading-[46px] text-5xl font-bold mb-32">
                {cart1?.head}
              </h2>
              <Link
                to={cart1?.link}
                className="mt-4 px-4 py-2 bg-white text-black rounded-full pointer-events-auto"
              >
                {cart1?.link_button}
              </Link>
            </div>
          </div>

          {/* Right: Beauty & Care Section */}
          <div className="relative bg-[#0F1228] p-8 rounded-lg flex flex-col justify-between items-center w-[420px] h-[543px]">
            <img
              src={`${baseURL + cart2.image}`}
              alt="Beauty & Care"
              className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-lg"
            />
            <h2 className="custome-font text-white text-5xl font-bold relative z-10">
              {cart2?.head}
            </h2>
            <button className="px-4 py-2 bg-white text-black rounded-full relative z-10">
              {cart1?.link_button}
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex gap-8">
          <div className="relative bg-[#0F1228] text-white p-4 rounded-lg w-[676px] h-[277px] flex flex-col justify-center items-start">
            <img
              src={`${baseURL + cart3.image}`}
              alt="Discount"
              className="absolute inset-0 transform scale-x-[-1] w-full h-full object-cover opacity-50 rounded-lg"
            />
            <h3 className="text-3xl font-medium relative z-10">
              {cart3?.head}
            </h3>
            <p className="text-base w-[278px] font-normal relative z-10">
              {cart1?.short_description}
            </p>
            <button className="mt-4 px-3 py-1 bg-white text-black rounded-full text-sm relative z-10">
              {cart3?.link_button}
            </button>
          </div>

          <div className="relative bg-[#0F1228] text-white p-4 rounded-lg w-[238px] h-[277px] flex flex-col justify-center items-start">
            <img
              src={`${baseURL + cart4.image}`}
              alt="Check This Out"
              className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg"
            />
            <h3 className="text-3xl font-medium w-[123px] leading-[34px] relative z-10">
              {cart4?.head}
            </h3>
            <p className="text-base font-medium mt-4 relative leading-4 z-10 w-[70px]">
              FROM{" "}
              <span className="font-bold text-3xl leading-[30px]">$169</span>
            </p>
          </div>

          <div className="relative bg-[#0F1228] text-white p-4 rounded-lg w-[238px] h-[277px] flex flex-col justify-center items-start">
            <img
              src={`${baseURL + cart5.image}`}
              alt="Body Lotion"
              className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
            />
            <h3 className="text-3xl font-medium w-[123px] leading-[34px] relative z-10">
              {cart5?.head}
            </h3>
            <p className="text-base font-medium mt-4 relative leading-4 z-10 w-[70px]">
              FROM{" "}
              <span className="font-bold text-3xl leading-[30px]">$169</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCollection;
