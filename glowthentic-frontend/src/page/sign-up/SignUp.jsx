import DynamicForm from "../../components/dynamic-form/DynamicForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import RegularButton from "../../components/typography/RegularButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import { useRegisterInfoMutation } from "../../redux/features/api/registerApi/registerApi";
import { datalist } from "framer-motion/client";
import toast from "react-hot-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerInfo, { isLoading, isSuccess, isError, error }] =
    useRegisterInfoMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const signUpHandleData = async (data) => {
    try {
      await registerInfo(data);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <DynamicHelmet title="Sign Up" />
      <DynamicForm title="Sign Up" handleForm={handleSubmit(signUpHandleData)}>
        <p className="mb-6 text-gray-500 text-center">
          Already have an account?{" "}
          <Link to="#" className="text-secondary">
            Sign In
          </Link>
        </p>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "Password must be Strong.",
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
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
        >
          Sign Up
        </RegularButton>
      </DynamicForm>
    </div>
  );
};

export default SignUp;
