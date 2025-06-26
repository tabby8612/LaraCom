type Props = {
    customerName: string;
    totalCartCost: string;
};

export default function FinalPriceConfirmCard({ customerName, totalCartCost }: Props) {
    return (
        <div id="confirm-price" className="w-md rounded-md border-2 border-purple-900 bg-[#d7bde5] px-6 py-8">
            <h1 className="mb-6 font-Rubik text-3xl font-bold">Payment Summary</h1>
            <p className="font-Inconsolata text-xl font-extrabold">
                Hey {customerName}, thanks for shopping from LaraCom and thanks for giving us chance to use our service. Hope you like the products.
                Complete the payment to enjoy the products 😄🎂
            </p>
            <hr className="mx-auto my-7 h-1 w-2xs rounded-full bg-purple-900" />
            <p className="text-center font-Inconsolata text-2xl font-extrabold">Total Products Value: {totalCartCost}</p>
            <button className="text-md mt-8 w-full cursor-pointer rounded-md bg-[#460b46] px-3 py-2 font-Rubik font-bold text-pink-300">
                Proceed To Pamyent with Rs. {totalCartCost}
            </button>
        </div>
    );
}
