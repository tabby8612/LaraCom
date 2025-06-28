<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class Customer extends Authenticatable
{
    use Notifiable;
    //
    protected $guarded = [];

    public function getImageUrlAttribute(){        
        if (str_contains($this->image, "profiles" )) {
            return asset('storage/' . $this->image);
        } else {
            return asset('storage/profiles/' . $this->image);
        }
}

    public function cart(): HasOne {
        return $this->hasOne(Cart::class);
    }

    public function orders(): HasMany {
        return $this->hasMany(Order::class);
    }
}
