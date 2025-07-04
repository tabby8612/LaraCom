import { LineShadowText } from '../../../components/magicui/line-shadow-text';
import HeroImg from '../assets/images/hero image.png';

export default function Hero() {
    return (
        <div id="hero" className="my-12 flex flex-col items-center justify-center md:mx-12 md:my-18 md:flex-row">
            <div id="heroText" className="mx-auto w-1/2 text-center">
                <h1 className="font-Inconsolata text-8xl font-black tracking-widest text-heading uppercase">
                    {<LineShadowText>Laracom</LineShadowText>}
                </h1>
                <h2 className="mb-7 font-Rubik text-3xl font-bold text-heading2">Your One Stop Tech Shop!</h2>
                <p className="mx-auto w-md text-left font-Rubik font-extralight text-gray-800">
                    Welcome to our premium tech marketplace! Explore top-tier gadgets, smart devices, and the latest in innovation — all in one place.
                    From sleek laptops to powerful accessories, upgrade your digital lifestyle with cutting-edge tools designed for performance,
                    style, and everyday brilliance.
                </p>
                <div id="buttons" className="mx-6 my-10 flex justify-center gap-9">
                    <a href="#products" className="btn">
                        Products
                    </a>
                    <a href="#about" className="btn">
                        About
                    </a>
                </div>
            </div>
            <div id="heroImg" className="mx-auto w-1/2 md:flex md:justify-center">
                <img src={HeroImg} alt="headphone image" className="size-[350px] animate-glow transition-[rotate] hover:rotate-5 md:size-[450px]" />
            </div>
        </div>
    );
}
