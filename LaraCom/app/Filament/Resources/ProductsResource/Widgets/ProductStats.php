<?php

namespace App\Filament\Resources\ProductsResource\Widgets;

use App\Filament\Resources\CustomerResource;
use App\Filament\Resources\OrderResource;
use App\Models\Category;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Products;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ProductStats extends StatsOverviewWidget
{
    protected static bool $isLazy = false;


    protected function getStats(): array
    {
        return [
            Stat::make('Products', Products::count())
            ->description("Products Available In Shop")
            ->descriptionColor("#333")
            ->icon("heroicon-s-rectangle-stack")
            ->url(route("filament.admin.resources.products.index"))
            ->extraAttributes([
                "style" => "cursor: pointer; background-color: oklch(97.7% 0.014 308.299) !important; border: 2px solid oklch(40.1% 0.17 325.612) !important; box-shadow: 0px 0px 10px 3px #9ca3af !important;"
            ]),           
            
            
            Stat::make('Customers', Customer::count())
            ->description("Customers Who've ordered")
            ->descriptionColor("#333")
            ->icon("heroicon-s-users")
            ->url(CustomerResource::getUrl("index"))
            ->extraAttributes([
                "style" => "cursor: pointer; background-color: oklch(97.7% 0.014 308.299) !important; border: 2px solid oklch(40.1% 0.17 325.612) !important; box-shadow: 0px 0px 10px 3px #9ca3af !important;"
            ]),

            Stat::make('Categories', Category::count())
            ->description("Types of Products In Shop")
            ->descriptionColor("#333")
            ->icon("heroicon-s-hashtag")
            ->url("filament.admin.resources.caegory.index")
            ->extraAttributes([
                "style" => "cursor: pointer; background-color: oklch(97.7% 0.014 308.299) !important; border: 2px solid oklch(40.1% 0.17 325.612) !important; box-shadow: 0px 0px 10px 3px #9ca3af !important;"
            ]),          
            
            Stat::make('Orders', Order::count())
            ->description("Products Available In Shop")
            ->icon("heroicon-s-shopping-bag")
            ->descriptionColor("#333")            
            ->url(OrderResource::getUrl("index"))
            ->extraAttributes([
                "style" => "cursor: pointer; background-color: oklch(97.7% 0.014 308.299) !important; border: 2px solid oklch(40.1% 0.17 325.612) !important; box-shadow: 0px 0px 10px 3px #9ca3af !important;"
            ])
            ->chart([10,5,20,15,35])
            
        ];
    }
}
