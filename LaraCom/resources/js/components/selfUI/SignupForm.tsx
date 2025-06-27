import { default as ProfileImg } from '@/assets/images/default profile Image.png';
import { router, useForm } from '@inertiajs/react';
import { EyeOff, Mail, PencilIcon, User } from 'lucide-react';
import { ChangeEvent, FormEvent } from 'react';

type Props = {
    title: string;
    formHandlerFn: () => void;
};

type Data = {
    image: File | null;
    email: string;
    name: string;
    password: string;
};

const inputData: Data = {
    image: null,
    email: '',
    name: '',
    password: '',
};

export default function SignupForm({ title, formHandlerFn }: Props) {
    const { data, setData, processing, errors, post } = useForm(inputData);

    function signupHandler(e: FormEvent) {
        e.preventDefault();

        post(route('customers.store'), {
            onSuccess: (page) => {
                console.log(page);
                return router.get(route('user'));
            },
        });
    }

    function readURL(e: ChangeEvent<HTMLInputElement>) {
        const input = e.target as HTMLInputElement;

        if (input.files && input.files[0]) {
            const file = input.files[0];

            const imagePreview = document.getElementById('previewImage') as HTMLImageElement;
            imagePreview.src = URL.createObjectURL(file);
            setData('image', input.files[0]);
        }
    }

    return (
        <div id="signup" className="mx-auto max-h-full min-h-86 w-1/4 rounded-2xl bg-[#c79bc9] px-3 py-4 shadow-2xl">
            <h1 className="text-center font-Rubik text-2xl font-bold text-heading uppercase">{title}</h1>
            <form onSubmit={signupHandler} className="my-4 flex flex-col items-center justify-center gap-4" encType="multipart/form-data">
                {errors.image && <div>{errors.image}</div>}
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
                        accept="image/*"
                    />
                </div>

                <div className="relative">
                    <input
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        className="w-full rounded-xl border-4 border-purple-800 bg-[#ffd2ff] py-2 pr-15 pl-4"
                        required
                    />
                    <Mail className="absolute top-3 right-5 z-40" />
                </div>
                {errors.email && <div>{errors.email}</div>}
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        className="w-full rounded-xl border-4 border-purple-800 bg-[#ffd2ff] py-2 pr-15 pl-4"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <User className="absolute top-3 right-5 z-40" />
                </div>
                {errors.name && <div>{errors.name}</div>}
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="w-full rounded-xl border-4 border-purple-800 bg-[#ffd2ff] py-2 pr-15 pl-4"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <EyeOff className="absolute top-3 right-5 z-40" />
                </div>
                {errors.password && <div>{errors.password}</div>}

                <button
                    className="w-full cursor-pointer rounded-xl bg-[#460b46] px-3 py-2 font-Rubik text-lg font-bold text-pink-300 disabled:cursor-not-allowed disabled:bg-gray-400"
                    disabled={processing}
                >
                    Sign Up
                </button>
            </form>
            <p className="mt-15 text-center font-Rubik font-bold">
                Don't have an account?{' '}
                <span onClick={formHandlerFn} className="cursor-pointer">
                    Sign In
                </span>
            </p>
        </div>
    );
}
