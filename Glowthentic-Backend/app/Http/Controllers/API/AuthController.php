<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    // Register API, Login API, Profile API, Logout API

    // POST [name, email, password, role_id]
    public function register(Request $request)
    {
        // dd($request->all());
        try {
            // Validate the request data
            $validator = Validator::make($request->all(), [
                // 'username' => 'required|string|unique:users,username',
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|unique:users,email',
                'password' => 'required|confirmed|min:6',
                // 'confirm_password' => 'required|confirmed|same:password',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "status" => 400,
                    "message" => "Validation errors",
                    "errors" => $validator->errors(),
                ]);
            }

            // Create new user
            $user = User::create([
                'name' => $request->name,
                // 'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Create and return token
            $response = [];
            // $response["token"] = $user->createToken("MyApp")->plainTextToken;
            $response["name"] = $user->name;
            $response["email"] = $user->email;
            $response["id"] = $user->id;

            return response()->json([
                "status" => 200,
                "message" => "User registered successfully",
                "data" => $response,
            ]);
        } catch (Exception $e) {
            // Handle unexpected errors
            return response()->json([
                "status" => 500,
                "message" => "Something went wrong, please try again later.",
                "error" => $e->getMessage(),
            ]);
        }
    }

    // public function login(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'email' => 'required|email',
    //         'password' => 'required|min:6',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             "status" => 400,
    //             "message" => "Validation errors",
    //             "errors" => $validator->errors(),
    //         ]);
    //     }
    //     try {
    //         if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
    //             $user = Auth::user();
    //             $token = $user->createToken("mytoken")->plainTextToken;
    //             return response()->json([
    //                 "status" => 200,
    //                 "message" => "Login successful",
    //                 "token" => $token,
    //                 "user" => $user,
    //             ]);
    //         } else {
    //             return response()->json([
    //                 "status" => 401,
    //                 "message" => "Invalid credentials",
    //             ]);
    //         }
    //     } catch (Exception $e) {
    //         // Handle unexpected errors
    //         return response()->json([
    //             "status" => 500,
    //             "message" => "Something went wrong, please try again later.",
    //             "error" => $e->getMessage(),
    //         ]);
    //     }
    // }



    // POST [email, password]
    public function login(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            // 'username' => 'required|string|unique:users,username',
            // 'name' => 'required|string|max:255',
            'email' => 'required|email|string|',
            'password' => 'required|min:6',
            // 'confirm_password' => 'required|confirmed|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => 400,
                "message" => "Validation errors",
                "errors" => $validator->errors(),
            ]);
        }

        // Sanctum-সহ লগিন চেক করুন
        // if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
        //     $user = Auth::user();
        //     $token = $user->createToken("mytoken")->plainTextToken;
        //     // dd($user);
        //     return response()->json([
        //         "status" => 200,
        //         "message" => "User Logged in successfully",
        //         "token" => $token,
        //         "data" => $user,
        //     ]);
        // }


        // $user = User::where("email", $request->email)->first();
        // if (!empty($user)) {
        //     //User exists
        //     if(Hash::check($request->password, $user->password)){
        //         // Password Matched
        //         $token = $user->createToken("mytoken")->plainTextToken;
        //         return response()->json([
        //             "status" => 200,
        //             "message" => "User Loged in successfully",
        //             "token" => $token,
        //             "data" => [],
        //         ]);
        //     }else{
        //         return response()->json([
        //             "status" => 400,
        //             "message" => "Password does not match",
        //             "data" => [],
        //         ]);
        //     }
        // }else{

        //     return response()->json([
        //         "status" => 400,
        //         "message" => "Email does not match with our records",
        //         "data" => [],
        //     ]);
        // }

        try {
            if (Auth::attempt(["email" => $request->email, "password" => $request->password])) {
                $user = Auth::user();

                $response = [];
                $response["token"] = $user->createToken("MyApp")->plainTextToken;
                $response["name"] = $user->name;
                $response["email"] = $user->email;
                $response["id"] = $user->id;

                return response()->json([
                    "status" => 200,
                    "message" => "User loged in successfully",
                    "data" => $response,
                ]);
            } else {
                return response()->json([
                    "status" => 401,
                    "message" => "Invalid credentials",
                    "data" => null,
                ]);
            }
        } catch (Exception $e) {
            return response()->json([
                "status" => 400,
                "message" => "Authentication Error",
                "data" => null,
            ]);
        }

    }
    // POST [Auth: Token]
    public function profile()
    {
        $userData = Auth::user();
        $id = Auth::user()->id;
        return response()->json([
            "status" => 200,
            "message" => "Profile Information",
            "data" => $userData,
            "id" => $id,
        ]);
    }
    // POST [Auth: Token]
    public function logout(Request $request)
    {

        if (auth()->check()) {
            $request->user()->tokens()->delete(); // Delete all tokens for the user

            return response()->json([
                "status" => 200,
                "message" => "User logged out successfully",
                "data" => []
            ]);
        }

        return response()->json([
            "status" => 401,
            "message" => "User not authenticated",
        ], 401);
    }

    // Admin Login (Blade View)
    public function adminLoginPage()
    {
        return view('backend.login');
    }

    public function adminLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors(['email' => 'Invalid credentials']);
    }

    public function adminLogout()
    {
        Auth::logout();
        return redirect()->route('admin.login');
    }
}
