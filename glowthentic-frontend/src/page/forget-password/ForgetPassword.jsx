import { Link } from "react-router-dom";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import RegularButton from "../../components/typography/RegularButton";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";

const ForgetPassword = () => {
  const ForgetPasswordHandleData = (data) => {
    // console.log("Forget Password Data: ", data);
  };
  return (
    <div>
      <DynamicHelmet title="Forgot password?" />
      <DynamicForm
        title="Forgot password?"
        handleForm={ForgetPasswordHandleData}
      >
        <p className="mb-6 text-gray text-center">
          No worriest! Just enter your email and we’ll send you a reset password
          verification code.
        </p>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
          />
        </div>

        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
        >
          Send Recovery Email
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

export default ForgetPassword;
