import Container from "../../components/Container";
import CategorySection from "../category-section/CategorySection";
import TagSection from "../tag-section/TagSection";
import SpecialOffers from "../special-offers/SpecialOffers";
import HomeSlider from "./HomeSlider";
import LatestBannerSection from "./LatestBannerSection";
import TopProductsSection from "./TopProductsSection";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import BannerCollection from "./BannerCollection";
import { useSelector } from "react-redux";
const HomePage = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);

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
        <CategorySection />
        {/* <LatestBannerSection /> */}
        <TagSection />
        <div className="my-10 lg:my-20">
          <TopProductsSection></TopProductsSection>
        </div>
      </Container>
      <div className="bg-[#FBEFF2]">
        <SpecialOffers></SpecialOffers>
      </div>
    </div>
  );
};

export default HomePage;
