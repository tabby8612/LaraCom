import { useForm } from '@inertiajs/react';
import { EyeOff, Mail } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

type Props = {
    title: string;
    formHandlerFn: () => void;
};

export default function LoginForm({ title, formHandlerFn }: Props) {
    const [errorMessage, setErrorMessage] = useState('');
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        errMessage: '',
    });

    useEffect(() => {
        if (errors.errMessage) {
            setErrorMessage(errors.errMessage);

            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [errors]);

    function submit(e: FormEvent) {
        e.preventDefault();

        post(route('customer.login'));
    }

    return (
        <div id="login" className="mx-auto max-h-full min-h-86 w-1/4 rounded-2xl bg-[#c79bc9] px-3 py-4 shadow-2xl">
            <h1 className="text-center font-Rubik text-3xl font-bold text-heading uppercase">{title}</h1>
            {errorMessage && <div className="mb-4 text-center font-Rubik text-sm font-semibold text-red-600">{errors.errMessage}</div>}
            <form onSubmit={submit} className="my-4 flex flex-col gap-4">
                <div className="relative">
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        className="w-full rounded-xl border-4 border-purple-800 bg-[#ffd2ff] py-2 pr-15 pl-4"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <Mail className="absolute top-3 right-5 z-40" />
                    {errors.email && <div>{errors.email}</div>}
                </div>
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
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <button
                    className="w-full cursor-pointer rounded-xl bg-[#460b46] px-3 py-2 font-Rubik text-lg font-bold text-pink-300 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-black"
                    disabled={processing}
                >
                    Login
                </button>
            </form>
            <p className="mt-15 text-center font-Rubik font-bold">
                Don't have an account?{' '}
                <span onClick={formHandlerFn} className="cursor-pointer">
                    Sign Up
                </span>
            </p>
        </div>
    );
}
