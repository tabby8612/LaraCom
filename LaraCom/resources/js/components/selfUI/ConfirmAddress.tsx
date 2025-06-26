type Props = {
    addressDetails: { address: string; phone: string; country: string };
};

export default function ConfirmAddress({ addressDetails }: Props) {
    return (
        <div id="confirm-address" className="w-sm rounded-md border-2 border-purple-900 bg-[#d7bde5] px-6 py-8">
            <h1 className="mb-6 font-Rubik text-3xl font-bold">Shipping Address</h1>
            <h2 className="mb-4 font-Rubik text-xl font-bold">Address: {addressDetails.address} </h2>
            <h3 className="text-md mb-4 font-Rubik font-bold">Phone Number: {addressDetails.phone}</h3>
            <h3 className="text-md mb-4 font-Rubik font-bold">Country: {addressDetails.country}</h3>
        </div>
    );
}
