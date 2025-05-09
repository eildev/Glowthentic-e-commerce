import { imagePath } from "../utils/imagePath";

const HomeBannerImage = ({ banner }) => {
  return (
    <picture className="w-full">
      {/* Extra Large Devices (1920px and up) */}
      <source
        media="(min-width: 1440px)"
        srcSet={imagePath(banner.extra_large_image)}
      />
      {/* Large Devices (1024px and up) */}
      <source
        media="(min-width: 1024px)"
        srcSet={imagePath(banner.large_image)}
      />
      {/* Medium Devices (654px and up) */}
      <source
        media="(min-width: 654px)"
        srcSet={imagePath(banner.medium_image)}
      />
      {/* Small Devices (default) */}
      <img
        src={imagePath(banner.small_image)}
        className="w-full lg:h-[737px] h-full"
        alt="Slider Image"
      />
    </picture>
  );
};

export default HomeBannerImage;
