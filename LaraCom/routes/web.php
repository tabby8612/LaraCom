<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get("/", [HomeController::class, "Home"])->name("home");
Route::get("/about", [HomeController::class, "About"])->name("about");
Route::get("/products", [HomeController::class, "Products"])->name("products");
Route::get("/contact", [HomeController::class, "Contact"])->name("contact");
Route::get("/cart", [HomeController::class, "Cart"])->name("cart");
Route::get("/profile", [HomeController::class, "Profile"])->name("profile");


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
