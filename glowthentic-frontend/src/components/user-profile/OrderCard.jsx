import { Icon } from "@iconify/react";
import { useState } from "react";
import OrderReviewModal from "./OrderReviewModal";

const OrderCard = ({ status, order, history, historyLoad, orderLoad }) => {
  const [active, setActive] = useState(false);

  const clickHandle = () => {
    setActive(true);
    document.getElementById("my_modal_3").showModal();
  };

console.log("history", history);
console.log("order", order);

  return (
    <>
      {status === "On Delivery" ? (
        orderLoad ? (
          <p className="text-center text-gray-500">Loading orders...</p>
        ) : order?.order?.length === 0 ? (
          <p className="text-center text-gray-500">
            আপনি এখনও কোনো অর্ডার করেননি।
          </p>
        ) : order?.order ? (
          [...order.order] // Create a copy before sorting
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((item, i) => {
              const formattedDate = new Date(item.created_at).toLocaleString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              );

              return (
                <div key={i} className="border-b border-b-gray-light py-8">
                  <div>
                    <h3 className="text-lg md:text-2xl text-dark font-bold font-encode">
                      No Order : #{item.invoice_number}
                    </h3>
                    <p className="flex capitalize justify-between items-center text-md md:text-lg text-dark font-semibold font-encode bg-hr-thin py-2 px-4 my-2">
                      {item.status}
                      <Icon
                        className="w-4 h-4 md:w-6 md:h-6"
                        icon="mdi-light:clock"
                      />
                      <Icon
                        className="hidden w-4 h-4 md:w-6 md:h-6"
                        icon="mdi-light:truck"
                      />
                      <Icon
                        className="hidden w-4 h-4 md:w-6 md:h-6"
                        icon="mdi-light:check-circle"
                      />
                    </p>
                    <p className="text-sm md:text-md text-gray font-normal font-encode">
                      {formattedDate}
                    </p>
                    <p className="text-xl my-2 md:text-2xl text-dark font-semibold font-encode">
                      ৳ {item.grand_total}
                    </p>
                  </div>
                </div>
              );
            })
        ) : (
          <p className="text-center text-gray-500">No data Available</p>
        )
      ) : historyLoad ? (
        <p className="text-center text-gray-500">Loading history...</p>
      ) : history?.length === 0 ? (
        <p className="text-center text-gray-500">
          আপনার কোনো অর্ডার ইতিহাস নেই।
        </p>
      ) : (
        [...history.order
        ] // Create a copy before sorting
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((item, i) => {
            const formattedDate = new Date(item.created_at).toLocaleString(
              "en-GB",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }
            );

            return (
              <div key={i} className="border-b border-b-gray-light py-8">
                <div>
                  <h3 className="text-lg md:text-2xl text-dark font-bold font-encode">
                    No Order : #{item.invoice_number}
                  </h3>
                  <p className="flex capitalize justify-between items-center text-md md:text-lg text-dark font-semibold font-encode bg-hr-thin py-2 px-4 my-2">
                    {item.status}
                    <Icon
                      className="w-4 h-4 md:w-6 md:h-6"
                      icon="mdi-light:clock"
                    />
                    <Icon
                      className="hidden w-4 h-4 md:w-6 md:h-6"
                      icon="mdi-light:truck"
                    />
                    <Icon
                      className="hidden w-4 h-4 md:w-6 md:h-6"
                      icon="mdi-light:check-circle"
                    />
                  </p>
                  <p className="text-sm md:text-md text-gray font-normal font-encode">
                    {formattedDate}
                  </p>
                  <p className="text-xl my-2 md:text-2xl text-dark font-semibold font-encode">
                    ৳ {item.grand_total}
                  </p>

                  {status === "done" && (
                    <button
                      className={`${
                        active
                          ? "text-white bg-secondary"
                          : "text-dark bg-white border border-gray-light"
                      } w-full uppercase rounded-md md:rounded-none py-3 text-sm md:text-md`}
                      onClick={clickHandle}
                    >
                      Give Review
                    </button>
                  )}
                  
      <OrderReviewModal item={item}/>
                </div>
              </div>
            );
          })
      )}

    </>
  );
};

export default OrderCard;
