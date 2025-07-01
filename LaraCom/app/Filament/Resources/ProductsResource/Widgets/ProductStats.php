<?php

namespace App\Filament\Resources\ProductsResource\Widgets;

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
            ->descriptionIcon("heroicon-o-rectangle-stack")
            ->color("success")            
            ->icon("heroicon-o-rectangle-stack")
            ->extraAttributes([
                "style" => "background-color: #fca5a5 !important; border: 2px solid green !important"
            ]),
            Stat::make('Category', Category::count())
            ->description("Products Available In Shop")
            ->descriptionColor("#333")
            ->descriptionIcon("heroicon-o-rectangle-stack")
            ->color("success")            
            ->icon("heroicon-o-rectangle-stack")
            ->extraAttributes([
                "style" => "background-color: #fca5a5 !important; border: 2px solid green !important"
            ])  ,          
            Stat::make('Customer', Customer::count())
            ->description("Products Available In Shop")
            ->descriptionColor("#333")
            ->descriptionIcon("heroicon-o-rectangle-stack")
            ->color("success")            
            ->icon("heroicon-o-rectangle-stack")
            ->extraAttributes([
                "style" => "background-color: #fca5a5 !important; border: 2px solid green !important"
            ]),
            Stat::make('Orders', Order::count())
            ->description("Products Available In Shop")
            ->descriptionColor("#333")
            ->descriptionIcon("heroicon-o-rectangle-stack")
            ->color("success")            
            ->icon("heroicon-o-rectangle-stack")
            ->extraAttributes([
                "style" => "background-color: green !important; border: 2px solid green !important"
            ])
            ->chart([10,5,20,15,35])
            
        ];
    }
}
