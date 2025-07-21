import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { styles } from "../styles/styles";
import headerBanner from "../assets/image/image 1.png";
import img1 from "../assets/image/image 259.png";
import img2 from "../assets/image/image 261.png";
const HeaderBanner = () => {
  return (
    <div
      className={`${styles.container} mt-[16px] grid gap-[20px] lg:grid-cols-[952px_1fr] grid-cols-1`}
    >
      <div className="w-full">
        <Swiper
          modules={[Navigation,Autoplay,EffectCoverflow, Pagination]}
          effect="coverflow"
          speed={800}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          {[...Array(7)].map((_, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded-[8px] max-w-[100%] object-cover "
                src={headerBanner}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>  
      </div>

      <div className="grid gap-[20px] grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
        <img
          className="rounded-[8px] w-full h-full object-cover"
          src={img1}
          alt=""
        />
        <img
          className="rounded-[8px] w-full h-full object-cover"
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderBanner;
