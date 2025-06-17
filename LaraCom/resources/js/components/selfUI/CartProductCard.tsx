export default function CartProductCard() {
    return (
        <div className="flex max-h-full min-h-96 w-full gap-5 rounded-2xl px-4 py-4 shadow-[0px_0px_20px_1px_#000]">
            <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/0/a/e/-original-imags8urptydmxua.jpeg"
                alt=""
                className="my-auto size-64 rounded-[50%]"
            />
            <div className="w-1/2 px-5 py-5">
                <h1 className="my-6 font-Rubik text-3xl">
                    Name: <span className="font-bold">Boltago</span>
                </h1>
                <h2 className="font-Rubik text-2xl">
                    Price: <span className="font-bold">469</span>
                </h2>
                <button className="mx-0 my-7 w-2xs cursor-pointer rounded-lg border-2 border-purple-900 bg-purple-300 px-3 py-2 hover:drop-shadow-lg">
                    Remove
                </button>
                <div className="my-auto flex justify-end gap-4 align-middle">
                    <span className="my-auto border-2 border-purple-800 px-1 py-1 text-3xl font-black">-</span>
                    <p className="my-auto rounded-[50%] bg-purple-800 px-2 py-2 text-center text-xl text-white">1</p>
                    <span className="my-auto border-2 border-purple-800 px-1 py-1 text-3xl font-black">+</span>
                </div>
            </div>
            <div id="totalCartPrice" className="my-auto font-Rubik text-3xl font-black">
                <h1>Rs: 469</h1>
            </div>
        </div>
    );
}
