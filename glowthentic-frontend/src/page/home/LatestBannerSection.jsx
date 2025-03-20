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
import { useGetFeaturesQuery } from "../../redux/features/api/featuresApi/featuresApi";
import { imagePath } from "../../utils/imagePath";
const LatestBannerSection = () => {
  const { data: offerData } = useGetFeaturesQuery();
  console.log(offerData);
  const bannerData = [
    { title: offerData?.features[0]?.feature_name, image: offerData?.features[0]?.image, badgeColor: "#FAE3F9", colSpan: "lg:col-span-2" }, // Large banner
    { title: offerData?.features[1]?.feature_name, image: offerData?.features[1]?.image, badgeColor: "#E3F0FA" },
    { title: offerData?.features[2]?.feature_name, image: offerData?.features[2]?.image, badgeColor: "#E8FAE3" },
    { title: offerData?.features[3]?.feature_name, image: offerData?.features[3]?.image, badgeColor: "#FAE3F9" },
    { title: offerData?.features[4]?.feature_name, image: offerData?.features[4]?.image, badgeColor: "#E8FAE3" },
    { title: offerData?.features[5]?.feature_name, image: offerData?.features[5]?.image, badgeColor: "#E3F0FA", colSpan: "lg:col-span-2" }, // Large banner
  ];
  return (
    <div className="px-5 py-5">
      <HeadTitle className="text-center mb-5 lg:text-3xl">
        Discover the Latest <br /> Beauty Trends
      </HeadTitle>
      {/* <div className="py-5  flex flex-wrap justify-center gap-2 ">
        {data.map((element, index) => (
          <div key={index} className="flex basis-[100%] lg:basis-[32.9%]">
            <DynamicBanner
              image={element?.image}
              className="lg:rounded-lg rounded-none text-center object-cover w-full text-white h-[180px] lg:h-[200px]"
            ></DynamicBanner>
          </div>
        ))}
      </div> */}
      {/* <div className="grid lg:grid-cols-4 gap-5 ">
                <div className="lg:col-span-2 relative">
                    <img src={imagePath(offerData?.features[0]?.image)} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <div className="rounded-3xl bg-[#FAE3F9] px-5 py-2 font-medium">New</div>
                    </div>
                </div>
                <div className="relative">
                    <img src={imagePath(offerData?.features[1]?.image)} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <div className="rounded-3xl bg-[#E3F0FA] px-5 py-2 font-medium shadow-md">New</div>
                    </div>
                </div>
                <div className="relative">
                    <img src={imagePath(offerData?.features[2]?.image)} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <div className="rounded-3xl bg-[#E8FAE3] px-5 py-2 font-medium">New</div>
                    </div>
                </div>
                <div className="relative">
                    <img src={imagePath(offerData?.features[2]?.image)} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <div className="rounded-3xl bg-[#FAE3F9] px-5 py-2 font-medium">New</div>
                    </div>
                </div>
                <div className="relative ">
                    <img src={imagePath(offerData?.features[1]?.image)} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <div className="rounded-3xl bg-[#E8FAE3] px-5 py-2 font-medium">New</div>
                    </div>
                </div>
                <div className="lg:col-span-2 relative ">
                    <img src={imagePath(offerData?.features[0]?.image)} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <div className="rounded-3xl bg-[#E3F0FA] px-5 py-2 font-medium">New</div>
                    </div>
                </div>
            </div> */}
      <div className="grid lg:grid-cols-4 gap-5">
        {bannerData?.slice(0, 6).map((banner, index) => (
          <div key={index} className={`relative ${banner.colSpan || ""}`}>
            <img src={imagePath(banner.image)} alt="Latest Banner" className="w-full h-auto" />
            <div className="absolute top-5 left-5 z-10">
              <div
                className="rounded-3xl px-5 py-2 font-medium"
                style={{ backgroundColor: banner.badgeColor }}
              >
                {banner?.title ?? ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBannerSection;
