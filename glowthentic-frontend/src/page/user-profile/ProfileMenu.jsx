import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/img/user-profile/avatar.jpeg";
import Logout from "../../components/logout/Logout";
import { useSelector } from "react-redux";

const ProfileMenu = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="lg:w-[350px] lg:mt-0 p-4 mt-4">
      {/* Avatar */}
      <div className="flex items-center flex-wrap lg:flex-nowrap">
        <div className="w-[75px] h-[75px] rounded-full mr-4 lg:mb-0">
          <img
            className="w-full h-full rounded-full object-cover"
            src={avatar}
            alt="User Avatar"
          />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-dark font-bold font-encode">
            {user?.name ?? ""}
          </h3>
          {/* <h5 className="hidden lg:block text-sm sm:text-md text-gray font-normal font-encode">
            Member Since 2024
          </h5> */}
          <h5 className="text-sm sm:text-md text-gray font-normal font-encode">
            {user?.email ?? ""}
          </h5>
        </div>
      </div>

      {/* Menus */}
      <div className="mt-6">
        <div className="bg-secondary bg-opacity-5 lg:bg-transparent rounded-lg">
          <NavLink
            to="/user-profile"
            end
            className={({ isActive }) =>
              `group block px-2 lg:px-0 py-2 rounded-sm lg:rounded-[4px] hover:rounded-t-lg lg:hover:rounded-t-[4px] border-b border-b-gray-light lg:border-none hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300 ${
                isActive
                  ? "bg-secondary-gradient-1 text-secondary lg:px-4 rounded-b-lg"
                  : ""
              }`
            }
          >
            <p className="flex items-center justify-between text-md lg:text-xl font-bold font-encode">
              Edit Account
              <Icon
                className="w-6 lg:w-8 h-6 lg:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </NavLink>
          <NavLink
            to="/user-profile/orders"
            className={({ isActive }) =>
              `group block px-2 lg:px-0 py-2 rounded-sm lg:rounded-[4px] border-b border-b-gray-light lg:border-none hover:bg-secondary-gradient-1 hover:px-2 transition-all duration-300 ${
                isActive
                  ? "bg-secondary-gradient-1 text-secondary   lg:px-4 rounded-b-lg transition-all duration-300 ease-in"
                  : "px-0"
              }`
            }
          >
            <p className="flex items-center  justify-between text-md lg:text-xl font-bold font-encode">
              Orders
              <Icon
                className="w-6 lg:w-8 h-6 lg:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </NavLink>
          <NavLink
            to="/user-profile/favorites"
            className={({ isActive }) =>
              `group block px-2 lg:px-0 py-2 rounded-sm lg:rounded-[4px] border-b border-b-gray-light lg:border-none hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300 ${
                isActive
                  ? "bg-secondary-gradient-1 text-secondary lg:px-4 rounded-b-lg transition-all duration-300 ease-in"
                  : ""
              }`
            }
          >
            <p className="flex items-center justify-between text-md lg:text-xl font-bold font-encode">
              Favorites
              <Icon
                className="w-6 lg:w-8 h-6 lg:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </NavLink>
          <NavLink
            to="/user-profile/settings"
            className={({ isActive }) =>
              `group block px-2 lg:px-0 py-2 rounded-sm lg:rounded-[4px] hover:rounded-b-lg lg:hover:rounded-b-[4px] hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300 ${
                isActive
                  ? "bg-secondary-gradient-1 text-secondary lg:px-4 rounded-b-lg transition-all duration-300 ease-in"
                  : ""
              }`
            }
          >
            <p className="flex items-center justify-between text-md lg:text-xl font-bold font-encode">
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
