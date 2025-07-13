import CommonTitle from "../../../components/user-profile/CommonTitle";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import FavoriteCard from "./FavoriteCard";
import FavoriteCardSkeleton from "./FavoriteCardSkeleton";


const Favorites = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    data: wishlist,
    error,
    isLoading,
  } = useGetWishlistByUserIdQuery(user?.id, {
    skip: !user?.id,
  });



  if (error) return <p>Some Error Happening</p>;
  if (isLoading) return <FavoriteCardSkeleton />;


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
