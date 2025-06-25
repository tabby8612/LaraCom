import { CartProduct, Flash } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import CartProductCard from './CartProductCard';

type Props = {
    products: CartProduct[];
};

export default function FillCart() {
    const { products } = usePage<Props>().props;
    const { cart } = usePage().props.flash as Flash;
    const [isDecreasing, setIsDecreasing] = useState(false);
    const [isIncreasing, setIsIncreasing] = useState(false);

    let sum = 0;

    products.forEach((product) => (sum += +product.price * +product.quantity));

    function removeHanlder(prodID: string) {
        router.get(route('remove.product', [cart.id, prodID]));
    }

    function increaseQuantityHandler(prodID: string) {
        if (isIncreasing) return;

        setIsIncreasing(true);

        router.put(
            route('cart.update', cart.id),
            {
                productID: prodID,
                increament: true,
            },
            {
                preserveScroll: true,
                preserveState: true,
                showProgress: false,
                onFinish: () => setIsIncreasing(false),
            },
        );
    }

    function decreaseQuantityHandler(prodID: string) {
        if (isDecreasing) return;

        setIsDecreasing(true);

        router.put(
            route('cart.update', cart.id),
            {
                productID: prodID,
                increament: false,
            },
            {
                preserveScroll: true,
                preserveState: true,
                showProgress: true,
                onFinish: () => setIsDecreasing(false),
            },
        );
    }

    return (
        <div className="mx-auto my-3 flex max-h-full min-h-96 w-10/12 flex-col items-center justify-center gap-7">
            <h1 className="font-Rubik text-5xl font-bold uppercase">Cart</h1>
            {products.map((product) => (
                <CartProductCard
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                    key={product.id}
                    id={product.id}
                    removeFn={removeHanlder}
                    increaseQuantityFn={increaseQuantityHandler}
                    decreaseQuantityFn={decreaseQuantityHandler}
                    decreaseBtnStatus={isDecreasing}
                    increaseBtnStatus={isIncreasing}
                />
            ))}
            <div className="flex w-full flex-col items-end justify-end gap-5">
                <h1 className="font-Rubik text-xl font-bold">Total Cart Value: Rs. {sum}</h1>
                <button className="cursor-pointer rounded-lg border-2 border-purple-900 bg-purple-300 px-4 py-2">Buy Now</button>
            </div>
        </div>
    );
}
