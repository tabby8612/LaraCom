import CartEmpty from '../../assets/images/cartempty.png';

export default function EmptyCart() {
    return (
        <div className="mx-auto my-16 flex max-h-full min-h-96 w-10/12 flex-col items-center justify-center gap-7">
            <h1 className="font-Rubik text-5xl font-bold uppercase">Cart</h1>
            <img src={CartEmpty} alt="Empty Cart" />
            <a href={route('products')} className="btn w-2xl text-center">
                Shop For Products
            </a>
        </div>
    );
}
