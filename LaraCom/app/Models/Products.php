<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    
    //Accessor for image attribute
    protected function image(): Attribute {
        return Attribute::make(
            get: fn(string $value) => "/storage/products/{$value}"
        );
    }

    //Accessor for image attribute
    // protected function getImageAttribute($value) {
    //     return "/storage/products/{$value}";
    // }
}


