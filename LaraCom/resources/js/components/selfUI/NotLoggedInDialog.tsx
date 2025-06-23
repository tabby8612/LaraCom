import { router } from '@inertiajs/react';
import { createPortal } from 'react-dom';

export default function NotLoggedInDialog() {
    function clickHandler() {
        return router.get(route('profile'));
    }

    return createPortal(
        <div className="fixed inset-0 z-50 flex max-h-full items-center justify-center bg-black/50 pt-20">
            <div className={`relative mx-5 my-auto rounded-lg bg-white p-6 shadow-[0px_0px_10px_10px_#000] delay-200 duration-300 animate-in`}>
                <div className="flex flex-col items-center justify-center gap-5 px-5 py-5">
                    <h1 className="font-Rubik text-xl font-bold">First Login to add product into your cart.</h1>
                    <button className="cursor-pointer rounded-lg bg-purple-800 px-7 py-3 text-white" onClick={clickHandler}>
                        Ok
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}
