import { Menu, ShoppingBasketIcon, SquareUser } from 'lucide-react';
import { useState } from 'react';
import LogoImg from '../assets/logo.png';

export default function NavBar() {
    const smallScreenClasses = 'absolute top-22 left-0 my-auto rounded bg-white/70 p-5 font-bold opacity-0 transition-opacity delay-150 duration-300';
    const [mobNav, showMobNav] = useState(false);

    function showMenu() {
        const nav = document.querySelector('#mobNav') as HTMLDivElement;

        nav.style.opacity = !mobNav ? '100' : '0';

        showMobNav(!mobNav);
    }

    return (
        <nav id="navbar" className="sticky top-0 z-999 flex h-22 items-center justify-around bg-white/60 px-7 shadow backdrop-blur-md">
            <div id="logo">
                <img src={LogoImg} alt="Laracom Logo" className="h-20" />
            </div>
            <div className="mt-4">
                <Menu className="size-10 cursor-pointer md:hidden" onClick={showMenu} />
                <div
                    id="mobNav"
                    className={`${smallScreenClasses} md:relative md:-top-1 md:flex md:items-center md:justify-center md:gap-12 md:bg-transparent md:opacity-100`}
                >
                    <ul className="my-auto py-3 font-Rubik text-xl font-semibold md:flex md:gap-7">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                    <div className="flex gap-10">
                        <div id="cart" className="relative my-auto md:flex md:flex-col md:items-center md:justify-center">
                            <div className="absolute bottom-6 size-5 rounded-2xl bg-red-500 text-center text-sm font-bold text-white">0</div>
                            <ShoppingBasketIcon className="mt-4 size-7 md:my-auto" />
                        </div>
                        <SquareUser className="mt-4 text-black md:my-auto" />
                    </div>

                    <div id="viewCount" className="mt-4 text-lg md:mt-0">
                        View Count: 2000
                    </div>
                </div>
            </div>
        </nav>
    );
}
