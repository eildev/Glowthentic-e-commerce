<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    // category index function
    public function index()
    {
        return view('backend.category.insert');
    }

    // category store function
    public function store(Request $request)
    {
        // $request->validate([
        //     'categoryName' => 'required|max:100',
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
        // ]);




        if ($request->image) {

            $imageName = rand() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads/category/'), $imageName);
            $category = new Category;
            $category->categoryName = $request->categoryName;
            $category->slug = Str::slug($request->categoryName);
            $category->image = $imageName;
            if($request->parent_id){
                $category->parent_id = $request->parent_id;
            }
            // $category->approved_by = auth()->user()->id;
            $category->save();
           return response()->json(['message'=>'Category Added Successfully']);
        }


    }

    // category View function
    public function view()

    {
        $categories = Category::all();

        return response()->json([
            'status'=>200,
            'categories'=> $categories
        ]);
    }

    // category Edit function
    public function edit($id)
    {
        $category = Category::findOrFail($id);
        $categories = Category::all();
         return response()->json([
            'status'=>200,
            'category'=> $category,
            'categories'=> $categories
        ]);
    }


    // category update function
    public function update(Request $request)
    {


        if ($request->image) {
            $request->validate([
                'categoryName' => 'required|max:100',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
            ]);
            $imageName = rand() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads/category/'), $imageName);
            $category = Category::findOrFail($request->cat_id);
            unlink(public_path('uploads/category/').$category->image);
            $category->categoryName = $request->categoryName;
            $category->slug = Str::slug($request->categoryName);
            $category->image = $imageName;
            if($request->parent_id){
                $category->parent_id = $request->parent_id;
            }
            // $category->approved_by = auth()->user()->id;
            $category->update();
            return response()->json(['message'=>'Category Updated Successfully']);
            // return redirect()->route('category.view')->with('success', 'Category Successfully updated');
        }
        else {
            $request->validate([
                'categoryName' => 'required|max:100',
            ]);
            $category = Category::findOrFail($request->cat_id);
            $category->categoryName = $request->categoryName;
            $category->slug = Str::slug($request->categoryName);
            if($request->parent_id){
                $category->parent_id = $request->parent_id;
            }
            // $category->approved_by = auth()->user()->id;
            $category->update();
            return response()->json(['message'=>'Category Updated Successfully']);
        }
    }
    // category Delete function
    public function delete(Request $request)
    {
        $id=$request->id;
        $category = Category::findOrFail($id);
        unlink(public_path('uploads/category/').$category->image);
        $category->delete();
        return response()->json(['message'=>'Category Deleted Successfully']);
    }
       public function CategoryStatus(Request $request)
    {
        // dd($request);
        $id=$request->id;
        $category = Category::findOrFail($id);
        if ($category->status == 0) {
            $newStatus = 1;
        } else {
            $newStatus = 0;
        }

        $category->update([
            'status' => $newStatus
        ]);
         return response()->json(['message'=>'Category Status Updated Successfully']);
    }


    public function GetParentCategory(){
        $categories = Category::get();
        return response()->json([
            'status'=>200,
            'categories'=> $categories
        ]);
    }


   //find sub category
   public function findSubcat($id)
   {
       $subcats = Category::where('parent_id', $id)->get();
    // dd($subcats);
       return response()->json([
           'subcats' => $subcats
       ]);
   }

   // find sub sub category
   public function findSubSubcat($id)
   {
       $subsubcats = Category::where('parent_id', $id)->get();
       if($subsubcats){
           return response()->json([
               'status' => 200,
               'subsubcats' => $subsubcats
           ]);
       } else {
           return response()->json([
               'status' => 500,
               'message' => "no data found"
           ]);
       }
   }
}
