import HeadTitle from "../../components/typography/HeadTitle";
import image1 from "../../assets/img/latest-banner/h1.webp";
import image2 from "../../assets/img/latest-banner/h2.webp";
import image3 from "../../assets/img/latest-banner/h3.webp";
import image4 from "../../assets/img/latest-banner/h4.webp";
import image5 from "../../assets/img/latest-banner/h5.webp";
import image6 from "../../assets/img/latest-banner/h6.gif";
// import Badge from "../../components/typography/Badge";
const data = [
  {
    image: image1,
  },
  {
    image: image3,
  },
  {
    image: image2,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
];

// import Banner from "../../components/banner/Banner";

import DynamicBanner from "../../components/banner/DynamicBanner";
import { useGetOfferBannerQuery } from "../../redux/features/api/offerBanner/offerBanner";
const LatestBannerSection = () => {
  const {data: offerData} = useGetOfferBannerQuery()
  console.log(offerData);
  return (
    <div className="px-5 py-5">
      <HeadTitle className="text-center mb-5 lg:text-3xl">
        Discover the Latest <br /> Beauty Trends
      </HeadTitle>
      <div className="py-5  flex flex-wrap justify-center gap-2 ">
        {data.map((element, index) => (
          <div key={index} className="flex basis-[100%] lg:basis-[32.9%]">
            <DynamicBanner
              image={element?.image}
              className="lg:rounded-lg rounded-none text-center object-cover w-full text-white h-[180px] lg:h-[200px]"
            ></DynamicBanner>
          </div>
        ))}
      </div>
      {/* <div className="grid lg:grid-cols-4 gap-5 ">
                <div className="lg:col-span-2 relative">
                    <img src={image1} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
                <div className="relative">
                    <img src={image2} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium shadow-md">New</Badge>
                    </div>
                </div>
                <div className="relative">
                    <img src={image3} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
                <div className="relative">
                    <img src={image2} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
                <div className="relative">
                    <img src={image3} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
                <div className="lg:col-span-2 relative">
                    <img src={image1} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default LatestBannerSection;
