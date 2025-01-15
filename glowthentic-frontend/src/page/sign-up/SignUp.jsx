import DynamicForm from "../../components/dynamic-form/DynamicForm";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import RegularButton from "../../components/typography/RegularButton";
import { Link } from "react-router-dom";
import Checkbox from "../../components/typography/Checkbox";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const signUpHandleData = (data) => {
    // handle form data here
    console.log("Sign Up Data", data);
  };
  return (
    <div>
      <DynamicForm title="Sign Up" handleForm={signUpHandleData}>
        {/*-------------Children Start ------------ */}
        <p className="mb-6 text-gray-500 text-center">
          Already have an account??{" "}
          <Link href="#" className="text-secondary">
            Sign In
          </Link>
        </p>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
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
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
        >
          Sign Up
        </RegularButton>
        <div className="my-6 text-gray-500 text-center">or</div>

        <div className="flex gap-4 md:flex-row">
          <button className="flex items-center  bg-white justify-center gap-2 w-full border border-gray-300 py-2 px-4 rounded">
            <Icon
              icon="flat-color-icons:google"
              width="2em"
              height="2em"
              className="w-5 h-5"
            />
            Google
          </button>
          <button className="flex items-center bg-white justify-center gap-2  w-full border border-gray-300 py-2 px-4 rounded">
            <Icon
              icon="ic:baseline-facebook"
              width="2em"
              height="2em"
              style={{ color: "#1977f3" }}
              className="w-5 h-5"
            />
            Facebook
          </button>
        </div>
        <div className="flex gap-4 md:flex-row mt-4 ">
          <Checkbox></Checkbox>{" "}
          <span className="text-gray">
            By clicking Create account, I agree that I have read and accepted
            the Terms of Use and Privacy Policy.
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-6 text-center">
          Protected by reCAPTCHA and subject to the Rhombus{" "}
          <a href="#" className="text-secondary">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-secondary">
            Terms of Service
          </a>
          .
        </p>
        {/*-------------Children End ------------ */}
      </DynamicForm>
    </div>
  );
};

export default SignUp;
