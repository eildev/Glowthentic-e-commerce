import { Rating, Star } from "@smastrom/react-rating";

const ShowRating = ({ rating, width }) => {
  const customStyles = {
    itemShapes: Star,
    boxBorderWidth: 0,
    activeFillColor: "#FA8232",
    inactiveFillColor: "#AFAFAF",
  };
  return (
    <div className="flex items-center text-sm lg:text-lg gap-2 text-dark font-semibold font-encode">
      <Rating
        value={rating}
        style={{ maxWidth: width }}
        itemStyles={customStyles}
        readOnly
      />{" "}
      {rating}
    </div>
  );
};

export default ShowRating;
