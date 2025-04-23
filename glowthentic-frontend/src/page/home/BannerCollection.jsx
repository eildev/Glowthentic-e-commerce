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
import cn from "../../utils/cn";
import { imagePath } from "../../utils/imagePath";

const bannerImages = [
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
];
const baseURL = "https://backend.glowthentic.store/";

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
    return (
      <div className="my-10">
        <div className="lg:flex hidden gap-9 max-h-[543px] ">
          <div
            className={`card w-[765px] bg-light rounded-t-lg rounded-b-lg transition-all duration-300 ease-in-out animate-pulse`}
          >
            <figure className="relative overflow-hidden">
              <div className="skeleton lg:h-[380px] min-h-[180px] md:min-h-[380px] lg:py-5 py-2 w-full bg-slate-200 rounded-b-none"></div>
            </figure>
          </div>
          <div
            className={`card w-[420px] bg-light rounded-lg transition-all duration-300 ease-in-out animate-pulse`}
          >
            <figure className="relative overflow-hidden">
              <div className="skeleton lg:h-[380px] min-h-[180px] md:min-h-[380px] lg:py-5 py-2 w-full bg-slate-200 rounded-b-none"></div>
            </figure>
          </div>
        </div>
        <div className="lg:flex hidden justify-between max-h-[277px] mt-8 gap-9">
          <div
            className={`card w-[676px] bg-light rounded-lg transition-all duration-300 ease-in-out animate-pulse`}
          >
            <figure className="relative overflow-hidden">
              <div className="skeleton lg:h-[380px] min-h-[180px] md:min-h-[380px] lg:py-5 py-2 w-full bg-slate-200 rounded-b-none"></div>
            </figure>
          </div>
          <div
            className={`card w-[238px] bg-light rounded-lg transition-all duration-300 ease-in-out animate-pulse`}
          >
            <figure className="relative overflow-hidden">
              <div className="skeleton lg:h-[380px] min-h-[180px] md:min-h-[380px] lg:py-5 py-2 w-full bg-slate-200 rounded-b-none"></div>
            </figure>
          </div>
          <div
            className={`card w-[238px] bg-light rounded-lg transition-all duration-300 ease-in-out animate-pulse`}
          >
            <figure className="relative overflow-hidden">
              <div className="skeleton lg:h-[380px] min-h-[180px] md:min-h-[380px] lg:py-5 py-2 w-full bg-slate-200 rounded-b-none"></div>
            </figure>
          </div>
        </div>
        <div
          className={`card lg:hidden w-full h-[200px] md:max-h-[500px] md:min-h-[500px] bg-light rounded-lg transition-all duration-300 ease-in-out animate-pulse border`}
        >
          <figure className="relative overflow-hidden">
            <div className="skeleton h-[200px] md:max-h-[500px] md:min-h-[500px] lg:py-5 py-2 w-full bg-slate-200 rounded-b-none"></div>
          </figure>
        </div>
      </div>
    );
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
    <div className=" mx-auto">
      {/* Mobile & Tablet View (Slider Only) */}
      <div className=" mt-6 block lg:hidden relative w-full h-[200px] md:h-[500px] rounded-md overflow-hidden">
        <Slider {...sliderSettings} className="pointer-events-auto">
          {cart1.images?.map((image, index) => (
            <div key={index} className="relative w-full">
              <img
                // src={`${baseURL + image?.image}`}
                src={imagePath(image?.image)}
                alt={`Banner ${index + 1}`}
                className="w-full h-full md:h-full object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-3 sm:translate-y-[-10%] py-1 w-[82px] md:w-[217px] pointer-events-none ">
          <Link
            to={cart1?.link}
            className="font-normal text-[7px] md:text-xl leading-3 md:leading-7 px-2 md:pxz-4 py-1 md:py-2 bg-white text-black rounded-full pointer-events-auto"
          >
            {cart1?.link_button}
          </Link>
        </div> */}
      </div>
      <div className="mt-5 grid grid-cols-5 gap-4 lg:hidden">
        {/* Left Side (50% width) */}
        <div className="relative p-8 rounded-lg h-[300px] col-span-3">
          <img
            src={imagePath(cart2.image)}
            alt="Beauty & Care"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side (50% width) - 2 stacked boxes */}
        <div className="flex flex-col gap-4 col-span-2">
          <div className="relative text-white p-4 rounded-lg h-[140px] flex flex-col justify-center items-start">
            <img
              src={imagePath(cart4.image)}
              alt="Check This Out"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="relative text-white p-4 rounded-lg h-[140px] flex flex-col justify-center items-start">
            <img
              src={imagePath(cart5.image)}
              alt="Body Lotion"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="relative lg:hidden text-white p-4 rounded-lg w-full mt-5 h-[200px] md:h-[500px] flex flex-col justify-center items-start">
        <img
          // src={`${baseURL + cart3.image}`}
          src={imagePath(cart3.image)}
          alt="Discount"
          className="absolute inset-0 transform w-full h-full object-cover rounded-lg"
        />
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
                    // src={`${baseURL + image?.image}`}
                    src={imagePath(image?.image)}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-[543px] object-cover"
                  />
                </div>
              ))}
            </Slider>

            {/* <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 w-[217px] pointer-events-none">
              <h2 className="custome-font leading-[46px] text-5xl font-bold mb-32">
                {cart1?.head}
              </h2>
              <Link
                to={cart1?.link}
                className="mt-4 px-4 py-2 bg-white text-black rounded-full pointer-events-auto"
              >
                {cart1?.link_button}
              </Link>
            </div> */}
          </div>

          {/* Right: Beauty & Care Section */}
          <div className="relative p-8 rounded-lg flex flex-col justify-between items-center w-[420px] h-[543px]">
            <img
              // src={`${baseURL + cart2.image}`}
              src={imagePath(cart2.image)}
              alt="Beauty & Care"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex gap-8">
          <div className="relative text-white p-4 rounded-lg w-[676px] h-[277px] flex flex-col justify-center items-start">
            <img
              // src={`${baseURL + cart3.image}`}
              src={imagePath(cart3.image)}
              alt="Discount"
              className="absolute inset-0 transform w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="relative text-white p-4 rounded-lg w-[238px] h-[277px] flex flex-col justify-center items-start">
            <img
              // src={`${baseURL + cart4.image}`}
              src={imagePath(cart4.image)}
              alt="Check This Out"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="relative text-white p-4 rounded-lg w-[238px] h-[277px] flex flex-col justify-center items-start">
            <img
              // src={`${baseURL + cart5.image}`}
              src={imagePath(cart5.image)}
              alt="Body Lotion"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCollection;
