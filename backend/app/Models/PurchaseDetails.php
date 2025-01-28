<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseDetails extends Model
{
    use HasFactory;
    protected $guarded = [];
    function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
    function company()
    {
        return $this->belongsTo(CompanyDetails::class, 'company_id', 'id');
    }
    function variant()
    {
        return $this->belongsTo(Variant::class, 'variant_id', 'id');
    }
}
