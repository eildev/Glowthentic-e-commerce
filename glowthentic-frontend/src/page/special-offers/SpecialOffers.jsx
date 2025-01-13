import Container from "../../components/Container";
import HeadTitle from "../../components/typography/HeadTitle";
import images from "../../assets/img/special-offer/13.png";
const SpecialOffers = () => {
  return (
    <div>
      <Container>
        <div className="flex ">
            <img src={images} alt="" />
          <div>
            <HeadTitle>Special offers</HeadTitle>
            <HeadTitle>Save up to 50%</HeadTitle>
            <p>
              Mother’s Day is coming! For everything she’s given you, It s time
              to give back. Shower her with love, happiness, and the best of
              Beautya.
            </p>
            <p>
              visit your local beautya branches to find out more about our
              special offers in make up and skincare products.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffers;
