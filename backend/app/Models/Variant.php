<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variant extends Model
{
    use HasFactory;

    protected $guarded = [];
    public function product()
    {
        return $this->belongsTo(Product::class,'product_id','id');
    }

    public function productStock(){
        return $this->hasOne(ProductStock::class,'variant_id','id');
    }

    public function orderdetails(){
        return $this->hasMany(OrderDetail::class,'variant_id','id');
    }
    public function promotionproduct(){
        return $this->hasMany(ProductPromotion::class,'variant_id','id');
    }
   public function comboProduct(){
        return $this->hasMany(ComboProduct::class,'variant_id','id');
    }
    public function variantImage(){
        return $this->hasMany(VariantImageGallery::class,'variant_id','id');
    }
}
