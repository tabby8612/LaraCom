import { useState } from 'react';
import DropDownMenu from './selfUI/DropDownMenu';
import ProductCard from './selfUI/ProductCard';
import ProductDialog from './selfUI/ProductDialog';

type Product = {
    image: string;
    name: string;
    productId: string;
    price: string;
    description: string;
    category: 'Headphones' | 'Earbuds' | 'Tablets' | 'Laptops' | 'Mobiles';
    status: 'In Stock' | 'Out of Stock';
    date: string;
};

type Products = Product[];

export default function Products() {
    const [productDialog, showProductDialog] = useState<Product | null>(null);
    const [priceFilterBox, showPriceFilterBox] = useState(false);
    const [categoryFilterBox, showCategoryFilterBox] = useState(false);
    const [DateFilterBox, showDateFilterBox] = useState(false);

    const products: Products = [
        {
            image: 'https://m.media-amazon.com/images/I/6196rZ67rvL._AC_UL480_QL65_.jpg',
            name: 'Soundcore by Anker Q20i Hybrid',
            productId: 'B0C3HCD34R',
            price: '125',
            description:
                'Immerse Yourself in Detailed Audio: The noise cancelling headphones have oversized 40mm dynamic drivers that produce detailed sound and thumping beats with BassUp technology. Compatible with Hi-Res certified audio via the AUX cable for more detail.',
            status: 'In Stock',
            category: 'Headphones',
            date: '15-11-2025',
        },
        {
            image: 'https://m.media-amazon.com/images/I/51EQDk1yjwL._AC_UL480_QL65_.jpg',
            name: 'JBL Wave Flex',
            productId: 'B0BW6RL27D',
            price: '157',
            description:
                'The ergonomic, stick-open design of the JBL Wave Flex fits so comfortably you may forget you’re wearing them. The stick-open design allows you to enjoy all the sound without blocking your ear-canal. ',
            status: 'In Stock',
            category: 'Earbuds',
            date: '25-11-2025',
        },
        {
            image: 'https://m.media-amazon.com/images/I/51BpG34MisL._AC_UL480_QL65_.jpg',
            name: 'Samsung Galaxy Tab A9+',
            productId: 'B0CKW1H71H',
            price: '600',
            description:
                'Stylish with a touch of cool, the Galaxy Tab A9 and Tab A9+ features a sleek design and a smooth metal body. Enjoy Samsung’s signature tablet design in Graphite, Silver and Navy with each hue highlighting effortless charm ',
            status: 'In Stock',
            category: 'Tablets',
            date: '25-05-2025',
        },
        {
            image: 'https://m.media-amazon.com/images/I/61NUR7kNpZL._AC_SX679_.jpg',
            name: 'Samsung Galaxy S25 Ultra',
            productId: 'B0DSLS4MN7',
            price: '3138',
            description:
                "Design: Galaxy S25 Ultra's rounded design expresses a unified identity for the Galaxy S Series. With it's sleek and strong titanium frame and a built-in S Pen, it's an ultra-modern, vision of bold design.",
            status: 'In Stock',
            category: 'Mobiles',
            date: '25-05-2025',
        },
    ];

    function displayPriceMenuItems() {
        showPriceFilterBox(!priceFilterBox);
        showCategoryFilterBox(false);
        showDateFilterBox(false);
    }

    function displayCategoryMenuItems() {
        showCategoryFilterBox(!categoryFilterBox);
        showPriceFilterBox(false);
        showDateFilterBox(false);
    }

    function displayDateMenuItems() {
        showDateFilterBox(!DateFilterBox);
        showCategoryFilterBox(false);
        showPriceFilterBox(false);
    }

    function showProductDetails(id: string) {
        const selectedProduct = products.filter((item) => item.productId === id)[0];
        showProductDialog(selectedProduct);
    }

    function closeDialog() {
        showProductDialog(null);
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
                    />
                    <DropDownMenu
                        title="Sort by Category"
                        isOpen={categoryFilterBox}
                        clickHandler={displayCategoryMenuItems}
                        menuItems={['Headphones', 'Earbuds', 'Tablets', 'Laptops', 'Mobiles']}
                    />
                    <DropDownMenu
                        title="Sort by Date"
                        isOpen={DateFilterBox}
                        clickHandler={displayDateMenuItems}
                        menuItems={['Date: Oldest to Newest', 'Date: Newest to Oldest']}
                    />
                </div>
            </div>
            <div className="mx-auto mt-15 grid w-10/12 grid-cols-2 gap-12 md:grid-cols-4">
                {products.map((item) => (
                    <ProductCard
                        title={item.name}
                        price={item.price}
                        imgUrl={item.image}
                        status={item.status}
                        key={item.productId}
                        productId={item.productId}
                        productDetailsHandler={() => showProductDetails(item.productId)}
                    />
                ))}
            </div>
            {productDialog && <ProductDialog {...productDialog} closeFn={closeDialog} />}
        </div>
    );
}
