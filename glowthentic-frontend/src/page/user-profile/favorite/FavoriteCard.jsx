import { Icon } from "@iconify/react";
import { imagePath } from "../../../utils/imagePath";
import { Link } from "react-router-dom";
import ShowRating from "../../../components/rating/ShowRating";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/features/slice/cartSlice";
import toast from "react-hot-toast";

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

  const { user } = useSelector((state) => state.auth);

  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (productItem) => {
    if (isInCart) {
      dispatch(removeFromCart(productItem.id));
      toast.error(
        `${productItem?.product_name ?? productItem?.name ?? ""
        } removed from Cart!`
      );
    } else {
      const newProduct = {
        ...productItem,
        quantity: 1,
        user_id: user?.id || null,
      };
      dispatch(addToCart(newProduct));
      toast.success(
        `${productItem?.product_name ?? productItem?.name ?? ""} added to Cart!`
      );
    }
  };

  return (
    <div className="flex items-center pr-5 bg-white rounded-md overflow-hidden">
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
            <button onClick={() => handleAddToCart(item?.wishlist_product)} className="text-white bg-secondary rounded-md px-5 py-2 text-lg md:text-xl">
              {/* <Icon icon="mynaui:cart-plus" /> */}
              <Icon icon="icon-park-outline:shopping-cart" />
            </button>
            <Link
              to={`/product/${item?.wishlist_product?.slug}`}
              className="text-white bg-primary rounded-md px-5 py-2 text-lg md:text-xl"
              title="View Product"
            >
              <Icon icon="lucide:move-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
