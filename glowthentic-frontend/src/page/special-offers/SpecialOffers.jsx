import image3 from "../../assets/img/special-offer/Eves-Banner.jpg";
import image4 from "../../assets/img/special-offer/Eves-Banner-2.jpg";

const SpecialOffers = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-3">
        <div className="w-full">
          <picture>
            {/* Large Devices (1024px and up) */}
            <source media="(min-width: 1024px)" srcSet={image3} />
            {/* Small Devices (default) */}
            <img
              src={image4}
              alt="Special Offer 1"
              className="w-full h-full "
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
