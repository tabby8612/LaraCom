import { Flash } from '@/types';
import { usePage } from '@inertiajs/react';
import { Menu, ShoppingBasketIcon, SquareUser } from 'lucide-react';
import { useState } from 'react';
import { NumberTicker } from '../../../components/magicui/number-ticker';
import LogoImg from '../assets/logo.png';

type Props = {
    visitorCount: string;
};

export default function NavBar() {
    const { visitorCount } = usePage<Props>().props;
    const { cart } = usePage().props.flash as Flash;

    const smallScreenClasses = 'absolute top-22 left-0 my-auto rounded bg-white/70 p-5 font-bold opacity-0 transition-opacity delay-150 duration-300';
    const navAnimateClasses =
        'hover:after:absolute hover:after:top-12 hover:after:left-1/2 hover:after:h-1 hover:after:animate-nav hover:after:rounded-xl hover:after:bg-purple-800';
    const [mobNav, showMobNav] = useState(false);

    function showMenu() {
        const nav = document.querySelector('#mobNav') as HTMLDivElement;

        nav.style.opacity = !mobNav ? '100' : '0';

        showMobNav(!mobNav);
    }

    return (
        <nav id="navbar" className="sticky top-0 z-999 flex h-22 items-center justify-around bg-white/20 px-7 shadow backdrop-blur-md">
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
                        <li className="relative">
                            <a href="/" className={navAnimateClasses}>
                                Home
                            </a>
                        </li>
                        <li className="relative">
                            <a href={route('about')} className={navAnimateClasses}>
                                About
                            </a>
                        </li>
                        <li className="relative">
                            <a href={route('products')} className={navAnimateClasses}>
                                Products
                            </a>
                        </li>
                        <li className="relative">
                            <a href={route('contact')} className={navAnimateClasses}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="flex gap-10">
                        <div id="cart" className="relative my-auto md:flex md:flex-col md:items-center md:justify-center">
                            <div className="absolute bottom-6 z-10 size-5 rounded-2xl bg-red-500 text-center text-sm font-bold text-white">
                                {cart ? cart.itemsCount : 0}
                            </div>
                            <a href={route('cart.index')}>
                                <ShoppingBasketIcon className="mt-4 size-7 cursor-pointer md:my-auto" />
                            </a>
                        </div>
                        <a href={route('profile')}>
                            <SquareUser className="mt-4 cursor-pointer text-black md:my-auto" />
                        </a>
                    </div>

                    <div id="viewCount" className="mt-4 text-xl md:mt-0">
                        View Count:{' '}
                        {
                            <NumberTicker
                                value={+visitorCount}
                                startValue={+visitorCount - 200}
                                className="font-Rubik text-2xl font-bold text-purple-800"
                            />
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}
