import ReviewsSlider from '@/components/ReviewsSlider';

export default function ReviewsSection() {
    return (
        <div className="bg-gradient-to-r from-cyan-100 to-pink-200">
            <div className="mx-auto w-10/12 py-10">
                <h1 className="bg-transparent text-center font-Rubik text-3xl font-bold text-heading">What Our Users Say</h1>
                <ReviewsSlider />
            </div>
        </div>
    );
}
