import Container from "../../components/Container";
import CheckoutWizard from "../../components/wizard/CheckoutWizard";
import InputInfo from "../../components/checkout/InputInfo";
import PaymentOption from "../../components/checkout/PaymentOption";
import OrderSummary from "../../components/checkout/OrderSummary";
import { Icon } from "@iconify/react/dist/iconify.js";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
const CheckoutPage = () => {

  // const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0)
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.regular_price * item.quantity), 0);
    setSubTotalPrice(total.toFixed(2));
  }, [cartItems]);


  const shippingPrice = 100;
  const discountPrice = 0;
  const tax = parseFloat((subTotalPrice + shippingPrice - discountPrice) * (2.5 / 100)).toFixed(2);
  const totalPrice = parseFloat(subTotalPrice + shippingPrice + discountPrice).toFixed(2);

  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCarts(cart);
  //   const total = cart.reduce((sum, item) => sum + (item.variants[0].regular_price * item.quantity), 0);
  //   setTotal(total.toFixed(2));
  // }, []);


  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCarts(cart);
  
  //   const total = cart.reduce((sum, item) => {
  //     // Ensure item.variants exists and has at least one element
  //     if (!item.variants || item.variants.length === 0) {
  //       return sum;
  //     }
  //     return sum + (item.variants[0].regular_price * item.quantity);
  //   }, 0);
  
  //   setTotal(total.toFixed(2));
  // }, []);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watching checkbox value
  const shipToDifferentAddress = watch("shipToDifferentAddress");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  

  // console.log(carts);
  return (
    <div>
      <DynamicHelmet title="Checkout Page" />
      <Container>
        {/* <---small Device ----> */}
        <div className="md:hidden ">
          <CheckoutWizard></CheckoutWizard>
        </div>
        {/* <---small Device End ----> */}
        <div className="container hidden md:block mx-auto px-4 py-8">
          {/* Billing Information Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div>
              <h4 className="text-lg font-normal mb-4">Billing Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
                {/* Left Column: Billing Form */}
                <div className="space-y-4  col-span-5 md:col-span-7  p-6 shadow rounded-lg">
                  {/* //info / */}
                  <InputInfo register={register} errors={errors} shipToDifferentAddress={shipToDifferentAddress}></InputInfo>
                  <PaymentOption register={register} errors={errors}></PaymentOption>
                </div>

                {/* Right Column: Order Summary */}
                <div className="col-span-5  md:col-span-3    ">
                  <div className=" bg-white shadow rounded-lg">
                    <OrderSummary carts={cartItems} total={total}></OrderSummary>
                    <div className="px-6 py-3">
                      {/* <Link to='/order-confirmation'> */}
                        <button type="submit" className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center">
                          PLACE ORDER
                          {/* <Icon icon="mdi-light:arrow-right" width="1.5em" height="2em" /> */}
                          <Icon
                            icon="mdi:arrow-right"
                            width="1.5em"
                            height="1.5em"
                          />
                        </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* Payment Option Section */}
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
