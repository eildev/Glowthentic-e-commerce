import CommonTitle from "../../../components/user-profile/CommonTitle";
import { NavLink, Outlet } from "react-router-dom";

const OrderProfile = () => {
  return (
    <div className="px-2 w-full mx-auto">
      <CommonTitle title={"My Orders"} />

      <nav className="flex space-x-4">
        <NavLink
          to="/user-profile/orders"
          end
          className={({ isActive }) =>
            isActive
              ? "text-md md:text-lg font-bold font-encode border-b-2 border-dark text-dark py-2"
              : "text-md md:text-lg font-bold font-encode text-gray border-b-2 border-transparent py-2"
          }
        >
          Ongoing
        </NavLink>
        <NavLink
          to="/user-profile/orders/history"
          className={({ isActive }) =>
            isActive
              ? "text-md md:text-lg font-bold font-encode border-b-2 border-dark text-dark py-2"
              : "text-md md:text-lg font-bold font-encode text-gray border-b-2 border-transparent py-2"
          }
        >
          History
        </NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default OrderProfile;
