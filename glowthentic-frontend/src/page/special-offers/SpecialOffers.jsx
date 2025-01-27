import Container from "../../components/Container";

import image1 from "../../assets/img/special-offer/13.png";
import image2 from "../../assets/img/special-offer/14.png";
// import DynamicHelmet from "../../components/helmet/DynamicHelmet";
const SpecialOffers = () => {
  return (
    <div>
      {/* <DynamicHelmet title="Special Offers" /> */}
      <Container>
        <div className="flex flex-wrap mt-3 ">
          <div className="w-full px-5 lg:px-2  sm:w-1/2">
            <img
              src={image1}
              alt="Special Offer 1"
              className="w-full h-full "
            />
          </div>
          <div className="w-full sm:w-1/2">
            <img
              src={image2}
              alt="Special Offer 2"
              className="w-full h-full "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffers;
