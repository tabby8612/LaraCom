<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Middleware\IsCustomer;
use App\Models\Cart;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get("/", [HomeController::class, "Home"])->name("home");
Route::get("/about", [HomeController::class, "About"])->name("about");
Route::get("/products", [HomeController::class, "Products"])->name("products");
Route::get("/contact", [HomeController::class, "Contact"])->name("contact");
// Route::get("/cart", [HomeController::class, "Cart"])->name("cart");
Route::get("/profile", [HomeController::class, "Profile"])->name("profile");

Route::prefix("api")->group(function() {
    Route::resource("customers", CustomerController::class);
});

Route::post("/customer/login", [HomeController::class, "login"])->name("customer.login");

Route::middleware(IsCustomer::class)->group(function() {
    Route::get("/user", [HomeController::class, "user"])->name("user");
    Route::get("/logout", [HomeController::class, "logout"])->name("logout");
    Route::apiResource("/web/cart", CartController::class);
    Route::get("/web/cart/{cartID}/{productID}", [CartController::class, "removeProduct"])->name("remove.product");
    Route::get("/web/address-payment", [HomeController::class, "address"])->name("address.index");
    Route::post("/web/address-update", [HomeController::class, "updateAddress"])->name("address.update");
    Route::delete("/web/address-remove/{id}", [HomeController::class, "removeAddress"])->name("address.remove");
    Route::get("/web/confirm-order", [OrderController::class, "index"])->name("order.confirm");
    

}
    
);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
