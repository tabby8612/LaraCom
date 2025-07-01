<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductsResource\Pages;
use App\Filament\Resources\ProductsResource\RelationManagers;
use App\Models\Category;
use App\Models\Products;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\BooleanColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Notification;

class ProductsResource extends Resource
{
    protected static ?string $model = Products::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 1;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                TextInput::make("name")->required()->rules(["min:5"]),
                TextInput::make("price")->required()->rules(["gt:0"]),
                Select::make("category_id")->label("Category")->options(Category::all()->pluck("name", "id"))->required(),   
                TextInput::make("sku")->required(),             
                Toggle::make("status")->columnSpanFull()->onColor("success")->offColor("danger")->inline(false),
                RichEditor::make("description")->disableToolbarButtons(["attachFiles"])->required(),
                FileUpload::make("image")->required()->directory("products")->image()->enableOpen()->imagePreviewHeight("240")

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make("id"),
                TextColumn::make("name")->searchable(),
                TextColumn::make("price")->sortable(),
                TextColumn::make("category.name")->sortable(),
                ImageColumn::make("image_url")->label("Image"),
                BooleanColumn::make("status")->sortable(),
                
            ])
            ->filters([
                //
                SelectFilter::make("category")->options(Category::all()->pluck("name", "id"))->preload()->attribute("category_id")
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()->successNotification(
                    \Filament\Notifications\Notification::make()->success()->title("Product Deleted")->body("The Product has been deleted")
                )
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProducts::route('/create'),
            'edit' => Pages\EditProducts::route('/{record}/edit'),
        ];
    }
}
