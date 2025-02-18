<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_tags extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function product(){
        return $this->belongsTo(Product::class);
    }
    public function tag(){
        return $this->belongsTo(TagName::class);
    }
}
