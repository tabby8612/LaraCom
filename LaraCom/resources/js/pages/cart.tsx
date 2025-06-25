import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import EmptyCart from '@/components/selfUI/EmptyCart';
import FillCart from '@/components/selfUI/FillCart';
import { Flash } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Cart() {
    const { cart } = usePage().props.flash as Flash;
    console.log(cart);

    return (
        <>
            <Head title="LARACOM - Cart" />
            <NavBar />
            {cart.itemsCount ? <FillCart /> : <EmptyCart />}

            <Footer />
        </>
    );
}
