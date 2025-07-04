import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ScrollProgress from '@/components/selfUI/ScrollProgress';
import TailingCursor from '@/components/selfUI/TailingCursor';
import { Head } from '@inertiajs/react';

export default function contact() {
    return (
        <>
            <TailingCursor />
            <Head title="LARACOM - Contact" />
            <NavBar />
            <ScrollProgress>
                <div className="mx-20 my-16 max-h-full min-h-16">
                    <h1 className="text-center font-Rubik text-4xl font-bold text-heading uppercase">Contact Us</h1>
                    <p className="my-5 text-center font-Rubik text-lg">
                        We're Here to Help! <br /> Have a question, feedback, or need assistance with your order? <br /> Our support team is friendly,
                        fast, and always ready to assist you.
                    </p>
                    <h1 className="font-Rubik text-2xl font-bold text-heading uppercase">Reach Us</h1>
                    <p className="my-5 font-Rubik text-lg text-bodyText">
                        <ul>
                            <li>Email: Laracom@gmail.com</li>
                            <li>Phone: +92 313 3933083</li>
                            <li>Address: 1234 Highway Street Islamabad 74800</li>
                        </ul>
                    </p>
                    <h1 className="font-Rubik text-2xl font-bold text-heading uppercase">Visit Our Store</h1>
                    <p className="my-5 font-Rubik text-lg text-bodyText">
                        If you prefer an in-person shopping experience, we invite you to visit our physical store. Our knowledgeable staff will be
                        happy to assist you and guide you through our products.
                    </p>
                    <h1 className="font-Rubik text-2xl font-bold text-heading uppercase">Social Media</h1>
                    <p className="my-5 font-Rubik text-lg text-bodyText">
                        Stay connected with LARACOM on social media! Follow us for the latest shoe trends, exclusive offers, and customer
                        testimonials. Join the LARACOM community today for fashion inspiration and more.
                    </p>
                </div>
                <div
                    id="contact-form"
                    className="mx-auto my-10 w-1/3 rounded-2xl border-2 border-purple-700 px-3 py-2 shadow-2xl transition-transform delay-200 duration-300 hover:scale-105"
                >
                    <h1 className="my-2 text-center font-Rubik text-2xl font-bold uppercase">Contact Form</h1>
                    <form action="" className="flex flex-col">
                        <input
                            type="text"
                            name="name"
                            placeholder="Good Name"
                            className="my-3 w-full rounded border-2 border-purple-800 bg-pink-200 px-4 py-1 shadow-2xl"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="my-3 w-full rounded border-2 border-purple-800 bg-pink-200 px-4 py-1"
                        />
                        <input
                            type="text"
                            name="phonenumber"
                            placeholder="Phone Number"
                            className="my-3 w-full rounded border-2 border-purple-800 bg-pink-200 px-4 py-1"
                        />
                        <textarea
                            name="message"
                            id="message"
                            rows={3}
                            placeholder="Message"
                            className="my-3 w-full rounded border-2 border-purple-800 bg-pink-200 px-4 py-1"
                        ></textarea>
                        <div className="mx-auto flex w-full justify-center align-middle">
                            <button className="mx-auto w-full rounded-lg border-2 bg-purple-900 px-2 py-1 text-white">Submit</button>
                        </div>
                    </form>
                </div>

                <Footer />
            </ScrollProgress>
        </>
    );
}
