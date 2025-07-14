import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import PreviousPage from "../../components/previous-page/PreviousPage";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartItemsSection from "./CartItemsSection";
import CartCalculationSection from "./CartCalculationSection";
import ematyCartImage from "../../assets/img/cart/emptyCart.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const CartPage = () => {
  const [voucherActive, isVoucherActive] = useState(false);

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

  return (
    <div className={`${filteredCartItems.length > 0 ? "lg:py-10" : "lg:pb-10"}`}>
      <DynamicHelmet title="Shopping Cart" />
      <div className="flex justify-between px-4 py-2 bg-white lg:hidden">
        <button onClick={() => navigate(-1)}>
          <PreviousPage title={"My Cart"}></PreviousPage>
        </button>
        <button onClick={() => isVoucherActive(true)}>
          <h1>Voucher Code</h1>
        </button>
      </div>
      <Container>
        {
          filteredCartItems.length > 0 ? (
            <div className="lg:grid-cols-3 gap-4 grid">
              {/* cart items */}
              <CartItemsSection />

              {/* cart calculation  */}
              <CartCalculationSection isVoucherActive={isVoucherActive} voucherActive={voucherActive} />
            </div>
          ) : (
            <div className="block text-center text-lg font-semibold" >
              <div className="h-[300px] w-full flex justify-center items-start">
                <img src={ematyCartImage} alt="empty Cart" className="h-full object-contain" />
              </div>
              <h2 className="font-bold text-xl lg:text-2xl text-secondary mb-3">Your cart is empty</h2>
              <Link to="/products" className="bg-secondary text-white px-5 py-2 w-1/5 mx-auto rounde-md flex gap-2 justify-center items-center">
                <span className="text-xl lg:text-2xl">
                  <Icon icon="lets-icons:back" />
                </span>
                Go Back To Shop</Link>
            </div>
          )
        }
      </Container>
    </div>
  );
};

export default CartPage;
