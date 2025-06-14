import { Star } from 'lucide-react';

export default function ReviewCard() {
    return (
        <div className="my-10 h-[180px] w-[550px] rounded-xl bg-[#cdb4db] px-2 py-2 shadow-[0px_0px_10px_1px_#000]">
            <div className="flex">
                <div className="mr-3 size-16">
                    <img src="https://dpemoji.com/wp-content/uploads/2023/01/Whatsapp-dp-for-boys-57.png" alt="" className="rounded-4xl" />
                </div>
                <div>
                    <h1 className="font-bold">Alice Johnson</h1>
                    <p>Customer, LaraCom</p>
                    <div className="mb-4 flex gap-1">
                        <Star className="size-4 fill-amber-300" />
                        <Star className="size-4 fill-amber-300" />
                        <Star className="size-4 fill-amber-300" />
                        <Star className="size-4 fill-amber-300" />
                        <Star className="size-4 fill-amber-300" />
                    </div>
                </div>
            </div>
            <p>
                SpectaStyle has been my go-to for tech store for years. The perfect blend of fashion and comfort in their product is unmatched. I'm
                always excited to see their new products!
            </p>
        </div>
    );
}
