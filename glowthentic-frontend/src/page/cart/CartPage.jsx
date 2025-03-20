import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import PreviousPage from "../../components/previous-page/PreviousPage";
import Checkbox from "../../components/typography/Checkbox";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CartItem from "../../components/cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import IncrementDecrement from "../../components/typography/IncrementDecrement";
import {
  clearCart,
  removeFromCart,
} from "../../redux/features/slice/cartSlice";
import {
  clearSelections,
  toggleAllSelection,
} from "../../redux/features/slice/selectCartSlice";
import CartItemForSmallDevice from "../../components/cart/CartItemForSmallDevice";
import { useCheckCouponMutation } from "../../redux/features/api/couponApi/couponApi";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { selectedItems, allSelected } = useSelector(
    (state) => state.selectCart
  );
  const [voucherActive, isVoucherActive] = useState(false);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [voucher, setVoucher] = useState(false);
  const [coupon_code, setCoupon_code] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isRemoveAll, setIsRemoveAll] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [checkCoupon, { isLoading, isSuccess, isError, error }] =
    useCheckCouponMutation();


  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.regular_price * item.quantity,
      0
    );
    setSubTotalPrice(total.toFixed(2));
  }, [cartItems]);

  // Modified handleDelete to show modal
  const handleDelete = (id) => {
    setItemToDelete(id);
    setIsRemoveAll(false);
    setShowModal(true);
  };

  // Modified handleRemoveAll to show modal
  const handleRemoveAll = () => {
    setIsRemoveAll(true);
    setShowModal(true);
  };

  // New function to confirm deletion
  const confirmDelete = () => {
    if (isRemoveAll) {
      if (selectedItems.length === 0) {
        dispatch(clearCart());
        toast.success("All items removed from cart");
      } else {
        selectedItems.forEach((id) => dispatch(removeFromCart(id)));
        dispatch(clearSelections());
        toast.success("Selected items removed from cart");
      }
    } else if (itemToDelete) {
      dispatch(removeFromCart(itemToDelete));
      toast.success("Deleted Successfully");
    }
    setShowModal(false);
    setItemToDelete(null);
    setIsRemoveAll(false);
  };

  // Function to cancel deletion
  const cancelDelete = () => {
    setShowModal(false);
    setItemToDelete(null);
    setIsRemoveAll(false);
  };

  const handleToggleAll = () => {
    const allItemIds = cartItems.map((item) => item.id);
    dispatch(toggleAllSelection(allItemIds));
  };

  const Shipping = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );

  const shippingPrice = cartItems.length <= 1 ? 80 : 80 + (Shipping - 1) * 20;


  // let discountPrice = 0;


  const tax = parseFloat(
    subTotalPrice * (2 / 100)
  ).toFixed(0);

  const totalPrice = (
    Number(subTotalPrice) - Number(discountPrice)
  ).toFixed(0);






 

  const handleApply = async() => {
    if (coupon_code.trim() === "") {
      console.log("Please enter a voucher code!");
      return;
    }

console.log(coupon_code);
try {
  const response = await checkCoupon({ coupon_code }).unwrap();
  console.log("Server Response:", response);

  const discountValue = Math.round(response?.data?.discount_value);
  // discountPrice = discountValue
  setDiscountPrice(discountValue)

  if(response.data){
    toast.success(
      `You Got ${discountValue}${response?.data?.discount_type === "percentage" ? "%" : "৳"} Discount`
    );
  }
  else{
    toast.error("Coupon Not Match")
  }
} catch (err) {
  console.error("Error:", err);
}


    setCoupon_code(""); 
  };
  

  return (
    <div className="md:py-10">
      <DynamicHelmet title="Cart Page" />
      <div className="flex justify-between px-4 py-2 bg-white md:hidden">
        <button onClick={() => navigate(-1)}>
          <PreviousPage title={"My Cart"}></PreviousPage>
        </button>
        <button onClick={() => isVoucherActive(true)}>
          <h1>Voucher Code</h1>
        </button>
      </div>
      <Container >
        
        <div
        
          className={`lg:grid-cols-3 gap-4 ${
            cartItems.length === 0 ? "hidden" : "grid"
          }`}
          
        >
          <div className="md:bg-white p-5 lg:col-span-2">
            <div className="flex justify-between border-b border-[#D7D7D7]">
              <HeadTitle className="md:bg-white p-5 font-medium text-base md:text-2xl leading-[24px] md:leading-[36px]">
                My Shopping Cart
              </HeadTitle>
              <a
                href="#"
                className="text-secondary p-5 font-medium text-[12.78px] leading-5 cursor-pointer"
                onClick={handleRemoveAll}
              >
                Remove all
              </a>
            </div>
            <div className="max-h-[500px] overflow-y-auto">
              {/* For large device */}
              <div className="hidden md:block">
                <table className="table w-full">
                  <thead className="w-full">
                    <tr className="uppercase border-none mx-auto text-[#7A7A7A]">
                      <th>
                        <Checkbox
                          checked={allSelected}
                          onChange={handleToggleAll}
                        />
                      </th>
                      <th>Product</th>
                      <th className="text-center">Quantity</th>
                      <th className="">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <CartItem
                        key={index}
                        item={item}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* For small device */}
              <table className="table border-t border-[#D7D7D7] block md:hidden">
                <tbody>
                  {cartItems.map((item, index) => (
                    <CartItemForSmallDevice
                      key={index}
                      item={item}
                      handleDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-5 h-fit">
          <div className={`card bg-base-100 shadow-sm rounded-[5px] ${voucher ? "" : "hidden"}`}>
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
          <button onClick={()=>setVoucher(!voucher)} className={`text-sm text-[#FA8232] hover:text-[#c4723c] transition-all duration-100 underline text-left pl-2 ${!voucher ? "" : "hidden"}`}>Have Any Voucher?</button>
            <div className="card bg-base-100 shadow-sm rounded-[5px]">
              <div className="card-body">
                <h2 className="card-title font-medium text-sm text-[#191C1F]">
                  Cart Total
                </h2>
                <div className="border-b border-gray py-2 text-gray text-sm space-y-[10px]">
                  <ul className="flex justify-between">
                    <li className="text-[11px] text-[#5F6C72]">Sub-total</li>
                    <li className="text-[11px] text-[#191C1F] font-bold">
                    {(Number(subTotalPrice) || 0).toFixed(0)} <span>৳</span>
                    </li>
                  </ul>
                  {/* <ul className="flex justify-between text-[11px] text-[#5F6C72]">
                    <li className="text-[11px] text-[#5F6C72]">Shipping</li>
                    <li className="text-[11px] text-[#191C1F] font-bold">
                      {shippingPrice} <span>৳</span>
                    </li>
                  </ul> */}
                  <ul className="flex justify-between text-[11px] text-[#5F6C72]">
                    <li className="text-[11px] text-[#5F6C72]">Discount</li>
                    <li className="text-[11px] text-[#191C1F] font-bold">
                      {discountPrice} <span>৳</span>
                    </li>
                  </ul>
                  {/* <ul className="flex justify-between text-[11px] text-[#5F6C72]">
                    <li className="text-[11px] text-[#5F6C72]">Tax</li>
                    <li className="text-[11px] text-[#191C1F] font-bold">
                      {tax} <span>৳</span>
                    </li>
                  </ul> */}
                </div>
                <div className="pb-3">
                  <ul className="flex justify-between">
                    <li className="text-[13px] text-[#191C1F]">
                      Product Total
                    </li>
                    <li className="font-bold text-[13px] text-[#191C1F]">
                      <span>{totalPrice} ৳</span>
                    </li>
                  </ul>
                </div>
                <div className="card-actions justify-center">
                  <Link to="/checkout">
                    <RegularButton className="btn-wide">Checkout</RegularButton>
                  </Link>
                </div>
              </div>
            </div>

     
          </div>
        </div>
        <div
          className={`${
            cartItems.length === 0
              ? "block text-center text-lg font-semibold"
              : "hidden"
          }`}
        >
          No Items Available!
        </div>
        {
    voucherActive && (
      <div
        className="h-[100vh] w-full bg-[#1C1B1B] bg-opacity-60 fixed top-0 left-0 z-[90]"

      >

        <div className="h-auto w-full bg-white fixed bottom-0 rounded-t-xl px-3 py-5">
          <div>
            <h1 className="text-[#1C1B1B]">Voucher Code</h1>
            <input
              type="text"
              placeholder="Enter Voucher Code"
              className="p-4 border border-[#F4F5FD] rounded-lg mt-4 w-full placeholder:text-xs placeholder:font-normal"
            />
          </div>
          <button
            onClick={() => isVoucherActive(!voucherActive)}
            className="w-full bg-[#FA8232] rounded-lg p-2 text-white mt-8"
          >
            Apply
          </button>
          <button
            onClick={() => isVoucherActive(!voucherActive)}
            className="w-full bg-[#FA8232] rounded-lg p-2 text-white mt-2"
          >
            cancel
          </button>
        </div>
      </div>
    )
  }
  {/* New Confirmation Modal */ }
  {
    showModal && (
      <div className="h-[100vh] w-full bg-[#1C1B1B] bg-opacity-60 fixed top-0 left-0 z-[100]">
        <div className="w-full max-w-md bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-5 py-8">
          <div className="text-center">
            <h1 className="text-[#1C1B1B] text-lg font-semibold">
              {isRemoveAll ? "Remove All Items" : "Remove Item"}
            </h1>
            <p className="text-[#5F6C72] mt-2">
              {isRemoveAll
                ? "Are you sure you want to remove all selected items from your cart?"
                : "Are you sure you want to remove this item from your cart?"}
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={cancelDelete}
              className="px-6 py-2 bg-gray-200 text-[#1C1B1B] rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              Yes, Remove
            </button>
          </div>
        </div>
      </div>
    )
  }
      </Container >
    </div >
  );
};

export default CartPage;