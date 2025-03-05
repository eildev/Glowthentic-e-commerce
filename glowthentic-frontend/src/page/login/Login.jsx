// src/pages/Login.js
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import RegularButton from "../../components/typography/RegularButton";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import { useDispatch } from "react-redux";
// import {
//   loginStart,
//   loginSuccess,
//   loginFailure,
// } from "../features/auth/authSlice";
import {
  useGetCsrfTokenQuery,
  useLoginUserMutation,
} from "../../redux/features/api/auth/authApi";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../redux/features/slice/authSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // RTK Query hooks
  const { data: csrfData, isLoading: csrfLoading } = useGetCsrfTokenQuery(); // CSRF টোকেন ফেচ করা
  const [loginUser, { isLoading: loginLoading, error: loginError }] =
    useLoginUserMutation();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const signInHandleData = async (data) => {
    dispatch(loginStart());
    try {
      const result = await loginUser(data).unwrap(); // লগইন API কল
      if (result.status === 200) {
        dispatch(loginSuccess(result));
        navigate("/signout");
      } else {
        dispatch(loginFailure(result.message));
      }
    } catch (err) {
      dispatch(loginFailure(err?.data?.message || "Login failed"));
    }
  };

  return (
    <div>
      <DynamicHelmet title="Sign In" />
      <DynamicForm title="Sign In" handleForm={signInHandleData}>
        <p className="mb-6 text-gray-500 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-secondary">
            Sign Up
          </Link>
        </p>
        <div className="mb-4">
          <input
            type="email"
            name="email" // DynamicForm-এর জন্য name অ্যাট্রিবিউট প্রয়োজন
            placeholder="Email"
            className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password" // DynamicForm-এর জন্য name অ্যাট্রিবিউট প্রয়োজন
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
          <Link to="/forgot-password" className="text-secondary">
            Forgot password?
          </Link>
        </div>
        <RegularButton
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
          disabled={csrfLoading || loginLoading}
        >
          {loginLoading ? "Logging in..." : "Sign In"}
        </RegularButton>
        {loginError && (
          <p className="text-red-500 mt-2">
            {loginError?.data?.message || "An error occurred"}
          </p>
        )}
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
      </DynamicForm>
    </div>
  );
};

export default Login;

// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import RegularButton from "../../components/typography/RegularButton";
// import DynamicHelmet from "../../components/helmet/DynamicHelmet";
// import DynamicForm from "../../components/dynamic-form/DynamicForm";
// import { useDispatch } from "react-redux";
// import {
//   useLoginUserMutation,
//   useGetCsrfTokenQuery,
// } from "../features/auth/authApi";
// import {
//   loginStart,
//   loginSuccess,
//   loginFailure,
// } from "../features/auth/authSlice";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // RTK Query hooks
//   const { data: csrfData, isLoading: csrfLoading } = useGetCsrfTokenQuery(); // CSRF টোকেন ফেচ করা
//   const [loginUser, { isLoading: loginLoading, error: loginError }] =
//     useLoginUserMutation();

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   const signInHandleData = async (data) => {
//     dispatch(loginStart());
//     try {
//       const result = await loginUser(data).unwrap(); // লগইন API কল
//       if (result.status === 200) {
//         dispatch(loginSuccess(result));
//         navigate("/signout");
//       } else {
//         dispatch(loginFailure(result.message));
//       }
//     } catch (err) {
//       dispatch(loginFailure(err?.data?.message || "Login failed"));
//     }
//   };

//   return (
//     <div>
//       <DynamicHelmet title="Sign In" />
//       <DynamicForm title="Sign in" handleForm={signInHandleData}>
//         <p className="mb-6 text-gray-500 text-center">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-secondary">
//             Sign Up
//           </Link>
//         </p>
//         <div className="mb-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
//           />
//         </div>
//         <div className="mb-4 relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
//           />
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             className="absolute inset-y-0 right-4 flex items-center text-gray-500"
//           >
//             <Icon
//               icon={showPassword ? "ooui:eye-closed" : "ooui:eye"}
//               width="1.5em"
//               height="2em"
//               style={{ color: "#898989" }}
//             />
//           </button>
//         </div>

//         <div className="mb-4 text-right">
//           <Link to="/forgot-password" className="text-secondary">
//             Forgot password?
//           </Link>
//         </div>
//         <RegularButton
//           type="submit"
//           className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
//           disabled={csrfLoading || loginLoading}
//         >
//           {loginLoading ? "Logging in..." : "Sign In"}
//         </RegularButton>
//         {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
//         <div className="my-6 text-gray-500 text-center">or</div>

//         <div className="flex gap-4 md:flex-row">
//           <button className="flex items-center bg-white justify-center gap-2 w-full border border-gray-300 py-2 px-4 rounded">
//             <Icon
//               icon="flat-color-icons:google"
//               width="2em"
//               height="2em"
//               className="w-5 h-5"
//             />
//             Google
//           </button>
//           <button className="flex items-center bg-white justify-center gap-2 w-full border border-gray-300 py-2 px-4 rounded">
//             <Icon
//               icon="ic:baseline-facebook"
//               width="2em"
//               height="2em"
//               style={{ color: "#1977f3" }}
//               className="w-5 h-5"
//             />
//             Facebook
//           </button>
//         </div>

//         <p className="text-xs text-gray-400 mt-6 text-center">
//           Protected by reCAPTCHA and subject to the Rhombus{" "}
//           <a href="#" className="text-secondary">
//             Privacy Policy
//           </a>{" "}
//           and{" "}
//           <a href="#" className="text-secondary">
//             Terms of Service
//           </a>
//           .
//         </p>
//       </DynamicForm>
//     </div>
//   );
// };

// export default Login;
