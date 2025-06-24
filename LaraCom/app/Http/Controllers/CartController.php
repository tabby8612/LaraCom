<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use DB;
use Illuminate\Http\Request;
use Session;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //        

        DB::table("cart_product")->insert([
            "cart_id" => $cart->id,
            "product_id" => $request->productID
        ]);

        $productCount = Cart::find($cart->id)->products()->count();        

        $cart = [
            "id" => $cart->id,
            "itemsCount" => $productCount
        ];

        Session::put("cart", $cart);


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
