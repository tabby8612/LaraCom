import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Products from '@/components/Products';
import ScrollProgress from '@/components/selfUI/ScrollProgress';
import TailingCursor from '@/components/selfUI/TailingCursor';
import { Product } from '@/types';
import { Head, usePage } from '@inertiajs/react';

type Props = {
    products: Product[];
};

export default function ProductsPage() {
    const { products } = usePage<Props>().props;

    return (
        <div>
            <TailingCursor />
            <ScrollProgress>
                <Head title="LARACOM - Products" />
                <NavBar />
                <Products products={products} />
                <Footer />
            </ScrollProgress>
        </div>
    );
}
