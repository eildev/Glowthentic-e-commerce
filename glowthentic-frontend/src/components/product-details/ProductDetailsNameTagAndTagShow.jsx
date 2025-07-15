import capitalizeText from "../../utils/capitalizeText";
import ShowRating from "../rating/ShowRating";
import HeadTitle from "../typography/HeadTitle";

const ProductDetailsNameTagAndTagShow = ({ data }) => {
  const reviews = data?.data?.reviews ?? [];

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

  return (
    <div className="w-full mt-4 p-2 sm:p-0">
      <HeadTitle className="mb-2">
        {capitalizeText(data?.data?.product_name) ?? ""}
      </HeadTitle>
      <h4
        className="font-bold line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: data?.data?.productdetails?.short_description,
        }}
      ></h4>
      <p>
        <span className="font-thin text-sm text-gray">
          {data?.data?.product_tags.map(
            (tagData, index) =>
              `${tagData?.tag?.tagName ?? ""}${
                index < data.data.product_tags.length - 1 ? " | " : ""
              }`
          )}
        </span>
      </p>
      <div className="my-2">
        <ShowRating rating={rating} width={80} length={reviews?.length} />
      </div>
    </div>
  );
};

export default ProductDetailsNameTagAndTagShow;
