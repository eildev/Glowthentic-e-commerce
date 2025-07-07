import { useState } from "react";
import { imagePath } from "../../utils/imagePath";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBannerImage = ({ banner }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image load event
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <Link to={`${banner?.link ?? "#"}`} className="relative w-full h-full">
      {/* Skeleton Loader */}
      {!isImageLoaded && (
        <div className="skeleton bg-slate-200 animate-pulse w-full h-[400px]"></div>
      )}

      {/* Image */}
      <picture
        className={`w-full ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
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
          className="w-full image-responsive object-cover"
          alt="Slider Image"
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </picture>
    </Link>
  );
};

export default HomeBannerImage;
