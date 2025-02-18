<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Combo extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function comboproduct(){
        return $this->hasMany(ComboProduct::class,'combo_id','id');
    }
}
