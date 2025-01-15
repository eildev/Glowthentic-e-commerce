import { Link } from "react-router-dom";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import RegularButton from "../../components/typography/RegularButton";

const PasswordVarification = () => {
  const varificationPasswordHandleData = (data) => {
    console.log("Password verification Code:", data); // data will be the form data.
  };
  return (
    <div>
      <DynamicForm
        title="Verification"
        handleForm={varificationPasswordHandleData}
      >
        <h3 className="font-bold  text-lg mt-4">Verification code</h3>
        <p className="mb-6 mt-3 text-gray text-left">
          Please enter 4-digit verification code sent to Bakulan@gmail.com
        </p>
        <div className="mb-4">
          {/* <------code input ----> */}
          {Array(4)
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 me-5 text-center border border-gray-thin rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none"
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length === 1 && e.target.nextSibling) {
                      e.target.nextSibling.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                      if (e.target.value === "" && e.target.previousSibling) {
                        e.target.previousSibling.focus();
                      } else {
                        e.target.value = ""; // Clear the current input
                      }
                    }
                  }}
              />
            ))}
        </div>
        <div className="mb-4 text-left pt-3 text-gray ">
          Didnt receive code?{" "}
          <Link href="#" className="text-secondary">
            Resend code
          </Link>
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary  text-white py-3 rounded hover:bg-orange-600 mt-6"
        >
          Send Verification
        </RegularButton>
      </DynamicForm>
    </div>
  );
};

export default PasswordVarification;
