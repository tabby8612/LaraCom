<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Products;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Session;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $cartId = Session::get("cart")["id"];
        

        $cart = Cart::findOrFail($cartId);

        $cartProducts = [];
              

        foreach ($cart->products as $product) {   
            $prodId = $product->id;

            
            if (!isset($cartProducts[$prodId])) {
                $cartProducts[$prodId] = [
                    "id" => $product->id,
                    "sku" => $product->sku,
                    "name" => $product->name,
                    "price" => $product->price,
                    "description" => $product->description,
                    "image" => $product->imageUrl,
                    "status" => $product->status ? "In Stock" : "Out of Stock",                    
                    "category" => $product->category->name,
                    "quantity" => 1
                ];
                
            } else {
                $cartProducts[$prodId]["quantity"]++;
            }            
        }

        $cartProducts = array_values($cartProducts);

        
        return Inertia::render("cart", [
            "products" => $cartProducts
        ]);
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

        if ($request->increament) {
            $cart->products()->attach($request->productID);            
        } else {
            $entry = DB::table("cart_product")
            ->where("cart_id", "=", $cart->id)
            ->where("product_id", "=", $request->productID)
            ->first();
            
            
            if ($entry) {                
                DB::table("cart_product")->where("id", "=", $entry->id)->delete();
            }
        }

        $productCount = Cart::find($cart->id)->products()->count();        

        $updatedCart = [
            "id" => $cart->id,
            "itemsCount" => $productCount            
        ];

        Session::put("cart", $updatedCart);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart, Products $product)
    {
        //
        
    }

    public function removeProduct(string $cartId, string $productId) {           
        
        $cart = Cart::findOrFail($cartId);

        $cart->products()->detach($productId);

        $updatedCart = [
            "id" => $cartId,
            "itemsCount" => $cart->products->count()
        ];

        Session::put("cart", $updatedCart);

        return redirect()->route("cart.index");
        
        

    }
}
