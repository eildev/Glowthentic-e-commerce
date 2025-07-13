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
      {wishlist?.wishlist?.length > 0 ? (
        <div className="grid gap-5">
          {wishlist?.wishlist?.map((item, i) => (
            <FavoriteCard key={i} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 bg-body min-h-[400px] animate-fadeIn">
          {/* SVG Heart Icon */}
          <svg
            width="128"
            height="128"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FA8232" // secondary color
            strokeWidth="2"
            className="w-32 h-32 md:w-48 md:h-48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#0F1228" // primary color for outline
              fill="none"
            />
          </svg>
          <p className="mt-4 text-lg text-gray-bold font-encode">
            Your favorites list is empty!
          </p>
          <a
            href="/products"
            className="mt-4 text-secondary hover:text-primary font-encode text-base underline transition-colors"
          >
            Browse Products
          </a>
        </div>
      )}
    </div>
  );
};

export default Favorites;
