// import { Link } from "react-router-dom";
// import DynamicForm from "../../components/dynamic-form/DynamicForm";
// import RegularButton from "../../components/typography/RegularButton";
// import DynamicHelmet from "../../components/helmet/DynamicHelmet";

// const PasswordVerification = () => {
//   const verificationPasswordHandleData = (data) => {};
//   return (
//     <div>
//       <DynamicHelmet title="Verification" />
//       <DynamicForm
//         title="Verification"
//         handleForm={verificationPasswordHandleData}
//       >
//         <h3 className="font-bold  text-lg mt-4">Verification code</h3>
//         <p className="mb-6 mt-3 text-gray text-left">
//           Please enter 6-digit verification code sent to Bakulan@gmail.com
//         </p>
//         <div className="mb-4">
//           {/* <------code input ----> */}
//           {Array(6)
//             .fill("")
//             .map((_, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength={1}
//                 className="w-12 h-12 me-3 text-center border border-gray-thin rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none"
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   if (value.length === 1 && e.target.nextSibling) {
//                     e.target.nextSibling.focus();
//                   }
//                 }}
//                 onKeyDown={(e) => {
//                   if (e.key === "Backspace") {
//                     if (e.target.value === "" && e.target.previousSibling) {
//                       e.target.previousSibling.focus();
//                     } else {
//                       e.target.value = ""; // Clear the current input
//                     }
//                   }
//                 }}
//                 //paste code auto fill up
//                 onPaste={(e) => {
//                   e.preventDefault(); // Prevent default paste behavior
//                   const pasteData = e.clipboardData.getData("text");
//                   const inputs = Array.from(
//                     e.target.parentElement.querySelectorAll("input")
//                   );

//                   pasteData
//                     .slice(0, 4) // Take only the first 4 characters
//                     .split("")
//                     .forEach((char, i) => {
//                       if (inputs[i]) {
//                         inputs[i].value = char;
//                         if (inputs[i + 1]) {
//                           inputs[i + 1].focus();
//                         }
//                       }
//                     });
//                 }}
//                 //paste code auto fill up end
//               />
//             ))}
//         </div>
//         <div className="mb-4 text-left pt-3 text-gray ">
//           Didnt receive code?{" "}
//           <Link href="#" className="text-secondary">
//             Resend code
//           </Link>
//         </div>
//         <RegularButton
//           type="submit"
//           className="w-full bg-secondary  text-white py-3 rounded hover:bg-orange-600 mt-6"
//         >
//           Send Verification
//         </RegularButton>
//       </DynamicForm>
//     </div>
//   );
// };

// export default PasswordVerification;



import { useLocation, useNavigate } from "react-router-dom";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import RegularButton from "../../components/typography/RegularButton";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import { useState, useEffect } from "react";
import {
  useForgotPasswordMutation,
  useVerifyOTPMutation,
  useGetCsrfTokenQuery,
} from "../../redux/features/api/auth/authApi";
import toast from "react-hot-toast";

const PasswordVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(120);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [error, setError] = useState(null);

  // Extract email from query parameters
  const query = new URLSearchParams(location.search);
  const email = query.get("email");

  // Function to mask email
  const maskEmail = (email) => {
    if (!email || !email.includes("@")) return "****@****.com"; // Fallback for invalid email
    const [localPart, domain] = email.split("@");
    if (localPart.length < 4) return email; // Return original if too short to mask
    const firstTwo = localPart.slice(0, 2);
    const lastTwo = localPart.slice(-2);
    return `${firstTwo}****${lastTwo}@${domain}`;
  };

  // RTK Query hooks
  const { isLoading: csrfLoading } = useGetCsrfTokenQuery();
  const [forgotPassword, { isLoading: forgotLoading }] = useForgotPasswordMutation();
  const [verifyOTP, { isLoading: verifyLoading }] = useVerifyOTPMutation();

  // Timer logic
  useEffect(() => {
    if (isTimerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
  }, [timer, isTimerActive]);

  const handleOtpChange = (index, value) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pasteData)) {
      setOtp(pasteData.split(""));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setError("Please enter a 6-digit OTP");
      return;
    }

    try {
      const result = await verifyOTP({ email, otp: otpCode }).unwrap();
      if (result.status === 200) {
        toast.success(result.message);
        navigate(`/reset-password?email=${encodeURIComponent(email)}&token=${result.token}`);
      } else {
        setError(result.message || "Invalid OTP");
        toast.error(result.message || "Invalid OTP");
      }
    } catch (err) {
      const errorMessage = err?.data?.message || "Failed to verify OTP";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleResend = async () => {
    try {
      const result = await forgotPassword({ email }).unwrap();
      if (result.status === 200) {
        toast.success(result.message);
        setTimer(120);
        setIsTimerActive(true);
        setOtp(Array(6).fill(""));
        setError(null);
      } else {
        toast.error(result.message || "Failed to resend OTP");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <div>
      <DynamicHelmet title="Verification" />
      <DynamicForm title="Verification" handleForm={handleSubmit}>
        <h3 className="font-bold text-lg mt-4">Verification code</h3>
        <p className="mb-6 mt-3 text-gray text-left">
          Please enter 6-digit verification code sent to {maskEmail(email)}
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4 flex justify-between">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : null}
              className="w-12 h-12 text-center border border-gray-thin rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none"
            />
          ))}
        </div>
        <div className="mb-4 text-left pt-3 text-gray">
          Time remaining: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
        </div>
        <div className="mb-4 text-left text-gray">
          Didn`t receive code?{" "}
          <button
            onClick={handleResend}
            className={`text-secondary ${timer > 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={timer > 0 || forgotLoading}
          >
            Resend code
          </button>
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600 mt-6"
          disabled={csrfLoading || verifyLoading}
        >
          {verifyLoading ? "Verifying..." : "Verify OTP"}
        </RegularButton>
      </DynamicForm>
    </div>
  );
};

export default PasswordVerification;