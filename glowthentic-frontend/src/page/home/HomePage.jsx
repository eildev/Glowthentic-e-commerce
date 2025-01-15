import Container from "../../components/Container";
import ScrolTop from "../../components/ScrolTop";
import OnlineChatButton from "../../components/OnlineChatButton";

import BannerSection from "./BannerSection";
import TopProducts from "./TopProducts";
import CategorySection from "../category-section/CategorySection";
import TagSection from "../tag-section/TagSection";
import SpecialOffers from "../special-offers/SpecialOffers";
import HomeSlider from "./HomeSlider";

const HomePage = () => {
  return (
    <div>
      {/*--------- HomeSlider Section -----------*/}
    <HomeSlider></HomeSlider>
      <Container>
        {/*--------- Banner Section -----------*/}
        <BannerSection />

        <TopProducts></TopProducts>
        <CategorySection />
        <TagSection />
       
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
