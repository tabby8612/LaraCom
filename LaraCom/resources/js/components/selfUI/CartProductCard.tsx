type ProductProps = {
    id: string;
    name: string;
    image: string;
    price: string;
    quantity: string;
    removeFn: (productID: string) => void;
    increaseQuantityFn: (productID: string) => void;
    decreaseQuantityFn: (productID: string) => void;
    decreaseBtnStatus: boolean;
    increaseBtnStatus: boolean;
};

export default function CartProductCard({
    id,
    name,
    image,
    price,
    quantity,
    removeFn,
    increaseQuantityFn,
    decreaseQuantityFn,
    decreaseBtnStatus,
    increaseBtnStatus,
}: ProductProps) {
    return (
        <div className="flex max-h-full min-h-96 w-full gap-5 rounded-2xl px-4 py-4 shadow-[0px_0px_20px_1px_#000]">
            <div className="size-64 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="w-1/2 px-5 py-5">
                <h1 className="my-6 font-Rubik text-3xl">
                    Name: <span className="font-bold">{name}</span>
                </h1>
                <h2 className="font-Rubik text-2xl">
                    Price: <span className="font-bold">{price}</span>
                </h2>
                <button
                    className="mx-0 my-7 w-2xs cursor-pointer rounded-lg border-2 border-purple-900 bg-purple-300 px-3 py-2 hover:drop-shadow-lg"
                    onClick={() => removeFn(id)}
                >
                    Remove
                </button>
                <div className="my-auto flex justify-end gap-4 align-middle">
                    <button
                        className="my-auto cursor-pointer border-2 border-purple-800 px-1 py-1 text-xl font-black disabled:cursor-not-allowed disabled:bg-stone-400"
                        onClick={() => decreaseQuantityFn(id)}
                        disabled={decreaseBtnStatus}
                    >
                        -
                    </button>
                    <p className="my-auto rounded-[50%] bg-purple-800 px-2 py-2 text-center text-xl text-white">{quantity}</p>
                    <button
                        className="my-auto cursor-pointer border-2 border-purple-800 px-1 py-1 text-xl font-black disabled:cursor-not-allowed disabled:bg-stone-400"
                        onClick={() => increaseQuantityFn(id)}
                        disabled={increaseBtnStatus}
                    >
                        +
                    </button>
                </div>
            </div>
            <div id="totalProductPrice" className="my-auto font-Rubik text-3xl font-black">
                <h1>Rs: {+price * +quantity}</h1>
            </div>
        </div>
    );
}
