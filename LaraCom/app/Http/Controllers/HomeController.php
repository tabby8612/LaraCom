<?php

namespace App\Http\Controllers;

use App\Models\Cart;
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
        
        

        $credentials = [
            "email" => $request->email,
            "password" => $request->password
        ];
        

        if (Auth::guard("customer")->validate($credentials)) {
            $customer = Customer::where("email", "=", $request->email)->first();
            $productCount = Cart::find($customer->cart->id)->products()->count();

            $cart = [
            "id" => $customer->cart->id,
            "itemsCount" => $productCount
        ];

            Session::put("customer", $customer);
            Session::put("cart", $cart);
            Session::put("message", "Thanks for logging in");

            return redirect()->route("home");
        }

        return back()->withErrors(["errMessage" => "Email and Password Combination is Not Correct"]);

    }

    public function logout(Request $request) { 
        
        $request->session()->forget("customer");
        $request->session()->forget("cart");

        return redirect()->route("home");
        
    }


    public function address(Request $request) { 

        $customerID = Session::get("customer")["id"];

        $customer = Customer::findOrFail($customerID); 
        
        return Inertia::render("address", [
            "customer" => $customer
        ]);
        
    }

    public function updateAddress(Request $request) {
        

        $request->validate([
            "address" => ["required", "min:20"],
            "city" => ["min:3"],
            "pincode" => ["numeric"],
            "phonenumber" => ["required", "numeric"],
            "country" => ["required", "min:3"]
        ]);
        
        $customerID = Session::get("customer")["id"];

        $currentCustomer = Customer::findOrFail($customerID);        

        $currentCustomer->update([
            "billing_address" => "{$request->address}, {$request->city}, {$request->pincode}",
            "default_shipping_address" => "{$request->address}, {$request->city}, {$request->pincode}",
            "country" => $request->country,
            "phone" => $request->phonenumber,
        ]);

        return to_route("address.index");

    }


    public function removeAddress(Request $request, string $customerID) {
        $customer = Customer::findOrFail($customerID);

        $customer->update([
            "billing_address" => "",
            "default_shipping_address" => "",
            "phone" => "",
        ]);

        return to_route("address.index");
    }



    
}
