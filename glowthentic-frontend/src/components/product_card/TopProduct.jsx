import RoundedIcon from "../typography/RoundedIcon";
import image from "../../assets/img/Product/20.png"
import Paragraph from "../typography/Paragraph";
import HeadTitle from "../typography/HeadTitle";
const TopProduct = () => {
  return (
    <div>
      <div className="card bg-light w-96 shadow-xl rounded-[30px]">
        <figure className="relative">
          <img
            className="h-[380px] object-cover py-5"
            src={image}
            alt="Shoes"
          />

          <span className="bg-secondary text-white px-5 py-1 rounded-r-[25px] absolute top-[30px] left-0 font-semibold">
            Save 50%
          </span>
          <RoundedIcon className="absolute bottom-[20px] right-5" iconName="bi:cart4"/>
          <RoundedIcon className="absolute bg-gray-light top-[30px] right-5" iconName="proicons:heart"/>
        </figure>

        <div className="card-body items-center text-center bg-primary text-white rounded-b-[30px]">
          <HeadTitle className="text-white">Beautya Capture Total Dreamskin Care & Perfect</HeadTitle>
          <Paragraph className="text-md">
          Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration
            </Paragraph>
          <Paragraph className="text-xl text-secondary">
          <span>৳760.00</span>
            </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
