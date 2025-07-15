import { Rating, Star } from "@smastrom/react-rating";

const ShowRating = ({ rating, width, length }) => {
  const customStyles = {
    itemShapes: Star,
    boxBorderWidth: 0,
    activeFillColor: "#FA8232",
    inactiveFillColor: "#AFAFAF",
  };
  return (
    <>
      {length > 0 ? (
        <div className="flex items-center text-xs lg:text-sm gap-2 text-primary font-semibold font-encode">
          <Rating
            value={rating}
            style={{ maxWidth: width }}
            itemStyles={customStyles}
            readOnly
          />{" "}
          {rating} <span className="text-gray"> | {length} Reviews</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ShowRating;
