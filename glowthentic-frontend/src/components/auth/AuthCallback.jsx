import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/features/slice/authSlice"; // From your authSlice
import toast from "react-hot-toast";

const AuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("access_token");
    const user = JSON.parse(query.get("user")); // User data received from Laravel

    if (token && user) {
      // Store token and user data in Redux state
      dispatch(loginSuccess({ data: { ...user, token } }));

      // Update your cart (as done in Login.js)
      // dispatch(updateCartUserId(user.id));

      // Show success toast message
      toast.success("Login successful!");

      // Redirect based on user role
      const redirectPath =
        user.role === "superadmin" || user.role === "admin" ? "/user" : "/";
      navigate(redirectPath);
    } else {
      // Redirect to login page if login fails
      toast.error("Login failed. Please try again.");
      navigate("/login");
    }
  }, [location, navigate, dispatch]);

  return <div>Loading...</div>;
};

export default AuthCallback;
