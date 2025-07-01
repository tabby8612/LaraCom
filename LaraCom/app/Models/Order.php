<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Order extends Model
{
    //

    public function products():BelongsToMany {
        return $this->belongsToMany(Products::class, "orders_products", "order_id", "product_id")->withTimestamps();
    }

    public function customer(): BelongsTo {
        return $this->belongsTo(Customer::class, "customer_id");
    }
}
