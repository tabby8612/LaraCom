import DownArrow from '@/components/DownArrow';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Offers from '@/components/Offers';
import { Head } from '@inertiajs/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Welcome() {
    return (
        <>
            <Head title="LARACOM" />
            <NavBar />
            <Hero />
            <DownArrow />
            <Offers />
            <div id="products" className="mx-auto bg-gradient-to-r from-cyan-100 to-pink-200 to-50% py-25">
                <div className="mx-auto flex w-[90%] flex-col items-center justify-center">
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
                        <select name="sortByPrice" id="sortByPrice" className="w-60 rounded-md border-4 border-purple-400 px-2 py-3 shadow-md">
                            <option value="price">Sort By Price</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                        <select
                            name="filterByCategory"
                            id="filterByCategory"
                            className="w-60 rounded-md border-4 border-purple-400 px-2 py-3 shadow-md"
                        >
                            <option value="category">Filter By Category</option>
                            <option value="headphones">Headphones</option>
                            <option value="eardots">Ear Dots</option>
                            <option value="tablets">Tablets</option>
                            <option value="laptops">Laptops</option>
                            <option value="phones">Phones</option>
                            <option value="eReaders">E-Readers</option>
                        </select>
                        <select name="sortByDate" id="sortByDate" className="w-60 rounded-md border-4 border-purple-400 px-2 py-3 shadow-md">
                            <option value="date">Sort By Publish Date</option>
                            <option value="lowToHigh">Date: Oldest to Newest</option>
                            <option value="highToLow">Date: Newest to Oldest</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
