<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductGallery;
use App\Models\Variant;
use Validator;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    // product index function
    public function index()
    {
        return view('backend.products.insert');
    }
    public function findVariant($id)
    {
        $variant = Variant::where('product_id', $id)->first();
        return response()->json([
            'variant' => $variant
        ]);
    }

    // product add function 
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'category_id' => 'required',
            'subcategory_id' => 'required',
            'brand_id' => 'required',
            'product_feature' => 'required',
            'product_name' => 'required|max:100',
            'short_desc' => 'required|max:255',
            'product_image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'sku' => 'required',
            'tag' => 'required',
        ]);
        $product = new Product;
        if ($request->product_image) {
            $productImage = rand() . '.' . $request->product_image->extension();
            $request->product_image->move(public_path('uploads/products/'), $productImage);

            $product->category_id = $request->category_id;
            $product->subcategory_id = $request->subcategory_id;
            $product->brand_id = $request->brand_id;
            $product->sub_subcategory_id = $request->sub_subcategory_id;
            $product->product_feature = implode(',', $request->product_feature);
            $product->product_name = $request->product_name;
            $product->slug = Str::slug($request->product_name);
            $product->short_desc = $request->short_desc;
            $product->long_desc = $request->long_desc;
            $product->product_image = $productImage;
            $product->sku = $request->sku;
            $product->tags = $request->tag;
            // $product->shipping = $request->shipping;
            $product->save();
            if ($request->imageGallery) {
                $imagesGallery = $request->imageGallery;
                foreach ($imagesGallery as $image) {
                    $galleryImage = rand() . '.' . $image->extension();
                    $image->move(public_path('uploads/products/gallery/'), $galleryImage);
                    $productGallery = new ProductGallery;
                    $productGallery->product_id = $product->id;
                    $productGallery->image = $galleryImage;
                    $productGallery->save();
                }
            }
        }
        return back()->with('success', 'Product Successfully Saved');
    }





    // show all products function 
    public function view()
    {
        $products = Product::orderByDesc('id')->get();
        return view('backend.products.view', compact('products'));
    }


    // view details product function 
    public function viewDetails($id)
    {
        $product = Product::findOrFail($id);
        return view('backend.products.view_details', compact('product'));
    }

    // product edit function 
    public function edit($id)
    {
        $product = Product::findOrFail($id);
        return view('backend.products.edit', compact('product'));
    }


    // product delete function 
    public function delete($id)
    {
        $product = Product::findOrFail($id);
        unlink(public_path('uploads/products/') . $product->product_image);
        $product->delete();
        return redirect()->route('product.view')->with('success', 'Product deleted successfully');
    }

    // product status changed
    public function productStatus($id)
    {
        // dd($request);
        $product = Product::findOrFail($id);
        if ($product->status == 0) {
            $newStatus = 1;
        } else {
            $newStatus = 0;
        }

        $product->update([
            'status' => $newStatus
        ]);
        return redirect()->back()->with('message', 'status changed successfully');
    }

    // product update function 
    public function update(Request $request, $id)
    {
        // dd($request->product_feature);
        if ($request->product_image) {
            $productImage = rand() . '.' . $request->product_image->extension();
            $request->product_image->move(public_path('uploads/products/'), $productImage);
            $product = Product::findOrFail($id);
            $path = public_path('uploads/products/') . $product->product_image;
            if (file_exists($path)) {
                @unlink($path);
            }
            $product->category_id = $request->category_id;
            $product->subcategory_id = $request->subcategory_id;
            $product->sub_subcategory_id = $request->sub_subcategory_id;
            $product->brand_id = $request->brand_id;
            $product->product_feature = implode(',', $request->product_feature);
            $product->product_name = $request->product_name;
            $product->slug = Str::slug($request->product_name);
            $product->short_desc = $request->short_desc;
            $product->long_desc = $request->long_desc;
            $product->product_image = $productImage;
            $product->sku = $request->sku;
            $product->tags = $request->tag;
            // $product->shipping = $request->shipping;
            $product->update();
            if ($request->imageGallery) {
                $imagesGallery = $request->imageGallery;
                foreach ($imagesGallery as $image) {
                    $galleryImage = rand() . '.' . $image->extension();
                    $image->move(public_path('uploads/products/gallery/'), $galleryImage);
                    $productGallery = ProductGallery::where('product_id', $product->id)->first();
                    $path = public_path('uploads/products/gallery/').$productGallery->image;
                    if (file_exists($path)) {
                        @unlink($path);
                    }
                    $productGallery->delete();
                    $productGallery = new ProductGallery;
                    $productGallery->product_id = $id;
                    $productGallery->image = $galleryImage;
                    $productGallery->save();
                }
            }
            return redirect()->route('product.view')->with('success', 'Product Successfully updated');
        } else {
            $product = Product::findOrFail($id);
            $product->category_id = $request->category_id;
            $product->subcategory_id = $request->subcategory_id;
            $product->sub_subcategory_id = $request->sub_subcategory_id;
            $product->brand_id = $request->brand_id;
            $product->product_feature = implode(',', $request->product_feature);
            $product->product_name = $request->product_name;
            $product->slug = Str::slug($request->product_name);
            $product->short_desc = $request->short_desc;
            $product->long_desc = $request->long_desc;
            $product->sku = $request->sku;
            $product->tags = $request->tag;
            // $product->shipping = $request->shipping;
            $product->update();
            if ($request->imageGallery) {
                $imagesGallery = $request->imageGallery;
                foreach ($imagesGallery as $image) {
                    $galleryImage = rand() . '.' . $image->extension();
                    $image->move(public_path('uploads/products/gallery/'), $galleryImage);
                    $productGallery = ProductGallery::where('product_id', $product->id)->first();
                    $path = public_path('uploads/products/gallery/').$productGallery->image;
                    if (file_exists($path)) {
                        @unlink($path);
                    }
                    $productGallery->delete();
                    $productGallery = new ProductGallery;
                    $productGallery->product_id = $id;
                    $productGallery->image = $galleryImage;
                    $productGallery->save();
                }
            }
            return redirect()->route('product.view')->with('success', 'Product Successfully updated');
        }
    }



    // delete variants function 
    // public function deleteVariant($id)
    // {
    //     // dd($id);
    //     $variant = Variant::findOrFail($id);
    //     $variant->delete();
    //     return response()->json([
    //         'status' => '200',
    //         'message' => 'Variant Delete Successfully'
    //     ]);
    // }
    // public function editVariant($id)
    // {
    //     $variant = Variant::where('id', $id)->first();
    //     return response()->json([
    //         'status' => '200',
    //         'message' => 'Please Update variant',
    //         'variantData' => $variant
    //     ]);
    // }

    // public function updateVariant(Request $request, $id)
    // {
    //     // dd($request);
    //     $variant = Variant::findOrFail($id);
    //     $variant->regular_price    = $request->regular_price;
    //     $variant->discount    = $request->discount;
    //     $variant->discount_amount    = $request->discount_amount;
    //     $variant->stock_quantity    = $request->stock_quantity;
    //     $variant->barcode    = $request->barcode;
    //     $variant->color    = $request->color;
    //     $variant->size    = $request->size;
    //     $variant->unit    = $request->unit;
    //     $variant->weight    = $request->weight;
    //     $variant->expire_date    = $request->expire_date;
    //     $variant->manufacture_date    = $request->manufacture_date;
    //     $variant->product_id    = $request->product_id;
    //     $variant->update();
    //     return response()->json([
    //         'status' => '200',
    //         'message' => 'variant Updated successfully',

    //     ]);
    // }


    // variants store function 
    // public function variantStore(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'product_id' => 'required',
    //         'regular_price' => 'required|numeric',
    //         'discount' => 'required|numeric',
    //         'discount_amount' => 'required|numeric',
    //         'stock_quantity' => 'required|numeric',
    //         'unit' => 'required|max:50',
    //     ]);

    //     if ($validator->passes()) {
    //         $variant = new Variant;
    //         $variant->regular_price    = $request->regular_price;
    //         $variant->discount    = $request->discount;
    //         $variant->discount_amount    = $request->discount_amount;
    //         $variant->stock_quantity    = $request->stock_quantity;
    //         $variant->barcode    = $request->barcode;
    //         $variant->color    = $request->color;
    //         $variant->size    = $request->size;
    //         $variant->unit    = $request->unit;
    //         $variant->weight    = $request->weight;
    //         $variant->expire_date    = $request->expire_date;
    //         $variant->manufacture_date    = $request->manufacture_date;
    //         $variant->product_id    = $request->product_id;
    //         $variant->save();
    //         return response()->json([
    //             'status' => '200',
    //             'message' => 'variant saved successfully',

    //         ]);
    //     }
    //     return response()->json([
    //         'status' => '500',
    //         'error' => $validator->messages()
    //     ]);
    // }

    // show variants function 
    // public function variantShow($id)
    // {
    //     $variant = Variant::where('product_id', $id)->get();
    //     return response()->json([
    //         'status' => '200',
    //         'message' => 'variant saved successfully',
    //         'variantData' => $variant,
    //     ]);
    // }
}
