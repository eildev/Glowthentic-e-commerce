import { useEffect, useState } from "react";
import capitalizeText from "../../utils/capitalizeText";
import ShowRating from "../rating/ShowRating";
import HeadTitle from "../typography/HeadTitle";
import { Icon } from "@iconify/react";
import ProductDetailsNameTagAndTagShowSkeleton from "./ProductDetailsNameTagAndTagShowSkeleton";

const ProductDetailsNameTagAndTagShow = ({ data, isLoading }) => {
  const reviews = data?.data?.reviews ?? [];
  const [liveView, setLiveView] = useState(Math.floor(Math.random() * 50) + 1);

  const rating =
    reviews.length > 0
      ? parseFloat(
          (
            reviews.reduce(
              (accumulator, currentValue) =>
                accumulator + (currentValue.rating || 0),
              0
            ) / reviews.length
          ).toFixed(2)
        )
      : 0.0;

  //   console.log("rating", rating);

  useEffect(() => {
    let timeout;

    const updateLiveView = () => {
      setLiveView((prev) => {
        // Generate random change (1 to 9)
        const change = Math.floor(Math.random() * 9) + 1;
        // Randomly decide to increase or decrease (50% chance each)
        const isIncrease = Math.random() < 0.5;
        // Calculate new value
        let newValue = isIncrease ? prev + change : prev - change;
        // Clamp value between 1 and 50
        newValue = Math.max(1, Math.min(50, newValue));
        return newValue;
      });

      // Generate random interval between 3 and 8 seconds (3000–8000 ms)
      const nextInterval = Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000;
      // Schedule next update
      timeout = setTimeout(updateLiveView, nextInterval);
    };

    // Start the first update
    updateLiveView();

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  if (isLoading) return <ProductDetailsNameTagAndTagShowSkeleton />;

  return (
    <div className="w-full mt-4 p-2 sm:p-0">
      <HeadTitle className="mb-2">
        {capitalizeText(data?.data?.product_name) ?? ""}
      </HeadTitle>
      <h4
        className="font-thin line-clamp-3 text-gray"
        dangerouslySetInnerHTML={{
          __html: data?.data?.productdetails?.short_description,
        }}
      ></h4>

      <p>
        <span className="font-semibold text-sm">
          {data?.data?.product_tags.map(
            (tagData, index) =>
              `${tagData?.tag?.tagName ?? ""}${
                index < data.data.product_tags.length - 1 ? " | " : ""
              }`
          )}
        </span>
      </p>
      <p className="my-2 font-normal text-gray flex items-center gap-2 text-md">
        <span className="text-secondary flex items-center gap-1">
          <Icon icon="mdi:eye" />
          {liveView}
        </span>{" "}
        people viewing this product now
      </p>
      <div className="my-2">
        <ShowRating rating={rating} width={80} length={reviews?.length} />
      </div>
    </div>
  );
};

export default ProductDetailsNameTagAndTagShow;
