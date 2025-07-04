import { Customer } from '@/types';
import { router, useForm, usePage } from '@inertiajs/react';
import { Loader } from 'lucide-react';
import { MouseEvent, useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
    customer: Customer;
};

export default function AddressCard() {
    const { customer } = usePage<Props>().props;
    const [editForm, showEditForm] = useState(false);
    const { data, setData, processing, post, transform } = useForm('EditCustomer', {
        name: customer.name,
        address: '',
        phonenumber: '',
        email: customer.email,
        country: customer.country,
    });

    function editFormHandler(e: MouseEvent) {
        e.preventDefault();

        if (editForm) {
            transform((entries) => ({
                ...entries,
                country: customer.country,
            }));

            post(route('address.update'), {
                onFinish: () => {
                    showEditForm(!editForm);
                    toast.success(`Address updated successfully`, {
                        duration: 4000,
                        position: 'bottom-left',
                        icon: '👏',
                        className: 'border-b-4 border-b-green-600 rounded-4xl',
                    });
                },
            });
        } else {
            showEditForm(!editForm);
        }
    }

    function deleteHandler(e: MouseEvent) {
        e.preventDefault();
        showEditForm(false);
        router.delete(route('address.remove', customer.id));
    }

    return (
        <div id="address-show" className="h-[500px] w-1/2 rounded-md bg-[#cdb4db] px-4 py-3">
            <h1 className="border-2 border-purple-900 py-1 text-center font-Rubik text-3xl font-bold text-[#460b46] uppercase">Select Address</h1>

            {customer.billing_address !== 'null' && customer.billing_address !== '' ? (
                <div id="address" className="my-5 border-2 border-purple-900 px-4 py-3">
                    {editForm ? (
                        <form>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                className={'my-1 w-full rounded-sm border-2 border-stone-100 bg-[#ffd2ff] px-4 py-1 text-sm shadow-xl outline-0'}
                                placeholder="Enter Full Name"
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <input
                                type="text"
                                name="address"
                                value={data.address}
                                className="my-1 w-full rounded-sm border-2 border-stone-100 bg-[#ffd2ff] px-4 py-1 text-sm shadow-xl outline-0"
                                placeholder="Enter Your address"
                                onChange={(e) => setData('address', e.target.value)}
                            />
                            <input
                                type="text"
                                name="phonenumber"
                                value={data.phonenumber}
                                className="my-1 w-full rounded-sm border-2 border-stone-100 bg-[#ffd2ff] px-4 py-1 text-sm shadow-xl outline-0"
                                placeholder="Enter Your Phone"
                                onChange={(e) => setData('phonenumber', e.target.value)}
                            />
                            <p className="my-2 font-Rubik text-xl font-bold text-stone-500">Email: {customer.email}</p>
                            <p className="my-2 font-Rubik text-xl font-bold text-stone-500">Country: {customer.country}</p>
                        </form>
                    ) : (
                        <div>
                            <p className="my-2 font-Rubik text-xl font-bold text-purple-950">Name: {customer.name}</p>
                            <p className="my-2 font-Rubik text-xl font-bold text-purple-950">Email: {customer.email}</p>
                            <p className="my-2 font-Rubik text-xl font-bold text-purple-950">Address: {customer.billing_address}</p>
                            <p className="my-2 font-Rubik text-xl font-bold text-purple-950">Phone: {customer.phone}</p>
                            <p className="my-2 font-Rubik text-xl font-bold text-purple-950">Country: {customer.country}</p>
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <button
                            className="my-1 w-full cursor-pointer rounded-md bg-[#460b46] px-3 py-2 font-Rubik text-lg font-bold text-pink-300"
                            disabled={processing}
                            onClick={editFormHandler}
                        >
                            {editForm ? (
                                <div className="flex items-center justify-center gap-2">
                                    {processing && <Loader className="animate-spin" />} <span>Save</span>
                                </div>
                            ) : (
                                'Edit'
                            )}
                        </button>
                        <button
                            className="my-1 w-full cursor-pointer rounded-md bg-[#460b46] px-3 py-2 font-Rubik text-lg font-bold text-pink-300"
                            onClick={deleteHandler}
                        >
                            Delete
                        </button>
                        <button
                            className="my-1 w-full cursor-pointer rounded-md bg-[#460b46] px-3 py-2 font-Rubik text-lg font-bold text-pink-300"
                            onClick={() => router.get(route('order.confirm'))}
                        >
                            Order With Address
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    id="noAddress"
                    className="my-4 flex h-10/12 items-center justify-center border-2 border-purple-900 py-1 text-center font-Rubik text-3xl font-bold text-[#460b46] uppercase"
                >
                    <h1>No Address Found</h1>
                </div>
            )}
        </div>
    );
}
