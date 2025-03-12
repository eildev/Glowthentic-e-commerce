import { Outlet, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import Container from "../../components/Container";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";

const UserProfileLayout = () => {
  const { token, user } = useSelector((state) => state.auth);
  console.log("token",  token);
  console.log(user?.data?.id);

  const navigate = useNavigate();
  const { data: wishlist, error, isLoading } = useGetWishlistByUserIdQuery(user?.data?.id);
  return (
    <Container>
      <div className="w-full mx-auto py-10 lg:py-20 px-5 lg:px-0">
        <div className="flex justify-between gap-5">
          <div className="hidden lg:block lg:w-[350px]">
            <ProfileMenu />
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserProfileLayout;
