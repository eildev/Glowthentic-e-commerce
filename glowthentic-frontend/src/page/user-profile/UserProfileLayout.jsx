import { Outlet } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import Container from "../../components/Container";

const UserProfileLayout = () => {
  return (
    <Container>
      <div className="w-full mx-auto py-10 px-5 lg:px-0">
        <div className="flex justify-between gap-5">
          <div className="hidden lg:block lg:w-[350px] mt-10">
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
