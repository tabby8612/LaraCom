import Slider from './Slider';

export default function Offers() {
    return (
        <div id="offers" className="bg-gradient-to-r from-[#ceb4db] from-10% to-pink-200 to-70% py-24 md:h-[830px]">
            <div className="mx-auto w-1/2 rounded-t-md bg-gradient-to-r from-blue-200 to-pink-300 px-4 py-5 text-center font-Rubik text-6xl font-semibold shadow-2xl">
                OFFERS
            </div>

            <div className="mx-auto w-[90%] outline-8 outline-pink-300 md:w-[60%]">
                <Slider />
            </div>
        </div>
    );
}
