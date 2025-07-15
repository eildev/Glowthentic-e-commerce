// import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const EmptyOrder = ({ message, ctaText, ctaLink, image }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-5 bg-white rounded-md shadow-sm border border-gray-light">
      {/* Empty State Icon */}
      {/* <Icon icon="mdi:cart-outline" className="w-16 h-16 text-gray-400 mb-4" /> */}
      <img
        src={image}
        alt="empty image"
        className="max-h-[250px] object-contain"
      />
      {/* Message */}
      <h3 className="text-lg md:text-xl text-dark font-semibold font-encode mb-2">
        {message}
      </h3>
      <p className="text-sm md:text-md text-gray-500 font-normal font-encode mb-6 text-center">
        Start exploring our products to place your first order or check your
        order history.
      </p>
      {/* Call-to-Action Button */}
      <Link
        to={ctaLink}
        className="text-white bg-primary uppercase rounded-md py-3 px-6 text-sm md:text-md font-semibold font-encode hover:bg-primary-dark transition-colors"
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default EmptyOrder;
