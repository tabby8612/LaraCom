<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Storage;

class Products extends Model
{
        protected $guarded = [];
    
    

    public function getImageUrlAttribute()
{
    if (str_contains($this->image, "products" )) {
        return asset('storage/' . $this->image);
    } else {
        return asset('storage/products/' . $this->image);
    }
}
    

    public function category(): BelongsTo {
        return $this->belongsTo(Category::class);
    }

    protected static function booted() {
        static::deleting(function ($product) {
            if ($product->image && Storage::disk("public")->exists($product->image)) {
                Storage::disk("public")->delete($product->image);
            }
        });
    }


    // casting to save boolean value
    protected $casts = [
        "status" => "boolean"
    ];


    

    
}


