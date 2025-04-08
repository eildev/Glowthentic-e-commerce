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
import { useNavigate, useSearchParams } from "react-router-dom";
import { getOrCreateSessionId } from "../../utils/getSessionId";
import { useGetUserInfoQuery } from "../../redux/features/api/auth/authApi";
import { useCheckCouponMutation } from "../../redux/features/api/couponApi/couponApi";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [checkCoupon, { isLoading, isSuccess, isError, error }] = useCheckCouponMutation();
  const { user, token } = useSelector((state) => state.auth);
  const { data, isLoading: userLoad, isError: userError } = useGetUserInfoQuery(user?.id, {
    skip: !user?.id,
  });
  const [coupon_code, setCoupon_code] = useState("");
  // const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [couponData, setCouponData] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [placeOrder, { isLoading: couponLoad, isSuccess: couponIsSucces, isError: couponIsError, error: couponError }] =
    usePlaceOrderMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [location, setLocation] = useState(0);


  const filteredCartItems = cartItems.filter(item => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });



  useEffect(() => {
    if (filteredCartItems) {
      const urlCoupon = searchParams.get("coupon");
      if (urlCoupon) {
        setCoupon_code(urlCoupon);
        const fetchCoupon = async () => {
          try {
            const response = await checkCoupon({ coupon_code: urlCoupon }).unwrap();
            const discountValue = Math.round(response?.data?.discount_value);
            setDiscountPrice(discountValue);
            setCouponData(response.data);
          } catch (error) {
            console.error("Error fetching coupon:", error);
          }
        };
        fetchCoupon();
      }
    }
  }, [searchParams, checkCoupon]);


  const subTotal = Number(
    filteredCartItems.reduce((sum, cartItem) => {
      const regularPrice = cartItem?.regular_price;
      const quantity = cartItem?.quantity || 1;

      const discountValue =
        cartItem?.product_variant_promotion?.[0]?.coupon?.discount_value || 0;
      const discountType =
        cartItem?.product_variant_promotion?.[0]?.coupon?.discount_type;

      let finalPrice = regularPrice;

      if (discountType === "fixed") {
        finalPrice = regularPrice - discountValue;
      } else if (discountType === "percentage") {
        finalPrice = regularPrice - (regularPrice * discountValue) / 100;
      }

      finalPrice = Math.max(finalPrice, 0);

      return sum + finalPrice * quantity;
    }, 0)
  );




  const Shipping = filteredCartItems.reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );

  const baseShipping = location;
  const extraCharge = (Shipping - 1) * 20;
  const shippingPrice = filteredCartItems.length <= 1 ? baseShipping : baseShipping + extraCharge;
console.log(shippingPrice);

  // const discountPrice = 0;

  const tax = Math.round(
    subTotal * (2 / 100)
  );

  // const tax = 0;

  const discountedSubTotal = subTotal - Number(
    discountPrice
      ? (couponData.discount_type === "fixed"
        ? discountPrice
        : (discountPrice * subTotal / 100))
      : 0
  );

  const grandTotal = Math.round(discountedSubTotal + shippingPrice + tax);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
    trigger,
  } = useForm();

  const userSessionId = getOrCreateSessionId();

  const shipToDifferentAddress = watch("shipToDifferentAddress");

  const onSubmit = async (data) => {
    const orderData = {
      products: filteredCartItems.map((item) => {
        const regularPrice = item.regular_price;

        const discountValue =
          item?.product_variant_promotion?.[0]?.coupon?.discount_value || 0;
        const discountType =
          item?.product_variant_promotion?.[0]?.coupon?.discount_type;

        let finalPrice = regularPrice;

        if (discountType === "fixed") {
          finalPrice = regularPrice - discountValue;
        } else if (discountType === "percentage") {
          finalPrice = regularPrice - (regularPrice * discountValue) / 100;
        }

        console.log(finalPrice, finalPrice * item.quantity);

        return {
          variant_id: item.id,
          product_id: item.product_id,
          variant_price: parseFloat(finalPrice.toFixed(2)),
          discount_cut_total_price: parseFloat((finalPrice * item.quantity).toFixed(2)),          
          variant_quantity: item.quantity,
          coupon_code: item?.coupon_code || "",
        };
      }),
      combo: [],
      payment_method: data.paymentMethod,
      shipping_method: "In-House",
      shipping_charge: shippingPrice,
      phone_number: `${data.phone}`,
      coupon_code: coupon_code,
      order_note: data.orderNotes,
      ...(token ? { user_id: user.id } : { session_id: userSessionId }),
    };

    console.log(orderData);


    try {
      const response = await placeOrder(orderData).unwrap();
      if (response.status === 200) {
        toast.success("Order placed successfully!");
        dispatch(clearCart());
        reset();
        navigate("/order-confirmation");
      } else {
        toast.error("Order placed Unsuccessful!");
      }
    } catch (err) {
      console.error("Error placing order:", err);
      toast.error("Failed to place order.", err);
    }
  };

  return (
    <div>
      <DynamicHelmet title="Checkout Page" />
      <Container>
        {/* Small Device */}
        <div className="md:hidden">
          <CheckoutWizard
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            cartItems={cartItems}
            subTotal={subTotal}
            shippingCharge={10} 
            Shipping={Shipping}
            trigger={trigger}
            watch={watch}
            data={data}
            setValue={setValue}
            setSelectedDistrict={setSelectedDistrict} // Pass to CheckoutWizard
          />
        </div>
        {/* Large Device */}
        <div className="container hidden md:block mx-auto px-4 py-8">
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
                      data={data}
                      setValue={setValue}
                      setSelectedDistrict={setSelectedDistrict}
                    />
                    <PaymentOption register={register} errors={errors} />
                  </div>
                  <div className="col-span-5 md:col-span-3">
                    <div className="bg-white shadow rounded-lg">
                      <OrderSummary
                        couponData={couponData}
                        setLocation={setLocation}
                        location={location}
                        carts={filteredCartItems}
                        total={grandTotal}
                        shipingCharge={shippingPrice} // Typo fixed
                        Shipping={Shipping}
                        subTotal={subTotal}
                        tax={tax}
                        isLoading={isLoading}
                        discountPrice={discountPrice}
                        selectedDistrict={selectedDistrict}
                      />
                      <div className="px-6 py-3">
                        <button
                          type="submit"
                          className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                          disabled={isLoading || !location}
                        >
                          {isLoading ? "Loading..." : "PLACE ORDER"}
                          <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
                        </button>
                        {isError && <p>Error placing order: {error.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;