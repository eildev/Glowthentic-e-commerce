import Container from "../../components/Container";
import ScrolTop from "../../components/ScrolTop";
import OnlineChatButton from "../../components/OnlineChatButton";

import BannerSection from "./BannerSection";
import CategorySection from "../category-section/CategorySection";
import TagSection from "../tag-section/TagSection";
import SpecialOffers from "../special-offers/SpecialOffers";
import HomeSlider from "./HomeSlider";
import LatestBannerSection from "./LatestBannerSection";
import TopProductsSection from "./TopProductsSection";
const HomePage = () => {
  return (
    <div>
      {/*--------- HomeSlider Section -----------*/}
    <HomeSlider></HomeSlider>
      <Container>
        {/*--------- Banner Section -----------*/}
        <BannerSection />
        {/*--------- Banner Section -----------*/}
        <LatestBannerSection/>

        <CategorySection />
        <TopProductsSection></TopProductsSection>
        <TagSection />
        {/* <TopProducts></TopProducts> */}
      </Container>
      <div className="bg-[#FBEFF2]">
       <SpecialOffers></SpecialOffers>
       </div>
      {/*--------- OnlineChatButton  -----------*/}
      <OnlineChatButton></OnlineChatButton>
      {/*---------  ScrolTop -----------*/}
      <ScrolTop></ScrolTop>
    </div>
  );
};

export default HomePage;
