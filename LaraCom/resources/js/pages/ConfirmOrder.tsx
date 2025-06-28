import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ConfirmAddress from '@/components/selfUI/ConfirmAddress';
import ConfirmProductCard from '@/components/selfUI/ConfirmProductCard';
import FinalPriceConfirmCard from '@/components/selfUI/FinalPriceConfirmCard';
import { CartProduct } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { MouseEvent } from 'react';

type Props = {
    addressDetails: { address: string; phone: string; country: string };
    cartProducts: CartProduct[];
    customerName: string;
    totalCartCost: string;
};

export default function ConfirmOrder() {
    const { addressDetails, cartProducts, customerName, totalCartCost } = usePage<Props>().props;

    function submitOrderHandler(e: MouseEvent) {
        e.preventDefault();

        router.post(route('order.submit'), {
            totalAmount: totalCartCost,
            products: cartProducts,
        });
    }

    return (
        <>
            <Head title="LARACOM" />
            <NavBar />
            <div className="mx-auto my-12 flex w-10/12 flex-col items-center justify-center gap-7 py-6">
                <h1 className="font-Rubik text-4xl font-bold text-heading uppercase">Confirm Order</h1>
            </div>
            <div className="mx-auto mb-60 flex gap-5 px-5 py-2">
                <ConfirmAddress addressDetails={addressDetails} />
                <div id="confirm-products" className="rounded-md border-2 border-purple-900 bg-[#d7bde5] px-6 py-8">
                    <h1 className="mb-6 font-Rubik text-3xl font-bold">Product Details</h1>
                    <div id="products-container" className="w-2xl">
                        {cartProducts.map((product) => (
                            <ConfirmProductCard product={product} key={product.id} />
                        ))}
                    </div>
                </div>
                <FinalPriceConfirmCard customerName={customerName} totalCartCost={totalCartCost} submitOrder={submitOrderHandler} />
            </div>

            <Footer />
        </>
    );
}
