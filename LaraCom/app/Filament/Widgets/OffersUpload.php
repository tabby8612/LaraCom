<?php

namespace App\Filament\Widgets;

use Filament\Widgets\Widget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Livewire\WithFileUploads;


class OffersUpload extends Widget
{
    use WithFileUploads;

    protected static string $view = 'filament.widgets.offers-upload';

    protected int | string | array $columnSpan = "full";

    protected static bool $isLazy = false;

    public $photo;

    public function save() {        

        $this->validate([
            "photo" => "image"
        ]);        

        $this->photo->store("offers", "public");

        $this->reset('photo');        
    }

    public function delete($photoName) {        

        Storage::disk("public")->delete($photoName);
    }

    protected function getViewData(): array
    {
        $files = Storage::disk("public")->allFiles("offers");
        

        return [
            "banners" => $files,
            
        ];
    }



    

}
