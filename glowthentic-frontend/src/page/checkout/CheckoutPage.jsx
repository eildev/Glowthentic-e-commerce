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
  const [checkCoupon] = useCheckCouponMutation();
  const { user, token } = useSelector((state) => state.auth);
  const { data, isLoading: userLoad } = useGetUserInfoQuery(user?.id, {
    skip: !user?.id,
  });
  const [coupon_code, setCoupon_code] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  const [couponData, setCouponData] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [placeOrder, { isLoading: orderLoading, isSuccess: orderSuccess }] =
    usePlaceOrderMutation();
  const [searchParams] = useSearchParams();
  const [location, setLocation] = useState(0);
  const [districtId, setDistrictId] = useState("");
  const [upazilaId, setUpazilaId] = useState("");
  const [shippingCharge, setShippingCharge] = useState(0); // Add state for shipping charge

  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

  useEffect(() => {
    if (filteredCartItems) {
      const urlCoupon = searchParams.get("coupon");
      setCoupon_code(urlCoupon);
      const fetchCoupon = async () => {
        try {
          const response = await checkCoupon({
            coupon_code: urlCoupon,
          }).unwrap();
          const discountValue = Math.round(response?.data?.discount_value);
          setDiscountPrice(discountValue);
          setCouponData(response.data);
        } catch (error) {
          console.error("Error fetching coupon:", error);
        }
      };
      fetchCoupon();
    }
  }, [searchParams, checkCoupon, cartItems]);

  const subTotal = Number(
    filteredCartItems.reduce((sum, cartItem) => {
      const regularPrice = cartItem?.regular_price;
      const quantity = cartItem?.quantity || 1;
      const discountValue =
        cartItem?.product_variant_promotion?.coupon?.discount_value || 0;
      const discountType =
        cartItem?.product_variant_promotion?.coupon?.discount_type;

      let finalPrice = regularPrice;
      if (
        cartItem?.product_variant_promotion?.coupon?.status === "Active" &&
        new Date(cartItem?.product_variant_promotion?.coupon?.end_date) >=
          new Date()
      ) {
        if (discountType === "fixed") {
          finalPrice = regularPrice - discountValue;
        } else if (discountType === "percentage") {
          finalPrice = regularPrice - (regularPrice * discountValue) / 100;
        }
      }
      finalPrice = Math.max(finalPrice, 0);
      return sum + finalPrice * quantity;
    }, 0)
  );

  const Shipping = filteredCartItems.reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );

  // Calculate shipping charge is now handled in OrderSummary and passed back via setShippingCharge

  // const tax = Math.round(subTotal * (2 / 100));
  const tax = 0;

  // Calculate discount amount based on type
  const discountAmount = Number(
    discountPrice
      ? couponData.discount_type === "fixed"
        ? discountPrice
        : (discountPrice * subTotal) / 100
      : 0
  );

  const discountedSubTotal = subTotal - discountAmount;

  // Use the state-managed shipping charge for total calculation
  const grandTotal = Math.round(discountedSubTotal + shippingCharge + tax);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      district: "",
      upazila: "",
      address: "",
      paymentMethod: "",
      orderNotes: "",
    },
  });

  // Initialize form with user data
  useEffect(() => {
    if (data) {
      setValue("name", data?.userDetails?.full_name || "");
      setValue("phone", data?.userDetails?.phone_number || "");
      setValue("email", data?.user?.email || "");
      setValue("address", data?.userDetails?.address || "");
    }
  }, [data, setValue]);

  const userSessionId = getOrCreateSessionId();

  const onSubmit = async (formData) => {
    const orderData = {
      products: filteredCartItems.map((item) => {
        const regularPrice = item.regular_price;
        const discountValue =
          item?.product_variant_promotion?.coupon?.discount_value || 0;
        const discountType =
          item?.product_variant_promotion?.coupon?.discount_type;

        let finalPrice = regularPrice;
        if (
          item?.product_variant_promotion?.coupon?.status === "Active" &&
          new Date(item?.product_variant_promotion?.coupon?.end_date) >=
            new Date()
        ) {
          if (discountType === "fixed") {
            finalPrice = regularPrice - discountValue;
          } else if (discountType === "percentage") {
            finalPrice = regularPrice - (regularPrice * discountValue) / 100;
          }
        }

        return {
          variant_id: item.id,
          product_id: item.product_id,
          variant_price: parseFloat(finalPrice.toFixed(2)),
          discount_cut_total_price: parseFloat(
            (finalPrice * item.quantity).toFixed(2)
          ),
          variant_quantity: item.quantity,
          coupon_code: item?.coupon_code || "",
        };
      }),
      combo: [],
      full_name: `${formData.name}`,
      address: `${formData.address}`,
      email: `${formData.email}`,
      district: selectedDistrict,
      police_station: selectedUpazila,
      postal_code: 1000,
      payment_method: formData.paymentMethod,
      shipping_method: "In-House",
      shipping_charge: shippingCharge, // Use the updated shipping charge
      phone_number: `${formData.phone}`,
      coupon_code: coupon_code,
      order_note: formData.orderNotes,
      ...(token ? { user_id: user?.id } : { session_id: userSessionId }),
    };
    try {
      const response = await placeOrder(orderData).unwrap();

      if (response?.status === 200 || response?.success) {
        toast.success("Order placed successfully!");
        dispatch(clearCart());
        // Added this small delay before navigation to ensure state updates
        const invoiceNumber = response?.order?.invoice_number || "INV_DEFAULT";

        setTimeout(() => {
          navigate(`/order-confirmation?invoice=${invoiceNumber}`, {
            replace: true,
          });
        }, 100);
      } else {
        toast.error("Order placement unsuccessful!");
      }
    } catch (err) {
      console.error("Error placing order:", err);
      toast.error("Failed to place order.");
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
            carts={filteredCartItems}
            subTotal={subTotal}
            total={grandTotal}
            shippingCharge={shippingCharge}
            Shipping={Shipping}
            trigger={trigger}
            watch={watch}
            data={data}
            setValue={setValue}
            setSelectedDistrict={setSelectedDistrict}
            setSelectedUpazila={setSelectedUpazila}
            districtId={districtId}
            setDistrictId={setDistrictId}
            upazilaId={upazilaId}
            setUpazilaId={setUpazilaId}
            setShippingCharge={setShippingCharge} // Pass setter
          />
        </div>
        {/* Large Device */}
        <div className="container hidden md:block mx-auto px-4 py-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h4 className="text-lg font-normal mb-4">Billing Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
                <div className="space-y-4 col-span-5 md:col-span-7 p-6 shadow rounded-lg">
                  <InputInfo
                    register={register}
                    errors={errors}
                    data={data}
                    setValue={setValue}
                    setSelectedDistrict={setSelectedDistrict}
                    setSelectedUpazila={setSelectedUpazila}
                    watch={watch}
                    districtId={districtId}
                    setDistrictId={setDistrictId}
                    upazilaId={upazilaId}
                    setUpazilaId={setUpazilaId}
                    trigger={trigger}
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
                      setShipingCharge={setShippingCharge}
                      shippingCharge={shippingCharge} // Pass setter instead of value
                      Shipping={Shipping}
                      subTotal={subTotal}
                      tax={tax}
                      discountPrice={discountPrice}
                      selectedDistrict={selectedDistrict}
                      selectedUpazila={selectedUpazila}
                    />
                    <div className="px-6 py-3">
                      <button
                        type="submit"
                        className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={orderLoading || !location}
                      >
                        {orderLoading ? "Loading..." : "PLACE ORDER"}
                        <Icon
                          icon="mdi:arrow-right"
                          width="1.5em"
                          height="1.5em"
                        />
                      </button>
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
