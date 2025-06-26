import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import AddressCard from '@/components/selfUI/AddressCard';
import AddressForm from '@/components/selfUI/AddressForm';
import { Head } from '@inertiajs/react';

export default function Address() {
    return (
        <>
            <Head title="LARACOM" />
            <NavBar />
            <div className="mx-auto my-12 flex w-10/12 flex-col items-center justify-center gap-7 py-6">
                <h1 className="font-Rubik text-3xl font-bold text-heading uppercase">Place Order</h1>
                <div id="address-container" className="flex w-full items-center justify-center gap-7">
                    <AddressForm />
                    <AddressCard />
                </div>
            </div>

            <Footer />
        </>
    );
}
