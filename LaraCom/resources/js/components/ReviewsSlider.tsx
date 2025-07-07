// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from './selfUI/ReviewCard';

export default function ReviewSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={300}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper my-18"
                loop
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        centeredSlides: true,
                        spaceBetween: 100,
                        watchOverflow: true,
                    },
                    800: {
                        slidesPerView: 3,
                        centeredSlides: true,
                        spaceBetween: 300,
                        watchOverflow: true,
                    },
                }}
            >
                <SwiperSlide>
                    <ReviewCard
                        name="Ali Raza"
                        starCount={4}
                        reviewText="I recently purchased a few items from this tech store, and I’m genuinely impressed with the entire experience."
                        image="https://dpemoji.com/wp-content/uploads/2025/05/Boy-DP-Pic-HD4.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard
                        name="Glenn McDonald"
                        reviewText="Smooth shopping experience from start to finish! I ordered a wireless keyboard and a few accessories, and everything arrived exactly as described and on time."
                        starCount={5}
                        image="https://dpemoji.com/wp-content/uploads/2025/06/Broken-Boy-DP-for-Instagram10.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard
                        name="Kim Lu"
                        starCount={4}
                        reviewText="This store has become my go-to for all things tech. I’ve ordered multiple times now — from chargers to smart gadgets — and I’m always impressed by how easy it is to shop!"
                        image="https://dpemoji.com/wp-content/uploads/2025/06/Broken-Boy-DP-for-Instagram13.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard
                        name="Stefen"
                        reviewText={`Blown away by the service and product range!" I was looking for a specific laptop model and found it here for a better price than other sites. `}
                        starCount={5}
                        image="https://dpemoji.com/wp-content/uploads/2025/05/Boy-DP-Pic-HD2.jpg"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
