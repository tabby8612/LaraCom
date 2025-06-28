import { MouseEvent } from 'react';

type Props = {
    customerName: string;
    totalCartCost: string;
    submitOrder: (e: MouseEvent) => void;
};

export default function FinalPriceConfirmCard({ customerName, totalCartCost, submitOrder }: Props) {
    return (
        <div id="confirm-price" className="flex w-md flex-col rounded-md border-2 border-purple-900 bg-[#d7bde5] px-6 py-8">
            <h1 className="mb-6 font-Rubik text-3xl font-bold">Payment Summary</h1>
            <p className="font-Inconsolata text-xl font-extrabold">
                Hey {customerName}, thanks for shopping from LaraCom and thanks for giving us chance to use our service. Hope you like the products.
                Complete the payment to enjoy the products 😄🎂
            </p>
            <hr className="mx-auto my-7 h-1 w-2xs rounded-full bg-purple-900" />
            <p className="text-center font-Inconsolata text-2xl font-extrabold">Total Products Value: {totalCartCost}</p>
            <div className="flex h-full w-full items-end self-end">
                <button
                    className="text-md mt-8 w-full cursor-pointer rounded-md bg-[#460b46] px-3 py-2 font-Rubik font-bold text-pink-300"
                    onClick={submitOrder}
                >
                    Proceed To Pamyent with Rs. {totalCartCost}
                </button>
            </div>
        </div>
    );
}
