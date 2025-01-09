
import Container from "../../components/Container";
import { Icon } from "@iconify/react";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import Badge from "../../components/typography/Badge";

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
        <h2>This is Home Page</h2>
        <div className="py-5">
        <Badge>
           Save 50%
        </Badge>
        </div>
        <Icon icon="solar:airbuds-remove-outline" width="24" height="24" />
      </Container>
    </div>
  );
};

export default HomePage;
