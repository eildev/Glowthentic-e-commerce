<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function search(Request $request)
    {
        $searchTerm = $request->input('q');
        $category = Category::get();
        $brand = Brand::get();
        $size =

            $products = Product::where('name', 'like', "%{$searchTerm}%")->get();

        return response()->json($products);
    }
}
