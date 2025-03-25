import { Icon } from "@iconify/react";
import { useState } from "react";
import ProgressProductTitle from "../track-order/order-progress/ProgressProductTitle";
import { imagePath } from "../../utils/imagePath";

const OrderCard = ({ status, order, orderLoad }) => {
  const [activeOrderId, setActiveOrderId] = useState(null);

  const handleOrderDetails = (orderId) => {
    setActiveOrderId(activeOrderId === orderId ? null : orderId);
  };
console.log(order?.order[0].order_details[0]);
  return (
    <>
      {status === "On Delivery" ? (
        orderLoad ? (
          <p className="text-center text-gray-500">Loading orders...</p>
        ) : order?.order?.length === 0 ? (
          <p className="text-center text-gray-500">আপনি এখনও কোনো অর্ডার করেননি।</p>
        ) : order?.order ? (
          [...order.order]
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((item, i) => {
              const formattedDate = new Date(item.created_at).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              });

              return (
                <div key={i} className="border-b border-gray-300 py-6">
                  <div>
                    <h3 className="text-lg md:text-2xl text-dark font-bold">
                      Order No: #{item?.invoice_number}
                    </h3>
                    <p className="flex justify-between items-center text-md md:text-lg font-semibold bg-gray-100 py-2 px-4 my-2 rounded-md">
                      {item.status}
                    </p>
                    <p className="text-sm md:text-md text-gray-600">{formattedDate}</p>
                    <p className="text-xl my-2 md:text-2xl font-semibold">৳ {item?.grand_total}</p>
                  </div>

                  {/* Order Details Button */}
                  <button
                    onClick={() => handleOrderDetails(item.invoice_number)}
                    className="flex items-center justify-between w-full bg-secondary text-white font-semibold py-2 px-4 mt-4 rounded-lg transition-all duration-300 hover:bg-red-600"
                  >
                    Order Details
                    <Icon
                      icon="mdi:chevron-down"
                      className={`ml-2 transition-transform duration-300 ${
                        activeOrderId === item.invoice_number ? "rotate-180" : ""
                      }`}
                      width={24}
                      height={24}
                    />
                  </button>

                  {/* Order Details Dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeOrderId === item.invoice_number ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item?.order_details?.map((orderDetail, index) => (
                      <div
                        key={index}
                        className="lg:flex flex-col lg:flex-row items-center gap-2 lg:gap-4 border-b py-4"
                      >
                        <div className="flex gap-4 lg:gap-0">
                          <img
                            src={imagePath(orderDetail.variant?.variant_image[0]?.image)}
                            alt={orderDetail.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="lg:hidden">
                            <ProgressProductTitle title={orderDetail?.product.product_name} />
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="hidden lg:block">
                            <ProgressProductTitle title={orderDetail.product.product_name} />
                          </div>

                          <div className="text-left">
                            <p className="text-sm text-justify text-gray-500 mt-1">
                              {orderDetail.description}
                            </p>
                          </div>
                          <div className="flex mt-2 justify-between text-left">
                            <p className="font-medium lg:text-md text-sm text-gray-800">
                              Price: <br />
                              <span className="font-bold lg:text-md text-xs">
                                ৳{orderDetail.unit_price}
                              </span>
                            </p>
                            <p className="font-medium lg:text-md text-sm text-gray-500">
                              Qty: <br />
                              <span className="font-bold lg:text-md text-xs">
                                {orderDetail.product_quantity}
                              </span>
                            </p>
                            <p className="font-medium lg:text-md text-sm text-gray-800">
                              Subtotal: <br />
                              <span className="font-bold lg:text-md text-xs">
                                ৳{orderDetail.total_price}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
        ) : (
          <p className="text-center text-gray-500">No data Available</p>
        )
      ) : (
        <p className="text-center text-gray-500">Status is not 'On Delivery'.</p>
      )}
    </>
  );
};

export default OrderCard;
