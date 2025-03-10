import Container from "../../components/Container";
import CheckoutWizard from "../../components/wizard/CheckoutWizard";
import InputInfo from "../../components/checkout/InputInfo";
import PaymentOption from "../../components/checkout/PaymentOption";
import OrderSummary from "../../components/checkout/OrderSummary";
import { Icon } from "@iconify/react/dist/iconify.js";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { usePlaceOrderMutation } from "../../redux/features/api/checkoutApi/checkoutApi";
import toast from "react-hot-toast";


const CheckoutPage = () => {
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [placeOrder, { isLoading, isSuccess, isError, error }] = usePlaceOrderMutation(); // Destructure mutation hook

  console.log(cartItems);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.regular_price * item.quantity,
      0
    );
    setSubTotalPrice(total.toFixed(2));
  }, [cartItems]);

  const shippingPrice = 100;
  const discountPrice = 0;
  const tax = parseFloat((subTotalPrice + shippingPrice - discountPrice) * (2.5 / 100)).toFixed(2);
  const totalPrice = parseFloat(subTotalPrice + shippingPrice + discountPrice).toFixed(2);

  const subTotal = cartItems.reduce((sum, cartItem) => {
    return sum + (cartItem.regular_price * cartItem.quantity);
  }, 0);
  const Shipping = cartItems.reduce((sum, cartItem) => {
    return sum + cartItem.quantity;
  }, 0);
  const shipingCharge = cartItems.length <= 1 ? 80 : 80 + (Shipping - 1) * 20;
  const grandTotal = subTotal + shipingCharge;


  const { register, handleSubmit, watch, formState: { errors }, reset  } = useForm();
  const shipToDifferentAddress = watch("shipToDifferentAddress");

  const onSubmit = async(data) => {
    console.log(data);
    const orderData = {
      products: cartItems.map((item) => ({
        variant_id: item.id,
        product_id: item.product_id,
        variant_price: item.regular_price,
        variant_quantity: item.quantity,
        coupon_code: item?.coupon_code || "",
      })),
      combo: [], // Add combo items if necessary
      payment_method: data.paymentMethod,
      shipping_method: "In-House",
      shipping_charge: shipingCharge,
      coupon_code: "",
      order_note: data.orderNotes,
    };

    try {
      const response = await placeOrder(orderData).unwrap();
      console.log("Order placed successfully:", response);
      toast.success("Order placed successfully!");
      reset()
    } catch (err) {
      console.error("Error placing order:", err);
      toast.error("Failed to place order.", err);
    }

  };

  return (
    <div>
      <DynamicHelmet title="Checkout Page" />
      <Container>
        <div className="md:hidden">
          <CheckoutWizard />
        </div>

        <div className="container hidden md:block mx-auto px-4 py-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h4 className="text-lg font-normal mb-4">Billing Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
                {/* Left Column: Billing Form */}
                <div className="space-y-4 col-span-5 md:col-span-7 p-6 shadow rounded-lg">
                  <InputInfo register={register} errors={errors} shipToDifferentAddress={shipToDifferentAddress} />
                  <PaymentOption register={register} errors={errors} />
                </div>

                {/* Right Column: Order Summary */}
                <div className="col-span-5 md:col-span-3">
                  <div className="bg-white shadow rounded-lg">
                    <OrderSummary carts={cartItems} total={totalPrice} shipingCharge={shipingCharge} Shipping={Shipping} subTotal={subTotal} />
                    <div className="px-6 py-3">
                      <button
                        type="submit"
                        className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center"
                        disabled={isLoading}
                      >
                        PLACE ORDER
                        <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
                      </button>
                      {/* {isSuccess && <p>Order placed successfully!</p>} */}
                      {isError && <p>Error placing order: {error.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
