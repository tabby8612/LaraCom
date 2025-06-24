<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Products;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Session;

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
        
        if ($request->session()->has("customer")) {
            return Inertia::render("user");
        } else {
            return Inertia::render("profile");
        }        
        
    }

    public function user(Request $request) { 
        
        $customer = Session::get("customer");

        return Inertia::render("user", [
            "customer" => $customer
        ]);
    }

    public function login(Request $request) {
        // dd($request->all());

        $credentials = [
            "email" => $request->email,
            "password" => $request->password
        ];
        

        if (Auth::guard("customer")->validate($credentials)) {
            dd("logged in");
        }

        dd("not logged in");

    }

    public function logout(Request $request) { 
        
        $request->session()->forget("customer");
        $request->session()->forget("cart");

        return redirect()->route("home");
        
    }

    
}
