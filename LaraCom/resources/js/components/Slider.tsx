// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../css/app.css';

// import required modules
import { usePage } from '@inertiajs/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

type Props = {
    offerSlides: string[];
};

export default function Slider() {
    const { offerSlides } = usePage<Props>().props;

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {offerSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={`storage/${slide}`} alt="Poster3" className="hover:brightness-60" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
