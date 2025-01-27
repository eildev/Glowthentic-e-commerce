import { Icon } from "@iconify/react";
import { useState } from "react";
import OrderReviewModal from "./OrderReviewModal";

const OrderCard = ({ status }) => {
  const [active, setActive] = useState(false);
  const clickHandle = () => {
    setActive(true);
    document.getElementById("my_modal_3").showModal();
  };


  return (
    <div className="border-b border-b-gray-light py-8">
      <div>
        <h3 className="text-lg md:text-2xl text-dark font-bold font-encode">
          No Order : #123456
        </h3>
        <p className="flex capitalize justify-between items-center text-md md:text-lg text-dark font-semibold font-encode bg-hr-thin py-2 px-4 my-2">
          {status}
          <Icon className="w-4 h-4 md:w-6 md:h-6" icon={"mdi-light:clock"} />
          <Icon
            className="hidden w-4 h-4 md:w-6 md:h-6"
            icon={"mdi-light:truck"}
          />
          <Icon
            className="hidden w-4 h-4 md:w-6 md:h-6"
            icon={"mdi-light:check-circle"}
          />
        </p>
        <p className="text-sm md:text-md text-gray font-normal font-encode">
          20 Apr 2022, 05:00 PM
        </p>
        <p className="text-xl my-2 md:text-2xl text-dark font-semibold font-encode">
          $59,66
        </p>

        {/* Give Review Button */}
        {
          status === 'done' ? <button
            className={`${active
              ? "text-white bg-secondary"
              : "text-dark bg-white border border-gray-light"
              } w-full uppercase rounded-md md:rounded-none py-3 text-sm md:text-md`}
            onClick={() => clickHandle()}
          >
            Give Review
          </button> : ""
        }
      </div>

      {/* give review modal */}
      <OrderReviewModal />
    </div>
  );
};

export default OrderCard;
