<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewRating extends Model
{
    use HasFactory;

    function gallary(){
        return $this->hasMany(ReviewImages::class,'review_id','id');
    }
    function user(){
        return $this->belongsTo(User::class);
    }
}
