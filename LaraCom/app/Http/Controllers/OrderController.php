<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Customer;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Session;

class OrderController extends Controller
{
    //

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $customerID = Session::get("customer")["id"];

        $customer = Customer::findOrFail($customerID);
        
        $customerAddressDetails = [
            "address" => $customer->billing_address,
            "country" => $customer->country,
            "phone" => $customer->phone,
        ];

        $customerCart = $customer->cart;        

        $cartProducts = [];

        foreach ($customerCart->products as $product) {
            $productId = $product->id;
            
            if (!isset($cartProducts[$productId])) {
                $cartProducts[$productId] = [
                    "id" => $product->id,
                    "name" => $product->name,
                    "price" => $product->price,
                    "image" => $product->image_Url,
                    "category" => $product->category->name,
                    "quantity" => 1
                ];
            } else {
                $cartProducts[$productId]["quantity"]++;
            }
        }

        
        
        $totalCost = 0;

        foreach (array_values($cartProducts) as $product) {
            $totalCost += $product["price"] * $product["quantity"];
        }

        return Inertia::render("ConfirmOrder", [
            "addressDetails" => $customerAddressDetails,
            "cartProducts" => array_values($cartProducts),
            "customerName" => $customer->name,
            "totalCartCost" => $totalCost

        ]);
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
        $customerID = Session::get('customer')["id"];        

        // Store Order Information Into Database
        Order::insert([
            "amount" => $request->totalAmount,
            "status" => "To ship",
            "customer_id" => $customerID
        ]);

        // Gather Product Ids to attach them into orders_products table
        $latestOrder = Order::latest()->first();

        $productIDs = [];

        foreach($request->products as $product) {            
            for ($i = 0; $i < $product["quantity"]; $i++) {
                $productIDs[] = $product["id"];
            }
        }

        $latestOrder->products()->attach($productIDs);

        
        // After Order Remove These Products From Cart
        $cart = Customer::find($customerID)->cart;
        

        $cart->products()->detach($productIDs);

        // Update Item Count In Session.
        $productCount = $cart->products()->count();

        
        $updatedCart = [
            "id" => $cart->id,
            "itemsCount" => $productCount
        ];

        Session::put("cart", $updatedCart);
        
        return to_route("thankyou");
        
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
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
