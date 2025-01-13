
import Container from "../../components/Container";
import { Icon } from "@iconify/react";
import Badge from "../../components/typography/Badge";
import ScrolTop from "../../components/ScrolTop";
import OnlineChatButton from "../../components/OnlineChatButton";
import Toggle from "../../components/typography/Toggle";
import Checkbox from "../../components/typography/Checkbox";
import WishlistButton from "../../components/typography/WishlistButton";
import IncrementDecrement from "../../components/typography/IncrementDecrement";
import HomeSlider from "../../components/slider/HomeSlider";
import BannerSection from "./BannerSection";
import TopProducts from "./TopProducts";


const HomePage = () => {
  return (
    <div>
        <HomeSlider></HomeSlider>
      <Container>
        {/* <HeadTitle>
        <span>Discover the Latest <br />
        Beauty Trends
        </span>
        </HeadTitle>
        <RegularButton>
        Apply filters
        </RegularButton> */}
        <BannerSection/>
        <TopProducts></TopProducts>
      
       
        <h2>This is Home Page</h2>
        <div className="py-5">
        <Badge>
           Save 50%
        </Badge>
        
        </div>
        <Toggle></Toggle>
        <Checkbox></Checkbox>
        <WishlistButton></WishlistButton>
        <IncrementDecrement/>
        <Icon icon="solar:airbuds-remove-outline" width="24" height="24" />
      </Container>
      <OnlineChatButton></OnlineChatButton>
      <ScrolTop></ScrolTop>
    </div>
  );
};

export default HomePage;
