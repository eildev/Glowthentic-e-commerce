import { useState } from "react";
import CartItem from "../../components/cart/CartItem";
import CartItemForSmallDevice from "../../components/cart/CartItemForSmallDevice";
import Checkbox from "../../components/typography/Checkbox";
import HeadTitle from "../../components/typography/HeadTitle";
import DeleteModal from "../../components/modal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
} from "../../redux/features/slice/cartSlice";
import toast from "react-hot-toast";
import {
  clearSelections,
  toggleAllSelection,
} from "../../redux/features/slice/selectCartSlice";

const CartItemsSection = () => {
  const [isRemoveAll, setIsRemoveAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { user } = useSelector((state) => state.auth);

  const { selectedItems, allSelected } = useSelector(
    (state) => state.selectCart
  );
  const dispatch = useDispatch();

  const filteredCartItems = cartItems.filter((item) => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });

  const handleDelete = (id) => {
    setItemToDelete(id);
    setIsRemoveAll(false);
    setShowModal(true);
  };

  const handleRemoveAll = () => {
    setIsRemoveAll(true);
    setShowModal(true);
  };

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

  const cancelDelete = () => {
    setShowModal(false);
    setItemToDelete(null);
    setIsRemoveAll(false);
  };

  const handleToggleAll = () => {
    const allItemIds = filteredCartItems.map((item) => item.id);
    dispatch(toggleAllSelection(allItemIds));
  };
  return (
    <>
      <div className="lg:bg-white p-5 lg:col-span-2 rounded-md shadow-md animate-fadeIn">
        <div className="flex justify-between items-center border-b border-[#D7D7D7]">
          <HeadTitle className="lg:bg-white p-5 font-bold text-base md:text-xl leading-[24px] md:leading-[36px]">
            My Shopping Cart
          </HeadTitle>
          <div className="">
            <button
              className="bg-secondary p-3 py-2 font-medium text-white leading-5 cursor-pointer rounded-sm text-sm"
              onClick={handleRemoveAll}
            >
              Remove all
            </button>
          </div>
        </div>
        <div className="lg:max-h-[500px] lg:overflow-y-auto">
          {/* For large device */}
          <div className="hidden md:block">
            <table className="table w-full">
              <thead className="w-full">
                <tr className="uppercase border-none mx-auto text-[#7A7A7A]">
                  <th>Product</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Products Total</th>
                  <th>
                    <Checkbox
                      checked={allSelected}
                      onChange={handleToggleAll}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems
                  .filter((item) => {
                    if (user?.id) {
                      return item.user_id == user.id;
                    } else {
                      return item.user_id == null;
                    }
                  })
                  .map((item, index) => (
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
          <div className=" border-[#D7D7D7] block md:hidden">
            <div className={`flex justify-end mt-2`}>
              <Checkbox checked={allSelected} onChange={handleToggleAll} />
            </div>
            <div className="w-full grid gap-5">
              {cartItems
                .filter((item) => {
                  if (user?.id) {
                    return item.user_id == user.id;
                  } else {
                    return item.user_id == null;
                  }
                })
                .map((item, index) => (
                  <CartItemForSmallDevice
                    key={index}
                    item={item}
                    handleDelete={handleDelete}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <DeleteModal
          title="Remove All Item"
          message="Are you sure you want to remove all selected items from your cart?"
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
          isRemoveAll={isRemoveAll}
          totalItems={4}
        />
      )}
    </>
  );
};

export default CartItemsSection;
