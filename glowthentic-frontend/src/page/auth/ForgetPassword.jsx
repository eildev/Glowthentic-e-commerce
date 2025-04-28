// import { Link, useNavigate } from "react-router-dom";
// import DynamicForm from "../../components/dynamic-form/DynamicForm";
// import RegularButton from "../../components/typography/RegularButton";
// import DynamicHelmet from "../../components/helmet/DynamicHelmet";
// import { useState } from "react";
// import {
//   useForgotPasswordMutation,
//   useGetCsrfTokenQuery,
// } from "../../redux/features/api/auth/authApi";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [successMessage, setSuccessMessage] = useState(null);

//   // RTK Query hooks
//   const { isLoading: csrfLoading } = useGetCsrfTokenQuery();
//   const [forgotPassword, { isLoading: forgotLoading, error: forgotError }] =
//     useForgotPasswordMutation();

//   // react-hook-form setup
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const result = await forgotPassword({ email: data.email }).unwrap();
//       if (result.status === 200) {
//         setSuccessMessage(result.message);
//         toast.success(result.message);
//       } else {
//         if (result.errors) {
//           Object.keys(result.errors).forEach((field) => {
//             setError(field, {
//               type: "manual",
//               message: result.errors[field][0],
//             });
//           });
//         }
//         toast.error(result.message || "Failed to send reset link");
//       }
//     } catch (err) {
//       const errorData = err?.data;
//       if (errorData?.errors) {
//         Object.keys(errorData.errors).forEach((field) => {
//           setError(field, {
//             type: "manual",
//             message: errorData.errors[field][0],
//           });
//         });
//       }
//       toast.error(errorData?.message || "Failed to send reset link");
//     }
//   };

//   return (
//     <div>
//       <DynamicHelmet title="Forgot Password" />
//       <DynamicForm title="Forgot Password" handleForm={handleSubmit(onSubmit)}>
//         <p className="mb-6 text-gray-500 text-center">
//           Remember your password?{" "}
//           <Link to="/login" className="text-secondary">
//             Sign In
//           </Link>
//         </p>
//         {successMessage && (
//           <p className="mb-4 text-green-500 text-center">{successMessage}</p>
//         )}
//         <div className="mb-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${
//               errors.email ? "border-red-500" : ""
//             }`}
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                 message: "Invalid email format",
//               },
//             })}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//           )}
//         </div>
//         <RegularButton
//           type="submit"
//           className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
//           disabled={csrfLoading || forgotLoading}
//         >
//           {forgotLoading ? "Sending..." : "Send Reset Link"}
//         </RegularButton>
//       </DynamicForm>
//     </div>
//   );
// };

// export default ForgotPassword;


import { Link, useNavigate } from "react-router-dom";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import RegularButton from "../../components/typography/RegularButton";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import { useState } from "react";
import {
  useForgotPasswordMutation,
  useGetCsrfTokenQuery,
} from "../../redux/features/api/auth/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);

  // RTK Query hooks
  const { isLoading: csrfLoading } = useGetCsrfTokenQuery();
  const [forgotPassword, { isLoading: forgotLoading, error: forgotError }] =
    useForgotPasswordMutation();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await forgotPassword({ email: data.email }).unwrap();
      if (result.status === 200) {
        setSuccessMessage(result.message);
        toast.success(result.message);
        // Redirect to verification page
        navigate(`/password-verification?email=${encodeURIComponent(data.email)}`);
      } else {
        if (result.errors) {
          Object.keys(result.errors).forEach((field) => {
            setError(field, {
              type: "manual",
              message: result.errors[field][0],
            });
          });
        }
        toast.error(result.message || "Failed to send OTP");
      }
    } catch (err) {
      const errorData = err?.data;
      if (errorData?.errors) {
        Object.keys(errorData.errors).forEach((field) => {
          setError(field, {
            type: "manual",
            message: errorData.errors[field][0],
          });
        });
      }
      toast.error(errorData?.message || "Failed to send OTP");
    }
  };

  return (
    <div>
      <DynamicHelmet title="Forgot Password" />
      <DynamicForm title="Forgot Password" handleForm={handleSubmit(onSubmit)}>
        <p className="mb-6 text-gray-500 text-center">
          Remember your password?{" "}
          <Link to="/login" className="text-secondary">
            Sign In
          </Link>
        </p>
        {successMessage && (
          <p className="mb-4 text-green-500 text-center">{successMessage}</p>
        )}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300 ${errors.email ? "border-red-500" : ""
              }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
          disabled={csrfLoading || forgotLoading}
        >
          {forgotLoading ? "Sending..." : "Send OTP"}
        </RegularButton>
      </DynamicForm>
    </div>
  );
};

export default ForgotPassword;
