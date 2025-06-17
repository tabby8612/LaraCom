import DownArrow from '@/components/DownArrow';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Offers from '@/components/Offers';
import Products from '@/components/Products';
import ReviewsSection from '@/components/ReviewsSection';
import { Head } from '@inertiajs/react';
import { products } from './data';

export default function Welcome() {
    function addCartItem(prodID: string) {
        console.log(prodID);
    }

    return (
        <>
            <Head title="LARACOM" />
            <NavBar />
            <Hero />
            <DownArrow />
            <Offers />
            <Products products={products} cartFn={addCartItem} />
            <ReviewsSection />
            <Footer />
        </>
    );
}
