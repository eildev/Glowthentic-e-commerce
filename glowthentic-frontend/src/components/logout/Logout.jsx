import React from "react";
import { logout } from "../../redux/features/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../redux/features/api/auth/authApi";
import { Icon } from "@iconify/react";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser, { isLoading, error }] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="group block px-2 lg:px-0 py-2 w-full rounded-sm lg:rounded-[4px] hover:rounded-b-lg lg:hover:rounded-b-[4px] hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300"
      disabled={isLoading}
    >
      <p className="flex items-center justify-between text-md lg:text-xl font-bold font-encode w-full">
        {isLoading ? "Logging out..." : "Logout"}
        <Icon
          className="w-6 lg:w-8 h-6 lg:h-8 text-gray"
          icon="mdi-light:chevron-right"
        />
      </p>
      {error && (
        <p className="text-red-500 mt-2">
          {error?.data?.message || "Logout failed"}
        </p>
      )}
    </button>
  );
};

export default Logout;
