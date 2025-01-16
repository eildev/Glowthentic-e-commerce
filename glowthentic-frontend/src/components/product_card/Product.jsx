import RoundedIcon from "../typography/RoundedIcon";
import defaultImage from "../../assets/img/Product/20.png";
import Paragraph from "../typography/Paragraph";
import HeadTitle from "../typography/HeadTitle";
import { Link } from "react-router-dom";
const Product = ({ product, isDark }) => {
  const {
    title,
    discountPercentage,
    description,
    thumbnail: image,
    price,
    stock,
  } = product;

  // Calculate discount and final price
  const discountAmount = discountPercentage
    ? Math.ceil((discountPercentage * price) / 100)
    : 0;
  const finalPrice = discountPercentage
    ? (price - discountAmount).toFixed(2)
    : price.toFixed(2);

  return (
    <Link
      to={`/product/${product}`}
      className="card w-auto bg-light hover:shadow-xl transition-all duration-300 ease-in-out transform rounded-[10px] lg:rounded-[30px] overflow-hidden"
    >
      <figure className="relative">
        <img
          className="lg:h-[380px] h-[180px] md:h-[280px] object-cover lg:py-5 py-2"
          src={image ?? defaultImage}
          alt="Shoes"
        />

        <span className="bg-secondary text-white lg:text-sm text-xs px-2 lg:px-5 py-1 rounded-r-[25px] absolute top-[20px] lg:top-[30px] left-0 font-semibold">
          {stock <= 0 ? "Stock Out" : `${discountPercentage}%`}
          {/* Stock Out */}
        </span>
        <RoundedIcon
          className="absolute bg-gray-light top-[15px] lg:top-[25px] right-3 lg:right-5 hover:bg-secondary hover:text-white "
          iconName="proicons:heart"
        />
        <RoundedIcon
          className="absolute bottom-[20px] right-5 cursor-pointer"
          iconName="bi:cart4"
        />

      </figure>

      <div
        className={`card-body px-3 lg:px-5 ${isDark
          ? "bg-primary text-white text-center"
          : "bg-white text-primary text-left "
          }`}
      >
        <HeadTitle
          className={`text-sm lg:text-lg ${isDark ? "text-white" : "text-primary"
            }`}
        >
          {title ?? "Beautya Capture Total Dreamskin Care & Perfect"}
        </HeadTitle>
        <Paragraph className="text-xs lg:text-sm">
          {description
            ? (window.innerWidth >= 1024
              ? description.slice(0, 80)
              : description.slice(0, 40) + "..."
            )
            : "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
          }
        </Paragraph>
        <div className={`flex gap-3 items-center ${isDark ? "text-center" : "text-left"}`}>
          <Paragraph className="lg:text-xl text-lg text-secondary">
            <span>{finalPrice}</span>
          </Paragraph>
          <Paragraph className="lg:text-sm text-xs text-gray-thin">
            <del>{price}</del>
          </Paragraph>
        </div>
      </div>
    </Link>
  );
};

export default Product;
