import { Outlet } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const UserProfileLayout = () => {
  return (
    <div className="w-full lg:w-[1224px] mx-auto my-10 px-5 lg:px-0">
      <div className="flex justify-between">
        <div className="hidden md:block md:w-[350px]">
          <ProfileMenu />
        </div>
        <div className="w-full md:w-[850px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserProfileLayout;
