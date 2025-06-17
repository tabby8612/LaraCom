import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Products from '@/components/Products';
import { Head } from '@inertiajs/react';

export default function products() {
    return (
        <div>
            <Head title="LARACOM - Products" />
            <NavBar />
            <Products />
            <Footer />
        </div>
    );
}
