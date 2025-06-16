import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-[#cdb4db] from-45% to-[#cdb4db] to-40% py-16 text-purple-950">
            <div id="footer" className="mx-auto grid w-[90%] grid-cols-2 justify-center gap-20 px-3 py-7 md:grid-cols-4">
                <div id="subscribation" className="">
                    <h1 className="my-5 font-Rubik text-2xl font-bold text-purple-900 uppercase">Laracom</h1>
                    <form action="">
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            className="mb-5 block w-xs rounded-lg border-4 border-purple-900 bg-purple-200 px-2 py-1"
                        />
                        <button className="w-xs cursor-pointer rounded-md border-2 border-purple-900 bg-transparent px-1 py-2 transition-colors delay-100 duration-150 hover:bg-purple-400">
                            Get Monthly updates and free resources
                        </button>
                    </form>
                </div>
                <div id="pages" className="md:mx-auto">
                    <h1 className="my-5 font-Rubik text-2xl font-bold text-purple-900 uppercase">Pages</h1>
                    <ul className="">
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Get In Touch</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div id="aboutus" className="md:w-[550px]">
                    <h1 className="my-5 font-Rubik text-2xl font-bold text-purple-900 uppercase">About Us</h1>
                    <ul>
                        <li>Phone: +92 3133933083</li>
                        <li>Email: LaraCom@gmail.com</li>
                        <li>Email: 123 Highway Street, Islamabad</li>
                        <li className="font-bold">
                            Design and Developed by <Heart className="inline" fill="red" />
                            <a href="http://www.tabishsajwani.com"> Tabish Sajwani </a> <Heart className="inline" fill="red" />
                        </li>
                    </ul>
                </div>
                <div id="links" className="md:mx-auto">
                    <h1 className="my-5 font-Rubik text-2xl font-bold text-purple-900 uppercase">Links</h1>
                    <ul>
                        <li>Website Builder</li>
                        <li>Download For Mac</li>
                        <li>Download For Windows</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
