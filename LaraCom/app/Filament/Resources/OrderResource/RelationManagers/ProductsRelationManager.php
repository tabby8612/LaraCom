<?php

namespace App\Filament\Resources\OrderResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductsRelationManager extends RelationManager
{
    protected static string $relationship = 'products';

    protected static ?string $label = "Ordered Products";

    protected static ?string $icon = "heroicon-s-stack";

    protected static bool $isLazy = false;

    public static function getIcon(Model $ownerRecord, string $pageClass): ?string
    {
        return 'heroicon-s-shopping-bag';
    }

    public static function getTitle(Model $ownerRecord, string $pageClass): string
    {
        return "Ordered Products";
    }
    

    // public function form(Form $form): Form
    // {
    //     return $form
    //         ->schema([
    //             Forms\Components\TextInput::make('product_id')
    //                 ->required()
    //                 ->maxLength(255),
    //         ]);
    // }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('product_id')
            ->striped()            
            ->columns([
                Tables\Columns\TextColumn::make('product_id')->label("Product ID"),
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('price'),
                Tables\Columns\ImageColumn::make("image")
                
            ])
            ->filters([
                //
            ])
            ->headerActions([
                // Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                // Tables\Actions\EditAction::make(),
                // Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    // Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
