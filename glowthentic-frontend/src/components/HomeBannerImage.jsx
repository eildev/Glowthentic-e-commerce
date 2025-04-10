import React from "react";
import { imagePath } from "../utils/imagePath";

const HomeBannerImage = ({ imgLink }) => {
  const homeImage = imagePath(imgLink);
  return (
    <img
      src={homeImage}
      className="w-full object-center object-cover lg:h-[537px] h-[350px]"
      alt="Slider Image"
    />
  );
};

export default HomeBannerImage;
