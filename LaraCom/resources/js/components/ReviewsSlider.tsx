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
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
