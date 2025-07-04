import DownArrow from '@/components/DownArrow';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Offers from '@/components/Offers';
import Products from '@/components/Products';
import ReviewsSection from '@/components/ReviewsSection';
import ScrollProgress from '@/components/selfUI/ScrollProgress';
import TailingCursor from '@/components/selfUI/TailingCursor';
import { Flash, Product } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
    products: Product[];
    message: string;
};

export default function Welcome() {
    const { message, products } = usePage<Props>().props;
    const { message: logginMessage } = usePage().props.flash as Flash;
    const [loginMessage, setLoginMessage] = useState(logginMessage);

    useEffect(() => {
        if (message) {
            toast.success(message, {
                duration: 4000,
                position: 'bottom-left',
                icon: '👏',
                className: 'border-b-4 border-b-green-600 rounded-4xl',
            });
        }

        if (loginMessage) {
            toast.success(loginMessage, {
                duration: 4000,
                position: 'bottom-left',
                icon: '👏',
                className: 'border-b-4 border-b-green-600 rounded-4xl',
            });

            setLoginMessage('');
        }
    }, [message, loginMessage]);

    return (
        <>
            <div className=""></div>
            <TailingCursor />
            <Head title="LARACOM" />
            <ScrollProgress>
                <NavBar />
                <Hero />
                <DownArrow />
                <Offers />
                <Products products={products} />
                <ReviewsSection />
                <Footer />
            </ScrollProgress>
        </>
    );
}
