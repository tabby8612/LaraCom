import { ChevronDown } from 'lucide-react';
import { MouseEvent } from 'react';

type Props = {
    title: string;
    isOpen: boolean;
    clickHandler: () => void;
    menuItems: string[];
    menuHandler?: (e: MouseEvent<HTMLDivElement>) => void;
};

export default function DropDownMenu({ title, isOpen, clickHandler, menuItems, menuHandler }: Props) {
    return (
        <div id="dropdownMenu" className="relative">
            <div
                className="relative flex w-56 cursor-pointer justify-between rounded-lg border-4 border-pink-300 bg-pink-100 px-3 py-2 shadow-[0px_0px_15px_5px_#fff]"
                onClick={clickHandler}
            >
                <p>{title}</p>
                <ChevronDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform delay-75 duration-300`} />
            </div>
            <div
                className={`absolute top-11 z-40 w-56 rounded-lg bg-purple-300/50 px-3 py-2 backdrop-blur-md transition-all delay-75 duration-250 ease-in ${isOpen ? 'block translate-y-1 opacity-100' : 'hidden translate-y-0 opacity-0'} `}
                onClick={menuHandler}
            >
                {menuItems.map((item) => (
                    <div
                        key={item}
                        className={`flex flex-col pt-2 after:mt-4 after:h-[1px] after:w-full after:self-center after:rounded-md after:bg-stone-400/50 hover:cursor-pointer hover:font-bold hover:text-pink-600`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
