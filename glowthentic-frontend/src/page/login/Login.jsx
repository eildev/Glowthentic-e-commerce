import { Link } from "react-router-dom";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import RegularButton from "../../components/typography/RegularButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const signInHandleData = (data) => {
    console.log("Sign In Data", data);
  };
  return (
    <div>
      <DynamicForm title="Sign in" handleForm={signInHandleData}>
        {/*-------------Children Start ------------ */}
        <p className="mb-6 text-gray-500 text-center">
          Don’t have an account?{" "}
          <Link href="#" className="text-secondary">
            Sign Up
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

export default Login;
