<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //
    public function Home(Request $request) {
        $productsColl = Products::all();  
        
        $products = [];

        
        foreach($productsColl as $product) {
            $temp = [
                "id" => $product->id,
                "sku" => $product->sku,
                "name" => $product->name,
                "price" => $product->price,
                "description" => $product->description,
                "image" => $product->image_url,
                "status" => $product->status ? "In Stock" : "Out of Stock",
                "date" => $product->created_at->isoFormat("D-M-Y"),
                "category" => $product->category->name,
            ];

            $products[] = $temp;
        }

        

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
