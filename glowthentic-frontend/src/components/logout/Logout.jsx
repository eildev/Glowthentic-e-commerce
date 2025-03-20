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
    <>

      <button
        onClick={handleLogout}
        className="group lg:block hidden px-2 lg:px-0 py-2 w-full rounded-sm lg:rounded-[4px] hover:rounded-b-lg lg:hover:rounded-b-[4px] hover:bg-secondary-gradient-1 hover:px-4 transition-all duration-300"
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



      <button className="bg-[#EFEFEF] lg:hidden block w-full pl-4 mt-4 pr-2 py-4 rounded-lg" onClick={handleLogout}>
        <p className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5751 9.40327C14.329 9.64939 14.329 10.0484 14.5751 10.2946C14.8212 10.5407 15.2203 10.5407 15.4664 10.2946L16.5528 9.20812C17.1271 8.63384 17.1271 7.70274 16.5528 7.12845L15.4664 6.04201C15.2203 5.79589 14.8212 5.79589 14.5751 6.04201C14.329 6.28814 14.329 6.68718 14.5751 6.9333L15.1799 7.53805H10.0404C9.69232 7.53805 9.41016 7.82022 9.41016 8.16829C9.41016 8.51636 9.69232 8.79852 10.0404 8.79852H15.1799L14.5751 9.40327Z" fill="#28303F" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.167969 4.80692C0.167969 2.60248 1.95502 0.81543 4.15946 0.81543H10.2517C12.4562 0.81543 14.2432 2.60248 14.2432 4.80692C14.2432 5.15499 13.9611 5.43716 13.613 5.43716C13.2649 5.43716 12.9828 5.15499 12.9828 4.80692C12.9828 3.29862 11.76 2.0759 10.2517 2.0759H6.44018C7.11029 2.78988 7.52072 3.75047 7.52072 4.80692V11.5294C7.52072 12.5859 7.11029 13.5465 6.44018 14.2605H10.2517C11.76 14.2605 12.9828 13.0377 12.9828 11.5294C12.9828 11.1814 13.2649 10.8992 13.613 10.8992C13.9611 10.8992 14.2432 11.1814 14.2432 11.5294C14.2432 13.7339 12.4562 15.5209 10.2517 15.5209H4.15946C1.95502 15.5209 0.167969 13.7339 0.167969 11.5294V4.80692Z" fill="#28303F" />
              </g>
            </svg>
            <span className="text-[#252525]">{isLoading ? "Logging out..." : "Logout"}</span>
          </div>
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
    </>
  );
};

export default Logout;
