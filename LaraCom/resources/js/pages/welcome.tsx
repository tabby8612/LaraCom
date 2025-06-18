import DownArrow from '@/components/DownArrow';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Offers from '@/components/Offers';
import Products from '@/components/Products';
import ReviewsSection from '@/components/ReviewsSection';
import { Head, usePage } from '@inertiajs/react';

type Product = {
    image: string;
    name: string;
    productID: string;
    price: string;
    description: string;
    category: 'Headphones' | 'Earbuds' | 'Tablets' | 'Laptops' | 'Mobiles';
    status: 'In Stock' | 'Out of Stock';
    date: string;
};

type Props = {
    products: Product[];
};

export default function Welcome() {
    const { products } = usePage<Props>().props;

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
