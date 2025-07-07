import { Star } from 'lucide-react';

type Props = {
    name: string;
    starCount: number;
    reviewText: string;
    image: string;
};

export default function ReviewCard({ name, starCount, reviewText, image }: Props) {
    const stars = Array.from({ length: starCount }, () => <Star className="size-4 fill-amber-300" />);

    return (
        <div className="mx-auto my-10 h-[180px] w-[30em] rounded-xl bg-[#cdb4db] px-2 py-2 shadow-[0px_0px_10px_1px_#000]">
            <div className="flex">
                <div className="mr-3 size-16">
                    <img src={image} alt={`${name} photo`} className="rounded-4xl" />
                </div>
                <div>
                    <h1 className="font-bold">{name}</h1>
                    <p>Customer, LaraCom</p>
                    <div className="mb-4 flex gap-1">{stars.map((el) => el)}</div>
                </div>
            </div>
            <p>{reviewText}</p>
        </div>
    );
}
