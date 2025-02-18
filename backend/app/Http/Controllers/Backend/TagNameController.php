<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\TagName;
use Exception;

class TagNameController extends Controller
{

    // tagname index function
    public function index()
    {
        return view('backend.tagname.insert');
    }

    // public function index()
    // {
    //     try {
    //         $categories = Category::whereNull('parent_id')->with('subcategories')->get();
    //         $total = $categories->count();
    //         return response()->json([
    //             'success' => true,
    //             'total' => $total,
    //             'data' => $categories
    //         ]);
    //     } catch (Exception $e) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Failed to fetch categories.',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }
    // tagname store function
    public function store(Request $request)
    {

        // dd($request->all());
        $request->validate([
            'tagname' => 'required|max:100',
        ]);
        $tagname = new TagName;
        $tagname->tagName = $request->tagname;
        $tagname->save();
        return back()->with('success', 'Successfully Saved Tag');
    }

    // tagname View function
    public function view()
    {
        $tagnames = TagName::all();
        return view('backend.tagname.view', compact('tagnames'));
    }
    public function viewAll()
    {
        $tagnames = TagName::all();

        return response()->json([
            'status'=>200,
            'categories'=> $tagnames
        ]);
    }
    public function show($id)
    {
        // try {
        //     $category = TagName::find($id);;

        //     if (!$category) {
        //         return response()->json([
        //             'success' => false,
        //             'message' => 'tag not found.'
        //         ], 404);
        //     }

        //     return response()->json([
        //         'success' => true,
        //         'data' => $category
        //     ]);
        // } catch (Exception $e) {
        //     return response()->json([
        //         'success' => false,
        //         'message' => 'Failed to fetch tag details.',
        //         'error' => $e->getMessage()
        //     ], 500);
        // }
        try {
            $category = TagName::findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $category
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Tag not found.'
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch tag details.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // tagname Edit function
    public function edit($id)
    {
        $tagname = tagname::findOrFail($id);
        return view('backend.tagname.edit', compact('tagname'));
    }


    // tagname update function
    public function update(Request $request, $id)
    {
        $request->validate([
            'tagname' => 'required|max:100',
        ]);
        $tagname = tagname::findOrFail($id);
        $tagname->tagName = $request->tagname;
        $tagname->update();
        return redirect()->route('tagname.view')->with('success', 'tag Successfully updated');
    }


    // tagname Delete function
    public function delete($id)
    {
        $tagname = tagname::findOrFail($id);
        $tagname->delete();
        return back()->with('success', 'tag Successfully deleted');
    }
}
