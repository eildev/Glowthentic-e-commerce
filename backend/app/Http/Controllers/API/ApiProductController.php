<?php

namespace App\Http\Controllers\API;

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Brand;
use App\Models\TagName;
use App\Models\Product;

class ApiProductController extends Controller
{
    public function search(Request $request)
    {
        try {
            $searchTerm = $request->input('q');


            $categories = Category::where('categoryName', 'like', "%{$searchTerm}%")->get(['id', 'categoryName']);
            $categoryIds = $categories->pluck('id');


            $brands = Brand::where('BrandName', 'like', "%{$searchTerm}%")->get(['id', 'BrandName']);
            $brandIds = $brands->pluck('id');

            $tags = TagName::where('tagName', 'like', "%{$searchTerm}%")->get(['id', 'tagName']);
            $tagIds = $tags->pluck('id');


            $products = Product::with([
                    'variants.variantImage',
                    'product_tags.tag',
                    'productStock',
                    'productdetails',
                    'variantImage'
                ])
                ->where('product_name', 'like', "%{$searchTerm}%")
                ->orWhereIn('category_id', $categoryIds)
                ->orWhereIn('brand_id', $brandIds)
                ->orWhereHas('product_tags', function ($query) use ($tagIds) {
                    $query->whereIn('product_tags.tag_id', $tagIds);
                })
                ->get();

            return response()->json([
                'products' => $products,
                'searchTerm' => $searchTerm,
                'categories' => $categories,
                'brands' => $brands,
                'tags' => $tags,
                'message' => count($products) ? 'Search Results Found' : 'No Results Found',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function filter(Request $request) {
        try {
            $categoryIds = $request->input('category_id', []);
            $brandIds = $request->input('brand_id', []);
            $tagIds = $request->input('tag_id', []);
            $minPrices = $request->input('min_price', []);
            $maxPrices = $request->input('max_price', []);

            // Ensure we are picking only ONE min and ONE max price
            $minPrice = !empty($minPrices) ? min($minPrices) : null;
            $maxPrice = !empty($maxPrices) ? max($maxPrices) : null;

            $product = Product::with([
                'variants' => function ($query) {
                    $query->orderBy('regular_price', 'asc');
                },
                'variants.variantImage',
                'product_tags.tag',
                'productStock',
                'productdetails',
                'variantImage'
            ])
            ->where(function ($query) use ($categoryIds, $brandIds, $tagIds) {
                if (!empty($categoryIds)) {
                    $query->orWhereIn('category_id', $categoryIds);
                }
                if (!empty($brandIds)) {
                    $query->orWhereIn('brand_id', $brandIds);
                }
                if (!empty($tagIds)) {
                    $query->orWhereHas('product_tags', function ($subQuery) use ($tagIds) {
                        $subQuery->whereIn('product_tags.tag_id', $tagIds);
                    });
                }
            })
            ->when($minPrice !== null || $maxPrice !== null, function ($query) use ($minPrice, $maxPrice) {
                $query->whereHas('variants', function ($variantQuery) use ($minPrice, $maxPrice) {
                    if ($minPrice !== null) {
                        $variantQuery->where('regular_price', '>=', $minPrice);
                    }
                    if ($maxPrice !== null) {
                        $variantQuery->where('regular_price', '<=', $maxPrice);
                    }
                });
            })
            ->get()
            ->map(function ($product) {
                $product->lowest_price = $product->variants->min('regular_price');
                return $product;
            });

            return response()->json([
                'products' => $product,
                'categoryIds' => $categoryIds,
                'brandIds' => $brandIds,
                'tagIds' => $tagIds,
                'minPrice' => $minPrice,
                'maxPrice' => $maxPrice,
                'message' => count($product) ? 'Filter Results Found' : 'No Results Found',
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function viewAll()
    {

        $products = Product::orderByDesc('id')->with('variants.variantImage', 'product_tags', 'productStock', 'productdetails', 'variantImage')->where('status', 1)->get();
        // dd($products);
        return response()->json([
            'status' => '200',
            'message' => 'Product List',
            'data' => $products,
        ]);
    }

    public function show($id)
    {
        $products = Product::with('variants.variantImage', 'product_tags', 'productStock', 'productdetails', 'variantImage')->where('id', $id)->first();

        return response()->json([
            'status' => '200',
            'message' => 'Product Search',
            'data' => $products,
            'ID' => $id,
        ]);
    }


}


