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

  // console.log("cart1", cart1);

  return (
    <div className=" mx-auto">
      {/* Mobile & Tablet View (Slider Only) */}
      <div className=" mt-6 block lg:hidden relative w-full h-[200px] md:h-[350px] rounded-md overflow-hidden">
        <Slider {...sliderSettings} className="pointer-events-auto">
          {cart1.images?.map((image, index) => (
            <Link
              to={`${cart1.link ?? "#"}`}
              key={index}
              className="relative w-full"
            >
              <img
                // src={`${baseURL + image?.image}`}
                src={imagePath(image?.image)}
                alt={`Banner ${index + 1}`}
                className="w-full h-[200px] md:h-[350px] object-cover"
              />
            </Link>
          ))}
        </Slider>
      </div>
      <div className="mt-5 grid grid-cols-5 gap-4 lg:hidden">
        {/* Left Side (50% width) */}
        <Link
          to={`${cart2.link ?? "#"}`}
          className="relative rounded-lg col-span-3"
        >
          <img
            src={imagePath(cart2.image)}
            alt="Beauty & Care"
            className=" w-full h-full object-cover rounded-lg"
          />
        </Link>

        {/* Right Side (50% width) - 2 stacked boxes */}
        <div className="flex flex-col gap-4 col-span-2">
          <Link
            to={`${cart4.link ?? "#"}`}
            className="relative text-white rounded-lg flex flex-col justify-center items-start"
          >
            <img
              src={imagePath(cart4.image)}
              alt="Check This Out"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>

          <Link
            to={`${cart5.link ?? "#"}`}
            className="relative text-white rounded-lg flex flex-col justify-center items-start"
          >
            <img
              src={imagePath(cart5.image)}
              alt="Body Lotion"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>
      </div>
      <Link
        to={`${cart3.link ?? "#"}`}
        className="relative lg:hidden text-white rounded-lg w-full mt-5 flex flex-col justify-center items-start"
      >
        <img
          // src={`${baseURL + cart3.image}`}
          src={imagePath(cart3.image)}
          alt="Discount"
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      {/* Large Screens View */}
      <div className="hidden lg:block mt-8 space-y-8">
        <div className="flex gap-8">
          {/* Left: Slider */}
          <div className="relative w-[765px] h-[343px] rounded-lg overflow-hidden">
            <Slider {...sliderSettings} className="pointer-events-auto">
              {cart1?.images?.map((image, index) => (
                <Link
                  to={`${cart1.link ?? "#"}`}
                  key={index}
                  className="relative w-full"
                >
                  <img
                    // src={`${baseURL + image?.image}`}
                    src={imagePath(image?.image)}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-[343px] object-cover"
                  />
                </Link>
              ))}
            </Slider>
          </div>

          {/* Right: Beauty & Care Section */}
          <Link
            to={`${cart2.link ?? "#"}`}
            className="relative p-8 rounded-lg flex flex-col justify-between items-center w-[420px] h-[343px]"
          >
            <img
              // src={`${baseURL + cart2.image}`}
              src={imagePath(cart2.image)}
              alt="Beauty & Care"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>

        {/* Bottom Row */}
        <div className="flex gap-8">
          <Link
            to={`${cart3.link ?? "#"}`}
            className="relative text-white rounded-lg w-[676px] flex flex-col justify-center items-start"
          >
            <img
              // src={`${baseURL + cart3.image}`}
              src={imagePath(cart3.image)}
              alt="Discount"
              className="transform w-full h-full object-cover rounded-lg"
            />
          </Link>

          <Link
            to={`${cart4.link ?? "#"}`}
            className="relative text-white rounded-lg w-[238px] flex flex-col justify-center items-start"
          >
            <img
              // src={`${baseURL + cart4.image}`}
              src={imagePath(cart4.image)}
              alt="Check This Out"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>

          <Link
            to={`${cart5.link ?? "#"}`}
            className="relative text-white rounded-lg w-[238px] flex flex-col justify-center items-start"
          >
            <img
              // src={`${baseURL + cart5.image}`}
              src={imagePath(cart5.image)}
              alt="Body Lotion"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerCollection;
