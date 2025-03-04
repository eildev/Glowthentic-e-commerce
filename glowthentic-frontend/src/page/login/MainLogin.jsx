// src/pages/Login.js
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { loginStart, loginSuccess, loginFailure } from "../features/slice/authSlice";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
// import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import { loginStart, loginSuccess, loginFailure} from "../../redux/features/slice/authSlice";

const MainLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        dispatch(loginStart());
        try {
            // Step 1: Fetch CSRF cookie (use absolute URL)
            const csrfResponse = await fetch("http://127.0.0.1:8000/sanctum/csrf-cookie", {
                method: "GET",
                credentials: "include", // Allow cookies
            });
    
            // Check if CSRF cookie was set
            if (!csrfResponse.ok) {
                throw new Error("Failed to fetch CSRF cookie");
            }
    
            // Step 2: Get CSRF token from cookies
            // const csrfToken = document.cookie
            //     .split('; ')
            //     .find(row => row.startsWith('XSRF-TOKEN='))
            //     ?.split('=')[1];

            const csrfToken = Cookies.get('XSRF-TOKEN');
    
            if (!csrfToken) {
                throw new Error("CSRF token not found in cookies");
            }
    
            // Step 3: Make login request with CSRF token
            const response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
                },
                body: JSON.stringify(data),
                credentials: "include", // Include cookies
            });
            // console.log(response);
            // const text = await response.text(); 
            // let result;
            // try {
            // result = JSON.parse(text); 
            // } catch (err) {
            //     console.log(err);
            // throw new Error("Invalid JSON response from server");
            // }
    
            const result = await response.json();
    
            if (result.status === 200) {
                // console.log("Login successful:", result);
                dispatch(loginSuccess(result));   
                navigate('/signout')         
            } else {
                console.error("Login failed:", result.message);
                dispatch(loginFailure(result.message));
            }

        } catch (err) {
            // console.log(err);
            dispatch(loginFailure(err.message));
        }
    };
    return (
        <div>
            {/* <DynamicHelmet title="Sign In" /> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="mb-6 text-gray-500 text-center">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-secondary">
                        Sign Up
                    </Link>
                </p>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mb-4 relative">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-300"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <div className="mb-4 text-right">
                    <Link to="/forgot-password" className="text-secondary">
                        Forgot password?
                    </Link>
                </div>
                <button
                    type="submit"
                    className="w-full bg-secondary text-white py-3 rounded hover:bg-orange-600"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Sign In"}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default MainLogin;