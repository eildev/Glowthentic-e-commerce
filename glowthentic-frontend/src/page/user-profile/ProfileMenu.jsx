import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/img/user-profile/avatar.jpeg";

const ProfileMenu = () => {
  return (
    <div className="md:w-[350px] md:mt-0 p-4 mt-4">
      {/* Avatar */}
      <div className="flex items-center flex-wrap md:flex-nowrap">
        <div className="w-[75px] h-[75px] rounded-full mr-4 md:mb-0">
          <img
            className="w-full h-full rounded-full object-cover"
            src={avatar}
            alt="User Avatar"
          />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-dark font-bold font-encode">
            Hi, Lotifa
          </h3>
          <h5 className="hidden md:block text-sm sm:text-md text-gray font-normal font-encode">
            Member Since 2024
          </h5>
          <h5 className="block md:hidden text-sm sm:text-md text-gray font-normal font-encode">
            mehrimajannat30@gmail.com
          </h5>
        </div>
      </div>

      {/* order cards */}
      <div className="flex justify-between md:hidden mt-6">
        <div className="text-center p-3 bg-secondary bg-opacity-5 rounded-lg">
          <h5 className="text-sm text-secondary font-bold font-encode">39+</h5>
          <p className="text-xs text-dark font-normal font-encode">
            Total Orders
          </p>
        </div>
        <div className="text-center p-3 bg-secondary bg-opacity-5 rounded-lg">
          <h5 className="text-sm text-secondary font-bold font-encode">2</h5>
          <p className="text-xs text-dark font-normal font-encode">
            Active Orders
          </p>
        </div>
        <div className="text-center p-3 bg-secondary bg-opacity-5 rounded-lg">
          <h5 className="text-sm text-secondary font-bold font-encode">3</h5>
          <p className="text-xs text-dark font-normal font-encode">
            Cancel Orders
          </p>
        </div>
      </div>

      {/* Menus */}
      <div className="mt-6">
        <div className="bg-secondary bg-opacity-5 md:bg-transparent rounded-lg">
          <NavLink
            to="/user-profile"
            className="block px-2 md:px-0 py-2 rounded-sm md:rounded-[4px] hover:rounded-t-lg md:hover:rounded-t-[4px] border-b border-b-gray-light md:border-none hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300"
          >
            <p className="flex items-center justify-between text-md md:text-xl font-bold font-encode">
              Edit Account
              <Icon
                className="w-6 md:w-8 h-6 md:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </NavLink>
          <Link
            to="/user-profile/orders"
            className="block px-2 md:px-0 py-2 rounded-sm md:rounded-[4px] border-b border-b-gray-light md:border-none hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300"
          >
            <p className="flex items-center justify-between text-md md:text-xl font-bold font-encode">
              Orders
              <Icon
                className="w-6 md:w-8 h-6 md:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </Link>
          <Link
            to="/user-profile/favorites"
            className="block px-2 md:px-0 py-2 rounded-sm md:rounded-[4px] border-b border-b-gray-light md:border-none hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300"
          >
            <p className="flex items-center justify-between text-md md:text-xl font-bold font-encode">
              Favorites
              <Icon
                className="w-6 md:w-8 h-6 md:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </Link>
          <Link
            to="/user-profile/settings"
            className="block px-2 md:px-0 py-2 rounded-sm md:rounded-[4px] hover:rounded-b-lg md:hover:rounded-b-[4px] hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300"
          >
            <p className="flex items-center justify-between text-md md:text-xl font-bold font-encode">
              Settings
              <Icon
                className="w-6 md:w-8 h-6 md:h-8 text-gray"
                icon="mdi-light:chevron-right"
              />
            </p>
          </Link>
        </div>

        <Link
          to="/"
          className="block mt-6 bg-light md:bg-transparent md:m-0 px-2 md:px-0 py-2 rounded-lg md:rounded-[5px] hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300"
        >
          <p className="flex items-center justify-between text-md md:text-xl font-bold font-encode">
            Logout
            <Icon
              className="w-6 md:w-8 h-6 md:h-8 text-gray"
              icon="mdi-light:chevron-right"
            />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
