import CommonTitle from "../../../components/user-profile/CommonTitle";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const { token, user } = useSelector((state) => state.auth);
  const {
    data: wishlist,
    error,
    isLoading,
  } = useGetWishlistByUserIdQuery(user?.id, {
    skip: !user?.id,
  });

  // console.log(wishlist?.wishlist);
  return (
    <div className="w-full mx-auto">
      <CommonTitle title={"Favorites Product"} />

      <div className="grid gap-5">
        {wishlist?.wishlist?.map((item, i) => (
          <FavoriteCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
