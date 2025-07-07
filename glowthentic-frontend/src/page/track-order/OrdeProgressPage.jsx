import Container from "../../components/Container";
import imageCart from "../../assets/img/order-track/order-progress/Cart.png";
import imageclock from "../../assets/img/order-track/order-progress/clock.png";
import imageCreditCard from "../../assets/img/order-track/order-progress/credit-card.png";
import imageRefresh from "../../assets/img/order-track/order-progress/refresh-ccw.png";
import imageTruck from "../../assets/img/order-track/order-progress/truck.png";
import HeadTitle from "../../components/typography/HeadTitle";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProgressProductTitle from "../../components/track-order/order-progress/ProgressProductTitle";
import { useLocation } from "react-router-dom";
import { useGetTrackingOrderQuery } from "../../redux/features/api/orderApi/orderApi";
import { imagePath } from "../../utils/imagePath";
import capitalizeText from "../../utils/capitalizeText";

const OrdeProgressPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  // const orderData = useSelector((state) => state.order?.orderData);
  const {
    data: orderData,
    isLoading,
    isError,
  } = useGetTrackingOrderQuery(orderId);
  // console.log("orderData", orderData);
  const isoDate = orderData?.billingInfo?.created_at;
  const date = new Date(isoDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  if (!orderData)
    return <div>No order data available. Please track your order again.</div>;

  const orderItems = orderData?.orderDetails || [];
  // const totalQuantity = orderItems.reduce((sum, item) => sum + (Number(item.product_quantity) || 0), 0);
  const subtotal = orderItems.reduce(
    (acc, item) => acc + parseFloat(item.total_price || 0),
    0
  );
  const shipping = Number(orderData?.order?.shipping_charge) || 0;
  // const tax = Number(((subtotal * 2.5) / 100).toFixed(2));
  const tax = 0;
  const totalEstimated = Number((subtotal + shipping + tax).toFixed(2));

  const formatPhoneNumber = (phone) => {
    if (!phone) return "";
    return phone.startsWith("0") ? phone : `0${phone}`;
  };

  // console.log("orderData", orderData);
  return (
    <div>
      <div className="bg-primary h-[250px]"></div>
      <Container>
        <div className="bg-gray-50  mt-[-150px] px-2 drop-shadow-sm ">
          <div className=" bg-white rounded-2xl shadow-md overflow-hidden">
            <div className=" text-secondary flex flex-col items-center justify-center align-middle text-center py-4">
              <img
                src={imageCart}
                alt="image"
                className="h-[150px] lg:h-[200px] w-[150px]  lg:w-[200px]"
              />
              <h1 className="lg:text-3xl text-2xl   font-bold">
                Your order has been successfully received!
              </h1>
            </div>
            {/* //Progress Start */}
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-start lg:items-center justify-between lg:text-center text-sm text-gray-500">
                {/* Step 1: Ordered */}
                {/* Step 1: Ordered */}
                <div className="flex flex-row w-full lg:w-auto lg:flex-col lg:items-center">
                  <div
                    className={`w-8 h-8 ${
                      orderData?.order?.status === "pending" ||
                      orderData?.order?.status === "approve" ||
                      orderData?.order?.status === "processing"
                        ? "bg-orange-500"
                        : "bg-dark"
                    } text-white flex items-center justify-center rounded-full mb-2`}
                  >
                    {orderData?.order?.status === "pending" ||
                    orderData?.order?.status === "approve" ||
                    orderData?.order?.status === "In processing"
                      ? "✓"
                      : "🔒"}
                  </div>
                  <div className="w-full lg:w-auto">
                    <p className="text-xs text-gray ps-2 lg:ps-0">STEP 1</p>
                    <div className="flex w-full lg:w-auto justify-between lg:flex-col flex-row ps-2 lg:ps-0 gap-3 lg:gap-0">
                      <p className="font-semibold text-gray-700">Ordered</p>
                      <p
                        className={`text-xs px-3 py-1 rounded-3xl lg:mt-2 ${
                          orderData?.order?.status === "pending" ||
                          orderData?.order?.status === "approve" ||
                          orderData?.order?.status === "processing"
                            ? "text-orange-500 bg-[#FA82321A]"
                            : "text-purple-500 bg-[#F4F1FF]"
                        }`}
                      >
                        {orderData?.order?.status === "pending" ||
                        orderData?.order?.status === "approve" ||
                        orderData?.order?.status === "processing"
                          ? "Completed"
                          : "In Progress"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Line */}
                <div className="h-14 ms-[14px] lg:ms-0 lg:h-1 w-1 lg:w-60 bg-secondary"></div>

                {/* Step 2: Shipped */}
                <div className="flex flex-row w-full lg:w-auto lg:flex-col lg:items-center">
                  <div
                    className={`w-8 h-8 ${
                      orderData?.order?.status === "Delivering" ||
                      orderData?.order?.status === "shipping" ||
                      orderData?.order?.status === "In Transit"
                        ? "bg-orange-500"
                        : "bg-dark"
                    } text-white flex items-center justify-center rounded-full mb-2`}
                  >
                    {orderData?.order?.status === "Delivering" ||
                    orderData?.order?.status === "shipping" ||
                    orderData?.order?.status === "In Transit"
                      ? "✓"
                      : "🔒"}
                  </div>
                  <div className="w-full lg:w-auto">
                    <p className="text-xs text-gray ps-2 lg:ps-0">STEP 2</p>
                    <div className="flex lg:flex-col justify-between w-full lg:w-auto flex-row ps-2 lg:ps-0 gap-3 lg:gap-0">
                      <p className="font-semibold text-gray-700">Shipped</p>
                      <p
                        className={`text-xs px-3 py-1 rounded-3xl lg:mt-2 ${
                          orderData?.order?.status === "Delivering" ||
                          orderData?.order?.status === "shipping" ||
                          orderData?.order?.status === "In Transit"
                            ? "text-orange-500 bg-[#FA82321A]"
                            : "text-purple-500 bg-[#F4F1FF]"
                        }`}
                      >
                        {orderData?.order?.status === "Delivering" ||
                        orderData?.order?.status === "shipping" ||
                        orderData?.order?.status === "In Transit"
                          ? "Completed"
                          : "In Progress"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Line */}
                <div className="h-14 lg:h-1 w-1 ms-[14px] lg:ms-0 lg:w-60 bg-secondary"></div>

                {/* Step 3: Completed */}
                <div className="flex flex-row w-full lg:w-auto lg:flex-col lg:items-center">
                  <div
                    className={`w-8 h-8 ${
                      orderData?.order?.status === "completed"
                        ? "bg-orange-500"
                        : "bg-dark"
                    } text-white flex items-center justify-center rounded-full mb-2`}
                  >
                    {orderData?.order?.status === "completed" ? "✓" : "🔒"}
                  </div>
                  <div className="w-full lg:w-auto">
                    <p className="text-xs text-gray ps-2 lg:ps-0">STEP 3</p>
                    <div className="flex w-full lg:w-auto lg:flex-col justify-between ps-2 lg:ps-0 gap-3 lg:gap-0">
                      <p className="font-semibold text-gray-700">Completed</p>
                      <p
                        className={`text-xs px-3 py-1 rounded-3xl lg:mt-2 ${
                          orderData?.order?.status === "completed"
                            ? "text-orange-500 bg-[#FA82321A]"
                            : "text-purple-500 bg-[#F4F1FF]"
                        }`}
                      >
                        {orderData?.order?.status === "completed"
                          ? "Completed"
                          : "In Progress"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Track Shipment Button */}
              {/* <div className="mt-6 flex justify-center">
                <button className="bg-orange-500 text-sm lg:text-md text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition">
                  🚀 TRACK SHIPMENT
                </button>
              </div> */}
            </div>
            {/* //Progress End */}
            {/* ////Dash line/// */}
            <div className="border-dashed  border-t-2 mt-4  text-[#B2B2B2]  border-gray-300 mx-10"></div>

            <div className="lg:p-6 p-2">
              {/* //Item  Start */}
              <div className="bg-gray-50 ">
                <div className=" mx-auto bg-white rounded-lg  p-6">
                  <div className="text-center">
                    <h1 className="lg:text-xl text-lg  font-semibold mb-4">
                      Hello {orderData?.userDetails?.full_name ?? "N/A"}, here
                      is Your Cart
                    </h1>
                    <p className="text-sm text-gray-600 mb-6">
                      Here is a summary of your recent order made on{" "}
                      {formattedDate}. You can also view your order in the{" "}
                      <span className="font-bold text-primary ">Order</span>{" "}
                      section of your account.
                    </p>
                  </div>

                  {/* Cart Items */}
                  {orderItems?.map((item, index) => (
                    <div
                      key={index}
                      className="lg:flex  flex-col lg:flex-row items-center gap-2 lg:gap-4 border-b py-4"
                    >
                      <div className="flex  gap-4 lg:gap-0">
                        <img
                          src={imagePath(
                            item?.variant?.variant_image[0]?.image
                          )}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="lg:hidden">
                          <ProgressProductTitle
                            title={
                              item?.product?.product_name
                                ? capitalizeText(item?.product?.product_name)
                                : ""
                            }
                            sku={item?.product?.sku ?? ""}
                          ></ProgressProductTitle>
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="hidden lg:block">
                          {" "}
                          <ProgressProductTitle
                            title={
                              item?.product?.product_name
                                ? capitalizeText(item?.product?.product_name)
                                : ""
                            }
                            sku={item?.product?.sku ?? ""}
                          ></ProgressProductTitle>
                        </div>

                        <div className="text-left">
                          <p className="text-sm text-justify text-gray-500 mt-1">
                            {}
                          </p>
                        </div>
                        <div className="flex mt-2 justify-between text-left">
                          <p className="font-medium lg:text-md text-sm text-gray-800">
                            Price: <br />{" "}
                            <span className="font-bold lg:text-md text-xs">
                              ৳{item.unit_price}
                            </span>
                          </p>
                          <p className=" font-medium  lg:text-md text-sm text-gray-500">
                            Qty: <br />{" "}
                            <span className="font-bold lg:text-md text-xs">
                              {item.product_quantity}
                            </span>
                          </p>
                          <p className="font-medium lg:text-md text-sm text-gray-800">
                            Subtotal: <br />{" "}
                            <span className="font-bold lg:text-md text-xs">
                              ৳{item.total_price}
                            </span>
                          </p>
                          {/* <RegularButton className="py-0 lg:h-11  bg-secondary  border h-8  hover:border-secondary text-white lg:bg-secondary  lg:text-md text-xs rounded-xl">
                            Read More
                          </RegularButton> */}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Order Summary */}
                  <div className="mt-6 bg-gray-100 p-2 rounded-lg">
                    <div className="flex justify-between">
                      <HeadTitle className="text-md lg:text-2xl">
                        Order Summary
                      </HeadTitle>
                      <HeadTitle className="text-md lg:text-xl">
                        Payment Status :{" "}
                        <span className="font-normal text-md lg:text-xl">
                          {/* {orderData?.billingInfo?.active_payment_method === "COD"
                            ? "Cash"
                            : orderData?.billingInfo?.active_payment_method ?? ""} */}
                        </span>
                      </HeadTitle>
                    </div>

                    <p className="py-2 lg:text-lg text-sm">
                      Your order is now confirmed!
                    </p>
                    <div className="flex justify-between text-sm text-gray-700">
                      <p className="lg:text-lg text-sm">Subtotal Price:</p>
                      <p className="lg:text-lg text-sm">৳{subtotal} tk</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                      <p className="lg:text-lg text-sm">Shipping & Handling:</p>
                      <p className="lg:text-lg text-sm">৳{shipping} tk</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                      <p className="lg:text-lg text-sm">Est Sales Tax:</p>
                      <p className="lg:text-lg text-sm">৳{tax} tk</p>
                    </div>
                    <div className="flex justify-end text-lg mt-4">
                      <p className="px-4">
                        Total (
                        {Array.isArray(orderItems) ? orderItems.length : 0}{" "}
                        {Array.isArray(orderItems) && orderItems.length === 1
                          ? "Item"
                          : "Items"}
                        ):
                      </p>
                      <p className="font-bold text-gray-900 ">
                        ৳{totalEstimated} tk
                      </p>
                    </div>
                  </div>

                  {/* Order Confirmation */}
                  <div className="mt-6 text-center">
                    <p className="text-sm  text-gray-600">
                      Your order{" "}
                      <span className="font-medium">
                        #{orderData?.order?.invoice_number}
                      </span>{" "}
                      has been placed!
                    </p>
                    <p className="text-sm text-gray-600">
                      We sent an email to{" "}
                      <span className="font-medium text-blue-600">
                        {orderData?.userDetails?.user?.email}
                      </span>{" "}
                      with your order confirmation and receipt.
                    </p>
                  </div>
                </div>
              </div>
              {/* Order  End*/}
            </div>

            <div className="bg-gray-100">
              {/* Address and Shipping Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-6 rounded-lg">
                {/* Shipping Address */}
                <div className="text-center md:text-left border-0 md:border-[1px] md:border-e-0 border-[#D3D8E3] p-5">
                  <div className="flex justify-center md:justify-start items-center mb-2">
                    <span className="text-secondary">
                      <Icon
                        icon="mingcute:location-2-fill"
                        width="2em"
                        height="2em"
                      />
                    </span>
                  </div>
                  <h3 className="font-semibold text-orange-500">
                    Shipping Address
                  </h3>
                  <p className="text-gray-700">
                    {orderData?.userDetails?.full_name || "N/A"}
                  </p>
                  <p className="text-gray-500">
                    {orderData?.userDetails?.address || "N/A"}
                  </p>
                </div>

                {/* Billing Details */}
                <div className="text-center md:text-left border-0 md:border-[1px] md:border-e-0 border-[#D3D8E3] p-5">
                  <div className="flex justify-center md:justify-start items-center mb-2">
                    <span className="text-secondary">
                      <Icon
                        icon="mdi:credit-card-outline"
                        width="2em"
                        height="2em"
                      />
                    </span>
                  </div>
                  <h3 className="font-semibold text-orange-500">
                    Billing Details
                  </h3>
                  <p className="text-gray-700">
                    Phone:{" "}
                    {formatPhoneNumber(orderData?.userDetails?.phone_number) ||
                      "N/A"}
                  </p>
                  <p className="text-gray-700">
                    Email:{" "}
                    {orderData?.userDetails?.user?.email
                      ? orderData?.userDetails?.user?.email
                      : orderData?.userDetails?.secondary_email ?? ""}
                  </p>
                  <p className="text-gray-700">
                    Payment Method:{" "}
                    {orderData?.billingInfo?.active_payment_method === "COD"
                      ? "Cash on Delivery"
                      : "N/A"}
                  </p>
                </div>

                {/* Shipping Method */}
                <div className="text-center md:text-left border-0 md:border-[1px] border-[#D3D8E3] p-5">
                  <div className="flex justify-center md:justify-start items-center mb-2">
                    <span className="text-secondary">
                      <Icon icon="mdi:bus" width="2em" height="2em" />
                    </span>
                  </div>
                  <h3 className="font-semibold text-orange-500">
                    Shipping Method
                  </h3>
                  <p className="text-gray-700">
                    Method: Standard Courier Delivery
                  </p>
                  <p className="text-gray-500">
                    Delivery Time: 4-5 business days (delays may occur in remote
                    areas or during holidays)
                  </p>
                  <p className="text-gray-700">
                    Shipping Charge: ৳{orderData?.order?.shipping_charge || 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Call Us Section */}
          <div className="mt-6 bg-orange-500 text-white text-center py-4 pyb-0  shadow">
            <p className="text-sm lg:text-lg">
              Call us at <span className="font-bold">+880 1715-443884</span> or
              reply this email
            </p>
          </div>

          {/* Features */}
          <div className=" mb-5 grid grid-cols-2 md:grid-cols-4  text-center text-[#85888D]">
            <div className="flex flex-col py-8 border-e-0 border-t-0 border-[#D3D8E3] items-center border p-5">
              <img
                src={imageCreditCard}
                alt="Payment Secured"
                className="w-10 mb-2"
              />
              <p className="text-gray-700">Payment 100% Secured</p>
            </div>
            <div className="flex flex-col border border-e-0 border-t-0  py-8 border-[#D3D8E3] items-center p-5">
              <img src={imageclock} alt="Safe Delivery" className="w-10 mb-2" />
              <p className="text-gray-700">Guaranteed Safe Delivery</p>
            </div>
            <div className="flex flex-col border border-e-0  py-8  border-t-0 border-[#D3D8E3] items-center p-5">
              <img src={imageTruck} alt="Fast Service" className="w-10 mb-2" />
              <p className="text-gray-700">Fast Service Delivery</p>
            </div>
            <div className="flex flex-col border  border-t-0 py-8 border-[#D3D8E3]  items-center p-5">
              <img src={imageRefresh} alt="Easy Return" className="w-10 mb-2" />
              <p className="text-gray-700">100% Easy Return</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrdeProgressPage;
