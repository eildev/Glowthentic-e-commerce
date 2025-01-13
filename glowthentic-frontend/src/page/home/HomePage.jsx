
import Container from "../../components/Container";
import { Icon } from "@iconify/react";
// import HeadTitle from "../../components/typography/HeadTitle";
// import RegularButton from "../../components/typography/RegularButton";
import Badge from "../../components/typography/Badge";
import Toggle from "../../components/typography/Toggle";
import Checkbox from "../../components/typography/Checkbox";
import WishlistButton from "../../components/typography/WishlistButton";
import IncrementDecrement from "../../components/typography/IncrementDecrement";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";


const HomePage = () => {
  return (
    <div>
      <Container>
        {/* <HeadTitle>
        <span>Discover the Latest <br />
        Beauty Trends
        </span>
        </HeadTitle>
        <RegularButton>
        Apply filters
        </RegularButton> */}
        <SidebarFilter></SidebarFilter>
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
