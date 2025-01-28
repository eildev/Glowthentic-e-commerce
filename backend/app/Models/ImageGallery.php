<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageGallery extends Model
{
    use HasFactory;
    protected $guarded = [];
    function imageGalleries(){
        return $this->belongsTo(HomeBanner::class, 'banner_id', 'id');
    }
}