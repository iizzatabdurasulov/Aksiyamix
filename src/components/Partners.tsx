import { useTranslation } from "react-i18next";
import partner from "@/assets/image/partner.png";
import { styles } from "@/styles/styles";
import { partners } from "@/constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Partners() {
  const { t } = useTranslation();

  return (
    <div
      className={`${styles.container} mt-[56px] rounded-[16px] !p-0 gap-[24px]  bg-[#F8FAFC]`}
    >
      <img className="hidden lg:block" src={partner} alt="partner" />

      <div className="lg:py-[56px] lg:pr-[48px] py-[20px] px-[20px] w-full">
       
        <div className="flex justify-between gap-[24px] lg:gap-[86px] items-center flex-wrap">
          <div className="lg:max-w-[556px] w-full">
            <h2 className={`${styles.h2Title}`}>{t("ourPartners")}</h2>
            <p className="text-[#475569] text-[16px] leading-[24px] mt-[8px]">
              {t("partnersDesc")}
            </p>
          </div>
          <button className={`${styles.blueBtn}`}>{t("seeAll")}</button>
        </div>

        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-6 gap-[24px] mt-[24px]">
          {partners.map((value, idx) => (
            <img
              key={idx}
              src={value}
              alt="partner"
              className="cursor-pointer hover:opacity-50"
            />
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-6 gap-[24px] mt-[24px]">
          {[...partners].reverse().map((value, idx) => (
            <img
              key={idx}
              src={value}
              alt="partner-reverse"
              className="cursor-pointer hover:opacity-50"
            />
          ))}
        </div>

        <div className="block lg:hidden mt-[24px]">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            spaceBetween={24}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={7000}
            freeMode={true}
          >
            {partners.map((value, idx) => (
              <SwiperSlide key={idx} style={{ width: "auto" }} className="!w-auto">
                <img
                  src={value}
                  alt="partner-slide"
                  className="w-[100px] h-[60px] object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
