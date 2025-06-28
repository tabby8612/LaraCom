import { CartProduct } from '@/types';

type Props = {
    product: CartProduct;
};

export default function ConfirmProductCard({ product }: Props) {
    return (
        <div id="confirm-product-card" className="my-3 flex items-center justify-center gap-5 rounded-4xl border-2 border-purple-900 px-7 py-5">
            <img src={product.image} alt={product.name} className="size-24 rounded-full border-2 border-purple-900" />
            <div className="flex-1/2">
                <h1 className="font-Inconsolata text-lg font-bold">Name: {product.name}</h1>
                <h1 className="text-md font-Inconsolata font-bold">Price: {product.price}</h1>
                <h1 className="text-md font-Inconsolata font-bold">Quantity: {product.quantity}</h1>
            </div>
            <h1 className="text-md font-Inconsolata font-bold">Category: {product.category}</h1>
        </div>
    );
}
