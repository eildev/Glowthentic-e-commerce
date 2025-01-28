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
        $request->validate([
            'categoryName' => 'required|max:100',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
        ]);

        if ($request->image) {

            $imageName = rand() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads/category/'), $imageName);
            $category = new Category;
            $category->categoryName = $request->categoryName;
            $category->slug = Str::slug($request->categoryName);
            $category->image = $imageName;
            $category->save();
            return back()->with('success', 'Category Successfully Saved');
        }


    }

    // category View function
    public function view()
    {
        $categories = Category::all();
        return view('backend.category.view', compact('categories'));
    }

    // category Edit function
    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return view('backend.category.edit', compact('category'));
    }


    // category update function
    public function update(Request $request, $id)
    {
        if ($request->image) {
            $request->validate([
                'categoryName' => 'required|max:100',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
            ]);
            $imageName = rand() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads/category/'), $imageName);
            $category = Category::findOrFail($id);
            unlink(public_path('uploads/category/').$category->image);
            $category->categoryName = $request->categoryName;
            $category->slug = Str::slug($request->categoryName);
            $category->image = $imageName;
            $category->update();
            return redirect()->route('category.view')->with('success', 'Category Successfully updated');
        }
        else {
            $request->validate([
                'categoryName' => 'required|max:100',
            ]);
            $category = Category::findOrFail($id);
            $category->categoryName = $request->categoryName;
            $category->slug = Str::slug($request->categoryName);
            $category->update();
            return redirect()->route('category.view')->with('success', 'Category Successfully updated');
        }
    }
    // category Delete function
    public function delete($id)
    {
        $category = Category::findOrFail($id);
        unlink(public_path('uploads/category/').$category->image);
        $category->delete();
        return back()->with('success', 'Category Successfully deleted');
    }
    
       public function CategoryStatus($id)
    {
        // dd($request);
        $category = Category::findOrFail($id);
        if ($category->status == 0) {
            $newStatus = 1;
        } else {
            $newStatus = 0;
        }

        $category->update([
            'status' => $newStatus
        ]);
        return redirect()->back()->with('message', 'status changed successfully');
    }
}
