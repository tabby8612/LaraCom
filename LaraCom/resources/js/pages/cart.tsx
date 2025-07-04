import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import EmptyCart from '@/components/selfUI/EmptyCart';
import FillCart from '@/components/selfUI/FillCart';
import ScrollProgress from '@/components/selfUI/ScrollProgress';
import TailingCursor from '@/components/selfUI/TailingCursor';
import { Flash } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Cart() {
    const { cart } = usePage().props.flash as Flash;
    console.log(cart);

    return (
        <>
            <TailingCursor />
            <Head title="LARACOM - Cart" />
            <NavBar />
            <ScrollProgress>
                {cart.itemsCount ? <FillCart /> : <EmptyCart />}

                <Footer />
            </ScrollProgress>
        </>
    );
}
