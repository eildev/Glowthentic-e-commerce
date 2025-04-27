import { Icon } from "@iconify/react/dist/iconify.js";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import Container from "../../components/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrderTrackMutation } from "../../redux/features/api/orderApi/orderAPI";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setOrderData } from "../../redux/features/slice/orderSlice";

const TrackOrderPage = () => {
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();
  const [orderInfo, { isLoading, isError, isSuccess, data }] =
    useOrderTrackMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderIdData = { order_id: orderId };
    if (!orderId.trim()) {
      toast.error("Please enter a valid Order ID.");
      return;
    }

    try {
      const result = await orderInfo(orderIdData).unwrap();
      if (result.status === 200) {
        dispatch(setOrderData(result)); // Store the data
        toast.success("Order found! Redirecting...");
        navigate(`/order-progress?orderId=${orderId}`);
      } else {
        toast.error("Order not found. Please check your Order ID.");
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <Container>
      <DynamicHelmet title="Track Your Order" />
      <div className="w-full mx-auto py-10 lg:py-20 px-5 lg:p-0">
        <div>
          <h2 className="text-[24px] lg:text-[42px] font-bold text-dark font-encode mb-4">
            Track Order
          </h2>
          <p className="text-[12px] lg:text-[22px] font-normal text-gray font-encode">
            To track your order, please enter your order ID in the input field
            below and press the “Track Order” button. This was provided on your
            receipt and in the confirmation email you should have received.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:justify-between mt-4 gap-5">
            <div className="w-full">
              <label className="text-[10px] lg:text-[18px] font-normal font-encode">
                Order ID
              </label>
              <input
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                type="text"
                className="w-full border rounded-sm text-[18px] text-gray border-white-gray outline-none my-2 py-2 px-2"
                placeholder="ID..."
              />
              <p className="flex items-center text-xs lg:text-lg text-gray font-normal font-encode">
                <Icon
                  className="mr-2 w-4 h-4 lg:w-8 lg:h-8"
                  icon="mdi-light:alert-circle"
                />
                Order ID sent to your email address.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center rounded-[4px] lg:rounded-md mt-4 lg:mt-10 px-[15px] py-[6px] lg:px-[42px] lg:py-[12px] text-sm lg:text-xl font-normal font-encode border text-white bg-secondary"
            disabled={isLoading}
          >
            {isLoading ? "Tracking..." : "Track Order"}
            <Icon
              className="ml-2 w-4 h-4 lg:w-8 lg:h-8"
              icon="mdi-light:arrow-right"
            />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default TrackOrderPage;
