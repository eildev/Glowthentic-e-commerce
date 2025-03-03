<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subscribe;
// use Validator;
use Illuminate\Support\Facades\Validator;

class SubscribeController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validate the request data
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|lowercase|email|max:255'
            ]);

            // Check if validation passes
            if ($validator->passes()) {
                // Create a new Subscribe instance and save the email
                $subscribe = new Subscribe;
                $subscribe->email = $request->email;
                $subscribe->save();

                // Return a successful response
                return response()->json([
                    'status' => 200,
                    'message' => 'Subscribed Successfully'
                ]);
            }

            // Return validation errors if validation fails
            return response()->json([
                'status' => 500,
                'error' => $validator->messages()
            ]);
        } catch (\Exception $e) {
            // Handle any exceptions that occur
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage() // Optional: Include the exception message for debugging
            ]);
        }
    }

    public function view()
    {

        $subscribers = Subscribe::all();
        return view('backend.subscribe.view', compact('subscribers'));
    }
    public function destroy($id)
    {

        $subscriber = Subscribe::findOrFail($id);
        $subscriber->delete();
        return back()->with('success', 'Category Successfully deleted');
    }
}
