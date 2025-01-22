// import HeadTitle from "../../components/typography/HeadTitle";
// import Banner from "../../components/banner/Banner";
// import RegularButton from "../../components/typography/RegularButton";
import bannerImage1 from "../../assets/img/banner/b1.png";
import bannerImage2 from "../../assets/img/banner/b2.png";
import bannerImage3 from "../../assets/img/banner/b3.png";
import bannerImage4 from "../../assets/img/banner/b4.png";
// import bannerImage5 from "../../assets/img/banner/banner-image-5.png";
import DynamicBanner from "../../components/banner/DynamicBanner";

const data = [
  {
    title: "Free Shipping Beauty",
    details: "",
    price: "",
    button: "book now",
    url: "#",
    image: bannerImage1,
    colspan: 2,
  },
  {
    title: "Beauty & Care",
    details: "",
    price: "",
    button: "Discover Now",
    url: "#",
    image: bannerImage2,
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: bannerImage3,
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: bannerImage4,
    colspan: 2,
  },
  {
    title: "Get Your 50% Off",
    details: "Nourish your skin with toxin-free cosmetic products.",
    price: "",
    button: "Shop Now",
    url: "#",
    image: bannerImage4,
    colspan: 2,
  },
];

const BannerSection = () => {
  return (
    <div className=" px-5 py-5  flex flex-wrap justify-center gap-2 ">
      {data.map((element, index) => (
        <div key={index} className="flex basis-[45%] lg:basis-[24.5%]">
          <DynamicBanner
            image={element?.image}
            className="lg:rounded-lg rounded-none text-center object-cover text-white h-[180px] lg:h-[300px]"
          ></DynamicBanner>
        </div>
      ))}
    </div>
  );
};

export default BannerSection;
