import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Products from '@/components/Products';
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

export default function ProductsPage() {
    const { products } = usePage<Props>().props;

    function addCartItem(prodID: string) {
        console.log(prodID);
    }

    return (
        <div>
            <Head title="LARACOM - Products" />
            <NavBar />
            <Products products={products} cartFn={addCartItem} />
            <Footer />
        </div>
    );
}
