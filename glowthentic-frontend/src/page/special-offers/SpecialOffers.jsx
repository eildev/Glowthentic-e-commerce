import Container from "../../components/Container";

import image1 from "../../assets/img/special-offer/13.png";
import image2 from "../../assets/img/special-offer/14.png";
const SpecialOffers = () => {
  return (
    <div >
      <Container>
        <div className="flex flex-wrap mt-3 ">
          <div className="w-full sm:w-1/2">
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
