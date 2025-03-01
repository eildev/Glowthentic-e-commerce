<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
    function subcategory(){
        return $this->belongsTo(Subcategory::class, 'subcategory_id', 'id');
    }
    function brand(){
        return $this->belongsTo(Brand::class, 'brand_id', 'id');
    }
    function gallary(){
        return $this->hasMany(ProductGallery::class);
    }
    function varient(){
        return $this->hasMany(Variant::class,'product_id', 'id');
    }
    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function variants()
    {
        return $this->hasMany(Variant::class);
    }
    public function productStock(){
        return $this->hasMany(ProductStock::class,'product_id','id');
    }

    public function comboproduct(){
        return $this->hasMany(ComboProduct::class,'combo_id','id');
    }

    public function promotionproduct(){
        return $this->hasMany(PromotionProduct::class,'product_id','id');
    }

    public function product_tags(){
        return $this->hasMany(Product_tags::class,'product_id','id');
    }


    public function variantImage(){
        return $this->hasMany(VariantImageGallery::class,'product_id','id');
    }

    public function productdetails(){
        return $this->hasMany(ProductDetails::class,'product_id','id');
    }
}
