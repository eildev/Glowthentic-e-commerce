import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import RegularButton from "../../components/typography/RegularButton";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import { useDispatch } from "react-redux";
import {
  useRegisterUserMutation,
  useGetCsrfTokenQuery,
} from "../../redux/features/api/auth/authApi";
import {
  loginSuccess,
  loginStart,
  loginFailure,
} from "../../redux/features/slice/authSlice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  // RTK Query hooks
  const { isLoading: csrfLoading } = useGetCsrfTokenQuery();
  const [registerUser, { isLoading: registerLoading, error: registerError }] =
    useRegisterUserMutation();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const signUpHandleData = async (data) => {
<<<<<<< HEAD
    console.log(data);
    dispatch(loginStart()); // Loading শুরু
=======
    dispatch(loginStart());
>>>>>>> ee8a33b84ebdea9ebba5bd81ef3fee04e2556a84
    try {
      const result = await registerUser({
        email: data.email,
        name: data.name,
        password: data.password,
        password_confirmation: data.password_confirmation,
      }).unwrap();

      if (result.status === 200 || result.status === 201) {
        dispatch(loginSuccess(result));
        toast.success("Registration successful! You are now logged in.");
        navigate(from);
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
          toast.error(result.message || "Registration failed");
        }
      }
    } catch (err) {
      dispatch(loginFailure(err?.data?.message || "Registration failed"));
      const errorData = err?.data;
      if (errorData?.errors) {
        Object.keys(errorData.errors).forEach((field) => {
          setError(field, {
            type: "manual",
            message: errorData.errors[field][0],
          });
        });
      } else {
        toast.error(errorData?.message || "Registration failed");
      }
    }
  };

  return (
    <div>
      <DynamicHelmet title="Sign Up" />
      <DynamicForm title="Sign Up" handleForm={handleSubmit(signUpHandleData)}>
        <p className="mb-6 text-gray-500 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            Sign In
          </Link>
        </p>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
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
                value: 8,
                message: "Password must be at least 8 characters",
              },
              // pattern: {
              //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              //   message:
              //     "Password must contain at least one letter and one number",
              // },
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
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="password_confirmation"
            placeholder="Confirm Password"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${
              errors.password_confirmation ? "border-red-500" : ""
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
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
          >
            <Icon
              icon={showConfirmPassword ? "ooui:eye-closed" : "ooui:eye"}
              width="1.5em"
              height="2em"
              style={{ color: "#898989" }}
            />
          </button>
          {errors.password_confirmation && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
          disabled={csrfLoading || registerLoading}
        >
          {registerLoading ? "Signing up..." : "Sign Up"}
        </RegularButton>
      </DynamicForm>
    </div>
  );
};

export default SignUp;
