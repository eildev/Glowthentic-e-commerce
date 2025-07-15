// export default OrderCard;
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import OrderCardSkeleton from "./OrderCardSkeleton";
import { Link } from "react-router-dom";
import OrderReviewModal from "./OrderReviewModal";
import EmptyOrder from "./EmptyOrder";
import orderImage1 from "../../assets/img/order-confirmation/Online-shopping.png";
import orderImage2 from "../../assets/img/order-confirmation/no-order.webp";

const OrderCard = ({
  status,
  order,
  history,
  historyLoad,
  orderLoad,
  refetch,
}) => {
  const [reviewItem, setReviewItem] = useState(null);

  const clickHandle = (item) => {
    setReviewItem(item);
  };

  useEffect(() => {
    if (reviewItem) {
      document.getElementById("my_modal_3").showModal();
    }
  }, [reviewItem]);

  // console.log("History", history);
  return (
    <>
      {status === "order" ? (
        orderLoad ? (
          <>
            <OrderCardSkeleton />
            <OrderCardSkeleton />
          </>
        ) : !order?.data ||
          !Array.isArray(order?.data) ||
          order?.data.length === 0 ? (
          <EmptyOrder
            message="You haven't placed any order yet."
            ctaText="Browse Products"
            ctaLink="/products"
            image={orderImage1}
          />
        ) : (
          [...(order?.data || [])]
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
                <div
                  key={i}
                  className="border-b border-b-gray-light py-8 bg-white px-5 shadow-sm rounded-md"
                >
                  <div>
                    <h3 className="text-lg md:text-2xl text-dark font-bold font-encode">
                      Invoice No : #{item?.invoice_number}
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
                    <div className="flex justify-between items-center gap-5">
                      <Link
                        to={`/order-progress?orderId=${item.invoice_number}`}
                        className="text-white bg-primary
                      w-full uppercase rounded-md md:rounded-none py-3 text-sm md:text-md text-center"
                      >
                        Invoice
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
        )
      ) : historyLoad ? (
        <>
          <OrderCardSkeleton history={true} />
          <OrderCardSkeleton history={true} />
        </>
      ) : !history || !Array.isArray(history) || history?.length === 0 ? (
        <EmptyOrder
          message="You have no order history."
          ctaText="Shop Now"
          ctaLink="/products"
          image={orderImage2}
        />
      ) : (
        [...(history || [])]
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
              <div
                key={i}
                className="border-b border-b-gray-light py-8 bg-white px-5 shadow-sm rounded-md"
              >
                <div>
                  <h3 className="text-lg md:text-2xl text-dark font-bold font-encode">
                    Invoice No : #{item?.invoice_number}
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
                  <div className="flex justify-between items-center gap-5">
                    <Link
                      to={`/order-progress?orderId=${item.invoice_number}`}
                      className="text-white bg-primary
                      w-full uppercase rounded-md md:rounded-none py-3 text-sm md:text-md text-center"
                    >
                      Invoice
                    </Link>
                    <button
                      className={`
                          text-white ${
                            item?.reviews?.length > 0
                              ? "bg-gray"
                              : "bg-secondary"
                          }
                      w-full uppercase rounded-md md:rounded-none py-3 text-sm md:text-md`}
                      onClick={() => clickHandle(item)}
                      disabled={item?.reviews?.length > 0 ? true : false}
                    >
                      {item?.reviews?.length > 0
                        ? "Review Complete"
                        : "Give Review"}
                    </button>
                  </div>

                  <OrderReviewModal
                    item={reviewItem}
                    setReviewItem={setReviewItem}
                    refetch={refetch}
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
