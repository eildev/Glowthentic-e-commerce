
import Container from "../../components/Container";

import ScrolTop from "../../components/ScrolTop";
import OnlineChatButton from "../../components/OnlineChatButton";
import HomeSlider from "../../components/slider/HomeSlider";
import BannerSection from "./BannerSection";
import CategorySection from "../category-section/CategorySection";
import TagSection from "../tag-section/TagSection";
import SpecialOffers from "../special-offers/SpecialOffers";
const HomePage = () => {
  return (
    <div>
      {/*--------- HomeSlider Section -----------*/}
      <HomeSlider></HomeSlider>
      <Container>
        {/*--------- Banner Section -----------*/}
        <BannerSection />
        <CategorySection/>
        <TagSection/>
      </Container>
      {/*---------  OnlineChatButton -----------*/}
      <OnlineChatButton></OnlineChatButton>
      {/*---------  ScrolTop -----------*/}
      <ScrolTop></ScrolTop>
    </div>
  );
};

export default HomePage;
