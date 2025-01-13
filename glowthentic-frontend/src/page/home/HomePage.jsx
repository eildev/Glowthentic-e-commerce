
import Container from "../../components/Container";

import ScrolTop from "../../components/ScrolTop";
import OnlineChatButton from "../../components/OnlineChatButton";
import HomeSlider from "../../components/slider/HomeSlider";
import BannerSection from "./BannerSection";
import TopProducts from "./TopProducts";


const HomePage = () => {
  return (
    <div>
      {/*--------- HomeSlider Section -----------*/}
      <HomeSlider></HomeSlider>
      <Container>
        {/*--------- Banner Section -----------*/}
        <BannerSection />

        <TopProducts></TopProducts>
      </Container>
      {/*---------  OnlineChatButton -----------*/}
      <OnlineChatButton></OnlineChatButton>
      {/*---------  ScrolTop -----------*/}
      <ScrolTop></ScrolTop>
    </div>
  );
};

export default HomePage;
