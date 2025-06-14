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
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={500}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                loop
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
