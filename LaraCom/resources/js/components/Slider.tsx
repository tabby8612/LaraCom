// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Poster3 from '../assets/images/poster3.jpg';
import Poster4 from '../assets/images/poster4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../css/app.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
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
                <SwiperSlide>
                    <img src={Poster3} alt="Poster3" className="cursor-pointer hover:brightness-60" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Poster4} alt="Poster4" className="cursor-pointer hover:brightness-60" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Poster3} alt="Poster3" className="cursor-pointer hover:brightness-60" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Poster4} alt="Poster4" className="cursor-pointer hover:brightness-60" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
