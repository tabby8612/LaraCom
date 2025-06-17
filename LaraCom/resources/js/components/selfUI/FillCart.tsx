import CartProductCard from './CartProductCard';

export default function FillCart() {
    return (
        <div className="mx-auto my-3 flex max-h-full min-h-96 w-10/12 flex-col items-center justify-center gap-7">
            <h1 className="font-Rubik text-5xl font-bold uppercase">Cart</h1>
            <CartProductCard />
            <div className="flex w-full flex-col items-end justify-end gap-5">
                <h1 className="font-Rubik text-xl font-bold">Total Product Value: Rs. 469</h1>
                <button className="rounded-lg border-2 border-purple-900 bg-purple-300 px-4 py-2">Buy Now</button>
            </div>
        </div>
    );
}
