// import { Icon } from "@iconify/react";
// import OrderReviewModal from "./OrderReviewModal";
// import { useEffect, useState } from "react";
// import { useGetReviewInfoQuery } from "../../redux/features/api/review/reviewGetApi";
// import { useSelector } from "react-redux";

// const OrderCard = ({ status, order, history, historyLoad, orderLoad }) => {
//   const [reviewItem, setReviewItem] = useState(null);
//   const { user, token } = useSelector((state) => state.auth);
//   // const { data, isLoading, isError, error } = useGetReviewInfoQuery();

//   console.log(order?.data[0]?.order_status);

//   const clickHandle = (item) => {
//     setReviewItem(item);
//   };

//   useEffect(() => {
//     if (reviewItem) {
//       document.getElementById("my_modal_3").showModal();
//     }
//   }, [reviewItem]);

//   return (
//     <>
//       {status == "order" ? (
//         orderLoad ? (
//           <p className="text-center text-gray-500">Loading orders...</p>
//         ) : order?.data?.length === 0 ? (
//           <p className="text-center text-gray-500">
//             You haven`t placed any order yet.
//           </p>
//         ) : order?.data ? (
//           [...order?.data]
//             .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
//             .map((item, i) => {
//               const formattedDate = new Date(item.created_at).toLocaleString(
//                 "en-GB",
//                 {
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                 }
//               );

//               return (
//                 <div key={i} className="border-b border-b-gray-light py-8">
//                   <div>
//                     <h3 className="text-lg md:text-2xl text-dark font-bold font-encode">
//                       No Order : #{item?.invoice_number}
//                     </h3>
//                     <p className="flex capitalize justify-between items-center text-md md:text-lg text-dark font-semibold font-encode bg-hr-thin py-2 px-4 my-2">
//                       {item?.status}
//                       <Icon
//                         className="w-4 h-4 md:w-6 md:h-6"
//                         icon="mdi-light:clock"
//                       />
//                       <Icon
//                         className="hidden w-4 h-4 md:w-6 md:h-6"
//                         icon="mdi-light:truck"
//                       />
//                       <Icon
//                         className="hidden w-4 h-4 md:w-6 md:h-6"
//                         icon="mdi-light:check-circle"
//                       />
//                     </p>
//                     <p className="text-sm md:text-md text-gray font-normal font-encode">
//                       {formattedDate}
//                     </p>
//                     <p className="text-xl my-2 md:text-2xl text-dark font-semibold font-encode">
//                       ৳ {item?.grand_total}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })
//         ) : (
//           <p className="text-center text-gray-500">No data Available</p>
//         )
//       ) : historyLoad ? (
//         <p className="text-center text-gray-500">Loading history...</p>
//       ) : history?.length === 0 ? (
//         <p className="text-center text-gray-500">You have no order history.</p>
//       ) : (
//         [...history?.data]
//           .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
//           .map((item, i) => {
//             const formattedDate = new Date(item.created_at).toLocaleString(
//               "en-GB",
//               {
//                 day: "2-digit",
//                 month: "short",
//                 year: "numeric",
//                 hour: "2-digit",
//                 minute: "2-digit",
//                 hour12: true,
//               }
//             );

//             return (
//               <div key={i} className="border-b border-b-gray-light py-8">
//                 <div>
//                   <h3 className="text-lg md:text-2xl text-dark font-bold font-encode">
//                     No Order : #{item?.invoice_number}
//                   </h3>
//                   <p className="flex capitalize justify-between items-center text-md md:text-lg text-dark font-semibold font-encode bg-hr-thin py-2 px-4 my-2">
//                     {item?.status}
//                     <Icon
//                       className="w-4 h-4 md:w-6 md:h-6"
//                       icon="mdi-light:clock"
//                     />
//                     <Icon
//                       className="hidden w-4 h-4 md:w-6 md:h-6"
//                       icon="mdi-light:truck"
//                     />
//                     <Icon
//                       className="hidden w-4 h-4 md:w-6 md:h-6"
//                       icon="mdi-light:check-circle"
//                     />
//                   </p>
//                   <p className="text-sm md:text-md text-gray font-normal font-encode">
//                     {formattedDate}
//                   </p>
//                   <p className="text-xl my-2 md:text-2xl text-dark font-semibold font-encode">
//                     ৳ {item?.grand_total}
//                   </p>
//                   <button
//                     className={`
//                           text-white bg-secondary
//                       w-full uppercase rounded-md md:rounded-none py-3 text-sm md:text-md`}
//                     onClick={() => clickHandle(item)}
//                   >
//                     Give Review
//                   </button>

//                   <OrderReviewModal
//                     item={reviewItem}
//                     setReviewItem={setReviewItem}
//                   />
//                 </div>
//               </div>
//             );
//           })
//       )}
//     </>
//   );
// };

// export default OrderCard;
import { Icon } from "@iconify/react";
import OrderReviewModal from "./OrderReviewModal";
import { useEffect, useState } from "react";
import { useGetReviewInfoQuery } from "../../redux/features/api/review/reviewGetApi";
import { useSelector } from "react-redux";

const OrderCard = ({ status, order, history, historyLoad, orderLoad }) => {
  const [reviewItem, setReviewItem] = useState(null);
  const { user, token } = useSelector((state) => state.auth);

  console.log("Order:", order); // ডাটা স্ট্রাকচার দেখার জন্য
  console.log("History:", history); // ডাটা স্ট্রাকচার দেখার জন্য

  const clickHandle = (item) => {
    setReviewItem(item);
  };

  useEffect(() => {
    if (reviewItem) {
      document.getElementById("my_modal_3").showModal();
    }
  }, [reviewItem]);

  return (
    <>
      {status === "order" ? (
        orderLoad ? (
          <p className="text-center text-gray-500">Loading orders...</p>
        ) : !order?.data ||
          !Array.isArray(order?.data) ||
          order?.data.length === 0 ? ( // অ্যারে কিনা চেক করুন
          <p className="text-center text-gray-500">
            You haven't placed any order yet.
          </p>
        ) : (
          [...(order?.data || [])] // ডিফল্ট খালি অ্যারে
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
                      No Order : #{item?.invoice_number}
                    </h3>
                    <p className="flex capitalize justify-between items-center text-md md:text-lg text-dark font-semibold font-encode bg-hr-thin py-2 px-4 my-2">
                      {item?.status}
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
                      ৳ {item?.grand_total}
                    </p>
                  </div>
                </div>
              );
            })
        )
      ) : historyLoad ? (
        <p className="text-center text-gray-500">Loading history...</p>
      ) : !history?.data ||
        !Array.isArray(history?.data) ||
        history?.data.length === 0 ? ( // অ্যারে কিনা চেক করুন
        <p className="text-center text-gray-500">You have no order history.</p>
      ) : (
        [...(history?.data || [])] // ডিফল্ট খালি অ্যারে
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
                    No Order : #{item?.invoice_number}
                  </h3>
                  <p className="flex capitalize justify-between items-center text-md md:text-lg text-dark font-semibold font-encode bg-hr-thin py-2 px-4 my-2">
                    {item?.status}
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
                    ৳ {item?.grand_total}
                  </p>
                  <button
                    className={`
                          text-white bg-secondary
                      w-full uppercase rounded-md md:rounded-none py-3 text-sm md:text-md`}
                    onClick={() => clickHandle(item)}
                  >
                    Give Review
                  </button>

                  <OrderReviewModal
                    item={reviewItem}
                    setReviewItem={setReviewItem}
                  />
                </div>
              </div>
            );
          })
      )}
    </>
  );
};

export default OrderCard;
