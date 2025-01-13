
import Container from "../../components/Container";
import { Icon } from "@iconify/react";
import Badge from "../../components/typography/Badge";
import Toggle from "../../components/typography/Toggle";
import Checkbox from "../../components/typography/Checkbox";
import WishlistButton from "../../components/typography/WishlistButton";
import IncrementDecrement from "../../components/typography/IncrementDecrement";
import HomeSlider from "../../components/slider/HomeSlider";
import BannerSection from "./BannerSection";


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
    </div>
  );
};

export default HomePage;
