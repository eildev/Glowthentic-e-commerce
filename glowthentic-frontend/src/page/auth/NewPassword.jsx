import { Link } from "react-router-dom";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import RegularButton from "../../components/typography/RegularButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordNew = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };
  const newPasswordHandleData = (formData) => {};
  return (
    <div>
      <DynamicHelmet title="New Password" />
      <DynamicForm title="New Password?" handleForm={newPasswordHandleData}>
        <p className="mb-6 text-gray text-center">
          Please create a new password that you don’t use on any other site.
        </p>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
          />
          <button
            type="button"
            onClick={togglePasswordNew}
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
          >
            <Icon
              icon={showPassword ? "ooui:eye-closed" : "ooui:eye"}
              width="1.5em"
              height="2em"
              style={{ color: "#898989" }}
            />
          </button>
        </div>
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmpassword"
            placeholder="Confirm Password"
            className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
          />
          <button
            type="button"
            onClick={toggleConfirmPassword}
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
          >
            <Icon
              icon={showConfirmPassword ? "ooui:eye-closed" : "ooui:eye"}
              width="1.5em"
              height="2em"
              style={{ color: "#898989" }}
            />
          </button>
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
        >
          Reset Password
        </RegularButton>
        <div className="mb-4 text-right pt-3 text-gray ">
          Just remember?{" "}
          <Link href="#" className="text-secondary">
            Sign Up
          </Link>
        </div>
        {/*-------------Children End ------------ */}
      </DynamicForm>
    </div>
  );
};

export default NewPassword;
