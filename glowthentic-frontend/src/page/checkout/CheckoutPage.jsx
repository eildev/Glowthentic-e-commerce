import Container from "../../components/Container";
import CheckoutWizard from "../../components/wizard/CheckoutWizard";
import InputInfo from "../../components/checkout/InputInfo";
import PaymentOption from "../../components/checkout/PaymentOption";
import OrderSummary from "../../components/checkout/OrderSummary";
import { Icon } from "@iconify/react/dist/iconify.js";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { usePlaceOrderMutation } from "../../redux/features/api/checkoutApi/checkoutApi";
import toast from "react-hot-toast";
import { clearCart } from "../../redux/features/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { getOrCreateSessionId } from "../../utils/getSessionId";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { user, token, } = useSelector((state) => state.auth);

  console.log(user.data.id);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [placeOrder, { isLoading, isSuccess, isError, error }] =
    usePlaceOrderMutation();

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.regular_price * item.quantity,
      0
    );
    setSubTotalPrice(total.toFixed(2));
  }, [cartItems]);

  const subTotal = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.regular_price * cartItem.quantity,
    0
  );
  const Shipping = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );
  const shipingCharge = cartItems.length <= 1 ? 80 : 80 + (Shipping - 1) * 20;
  const grandTotal = subTotal + shipingCharge;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const userSessionId = getOrCreateSessionId();

  const shipToDifferentAddress = watch("shipToDifferentAddress");

  const onSubmit = async (data) => {
    const orderData = {
      products: cartItems.map((item) => ({
        variant_id: item.id,
        product_id: item.product_id,
        variant_price: item.regular_price,
        variant_quantity: item.quantity,
        coupon_code: item?.coupon_code || "",
      })),
      combo: [],
      payment_method: data.paymentMethod,
      shipping_method: "In-House",
      shipping_charge: shipingCharge,
      coupon_code: "",
      order_note: data.orderNotes,
      ...(token ? { user_id: user.id } : { session_id: userSessionId }),
    };

    try {
      const response = await placeOrder(orderData).unwrap();
      console.log(response);
      if (response.status === 200) {
        toast.success("Order placed successfully!");
        // console.log(response.status);
        dispatch(clearCart());
        reset();
        navigate("/order-confirmation");
      } else {
        toast.error("Order placed Unsuccessful!");
      }
    } catch (err) {
      console.log(err);
      console.error("Error placing order:", err);
      toast.error("Failed to place order.", err);
    }
  };

  return (
    <div>
      <DynamicHelmet title="Checkout Page" />
      <Container>
        {/* Small Device */}
        {/* <div className="md:hidden">
          <CheckoutWizard
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            cartItems={cartItems}
            subTotal={subTotal}
            shipingCharge={shipingCharge}
            Shipping={Shipping}
            trigger={trigger}
            watch={watch}
          />
        </div> */}
        {/* Large Device */}
        {/* <div className="container hidden md:block mx-auto px-4 py-8"> */}
        <div className="container mx-auto px-4 py-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h4 className="text-lg font-normal mb-4">Billing Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
                <div className="space-y-4 col-span-5 md:col-span-7 p-6 shadow rounded-lg">
                  <InputInfo
                    register={register}
                    errors={errors}
                    shipToDifferentAddress={shipToDifferentAddress}
                  />
                  <PaymentOption register={register} errors={errors} />
                </div>
                <div className="col-span-5 md:col-span-3">
                  <div className="bg-white shadow rounded-lg">
                    <OrderSummary
                      carts={cartItems}
                      total={grandTotal}
                      shipingCharge={shipingCharge}
                      Shipping={Shipping}
                      subTotal={subTotal}
                    />
                    <div className="px-6 py-3">
                      <button
                        type="submit"
                        className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center"
                        disabled={isLoading}
                      >
                        PLACE ORDER
                        <Icon
                          icon="mdi:arrow-right"
                          width="1.5em"
                          height="1.5em"
                        />
                      </button>
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
