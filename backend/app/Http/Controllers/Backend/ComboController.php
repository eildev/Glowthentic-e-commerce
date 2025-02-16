<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Combo;

class ComboController extends Controller
{
    public function index()
    {
        return view('backend.combos.index');
    }

    public function store(Request $request){
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'offerd_price' => 'required|numeric|min:0',
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        //     'status' => 'required|in:active,inactive',
        // ]);

        // dd($request->all());

        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads/combo'), $imageName);
        }
        Combo::create([
            'name' => $request->combo_name,
            'offerd_price' => $request->combo_price,
            'image' => $imageName,
        ]);

        return response()->json(['message' => 'Combo created successfully']);
    }

    public function view(){
        $combos = Combo::latest()->get();
       return response()->json([
        'status' => 200,
        'combos' => $combos,
       ]);
    }

    public function viewDeatils($id){
        $combo = Combo::findOrFail($id);
       return response()->json([
        'status' => 200,
        'combo' => $combo,
       ]);
    }

    public function update(Request $request)
    {

        $combo = Combo::find($request->combo_id);

        if (!$combo) {
            return response()->json(['status' => 404, 'message' => 'Combo not found']);
        }


        if ($request->hasFile('image')) {

            if ($combo->image && file_exists(public_path('uploads/combo/' . $combo->image))) {
                unlink(public_path('uploads/combo/' . $combo->image));
            }


            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads/combo'), $imageName);


            $combo->image = $imageName;
        }


        $combo->name = $request->combo_name;
        $combo->offerd_price = $request->combo_price;
        $combo->save();

        return response()->json(['message' => 'Combo updated successfully']);
    }


    public function delete(Request $request){
         $id=$request->id;
         $combo = Combo::find($id);
         if($combo){
            $combo->delete();
            return response()->json(['message'=>'Combo Deleted Successfully']);
         }
    }

    public function StatusChange(Request $request){
        $id=$request->status_id;
  
        $combo = Combo::find($id);
        if($combo->status == 'active'){
            $combo->status ='inactive';
            $combo->save();
        }
        else{
            $combo->status ='active';
            $combo->save();
        }
            return response()->json(['message'=>'Status Updated Successfully']);
        }
    }




