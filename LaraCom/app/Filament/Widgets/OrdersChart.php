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
        //Setting Date From 02-June to 02-Jul In Array
        $startDate = Carbon::parse('2025-06-15')->startOfDay();
        $endDate = Carbon::parse('2025-07-15')->endOfDay();

        $dates = [];
        $currentDate = $startDate;

        while($currentDate <= $endDate) {            
            $dates[] = $currentDate->format("Y-m-d");
            $currentDate->addDay();
        } 

        $ordersByDate = Order::whereBetween('created_at', ["2025-06-28 15:22:00", "2025-07-02 06:04:45"])
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
