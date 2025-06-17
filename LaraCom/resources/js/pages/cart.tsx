import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import EmptyCart from '@/components/selfUI/EmptyCart';
import FillCart from '@/components/selfUI/FillCart';
import { Head } from '@inertiajs/react';

export default function Cart() {
    const hasProduct = false;

    return (
        <>
            <Head title="LARACOM - Cart" />
            <NavBar />
            {hasProduct ? <FillCart /> : <EmptyCart />}

            <Footer />
        </>
    );
}
