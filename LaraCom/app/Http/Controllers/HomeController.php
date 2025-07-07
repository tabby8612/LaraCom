<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Customer;
use App\Models\Products;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Session;
use Storage;

class HomeController extends Controller
{
    //
    private function visitorCount() {
        $updatedCount = 0;
        
        if (!session()->exists("visitor")) {
            
            $prevCount = Storage::disk("public")->get("visitorcount.txt");            
            $updatedCount = $prevCount ? (int)$prevCount : 1989;            

            Storage::disk("public")->put("visitorcount.txt", ++$updatedCount);

            Session::put("visitor", true);            
        } else {
            $updatedCount = Storage::disk("public")->get("visitorcount.txt");            
        }

        return $updatedCount;
    }

    public function Home(Request $request) {


        // fetches product from database
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

        // fetches offers slides from storage/offers directory.
        $offerSlides = Storage::disk("public")->allFiles("offers"); 

        // if customer is logged in then it clears message not on this render but on next render
        // this ensure if logged in customer revisits the homepage so he will not get loggin message.
        if (session()->exists("customer")) {
            session()->remove("message");
        }

        return Inertia::render("welcome", [
            "products" => $products,
            "offerSlides" => $offerSlides,
            "message" => !session()->exists("visitor") ? "Thanks For Visiting Our Website" : "",
            "visitorCount" => $this->visitorCount()
        ]);
    }

    public function About(Request $request) {        

        return Inertia::render("about", [
            "visitorCount" => $this->visitorCount()
        ]);
    }

    public function Contact(Request $request) {        

        return Inertia::render("contact", [
            "visitorCount" => $this->visitorCount()
        ]);
    }

    public function Products(Request $request) {          

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
        

        return Inertia::render("ProductsPage", [
            "products" => $products,
            "visitorCount" => $this->visitorCount()
        ]);
    }

    
    public function Profile(Request $request) {  
        
        
        if ($request->session()->has("customer")) {                        

            return Inertia::render("user", [
                "visitorCount" => $this->visitorCount()
            ]);
        } else {
            return Inertia::render("profile", [
                "visitorCount" => $this->visitorCount()
            ]);
        }        
        
    }

    public function user(Request $request) { 
        
        $customer = Session::get("customer");   
        $message = Session::get("message");

        dd($customer);        

        return Inertia::render("user", [
            "customer" => $customer,
            "visitorCount" => $this->visitorCount(),
            "message" => $message
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
            "customer" => $customer,
            "visitorCount" => $this->visitorCount()
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


    public function thankYou(Request $request) {

        return Inertia::render("ThankYou", [
            "visitorCount" => $this->visitorCount()
        ]);
    }


    


    
}
