import Rating from "react-rating";
import { useGetReviewInfoQuery } from "../../redux/features/api/review/reviewGetApi";
import userImage from "../../assets/img/user-profile/avatar.jpeg";
import { imagePath } from "../../utils/imagePath";
import ShowRating from "../../components/rating/ShowRating";
import ProductReviewSkeleton from "../../components/product-details/ProductReviewSkeleton";

const ProductReviews = ({ data }) => {
  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useGetReviewInfoQuery(data?.data?.id);

  // console.log("product id", data?.data?.id);
  // console.log("reviews", reviews);

  return (
    <>
      {isLoading ? (
        <ProductReviewSkeleton />
      ) : isError ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <div className="mt-4 mb-[28px]">
          <h2 className="md:text-lg text-md text-[#242424] border-b border-[#242424] w-fit p-[10px] mb-6">
            Rate & review ({reviews?.reviews?.length ?? 0})
          </h2>
          {reviews?.reviews?.length > 0 ? (
            reviews.reviews.map((item, index) => (
              <div key={index} className="mb-[27px]">
                <div className="flex gap-[18px]">
                  <img
                    alt=""
                    src={
                      imagePath(item?.user?.user_details?.image) || userImage
                    }
                    className="w-[56px] object-cover h-[59px] rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className=" md:text-md text-sm font-medium text-[#565656]">
                        {item.user.name}
                      </h1>
                      <ShowRating rating={item?.rating} width={70} />
                    </div>
                    <p className="text-primary text-md md:text-lg mt-1">
                      {item?.review ?? ""}
                    </p>
                    <div className="flex flex-wrap gap-[18px] mt-[18px]">
                      {/* Uncomment and update if images array is available */}
                      {item.gallery?.map((image, i) => (
                        <img
                          className="md:w-[125px] w-[72px] md:h-[125px] h-[72px] border-2 duration-200 border-transparent object-cover rounded-sm "
                          key={i}
                          src={imagePath(image?.image)}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      )}
    </>
  );
};

export default ProductReviews;
