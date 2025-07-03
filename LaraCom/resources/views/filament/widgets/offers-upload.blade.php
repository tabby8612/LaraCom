<x-filament-widgets::widget>
    <x-filament::section>
        {{-- Widget content --}}
        <div class="text-4xl font-Rubik font-bold py-4" style="font-size: 2rem;">Upload Offer Slides</div>
        <form wire:submit.prevent="save" class="my-4">            
            <label for="photo" class="inline-block cursor-pointer bg-purple-200 text-purple-800 px-4 py-2 rounded-md border-2 border-purple-500 hover:bg-purple-300 transition" style="border-color: oklch(0.627 0.265 303.9);">
        📤 Upload Banner
            </label>
            <input id="photo" type="file" wire:model="photo" class="bg-purple-200" style="background-color: oklch(0.902 0.063 306.703); padding: 3px 3px; border: 2px solid purple !important; border-radius: 5px; display: none;">
            <button type="submit" class="bg-purple-900 text-white py-2 px-3 rounded-md ml-3" style="background-color: #59168b !important; margin-left: 15px;">Upload</button>
        </form>
        <div wire:loading wire:target="photo">Uploading...</div>
        <div id="offer-container" class="grid grid-cols-1 md:grid-cols-3 gap-4" style="display: flex !important; gap: 5px !important;" >
        @foreach ($banners as $banner)
             <div class="border rounded shadow overflow-hidden" style="position: relative !important; border-width: 2px !important; border-radius: 10px !important; overflow: hidden !important; width: 250px !important">
                <img src="{{ asset('storage/' . $banner) }}" alt="Offer Banner" class="size-24 object-cover" style="width: 450px !important; height: 120px !important; object-fit: cover !important;">
                <div wire:click="delete(`{{$banner}}`)" style="background-color: gray !important; color: white !important; position: absolute !important; z-index: 10 !important; top: 3px; right: 10px; padding: 1px 3px; border-radius: 50%; cursor: pointer !important;">X</div>
            </div>           
        @endforeach
        </div>        
    </x-filament::section>
</x-filament-widgets::widget>
