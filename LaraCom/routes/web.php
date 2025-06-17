<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get("/about", function() {
    return Inertia::render("about");
})->name("about");

Route::get("/products", function() {
    return Inertia::render("products");
})->name("products");

Route::get("/contact", function() {
    return Inertia::render("contact");
})->name("contact");

Route::get("/cart", function() {
    return Inertia::render("cart");
})->name("cart");

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
