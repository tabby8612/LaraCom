import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { Head } from '@inertiajs/react';
import Poster3 from '../assets/images/poster3.jpg';

export default function about() {
    return (
        <>
            <Head title="LARACOM" />
            <NavBar />
            <div className="mx-auto max-h-full min-h-96 w-10/12">
                <h1 className="mt-32 mb-2 text-center font-Rubik text-5xl font-bold text-heading">Innovating Your Digital Lifestyle</h1>
                <p className="text-center font-Rubik text-lg text-stone-800">
                    Welcome to your one-stop tech destination — where performance meets reliability, and future-ready gadgets fuel your everyday
                    journey.
                </p>
                <div className="mt-5 flex items-center justify-center gap-12">
                    <a href={route('products')} className="font-Rubik font-bold text-heading">
                        Get Started
                    </a>
                    <a href={route('about')} className="font-Rubik font-bold text-heading">
                        Learn More →
                    </a>
                </div>
                {/* <video src="https://videos.pexels.com/video-files/2853795/2853795-uhd_2560_1440_24fps.mp4" autoPlay className="size-3/4"></video> */}
                <img src={Poster3} alt="Poster 3" className="mx-auto mt-5 size-3/4 rounded-lg" />
            </div>
            <div className="mx-5 my-12 flex max-h-full min-h-96 gap-4 rounded-xl bg-gradient-to-r from-purple-200 to-purple-300 px-4 py-5">
                <div className="w-1/2 px-5 py-3 font-Rubik">
                    <h1 className="my-1 text-2xl font-bold">🛡️ Our Commitment</h1>
                    <p className="mb-8">
                        We are committed to bringing you the latest and most trusted tech products — from cutting-edge laptops and sleek smartphones
                        to smart accessories that elevate your life. Every product we offer is handpicked for quality, value, and innovation.{' '}
                        <span className="font-bold">Because when it comes to tech, you deserve the best — no compromises.</span>
                    </p>
                    <h1 className="my-1 text-2xl font-bold">🎯 Our Goal</h1>
                    <p className="mb-8">
                        Our goal is simple: <span>To make advanced technology accessible, affordable, and effortless for everyone.</span> Whether
                        you're a student, gamer, creator, or professional — we empower you with tools that keep you ahead of the curve.
                    </p>
                    <h1 className="my-1 text-2xl font-bold">🚚 Efficient Delivery</h1>
                    <p>
                        We believe getting your tech should be as fast as the tech itself. That’s why we ensure: Same-day dispatch on most orders
                        Real-time tracking Carefully packed shipments Hassle-free returns <br />{' '}
                        <span className="font-bold">From our warehouse to your workspace — fast, safe, and always on time.</span>
                    </p>
                    <p className="my-5 inline-block rounded-lg bg-white px-2 py-3 text-center">
                        Announcing our new Arrivals -{' '}
                        <a href={route('products')} className="font-bold text-heading">
                            Explore More
                        </a>
                    </p>
                </div>
                <div className="mt-12 w-1/2">
                    <img src="https://www.burgan-systems.com/wp-content/uploads/2024/02/blog4-1.png" alt="" className="rounded-lg shadow-xl" />
                </div>
            </div>
            <Footer />
        </>
    );
}
