import DownArrow from '@/components/DownArrow';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Offers from '@/components/Offers';
import Products from '@/components/Products';
import ReviewsSlider from '@/components/ReviewsSlider';
import { Head } from '@inertiajs/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Welcome() {
    return (
        <>
            <Head title="LARACOM" />
            <NavBar />
            <Hero />
            <DownArrow />
            <Offers />
            <Products />
            <div className="bg-gradient-to-r from-cyan-100 to-pink-200">
                <div className="mx-auto h-[550px] w-10/12 py-20">
                    <h1 className="bg-transparent text-center font-Rubik text-2xl font-bold text-heading">What Our Users Say</h1>
                    <ReviewsSlider />
                </div>
            </div>
        </>
    );
}
