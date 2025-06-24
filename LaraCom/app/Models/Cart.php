<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cart extends Model
{
    //

    protected $fillable = ["customer_id"];

    public function customer():HasOne {
        return $this->hasOne(Customer::class);
    }

    public function products(): BelongsToMany {
        return $this->belongsToMany(Products::class, "cart_product", "cart_id", "product_id");
    }


}
