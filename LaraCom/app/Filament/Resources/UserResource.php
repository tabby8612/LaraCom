<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Actions\DeleteAction;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-s-users';

    protected static ?string $navigationLabel = 'Admin Users';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                Section::make("Create A User")->description("Create a new user for LaraCom store")->schema([
                    TextInput::make("name")->rules(["min:3"])->required(),
                ])->collapsible(),
                TextInput::make("email")->required()->email()->columnSpanFull(),
                TextInput::make("name")->rules(["min:3"])->required(),
                TextInput::make("password")->required()->password(),
                Select::make("Role")->options([
                    "admin" => "admin",
                    "editor" => "editor",
                    "customer" => "customer"
                    ])
                    ])->columns([
                        "md" => 2,
                        "lg" => 3,                        
                    ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make("id")->toggleable($isToggledHiddenByDefault = true),
                TextColumn::make("name")->sortable()->toggleable(),
                TextColumn::make("email")->searchable()->toggleable(),
                
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                \Filament\Tables\Actions\DeleteAction::make()   // adds delete button on each row
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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
