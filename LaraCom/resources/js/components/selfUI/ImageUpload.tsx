import ProfileImg from '@/assets/images/default profile Image.png';
import { PencilIcon } from 'lucide-react';
import { ChangeEvent } from 'react';

export default function ImageUpload() {
    function readURL(e: ChangeEvent<HTMLInputElement>) {
        const input = e.target as HTMLInputElement;

        if (input.files && input.files[0]) {
            const file = input.files[0];

            const imagePreview = document.getElementById('previewImage') as HTMLImageElement;
            imagePreview.src = URL.createObjectURL(file);
        }
    }

    return (
        <div className="relative size-54">
            <img id="previewImage" src={ProfileImg} alt="default profile image" className="size-full rounded-full" />
            <div className="absolute top-5 right-4 cursor-pointer rounded-full bg-white/80 px-2 py-2 shadow-md hover:brightness-90">
                <PencilIcon className="size-6 cursor-pointer" />
            </div>
            <input
                type="file"
                name="image"
                id="image"
                onChange={readURL}
                className="absolute top-5 right-4 size-10 cursor-pointer bg-red-600 opacity-0"
            />
        </div>
    );
}
