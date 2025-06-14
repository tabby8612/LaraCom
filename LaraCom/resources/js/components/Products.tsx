import { useState } from 'react';
import DropDownMenu from './selfUI/DropDownMenu';
import ProductCard from './selfUI/ProductCard';

export default function Products() {
    const [priceFilterBox, showPriceFilterBox] = useState(false);
    const [categoryFilterBox, showCategoryFilterBox] = useState(false);
    const [DateFilterBox, showDateFilterBox] = useState(false);

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
                <ProductCard
                    title="Soundcore By Anker H30i"
                    price="4500"
                    imgUrl="https://m.media-amazon.com/images/I/6196rZ67rvL._AC_UL480_QL65_.jpg"
                    status="In Stock"
                />
                <ProductCard
                    title="Soundcore By Anker H30i"
                    price="4500"
                    imgUrl="https://m.media-amazon.com/images/I/6196rZ67rvL._AC_UL480_QL65_.jpg"
                    status="In Stock"
                />
                <ProductCard
                    title="Soundcore By Anker H30i"
                    price="4500"
                    imgUrl="https://m.media-amazon.com/images/I/6196rZ67rvL._AC_UL480_QL65_.jpg"
                    status="In Stock"
                />
                <ProductCard
                    title="Soundcore By Anker H30i"
                    price="4500"
                    imgUrl="https://m.media-amazon.com/images/I/6196rZ67rvL._AC_UL480_QL65_.jpg"
                    status="In Stock"
                />
            </div>
        </div>
    );
}
