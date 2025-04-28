import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useGetCsrfTokenQuery,
  useResetPasswordMutation,
} from "../../redux/features/api/auth/authApi";
import { useForm } from "react-hook-form";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import { Icon } from "@iconify/react";
import RegularButton from "../../components/typography/RegularButton";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  // Extract token and email from URL query parameters
  const query = new URLSearchParams(location.search);
  const token = query.get("token");
  const email = query.get("email");

  // RTK Query hooks
  const { isLoading: csrfLoading } = useGetCsrfTokenQuery();
  const [resetPassword, { isLoading: resetLoading, error: resetError }] =
    useResetPasswordMutation();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: email || "",
      token: token || "",
    },
  });

  // Redirect to forgot password if token or email is missing
  useEffect(() => {
    if (!token || !email) {
      toast.error("Invalid reset link. Please request a new one.");
      navigate("/forget-password");
    }
  }, [token, email, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      const result = await resetPassword({
        email: data.email,
        token: data.token,
        password: data.password,
        password_confirmation: data.password_confirmation,
      }).unwrap();
      console.log(result);
      if (result.status === 200) {
        setSuccessMessage(result.message);
        toast.success(result.message);
        setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
      } else {
        if (result.errors) {
          Object.keys(result.errors).forEach((field) => {
            setError(field, {
              type: "manual",
              message: result.errors[field][0],
            });
          });
        }
        toast.error(result.message || "Failed to reset password");
      }
    } catch (err) {
      console.log(err);
      const errorData = err?.data;
      if (errorData?.errors) {
        Object.keys(errorData.errors).forEach((field) => {
          setError(field, {
            type: "manual",
            message: errorData.errors[field][0],
          });
        });
      }
      toast.error(errorData?.message || "Failed to reset password");
    }
  };

  return (
    <div>
      <DynamicHelmet title="Reset Password" />
      <DynamicForm title="Reset Password" handleForm={handleSubmit(onSubmit)}>
        <p className="mb-6 text-gray-500 text-center">
          Remember your password?{" "}
          <Link to="/login" className="text-secondary">
            Sign In
          </Link>
        </p>
        {successMessage && (
          <p className="mb-4 text-green-500 text-center">{successMessage}</p>
        )}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${errors.email ? "border-red-500" : ""
              }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email format",
              },
            })}
            readOnly
            hidden
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="token"
            placeholder="Token"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${errors.token ? "border-red-500" : ""
              }`}
            {...register("token", {
              required: "Token is required",
            })}
            readOnly
            hidden
          />
          {errors.token && (
            <p className="text-red-500 text-sm mt-1">{errors.token.message}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="New Password"
              className={`w-full p-3 pr-12 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${errors.password ? "border-red-500" : ""
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
              className="absolute right-4 flex items-center text-gray-500"
            >
              <Icon
                icon={showPassword ? "ooui:eye-closed" : "ooui:eye"}
                width="1.5em"
                height="2em"
                style={{ color: "#898989" }}
              />
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-4 relative">
          <div className="relative flex items-center">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="password_confirmation"
              placeholder="Confirm New Password"
              className={`w-full p-3 pr-12 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${errors.password_confirmation ? "border-red-500" : ""
                }`}
              {...register("password_confirmation", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-4 flex items-center text-gray-500"
            >
              <Icon
                icon={showConfirmPassword ? "ooui:eye-closed" : "ooui:eye"}
                width="1.5em"
                height="2em"
                style={{ color: "#898989" }}
              />
            </button>
          </div>
          {errors.password_confirmation && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
          disabled={csrfLoading || resetLoading}
        >
          {resetLoading ? "Resetting..." : "Reset Password"}
        </RegularButton>
      </DynamicForm>
    </div>
  );
};

export default ResetPassword;
