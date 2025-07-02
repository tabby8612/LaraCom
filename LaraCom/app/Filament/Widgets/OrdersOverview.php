<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\OrderResource;
use App\Models\Order;
use DB;
use Doctrine\DBAL\Query\QueryBuilder;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;

class OrdersOverview extends BaseWidget
{
    protected static bool $isLazy = false;

    protected int | string | array $columnSpan = "full";

    public function table(Table $table): Table
    {
        
        return $table
            ->query(OrderResource::getEloquentQuery())
            ->defaultSort("created_at", "desc")
            ->columns([
                // ...
                TextColumn::make("id")->searchable(),
                TextColumn::make("amount"),
                TextColumn::make("status")->badge()->sortable(),
                TextColumn::make("customer.name")
            ]);
    }
}
