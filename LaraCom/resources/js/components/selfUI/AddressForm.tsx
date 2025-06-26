import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function AddressForm() {
    const { data, setData, processing, post, errors, reset } = useForm({
        address: '',
        city: '',
        pincode: '',
        phonenumber: '',
        country: '',
    });
    const formInputClasses = 'rounded-sm border-2 border-stone-100 bg-[#ffd2ff] px-4 py-1 text-lg shadow-xl outline-0 my-4 w-full';

    function formSubmitHandler(e: FormEvent) {
        e.preventDefault();

        post(route('address.update'), {
            onBefore: () => reset(),
        });
    }

    return (
        <div id="address-form" className="w-1/2 rounded-md bg-[#cdb4db] px-4 py-3 shadow-2xl">
            <form onSubmit={formSubmitHandler} className="mx-auto my-5 flex w-md flex-col items-center justify-center">
                <input
                    type="text"
                    name="address"
                    className={formInputClasses}
                    placeholder="Enter Address"
                    value={data.address}
                    onChange={(e) => setData('address', e.target.value)}
                />
                {errors.address && <div>{errors.address}</div>}
                <input
                    type="text"
                    name="city"
                    className={formInputClasses}
                    placeholder="Enter City"
                    value={data.city}
                    onChange={(e) => setData('city', e.target.value)}
                />
                {errors.city && <div>{errors.city}</div>}
                <input
                    type="text"
                    name="pincode"
                    className={formInputClasses}
                    placeholder="Enter Pin Code"
                    value={data.pincode}
                    onChange={(e) => setData('pincode', e.target.value)}
                />
                {errors.pincode && <div>{errors.pincode}</div>}
                <input
                    type="text"
                    name="phonenumber"
                    className={formInputClasses}
                    placeholder="Enter Phone Number"
                    value={data.phonenumber}
                    onChange={(e) => setData('phonenumber', e.target.value)}
                />
                {errors.phonenumber && <div>{errors.phonenumber}</div>}
                <input
                    type="text"
                    name="country"
                    className={formInputClasses}
                    placeholder="Enter Country"
                    value={data.country}
                    onChange={(e) => setData('country', e.target.value)}
                />
                {errors.country && <div>{errors.country}</div>}
                <button
                    className="my-5 w-full cursor-pointer rounded-md bg-[#460b46] px-3 py-2 font-Rubik text-lg font-bold text-pink-300"
                    disabled={processing}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
