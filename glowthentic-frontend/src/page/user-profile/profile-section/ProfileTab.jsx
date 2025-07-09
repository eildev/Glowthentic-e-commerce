import { NavLink } from "react-router-dom";
import CommonTitle from "../../../components/user-profile/CommonTitle";

const ProfileTab = () => {
  return (
    <div className="px-2 w-full mx-auto">
      <CommonTitle title="My Profile" />

      <nav className="flex space-x-4">
        <NavLink
          to="/user"
          end
          className={({ isActive }) =>
            isActive
              ? "text-md md:text-lg font-bold font-encode border-b-2 border-dark text-dark py-2"
              : "text-md md:text-lg font-bold font-encode text-gray border-b-2 border-transparent py-2"
          }
        >
          Profile Information
        </NavLink>
        <NavLink
          to="edit"
          className={({ isActive }) =>
            isActive
              ? "text-md md:text-lg font-bold font-encode border-b-2 border-dark text-dark py-2"
              : "text-md md:text-lg font-bold font-encode text-gray border-b-2 border-transparent py-2"
          }
        >
          Edit Profile
        </NavLink>
        <NavLink
          to="change-password"
          className={({ isActive }) =>
            isActive
              ? "text-md md:text-lg font-bold font-encode border-b-2 border-dark text-dark py-2"
              : "text-md md:text-lg font-bold font-encode text-gray border-b-2 border-transparent py-2"
          }
        >
          Password Change
        </NavLink>
      </nav>
    </div>
  );
};

export default ProfileTab;
