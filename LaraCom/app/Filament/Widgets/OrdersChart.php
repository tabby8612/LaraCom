<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use Carbon\Carbon;
use DB;
use Filament\Widgets\ChartWidget;

class OrdersChart extends ChartWidget
{
    protected static ?string $heading = 'Orders';

    protected static ?string $description = null;

    protected static bool $isLazy = false;

    protected int | string | array $columnSpan = "full";

    protected static ?string $maxHeight = "300px";

    protected function getData(): array
    {
        //Setting Date From today to one month back In Array
        $today = Carbon::today()->addDay();
        $oneMonthBack = Carbon::today()->subMonth();
        
        $startDate = Carbon::parse($oneMonthBack);        
        $endDate = Carbon::parse($today); 

        $dates = [];
        $currentDate = $startDate;

        while($currentDate <= $endDate) {            
            $dates[] = $currentDate->format("Y-m-d");
            $currentDate->addDay();
        } 

        // $ordersByDate = Order::whereBetween('created_at', ["2025-06-28 15:22:00", "2025-07-02 06:04:45"])
        $ordersByDate = Order::whereBetween('created_at', [$oneMonthBack->format("Y-m-d h:00:00"), $today->format("Y-m-d h:00:00")])
        ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
        ->groupBy('date')
        ->pluck('count', 'date')
        ->toArray();        

        $ordersCount = [];

        foreach ($dates as $date) {
            # code...
            $ordersCount[$date] = $ordersByDate[$date] ?? 0;
        }        
        

        return [
            //
            'datasets' => [
                [
                    'label' => 'Orders Placed',
                    'data' => $ordersCount,
                ],
            ],
            'labels' => $dates,

        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
