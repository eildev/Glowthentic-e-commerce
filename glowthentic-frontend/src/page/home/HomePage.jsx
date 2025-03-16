import Container from "../../components/Container";
import CategorySection from "../category-section/CategorySection";
import TagSection from "../tag-section/TagSection";
import SpecialOffers from "../special-offers/SpecialOffers";
import HomeSlider from "./HomeSlider";
import LatestBannerSection from "./LatestBannerSection";
import TopProductsSection from "./TopProductsSection";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import BannerCollection from "./BannerCollection";
import { useGetOfferBannerQuery } from "../../redux/features/api/offerBanner/offerBanner";
const HomePage = () => {
  
  return (
    <div>
      <DynamicHelmet title="Home page" />
      {/*--------- HomeSlider Section -----------*/}
      <HomeSlider></HomeSlider>
      <Container>
        {/*--------- Banner Section -----------*/}
        {/* <BannerSection /> */}
        <BannerCollection></BannerCollection>
        {/*--------- Banner Section -----------*/}
        <LatestBannerSection />
        <CategorySection />
        <TagSection />
        <div className="my-10 lg:my-20">
          <TopProductsSection></TopProductsSection>
        </div>
        {/* <TopProducts></TopProducts> */}
      </Container>
      <div className="bg-[#FBEFF2]">
        <SpecialOffers></SpecialOffers>
      </div>
    </div>
  );
};

export default HomePage;
