<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeBanner extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function gallery(){
        return $this->hasMany(ImageGallery::class,'banner_id','id');
    }
}