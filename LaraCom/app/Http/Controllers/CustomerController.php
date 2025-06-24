<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Customer;
use Arr;
use DB;
use Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Session;

class CustomerController extends Controller
{
    //
    //
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $userInfo = [
            "email" => $request->email,
            "name" => $request->name,
            "password" => Hash::make($request->password),
            "billing_address" => "null",
            "default_shipping_address" => "null",
            "country" => "null",
            "phone" => "null",
        ];

        

        DB::table("customers")->insert($userInfo);

        $latestCustomer = DB::table("customers")->latest()->first();

        //setting up cart for customer.
        DB::table("carts")->insert([
            "customer_id" => $latestCustomer->id
        ]);

        $customer = Customer::where("id", $latestCustomer->id)->first();
        $productCount = Cart::find($customer->cart->id)->products()->count();
        
        $cart = [
            "id" => $customer->cart->id,
            "itemsCount" => $productCount
        ];

        Session::put("customer", $latestCustomer);
        Session::put("cart", $cart);
        Session::put("message", "Thanks for signing up");
        
        return redirect()->route("profile");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        
        if ($request->hasFile("image")) {
            // handle image upload
        }
        
        $curCustomer = Customer::find($id);

        $curCustomer->update([
            "password" => Hash::make($request->password)
        ]);

        return redirect()->route("user");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
