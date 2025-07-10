import { useState } from "react";
import CommonTitle from "../../../components/user-profile/CommonTitle";
import { useChangePasswordMutation } from "../../../redux/features/api/auth/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import PasswordChangeSkeleton from "./PasswordChangeSkeleton";

const PasswordChange = () => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const navigate = useNavigate();

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords({ ...showPasswords, [field]: !showPasswords[field] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await changePassword(formData).unwrap();
      // console.log(response);
      if (response.status) {
        toast.success(response.message);
        setFormData({
          current_password: "",
          new_password: "",
          new_password_confirmation: "",
        });
        navigate("/user");
      }
    } catch (error) {
      if (error.data?.errors) {
        Object.values(error.data.errors).forEach((err) => {
          toast.error(err[0]);
        });
      } else {
        toast.error("An error occurred while changing password.");
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Common Title */}
      <CommonTitle title="Change Password" />

      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto bg-white rounded-lg shadow-md px-10 py-5 animate-fadeIn"
      >
        <div className="grid gap-5">
          {/* Current Password */}
          <div className="relative">
            <label className="block text-base text-dark font-normal font-encode mb-1.5">
              Current Password
            </label>
            <input
              type={showPasswords.current ? "text" : "password"}
              name="current_password"
              value={formData.current_password}
              onChange={handleInputChange}
              className="block w-full text-base text-dark font-normal font-encode px-3 py-2 border rounded-md outline-none focus:border-secondary focus:ring-1 focus:ring-secondary border-hr-thin pr-10"
              placeholder="***********"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("current")}
              className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full top-4 text-xl"
            >
              {showPasswords.current ? (
                <Icon icon="solar:eye-broken" />
              ) : (
                <Icon icon="mdi:eye-off" />
              )}
            </button>
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-base text-dark font-normal font-encode mb-1.5">
              New Password
            </label>
            <input
              type={showPasswords.new ? "text" : "password"}
              name="new_password"
              value={formData.new_password}
              onChange={handleInputChange}
              className="block w-full text-base text-dark font-normal font-encode px-3 py-2 border rounded-md outline-none focus:border-secondary focus:ring-1 focus:ring-secondary border-hr-thin pr-10"
              placeholder="***********"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("new")}
              className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full top-4 text-xl"
            >
              {showPasswords.new ? (
                <Icon icon="solar:eye-broken" />
              ) : (
                <Icon icon="mdi:eye-off" />
              )}
            </button>
          </div>

          {/* Confirm New Password */}
          <div className="relative">
            <label className="block text-base text-dark font-normal font-encode mb-1.5">
              Confirm New Password
            </label>
            <input
              type={showPasswords.confirm ? "text" : "password"}
              name="new_password_confirmation"
              value={formData.new_password_confirmation}
              onChange={handleInputChange}
              className="block w-full text-base text-dark font-normal font-encode px-3 py-2 border rounded-md outline-none focus:border-secondary focus:ring-1 focus:ring-secondary border-hr-thin pr-10"
              placeholder="***********"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirm")}
              className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full top-4 text-xl"
            >
              {showPasswords.confirm ? (
                <Icon icon="solar:eye-broken" />
              ) : (
                <Icon icon="mdi:eye-off" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-secondary text-white font-medium font-encode py-2 rounded-md hover:bg-opacity-90 transition duration-300 disabled:bg-gray-400"
          >
            {isLoading ? "Loading" : "Change Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordChange;
