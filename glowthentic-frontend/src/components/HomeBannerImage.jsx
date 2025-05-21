import { imagePath } from "../utils/imagePath";

const HomeBannerImage = ({ banner }) => {
  return (
    <picture className="w-full">
      <source
        media="(min-width: 1140px)"
        srcSet={imagePath(banner.extra_large_image)}
      />
      <source
        media="(min-width: 1024px)"
        srcSet={imagePath(banner.large_image)}
      />
      <source
        media="(min-width: 654px)"
        srcSet={imagePath(banner.medium_image)}
      />
      <img
        src={imagePath(banner.small_image)}
        className="w-full h-[465px] object-cover"
        alt="Slider Image"
        loading="lazy"
      />
    </picture>
  );
};

export default HomeBannerImage;
