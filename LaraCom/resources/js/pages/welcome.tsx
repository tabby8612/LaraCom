import NavBar from '@/components/NavBar';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="LARACOM" />
            <NavBar />
            {/* <div id="hero" className="flex bg-amber-300">
                <div id="heroText">Hi</div>
                <div id="heroImg">Bye</div>
            </div> */}
        </>
    );
}
