<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;
    protected $guarded = [];

    function category(){
        return $this->belongsTo(Category::class, 'categoryId', 'id');
    }
    
    function products(){
        return $this->hasMany(Product::class);
    }
}
