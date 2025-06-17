import { createPortal } from 'react-dom';

type Props = {
    image: string;
    name: string;
    productId: string;
    status: string;
    category: string;
    date: string;
    price: string;
    closeFn: () => void;
    addItemFn: (productId: string) => void;
};

export default function ProductDialog({ image, name, productId, status, category, date, price, closeFn, addItemFn }: Props) {
    return createPortal(
        <div className="fixed inset-0 z-50 flex max-h-full items-center justify-center bg-black/50 pt-20" onClick={closeFn}>
            <div className={`relative mx-5 my-auto rounded-lg bg-white p-6 shadow-[0px_0px_10px_10px_#000] delay-200 duration-300 animate-in`}>
                <span className="absolute top-2 right-2 cursor-pointer text-gray-500" onClick={closeFn}>
                    X
                </span>
                <div className="flex gap-20 px-5 py-5">
                    <div>
                        <img src={image} alt={name} className="size-44 transition-transform delay-200 duration-300 hover:scale-105 md:size-92" />
                        <div className="my-10 flex gap-6">
                            <div className="mx-auto w-1/2 rounded-xl bg-pink-200 px-4 py-3 text-center shadow-lg">
                                <h1 className="text-center font-Rubik text-2xl font-bold">Price</h1>
                                <p className="font-semiboldbold font-Rubik text-xl text-stone-400">$ {price}</p>
                            </div>
                            <div className="mx-auto w-1/2 rounded-xl bg-pink-200 px-4 py-3 text-center shadow-lg">
                                <h1 className="font-Rubik text-2xl font-bold">abc</h1>
                                <p className="font-semiboldbold font-Rubik text-xl text-stone-400">goodadasd</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between rounded-xl bg-pink-200 px-5 py-2">
                        <div>
                            <h1 className="my-5 font-Rubik text-xl font-bold md:text-2xl">
                                <span className="font-medium text-black/50">Name:</span> {name}
                            </h1>
                            <h2 className="my-5 font-Rubik text-xl font-bold md:text-2xl">
                                <span className="font-medium text-black/50">Product ID:</span> {productId}
                            </h2>
                            <p className="my-5 font-Rubik text-xl font-bold md:text-2xl">
                                <span className="font-medium text-black/50">Status:</span> {status}
                            </p>
                            <p className="my-5 font-Rubik text-xl font-bold md:text-2xl">
                                <span className="font-medium text-black/50">Category:</span> {category}
                            </p>
                            <p className="my-5 font-Rubik text-xl font-bold md:text-2xl">
                                <span className="font-medium text-black/50">Date:</span> {date}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <button
                                className="my-2 w-full cursor-pointer rounded-lg border-2 bg-cyan-500 px-4 py-2 font-bold text-white transition-colors delay-150 duration-300 hover:bg-purple-700"
                                onClick={() => addItemFn(productId)}
                            >
                                Add to Cart
                            </button>
                            <button className="my-2 w-full cursor-pointer rounded-lg border-2 bg-purple-400 px-4 py-2 font-bold text-white transition-colors delay-150 duration-300 hover:bg-purple-700">
                                Add Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    );
}
