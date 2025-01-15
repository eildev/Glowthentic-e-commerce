import { Icon } from "@iconify/react/dist/iconify.js";
import RegularButton from "../../components/typography/RegularButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import loginImage from "../../assets/img/login/Left Content.png";
import smallimage from "../../assets/img/login/small-logo.jpg";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row bg-white">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center">
          {/* Image for Small Devices */}
          <div className="md:hidden w-full h-44	">
            <img src={smallimage} alt="Small Device Image" className="w-full" />
          </div>
          {/* Image for Medium and Larger Devices */}
          <div className="hidden md:flex mt-auto w-fit">
            <img src={loginImage} alt="Login Image" className="" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2  bg-white flex flex-col justify-center items-center px-6 md:px-12 rounded-t-[30px]">
          <h2 className="text-2xl font-bold mb-4 pt-5 md:pt-0">Sign in</h2>
          <p className="mb-6 text-gray-500 text-center">
            Don’t have an account?{" "}
            <Link href="#" className="text-secondary">
              Sign Up
            </Link>
          </p>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
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

            <div className="mb-4 text-right">
              <Link href="#" className="text-secondary">
                Forgot password?
              </Link>
            </div>
            <RegularButton
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
            >
              Sign In
            </RegularButton>
          </form>

          <div className="my-6 text-gray-500">or</div>

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
        </div>
      </div>
    </div>
  );
};

export default Login;
