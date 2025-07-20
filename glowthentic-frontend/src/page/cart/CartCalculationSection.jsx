import { Link, useLocation, useSearchParams } from "react-router-dom";
import RegularButton from "../../components/typography/RegularButton";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCheckCouponMutation } from "../../redux/features/api/couponApi/couponApi";
import { useSelector } from "react-redux";
import VoucherCodeApplyInSmallDevice from "./VoucherCodeApplyInSmallDevice";
import formatPrice from "../../utils/formatPrice";

const CartCalculationSection = ({ voucherActive, isVoucherActive }) => {
  const [voucher, setVoucher] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [couponData, setCouponData] = useState({});
  const [coupon_code, setCoupon_code] = useState("");
  const [subTotalPrice, setSubTotalPrice] = useState(0);

  const location = useLocation();
  const queryString = location.search;
  const [searchParams, setSearchParams] = useSearchParams();

  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [checkCoupon, { isLoading }] = useCheckCouponMutation();
  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

  useEffect(() => {
    const urlCoupon = searchParams.get("coupon");
    if (urlCoupon) {
      setCoupon_code(urlCoupon);
      const fetchCoupon = async () => {
        try {
          const response = await checkCoupon({
            coupon_code: urlCoupon,
          }).unwrap();
          const discountValue = Math.round(response?.data?.discount_value); // Ensure integer
          setDiscountPrice(discountValue);
          setCouponData(response.data);
        } catch (error) {
          console.error("Error fetching coupon:", error);
        }
      };
      fetchCoupon();
    }
  }, [searchParams]);

  useEffect(() => {
    const total = filteredCartItems.reduce((sum, item) => {
      const regularPrice = Math.round(item?.regular_price || 0); // Ensure integer
      const quantity = Math.round(item?.quantity || 1); // Ensure integer

      const discountValue = Math.round(
        item?.product_variant_promotion?.coupon?.discount_value || 0
      ); // Ensure integer
      const discountType =
        item?.product_variant_promotion?.coupon?.discount_type;

      let finalPrice = regularPrice;

      if (discountType === "fixed") {
        finalPrice = regularPrice - discountValue;
      } else if (discountType === "percentage") {
        finalPrice = Math.round(
          regularPrice - (regularPrice * discountValue) / 100
        ); // Round to integer
      }

      // Ensure finalPrice is not negative
      finalPrice = Math.max(finalPrice, 0);

      return sum + finalPrice * quantity;
    }, 0);

    setSubTotalPrice(Math.round(total)); // Ensure integer
  }, [filteredCartItems]);

  const handleApply = async () => {
    if (coupon_code.trim() === "") {
      toast.error("Please enter a valid voucher code!");
      return;
    }
    setSearchParams({ coupon: coupon_code });

    try {
      const response = await checkCoupon({ coupon_code }).unwrap();

      // console.log("coupon", response);

      const discountValue = Math.round(response?.data?.discount_value); // Ensure integer
      setDiscountPrice(discountValue);

      if (response.data) {
        if (
          response.data.status === "Active" &&
          new Date(response?.data?.end_date) >= new Date()
        ) {
          toast.success(
            `You Got ${discountValue}${
              response?.data?.discount_type === "percentage" ? "%" : "৳"
            } Discount`
          );
          setCouponData(response.data);
          setCoupon_code("");
          setVoucher(false);
        } else {
          toast.error("This coupon has expired");
        }
      } else {
        toast.error("Coupon Not Match");
        setCouponData({});
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const totalPrice = Math.round(
    Number(subTotalPrice) -
      Number(
        discountPrice
          ? couponData.discount_type === "fixed"
            ? discountPrice
            : Math.round((discountPrice * subTotalPrice) / 100) // Round percentage discount
          : 0
      )
  );
  return (
    <>
      <div className="grid gap-5 h-fit animate-fadeIn">
        <div
          className={`card bg-base-100 shadow-sm rounded-[5px] ${
            voucher ? "" : "hidden"
          }`}
        >
          <div className="card-body">
            <h2 className="card-title font-medium text-sm text-[#191C1F] border-b border-[#E4E7E9] py-2">
              Coupon Code
            </h2>
            <div className="py-3">
              <input
                id="coupon_code"
                type="text"
                placeholder="Enter Voucher Code"
                value={coupon_code}
                onChange={(e) => setCoupon_code(e.target.value)}
                className="focus:outline-none focus:ring-2 focus:ring-orange-500 border-[0.77px] focus:border-none border-[#E4E7E9] rounded p-2 w-full text-[11px]"
              />
            </div>
            <div className="card-actions justify-start">
              <button
                onClick={handleApply}
                className="text-[10px] px-[18px] font-bold uppercase bg-orange-500 text-white rounded p-1 py-2"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => setVoucher(!voucher)}
          className={`text-sm text-[#FA8232] hover:text-[#c4723c] transition-all duration-100 underline text-left pl-2 hidden lg:block ${
            !voucher ? "" : "hidden"
          }`}
        >
          Have Any Voucher?
        </button>
        <div className="card bg-base-100 shadow-sm rounded-[5px]">
          <div className="card-body">
            <h2 className="card-title font-medium text-lg text-[#191C1F]">
              Cart Total
            </h2>
            <div className="border-b border-gray py-2 text-gray text-sm space-y-[10px]">
              <ul className="flex justify-between">
                <li className=" text-[#5F6C72]">Sub-total</li>
                <li className=" text-[#191C1F] font-bold">
                  {formatPrice(subTotalPrice)} <span>৳</span>
                </li>
              </ul>
              {isLoading ? (
                <p className="text-[11px] my-1">Loading...</p>
              ) : (
                couponData?.discount_value && (
                  <ul className="flex justify-between text-[11px] text-green-600">
                    <li className="text-[11px]">
                      Discount ({couponData ? couponData?.cupon_code : ""})
                    </li>
                    <li className="text-[11px] font-bold">
                      {discountPrice}{" "}
                      <span>
                        {couponData?.discount_type === "fixed" ? "৳" : "%"}
                      </span>
                    </li>
                  </ul>
                )
              )}
            </div>
            <div className="pb-3">
              <ul className="flex justify-between">
                <li className="text-lg lg:text-xl text-[#191C1F]">Total</li>
                <li className="font-bold text-lg lg:text-xl text-[#191C1F]">
                  <span>{formatPrice(totalPrice)} ৳</span>
                </li>
              </ul>
            </div>
            <div className="card-actions justify-center">
              <Link to={`/checkout${queryString}`}>
                <RegularButton className="btn-wide">Checkout</RegularButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {voucherActive && (
        <VoucherCodeApplyInSmallDevice
          voucherActive={voucherActive}
          isVoucherActive={isVoucherActive}
        />
      )}
    </>
  );
};

export default CartCalculationSection;
