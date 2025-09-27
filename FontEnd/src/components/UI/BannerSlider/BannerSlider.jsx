import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const images = [
    { id: 1, url: "https://cdn.galaxycine.vn/media/2025/8/5/shopee_1754395244596.jpg" },
    { id: 2, url: "https://cdn.galaxycine.vn/media/2025/8/5/shopee_1754395244596.jpg" },
    { id: 3, url: "https://cdn.galaxycine.vn/media/2025/8/5/shopee_1754395244596.jpg" },
    { id: 4, url: "https://cdn.galaxycine.vn/media/2025/8/5/shopee_1754395244596.jpg" },
    { id: 5, url: "https://cdn.galaxycine.vn/media/2025/8/5/shopee_1754395244596.jpg" },
];

function BannerSlider() {
    return (
        <div className="relative w-full pt-[25px]">
            <Swiper
                loop={true}
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={20}
                keyboard={{ enabled: true }}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Keyboard, Pagination, Navigation, Autoplay]}
                className="w-full h-[450px]"
            >
                {images.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className="flex justify-center items-center md:!w-[1360px] "
                    >
                        <img
                            src={item.url}
                            alt=""
                            className="w-full h-[450px] object-cover rounded-md"
                        />
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
}

export default BannerSlider;
