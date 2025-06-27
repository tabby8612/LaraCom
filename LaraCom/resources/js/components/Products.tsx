import { Flash, Product } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { MouseEvent, useState } from 'react';
import DropDownMenu from './selfUI/DropDownMenu';
import NotLoggedInDialog from './selfUI/NotLoggedInDialog';
import ProductCard from './selfUI/ProductCard';
import ProductDialog from './selfUI/ProductDialog';

type Props = {
    products: Product[];
};

export default function Products({ products }: Props) {
    const [productDialog, showProductDialog] = useState<Product | null>(null);
    const [priceFilterBox, showPriceFilterBox] = useState(false);
    const [categoryFilterBox, showCategoryFilterBox] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState<boolean>(true);
    const { customer, cart } = usePage().props.flash as Flash;
    const [filteredProducts, setFilteredProducts] = useState<Product[] | undefined>(products);
    const [categoryTitle, setCategoryTitle] = useState('Sort by Category');

    const categories = new Set(products.map((product) => product.category));

    function displayPriceMenuItems() {
        showPriceFilterBox(!priceFilterBox);
        showCategoryFilterBox(false);
    }

    function displayCategoryMenuItems() {
        showCategoryFilterBox(!categoryFilterBox);
        showPriceFilterBox(false);
    }

    function showProductDetails(id: string) {
        const selectedProduct = products.filter((item) => item.sku === id)[0];

        showProductDialog(selectedProduct);
    }

    function closeDialog() {
        showProductDialog(null);
    }

    function addCartItem(prodID: string) {
        if (!customer) {
            setLoggedIn(false);
        } else {
            // customer logged in so provide addT0Cart logic
            router.put(
                route('cart.update', cart.id),
                {
                    productID: products.filter((item) => item.sku === prodID)[0].id,
                    increament: true,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    showProgress: false,
                    onFinish: () => console.log(`product added to cart`),
                },
            );
        }
    }

    function categoryHandler(e: MouseEvent<HTMLDivElement>) {
        showCategoryFilterBox(false);
        showPriceFilterBox(false);

        const targetDiv = e.target as HTMLDivElement;
        const selectedCategory = targetDiv.innerHTML;

        if (selectedCategory === 'All') {
            setCategoryTitle('Sort By Category');
            setFilteredProducts(products);
            return;
        }

        const filteredProducts = products.filter((product) => product.category === selectedCategory);
        setCategoryTitle(selectedCategory);
        setFilteredProducts(filteredProducts);
    }

    function priceHandler(e: MouseEvent<HTMLDivElement>) {
        showCategoryFilterBox(false);
        showPriceFilterBox(false);

        const targetDiv = e.target as HTMLDivElement;
        const selectedOption = targetDiv.innerHTML;

        if (selectedOption === 'Price: Low To High') {
            const sortedProducts = filteredProducts?.sort((Prod1, Prod2) => +Prod1.price - +Prod2.price);
            setFilteredProducts(sortedProducts);
        } else {
            const sortedProducts = filteredProducts?.sort((Prod1, Prod2) => +Prod2.price - +Prod1.price);
            setFilteredProducts(sortedProducts);
        }
    }

    return (
        <div id="products" className="mx-auto bg-gradient-to-r from-purple-200 from-15% to-pink-200 to-60% py-25">
            <div id="filterBoxes" className="mx-auto flex w-[90%] flex-col items-center justify-center">
                <h1 className="mx-auto my-5 w-1/2 text-center font-Rubik text-4xl font-bold text-heading uppercase">Products</h1>
                <form action="" className="mx-auto my-5 flex w-full justify-center">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search by Name, category, or price"
                        className="mx-auto w-3/4 rounded-md border-6 border-heading2 px-4 py-2 placeholder-blue-950 shadow-2xl outline-0"
                    />
                </form>
                <div id="sortingCombs" className="my-5 flex gap-10">
                    <DropDownMenu
                        title="Sort by Price"
                        isOpen={priceFilterBox}
                        clickHandler={displayPriceMenuItems}
                        menuItems={['Price: High To Low', 'Price: Low To High']}
                        menuHandler={priceHandler}
                    />
                    <DropDownMenu
                        title={categoryTitle}
                        isOpen={categoryFilterBox}
                        clickHandler={displayCategoryMenuItems}
                        menuItems={['All', ...categories]}
                        menuHandler={categoryHandler}
                    />
                </div>
            </div>
            <div className="mx-auto mt-15 grid w-10/12 grid-cols-2 gap-12 md:grid-cols-4">
                {filteredProducts?.map((item) => (
                    <ProductCard
                        title={item.name}
                        price={item.price}
                        imgUrl={item.image}
                        status={item.status}
                        key={item.sku}
                        productId={item.sku}
                        productDetailsHandler={() => showProductDetails(item.sku)}
                    />
                ))}
            </div>
            {productDialog && <ProductDialog {...productDialog} closeFn={closeDialog} addItemFn={addCartItem} />}
            {!isLoggedIn && <NotLoggedInDialog />}
        </div>
    );
}
