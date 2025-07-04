import { Confetti, type ConfettiRef } from '@/components/confetti';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import TailingCursor from '@/components/selfUI/TailingCursor';
import { Head } from '@inertiajs/react';
import { CheckIcon } from 'lucide-react';
import { useRef } from 'react';

export default function ThankYou() {
    const confettiRef = useRef<ConfettiRef>(null);

    return (
        <>
            <TailingCursor />
            <Head title="LARACOM" />
            <NavBar />
            <div className="relative min-h-screen overflow-hidden">
                <div className="absolute top-1/5 right-2/12 z-10 my-12 flex w-8/12 flex-col items-center justify-center gap-7 rounded-2xl border-2 border-purple-900 bg-pink-200 py-6 opacity-75">
                    <h1 className="font-Rubik text-4xl font-bold text-heading uppercase">Thank You For Ordering With Us</h1>
                    <CheckIcon className="size-52 font-black text-green-600" />
                    <h2 className="font-Rubik text-2xl font-bold text-heading">We will deliver your order as soon as possible</h2>
                </div>
                <Confetti ref={confettiRef} className="absolute top-0 left-0 z-0 size-full" />
            </div>

            <Footer />
        </>
    );
}
