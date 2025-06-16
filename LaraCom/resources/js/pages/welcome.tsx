import DownArrow from '@/components/DownArrow';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Offers from '@/components/Offers';
import Products from '@/components/Products';
import ReviewsSection from '@/components/ReviewsSection';
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
            <ReviewsSection />
            <Footer />
        </>
    );
}
