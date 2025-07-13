import { Icon } from "@iconify/react";
import { imagePath } from "../../../utils/imagePath";
import { Link } from "react-router-dom";
import ShowRating from "../../../components/rating/ShowRating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/features/slice/cartSlice";
import toast from "react-hot-toast";
import { useDeleteWishlistItemMutation } from "../../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import DeleteModal from "../../../components/modal/DeleteModal";

const FavoriteCard = ({ item }) => {
  const categories = item.wishlist_product.product_category ?? [];
  const reviews = item?.wishlist_product?.reviews ?? [];

  const rating =
    reviews.length > 0
      ? reviews.reduce(
          (accumulator, currentValue) =>
            accumulator + (currentValue.rating || 0),
          0
        ) / reviews.length
      : 0;
  const { user, token } = useSelector((state) => state.auth);

  const { cartItems } = useSelector((state) => state.cart);

  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();

  // Check if the product is already in the cart
  useEffect(() => {
    if (!cartItems || !Array.isArray(cartItems) || !item?.variant?.id) {
      setIsInCart(false);
      return;
    }
    const productExists = cartItems.some((cartItem) => {
      if (!cartItem?.id) return false;
      if (token && user?.id) {
        // For logged-in users, check both product ID and user ID
        return cartItem.id === item.variant.id && cartItem.user_id === user.id;
      }
      return cartItem.id === item.variant.id;
    });

    setIsInCart(productExists);
  }, [item, cartItems, token, user]);

  const handleAddToCart = (productItem) => {
    // Check if the product is already in the cart
    const isProductInCart = cartItems.some(
      (cartItem) => cartItem.id === productItem.id // Adjust 'id' based on your product structure
    );

    if (isProductInCart) {
      toast(
        `${
          productItem?.product?.product_name ?? productItem?.name ?? "Product"
        } is already in the cart!`,
        {
          icon: "❗",
        }
      );
    } else {
      const newProduct = {
        ...productItem,
        quantity: 1,
        user_id: user?.id || null,
      };
      dispatch(addToCart(newProduct));
      toast.success(
        `${
          productItem?.product?.product_name ?? productItem?.name ?? "Product"
        } added to cart!`
      );
      setIsInCart(true); // Update state to reflect the product is now in the cart
    }
  };

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteWishlistItem] = useDeleteWishlistItemMutation();

  // delete Favorite Items
  const confirmDelete = async () => {
    try {
      const result = await deleteWishlistItem(item?.id).unwrap();
      if (result?.status === 200) {
        toast.success("Item deleted successfully!");
      } else {
        toast.error("Error deleting the item!");
      }
    } catch (error) {
      console.error("Failed to delete the item:", error);
      toast.error("Error deleting the item!");
    }
    setShowConfirmModal(false);
  };

  const cancelDelete = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className="relative flex items-center pr-5 bg-white rounded-md overflow-hidden">
        <div
          onClick={() => setShowConfirmModal(true)}
          className="absolute top-5 right-8 h-7 sm:h-8 lg:h-10 w-7 sm:w-8 lg:w-10 rounded-full bg-primary text-white z-10 flex justify-center items-center cursor-pointer text-sm lg:text-xl font-bold"
          title="Remove Item"
        >
          <Icon icon="radix-icons:cross-2" />
        </div>
        <div className="w-5/12 lg:w-3/12 bg-light relative">
          <img
            className="w-full object-cover"
            src={imagePath(item?.variant?.variant_image[0]?.image)}
            alt=""
          />
          <div className="absolute right-4 bottom-4 bg-light p-2">
            <Icon
              className="w-4 h-4 lg:w-8 lg:h-8 text-secondary"
              icon="mdi:cards-heart"
            />
          </div>
        </div>
        <div className="w-7/12 lg:w-9/12 p-4">
          <h5 className="text-sm lg:text-xl text-dark font-bold font-encode">
            {item?.wishlist_product?.product_name ?? ""}
          </h5>
          <div className="flex justify-between items-center my-2">
            <div className="flex justify-start gap-1">
              {categories.map((category, i) => (
                <p
                  key={i}
                  className="text-sm lg:text-md text-gray font-normal font-encode"
                >
                  {category?.category?.categoryName ?? ""}
                </p>
              ))}
            </div>
            <ShowRating rating={rating} width={100} />
          </div>

          <div className="w-full flex justify-between items-center mt-5">
            <p className="text-sm lg:text-xl text-dark font-semibold font-encode">
              ৳ {item?.variant?.regular_price ?? 0}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleAddToCart(item?.variant)}
                className="text-white bg-secondary rounded-md lg:px-5 py-2 px-2 text-sm lg:text-xl"
              >
                <Icon
                  icon={
                    isInCart
                      ? "icon-park-outline:check"
                      : "icon-park-outline:shopping-cart"
                  }
                />
              </button>
              <Link
                to={`/product/${item?.wishlist_product?.slug}`}
                className="text-white bg-primary rounded-md lg:px-5 py-2 px-2 text-sm lg:text-xl"
                title="View Product"
              >
                <Icon icon="lucide:move-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showConfirmModal && (
        <DeleteModal
          title="Remove Item"
          message="Are you sure you want to remove this item from your wishlist?"
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}
    </>
  );
};

export default FavoriteCard;
