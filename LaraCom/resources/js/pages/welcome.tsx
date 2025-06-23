import DownArrow from '@/components/DownArrow';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Offers from '@/components/Offers';
import Products from '@/components/Products';
import ReviewsSection from '@/components/ReviewsSection';
import { Product } from '@/types';
import { Head, usePage } from '@inertiajs/react';

type Props = {
    products: Product[];
};

export default function Welcome() {
    const { products } = usePage<Props>().props;

    return (
        <>
            <Head title="LARACOM" />
            <NavBar />
            <Hero />
            <DownArrow />
            <Offers />
            <Products products={products} />
            <ReviewsSection />
            <Footer />
        </>
    );
}
