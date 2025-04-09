// src/pages/Login.js
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import RegularButton from "../../components/typography/RegularButton";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetCsrfTokenQuery,
  useLoginUserMutation,
} from "../../redux/features/api/auth/authApi";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../redux/features/slice/authSlice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { updateCartUserId } from "../../redux/features/slice/cartSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();



  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (user?.id) {
      dispatch(updateCartUserId(user.id));
    }
  }, [user?.id, dispatch, refresh]);


  const from = location.state?.from || "/";

  // RTK Query hooks
  const { isLoading: csrfLoading } = useGetCsrfTokenQuery();
  const [loginUser, { isLoading: loginLoading, error: loginError }] =
    useLoginUserMutation();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const signInHandleData = async (data) => {
    dispatch(loginStart());
    try {
      const result = await loginUser(data).unwrap();
      // console.log(result);
      if (result.status === 200) {
        // console.log(result);
        dispatch(loginSuccess(result));
        setRefresh(!refresh)
        navigate(from);
        toast.success(result.message);
      } else {
        dispatch(loginFailure(result.message));
        if (result.errors) {
          Object.keys(result.errors).forEach((field) => {
            setError(field, {
              type: "manual",
              message: result.errors[field][0],
            });
          });
        } else {
          toast.error(result.message);
        }
      }
    } catch (err) {
      // console.log(err);
      dispatch(loginFailure(err?.data?.message || "Login failed"));
      const errorData = err?.data;
      if (errorData?.errors) {
        Object.keys(errorData.errors).forEach((field) => {
          setError(field, {
            type: "manual",
            message: errorData.errors[field][0],
          });
        });
      } else {
        toast.error(errorData?.message || "Login failed");
      }
    }
  };

  return (
    <div>
      <DynamicHelmet title="Sign In" />
      <DynamicForm title="Sign In" handleForm={handleSubmit(signInHandleData)}>
        <p className="mb-6 text-gray-500 text-center">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-secondary">
            Sign Up
          </Link>
        </p>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
          >
            <Icon
              icon={showPassword ? "ooui:eye-closed" : "ooui:eye"}
              width="1.5em"
              height="2em"
              style={{ color: "#898989" }}
            />
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-4 text-right">
          <Link to="/forgot-password" className="text-secondary">
            Forgot password?
          </Link>
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
          disabled={csrfLoading || loginLoading}
        >
          {loginLoading ? "Logging in..." : "Sign In"}
        </RegularButton>
      </DynamicForm>
    </div>
  );
};

export default Login;
