import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/img/user-profile/user.jpg";
import Logout from "../../components/logout/Logout";
import { useSelector } from "react-redux";
import { useGetOrderInfoQuery } from "../../redux/features/api/orderApi/orderGetApi";
import { useGetUserInfoQuery } from "../../redux/features/api/auth/authApi";

const ProfileMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading: orderLoad, error } = useGetOrderInfoQuery(user?.id);
  const {
    data: userData,
    isLoading: userLoad,
    isError,
  } = useGetUserInfoQuery(user?.id, {
    skip: !user?.id,
  });

  const userImage = userData?.userDetails?.image ?? avatar;

  const totalOrder = data?.order?.length ?? 0;
  const completedOrder =
    data?.order?.filter((order) => order.status === "completed").length ?? 0;
  const activeOrder =
    data?.order?.filter(
      (order) =>
        order.status === "pending" ||
        order.status === "processing" ||
        order.status === "approve" ||
        order.status === "Delivering" ||
        order.status === "shipping" ||
        order.status === "In Transit"
    ).length ?? 0;

  return (
    <div className="lg:w-[350px] lg:mt-0 p-7 py-10 mt-4 bg-white rounded-lg shadow-md animate-fadeIn">
      {/* Avatar */}
      {userLoad ? (
        <div className="w-full mx-auto text-center animate-pulse">
          {/* User image skeleton */}
          <div className="w-full mx-auto flex justify-center items-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mr-4 lg:mb-0 border border-hr-thin bg-body"></div>
          </div>

          {/* User details skeleton */}
          <div>
            {/* Full name skeleton */}
            <div className="h-6 w-40 sm:w-48 lg:w-56 mx-auto bg-body rounded mt-4"></div>
            {/* Email skeleton */}
            <div className="h-4 w-32 sm:w-40 mx-auto bg-body rounded mt-2"></div>
          </div>
        </div>
      ) : (
        <div className="w-full mx-auto text-center">
          <div className="w-full mx-auto flex justify-center items-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mr-4 lg:mb-0 border border-hr-thin">
              <img
                className="w-full h-full rounded-full object-cover"
                src={userImage}
                alt="User Avatar"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl text-dark font-bold font-encode">
              {userData?.userDetails?.full_name ?? userData?.user?.name ?? ""}
            </h3>
            <h5 className="text-sm sm:text-md text-gray font-normal font-encode">
              {userData?.user?.email ?? ""}
            </h5>
          </div>
        </div>
      )}

      <div className="mt-7 flex justify-between items-center gap-3 lg:hidden">
        <div className="py-3 px-2 w-full bg-[#FA8232] bg-opacity-5 rounded-lg">
          <h3 className="text-sm text-[#FA8232] font-bold text-center">
            {totalOrder}
          </h3>
          <p className="text-[#2C2C2C] text-[10px] text-center">Total Orders</p>
        </div>
        <div className="py-3 px-2 w-full bg-[#FA8232] bg-opacity-5 rounded-lg">
          <h3 className="text-sm text-[#FA8232] font-bold text-center">
            {activeOrder}
          </h3>
          <p className="text-[#2C2C2C] text-[10px] text-center">
            Active Orders
          </p>
        </div>
        <div className="py-3 px-2 w-full bg-[#FA8232] bg-opacity-5 rounded-lg">
          <h3 className="text-sm text-[#FA8232] font-bold text-center">
            {completedOrder}
          </h3>
          <p className="text-[#2C2C2C] text-[10px] text-center">
            Completed Orders
          </p>
        </div>
      </div>

      {/* Menus */}
      <div className="mt-6">
        <div className="bg-secondary bg-opacity-5 lg:bg-transparent rounded-lg">
          <NavLink
            to="/user"
            end
            className={({ isActive }) =>
              `group block px-2 lg:px-0 py-3 rounded-sm lg:rounded-[4px] hover:rounded-t-lg lg:hover:rounded-t-[4px] border-b border-b-gray-light lg:border-none hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300 ${
                isActive
                  ? "bg-secondary-gradient-1 text-secondary lg:px-4 rounded-b-lg"
                  : ""
              }`
            }
          >
            <p className="flex items-center justify-between text-base lg:text-xl lg:font-bold font-encode">
              Profile
              <Icon
                className="w-6 lg:w-8 h-6 lg:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </NavLink>
          <NavLink
            to="/user/orders"
            className={({ isActive }) =>
              `group block px-2 lg:px-0 py-3 rounded-sm lg:rounded-[4px] border-b border-b-gray-light lg:border-none hover:bg-secondary-gradient-1 hover:px-2 transition-all duration-300 ${
                isActive
                  ? "bg-secondary-gradient-1 text-secondary   lg:px-4 rounded-b-lg transition-all duration-300 ease-in"
                  : "px-0"
              }`
            }
          >
            <p className="flex items-center  justify-between text-base lg:text-xl lg:font-bold font-encode">
              Orders
              <Icon
                className="w-6 lg:w-8 h-6 lg:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </NavLink>
          <NavLink
            to="/user/favorites"
            className={({ isActive }) =>
              `group block px-2 lg:px-0 py-3 rounded-sm lg:rounded-[4px] border-b border-b-gray-light lg:border-none hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300 ${
                isActive
                  ? "bg-secondary-gradient-1 text-secondary lg:px-4 rounded-b-lg transition-all duration-300 ease-in"
                  : ""
              }`
            }
          >
            <p className="flex items-center justify-between text-base lg:text-xl lg:font-bold font-encode">
              Favorites
              <Icon
                className="w-6 lg:w-8 h-6 lg:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </NavLink>
          <NavLink
            to="/user/settings"
            className={({ isActive }) =>
              `group block px-2 lg:px-0 py-3 rounded-sm lg:rounded-[4px] hover:rounded-b-lg lg:hover:rounded-b-[4px] hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300 ${
                isActive
                  ? "bg-secondary-gradient-1 text-secondary lg:px-4 rounded-b-lg transition-all duration-300 ease-in"
                  : ""
              }`
            }
          >
            <p className="flex items-center justify-between text-base lg:text-xl lg:font-bold font-encode">
              Settings
              <Icon
                className="w-6 lg:w-8 h-6 lg:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </NavLink>
        </div>

        <Logout />
      </div>
    </div>
  );
};

export default ProfileMenu;
