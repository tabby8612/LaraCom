import { router } from '@inertiajs/react';
import { EyeOff, Mail, User } from 'lucide-react';
import { useRef } from 'react';

type Props = {
    title: string;
    formHandlerFn: () => void;
};

export default function SignupForm({ title, formHandlerFn }: Props) {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const userRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    function signupHandler() {
        console.log(emailRef.current?.value);
        console.log(userRef.current?.value);
        console.log(passwordRef.current?.value);

        router.post(
            route('customers.store'),
            {
                email: emailRef.current?.value,
                user: userRef.current?.value,
                password: passwordRef.current?.value,
            },
            {
                onSuccess: () => route('home'),
            },
        );
    }

    return (
        <div id="signup" className="mx-auto max-h-full min-h-86 w-1/4 rounded-2xl bg-[#c79bc9] px-3 py-4 shadow-2xl">
            <h1 className="text-center font-Rubik text-2xl font-bold text-heading uppercase">{title}</h1>
            <form action={signupHandler} className="my-4 flex flex-col gap-4">
                <div className="relative">
                    <input
                        ref={emailRef}
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        className="w-full rounded-xl border-4 border-purple-800 bg-[#ffd2ff] py-2 pr-15 pl-4"
                    />
                    <Mail className="absolute top-3 right-5 z-40" />
                </div>
                <div className="relative">
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        className="w-full rounded-xl border-4 border-purple-800 bg-[#ffd2ff] py-2 pr-15 pl-4"
                        ref={userRef}
                    />
                    <User className="absolute top-3 right-5 z-40" />
                </div>
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="w-full rounded-xl border-4 border-purple-800 bg-[#ffd2ff] py-2 pr-15 pl-4"
                        ref={passwordRef}
                    />
                    <EyeOff className="absolute top-3 right-5 z-40" />
                </div>

                <button className="w-full cursor-pointer rounded-xl bg-[#460b46] px-3 py-2 font-Rubik text-lg font-bold text-pink-300">
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
