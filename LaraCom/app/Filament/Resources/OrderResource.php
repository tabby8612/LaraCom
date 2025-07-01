<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-s-shopping-bag';

    protected static ?string $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 4;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {        

        return $table
            ->columns([
                TextColumn::make("id")->searchable(),
                TextColumn::make("amount"),
                TextColumn::make("status")->badge()->sortable(),
                TextColumn::make("customer.name")
                
            ])
            ->filters([
                //
            ])
            ->actions([    
                Tables\Actions\ViewAction::make(),            
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
            RelationManagers\ProductsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'view' => Pages\ViewOrder::route("/{record}")
            // 'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }

    public static function infoList(Infolist $infoList): Infolist {
        return $infoList->schema([
            Section::make("Order Information")
            ->description("Here is the product information")
            ->schema([                
                TextEntry::make("id")->label("Order ID")->extraAttributes(["class" => "!bg-stone-500 p-16"]),
                TextEntry::make("amount"),
                TextEntry::make("status"),
                TextEntry::make("customer.name")
            ])
            ->collapsible()->columns(4)
            ->icon("heroicon-m-shopping-bag")
            ->iconColor("primary"),

            
        ])->columns(1);
    }
}
