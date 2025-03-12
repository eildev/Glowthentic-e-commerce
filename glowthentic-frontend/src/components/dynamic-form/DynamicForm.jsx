// src/components/dynamic-form/DynamicForm.js
import { Icon } from "@iconify/react";
import loginImage from "../../assets/img/login/Left Content.gif";
import smallimage from "../../assets/img/login/small-logo.gif";

const DynamicForm = ({ title, handleForm, children = " " }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email?.value,
      password: e.target.password?.value,
      name: e.target.name?.value,
      lastName: e.target.lastName?.value,
      confirmPassword: e.target.confirmpassword?.value,
    };
    handleForm(data);

    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row bg-white">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center">
          {/* Image for Small Devices */}
          <div className="md:hidden w-full h-44">
            <img src={smallimage} alt="Small Device Image" className="w-full" />
          </div>
          {/* Image for Medium and Larger Devices */}
          <div className="hidden md:flex mt-auto w-full h-full">
            <img src={loginImage} alt="Login Image" />
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-6 md:px-12 rounded-t-[30px]">
          <h2 className="text-2xl font-bold mb-4 pt-5 md:pt-0">{title}</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            {children}
          </form>
          <div className="my-6 text-gray-500 text-center">or</div>
          <div className="flex gap-4 md:flex-row">
            <button className="flex items-center bg-white justify-center gap-2 w-full border border-gray-300 py-2 px-4 rounded">
              <Icon
                icon="flat-color-icons:google"
                width="2em"
                height="2em"
                className="w-5 h-5"
              />
              Google
            </button>
            <button className="flex items-center bg-white justify-center gap-2 w-full border border-gray-300 py-2 px-4 rounded">
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

export default DynamicForm;
