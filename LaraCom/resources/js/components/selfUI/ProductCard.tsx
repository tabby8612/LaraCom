type Props = {
    imgUrl: string;
    title: string;
    price: string;
    status: string;
    productId: string;
    productDetailsHandler: () => void;
};

export default function ProductCard({ imgUrl, title, price, status, productId, productDetailsHandler }: Props) {
    return (
        <div
            className="mx-3 my-2 h-96 w-72 cursor-pointer rounded-lg border-4 border-transparent bg-pink-200 px-4 py-2 font-Rubik font-bold shadow-[0px_0px_15px_3px_#fff] transition-transform delay-150 duration-300 hover:scale-105 hover:border-4 hover:border-purple-600 hover:shadow-2xl"
            onClick={productDetailsHandler}
        >
            <div id={productId} className="flex h-90 w-full flex-col">
                <img src={imgUrl} alt={title} className="h-56 w-68 rounded-lg" />
                <div className="mt-2 flex h-36 flex-col justify-between">
                    <h1>{title}</h1>
                    <div>
                        <h2>{`Rs. ${price}`}</h2>
                        <p>{`Status: ${status}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
