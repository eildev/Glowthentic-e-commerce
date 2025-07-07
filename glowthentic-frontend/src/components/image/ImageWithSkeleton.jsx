import { useState } from "react";
import cn from "../../utils/cn";

const ImageWithSkeleton = ({ children, className, skeletonClassName }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image load event
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Modify children to attach onLoad event
  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // For <img> tag
      if (child.type === "img") {
        return React.cloneElement(child, {
          onLoad: handleImageLoad,
          className: cn(
            child.props.className,
            isImageLoaded ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300"
          ),
        });
      }
      // For <picture> tag, modify the <img> inside
      if (child.type === "picture") {
        const pictureChildren = React.Children.map(
          child.props.children,
          (pictureChild) => {
            if (pictureChild.type === "img") {
              return React.cloneElement(pictureChild, {
                onLoad: handleImageLoad,
                className: cn(
                  pictureChild.props.className,
                  isImageLoaded ? "opacity-100" : "opacity-0",
                  "transition-opacity duration-300"
                ),
              });
            }
            return pictureChild;
          }
        );
        return React.cloneElement(child, {}, pictureChildren);
      }
    }
    return child;
  });

  return (
    <div className={cn("relative", className)}>
      {/* Skeleton Loader */}
      {!isImageLoaded && (
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse",
            skeletonClassName
          )}
          aria-hidden="true"
        ></div>
      )}
      {modifiedChildren}
    </div>
  );
};

export default ImageWithSkeleton;
