import ProfileImg from '@/assets/images/default profile Image.png';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { Head, router, usePage } from '@inertiajs/react';
import { PencilIcon } from 'lucide-react';
import { ChangeEvent, useRef, useState } from 'react';

type Customer = {
    id: string;
    name: string;
    email: string;
    password: string;
    image: string;
};

type Flash = {
    customer: Customer;
};

export default function User() {
    const flash = usePage().props.flash as Flash;
    const password = useRef<HTMLInputElement>(null);
    const inputFileRef = useRef<HTMLInputElement | null>(null);
    const { customer } = flash;

    const [changePassword, showChangePassword] = useState(false);

    function passwordBoxHandler() {
        showChangePassword(!changePassword);
    }

    function changePasswordHandler() {
        router.put(
            route('customers.update', customer.id),
            {
                password: password.current?.value,
            },
            {
                onSuccess: () => {
                    showChangePassword(false);
                },
            },
        );
    }

    function readURL(e: ChangeEvent<HTMLInputElement>) {
        const input = e.target as HTMLInputElement;

        if (input.files && input.files[0]) {
            const file = input.files[0];

            const imagePreview = document.getElementById('previewImage') as HTMLImageElement;
            imagePreview.src = URL.createObjectURL(file);

            const formData = new FormData();
            formData.append('image', file);
            formData.append('_method', 'put');

            router.post(route('customers.update', customer.id), formData);
        }
    }

    function logoutHandler() {
        return router.get(route('logout'));
    }

    return (
        <>
            <Head title="LARACOM - User" />
            <NavBar />
            <div className="mx-auto flex max-h-full min-h-96 w-1/2 flex-col items-center justify-between py-24">
                <div className="relative size-54">
                    <img
                        id="previewImage"
                        src={customer.image ? `/storage/${customer.image}` : ProfileImg}
                        alt="default profile image"
                        className="size-full rounded-full"
                    />
                    <div className="absolute top-5 right-4 cursor-pointer rounded-full bg-white/80 px-2 py-2 shadow-md hover:brightness-90">
                        <PencilIcon className="size-6 cursor-pointer" />
                    </div>
                    <input
                        type="file"
                        name="imageUpload"
                        id="imageUpload"
                        onChange={readURL}
                        className="absolute top-5 right-4 size-10 cursor-pointer bg-red-600 opacity-0"
                        ref={inputFileRef}
                    />
                </div>
                <h1 className="mt-6 font-Rubik text-2xl font-bold">
                    Name: <span className="text-3xl text-purple-900">{customer.name}</span>
                </h1>
                <h1 className="mt-6 font-Rubik text-2xl font-bold">
                    Email: <span className="text-3xl text-purple-900">{customer.email}</span>
                </h1>
                <div className={`transition-all delay-200 duration-300 ${changePassword ? 'h-full' : 'h-0'}`}>
                    <form
                        action={changePasswordHandler}
                        className={`${changePassword ? 'translate-x-5 opacity-100' : 'pointer-events-none opacity-0'} mt-7 flex flex-col items-center justify-center transition-all delay-200 duration-300`}
                    >
                        <input
                            type="password"
                            name="password"
                            className="rounded-md border-2 border-purple-800 bg-pink-200 px-3 py-2 outline-0"
                            placeholder="Enter new password"
                            ref={password}
                        />
                        <button className="mt-8 w-3/4 cursor-pointer rounded-md bg-purple-800 py-2 font-bold text-white transition-colors delay-100 duration-300 hover:bg-purple-700">
                            Submit
                        </button>
                    </form>
                </div>
                <button
                    className="mt-8 w-3/4 cursor-pointer rounded-md bg-purple-800 py-2 font-bold text-white transition-colors delay-100 duration-300 hover:bg-purple-700"
                    onClick={passwordBoxHandler}
                >
                    Reset Password
                </button>
                <button
                    className="mt-4 w-3/4 cursor-pointer rounded-md bg-purple-800 py-2 font-bold text-white transition-colors delay-100 duration-300 hover:bg-purple-700"
                    onClick={logoutHandler}
                >
                    Log Out
                </button>
            </div>
            <Footer />
        </>
    );
}
