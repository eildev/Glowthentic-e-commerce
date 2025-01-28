<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\TagName;

class TagNameController extends Controller
{
    
    // tagname index function
    public function index()
    {
        return view('backend.tagname.insert');
    }

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