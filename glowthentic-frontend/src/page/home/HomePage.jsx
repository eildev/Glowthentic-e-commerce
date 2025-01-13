
import Container from "../../components/Container";

import ScrolTop from "../../components/ScrolTop";
import OnlineChatButton from "../../components/OnlineChatButton";
import HomeSlider from "../../components/slider/HomeSlider";
import BannerSection from "./BannerSection";


const HomePage = () => {
  return (
    <div>
      {/*--------- HomeSlider Section -----------*/}
      <HomeSlider></HomeSlider>
      <Container>
        {/*--------- Banner Section -----------*/}
        <BannerSection />
      </Container>
      {/*---------  OnlineChatButton -----------*/}
      <OnlineChatButton></OnlineChatButton>
      {/*---------  ScrolTop -----------*/}
      <ScrolTop></ScrolTop>
    </div>
  );
};

export default HomePage;
