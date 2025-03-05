// src/pages/Signout.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../redux/features/api/auth/authApi";
import { logout } from "../redux/features/slice/authSlice";

const Signout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser, { isLoading, error }] = useLogoutUserMutation();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logoutUser().unwrap(); // API কল করে লগআউট
        dispatch(logout()); // Redux স্টেট ক্লিয়ার
        navigate("/login"); // লগআউটের পর লগইন পেজে রিডাইরেক্ট
      } catch (err) {
        console.error("Logout failed:", err);
      }
    };
    handleLogout();
  }, [dispatch, logoutUser, navigate]);

  if (isLoading) return <p>Logging out...</p>;
  if (error) return <p>Error: {error?.data?.message || "Logout failed"}</p>;

  return null; // লগআউট হয়ে গেলে কিছু দেখানোর প্রয়োজন নেই
};

export default Signout;
