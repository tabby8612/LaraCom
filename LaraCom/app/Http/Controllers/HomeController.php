<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //
    public function Home(Request $request) {
        $products = Products::all();         
        

        return Inertia::render("welcome", [
            "products" => $products
        ]);
    }

    public function About(Request $request) {        

        return Inertia::render("about");
    }

    public function Contact(Request $request) {        

        return Inertia::render("contact");
    }

    public function Products(Request $request) {  
        $products = Products::all();
        

        return Inertia::render("ProductsPage", [
            "products" => $products
        ]);
    }

    public function Cart(Request $request) {        

        return Inertia::render("cart");
    }

    public function Profile(Request $request) {        

        return Inertia::render("profile");
    }

    
}
