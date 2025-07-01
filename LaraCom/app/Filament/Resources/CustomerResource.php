<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CustomerResource\Pages;
use App\Filament\Resources\CustomerResource\RelationManagers;
use App\Models\Customer;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\ImageFile;

class CustomerResource extends Resource
{
    protected static ?string $model = Customer::class;

    protected static ?string $navigationIcon = 'heroicon-s-users';

    protected static ?string $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                TextInput::make("name"),

                TextInput::make("email")->required()->email()->unique("customers", "email", ignoreRecord: true),

                TextInput::make("password")
                ->type("password")
                ->required(fn (string $context) => $context == "create")
                ->password()
                ->default("")
                ->dehydrateStateUsing(fn (string $state) => filled($state) ? Hash::make($state) : null)
                ->dehydrated(fn (?string $state) => filled($state))
                ->revealable(),

                TextInput::make("billing_address"),

                TextInput::make("default_shipping_address")                
                ->dehydrateStateUsing(fn ($state, $get) => $get("billing_address")),

                TextInput::make("country"),

                TextInput::make("phone"),

                FileUpload::make("image")->required()->directory("profiles")->image()->enableOpen()->imagePreviewHeight("240")

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //                
                TextColumn::make("name"),
                TextColumn::make("email"),                                
                ImageColumn::make("image"),
                TextColumn::make("orders_count")->label("Orders")->counts("orders"),


            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
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
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCustomers::route('/'),
            'create' => Pages\CreateCustomer::route('/create'),
            'edit' => Pages\EditCustomer::route('/{record}/edit'),
        ];
    }
}
