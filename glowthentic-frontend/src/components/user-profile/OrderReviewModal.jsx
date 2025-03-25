import { Icon } from "@iconify/react";
import { useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import f4 from "../../assets/img/user-profile/f4.jpeg";

function getRating(rating) {
  switch (rating) {
    case 1:
      return "Poor";
    case 2:
      return "Nothing special";
    case 3:
      return "Average";
    case 4:
      return "Very good";
    case 5:
      return "Excellent";
    default:
      return "None";
  }
}

const OrderReviewModal = ({item}) => {
  const [rating, setRating] = useState(3);

  const customStyles = {
    itemShapes: Star,
    boxBorderWidth: 0,

    activeFillColor: "#FA8232",

    inactiveFillColor: "#AFAFAF",
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box rounded-lg md:min-w-[700px] p-8">
        <form
          className="flex items-center justify-between mb-4"
          method="dialog"
        >
          <h3 className="text-md md:text-lg font-bold font-encode text-secondary">
            Give Review
          </h3>
          <button className="cursor-pointer">✕</button>
        </form>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col w-full md:w-3/12">
            {/* image */}
            <div className="w-full">
              <img className="object-cover" src={f4} alt="" />
            </div>
            {/* text */}
            <div className="pl-4 md:pl-0 md:mt-4">
              <h5 className="text-sm md:text-lg text-dark font-bold font-encode">
                {item.id}
              </h5>
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-md text-gray font-normal font-encode">
                  Makeup
                </p>
                <p className="flex items-center text-sm md:text-md text-dark font-semibold font-encode">
                  <Icon
                    className="w-4 h-4 md:w-6 md:h-6 text-secondary"
                    icon={"mdi:star"}
                  />
                  4.5
                </p>
              </div>
              <p className="text-sm md:text-xl text-dark font-semibold font-encode">
                $59,66
              </p>
            </div>
          </div>
          {/* ratings */}
          <div className="md:w-9/12 md:pl-8 mt-4 md:mt-0">
            <form>
              <p className="text-sm md:text-md text-dark font-medium font-encode mb-2">
                Star
              </p>

              {/* rating star  */}
              <div
                style={{
                  // maxWidth: 300,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  value={rating}
                  itemStyles={customStyles}
                  style={{ maxWidth: 150 }}
                  onChange={setRating}
                />
                <p className="text-md md:text-lg text-gray-thin font-medium font-encode pl-2 pt-1">{`${getRating(
                  rating
                )}!`}</p>
              </div>

              <p className="text-sm md:text-md text-dark font-medium font-encode mt-6 mb-2">
                Review
              </p>
              <input
                type="text"
                className="w-full p-2 text-dark font-encode border border-gray-light rounded-sm outline-none"
                placeholder="review"
              />

              <button
                type="submit"
                className="py-4 w-full text-white bg-secondary rounded mt-6 uppercase"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default OrderReviewModal;
