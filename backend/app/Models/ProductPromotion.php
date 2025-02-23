<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPromotion extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function product(){
        return $this->belongsTo(Product::class,'product_id','id');
    }

    public function coupon(){
        return $this->belongsTo(Coupon::class,'promotion_id','id');
    }

    public function variant(){
        return $this->belongsTo(Variant::class,'variant_id','id');
    }
}
