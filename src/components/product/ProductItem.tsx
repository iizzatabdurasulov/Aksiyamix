import heart from "@/assets/icons/heart-icon.svg";
import heartFavorite from "@/assets/icons/heart-favorite.svg";
import isTop from "@/assets/icons/top-icon.svg";
import discount from "@/assets/icons/50precent.svg";
import { Eye, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { AppDispatch, RootState } from "@/app/store";
import { addToFavorites, removeFromFavorites } from "@/features/favoritesSlice";
import { toast } from "sonner";

interface ProductItemProps {
  productId: string;
}

export default function ProductItem({ productId }: ProductItemProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const product = useSelector((state: RootState) =>
    state.products.allProducts.find((product) => product.id === productId)
  );

  if (!product) return null;

  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
      toast(t("Removed from favorites"));
    } else {
      dispatch(addToFavorites(product));
      toast(t("Added to favorites"));
    }
  };

  const handleGoToProductDetail = () => {
    navigate(`/productDetail/${product.id}`);
  };

  return (
    <div
      className="md:w-[336px] w-full p-[10px] rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,255,0.3)] mx-auto cursor-pointer"
      onClick={handleGoToProductDetail}
    >
      <div className="relative md:h-[320px] h-auto">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          pagination={{ clickable: true }}
          effect="coverflow"
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded-[8px] w-full object-cover"
                src={product.img}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute z-[111] w-full top-[8px] px-[8px] flex items-center justify-between">
          {product.isTop && (
            <img className="w-[30px] md:w-auto" src={isTop} alt="top" />
          )}
          <button
            onClick={toggleFavorite}
            className={`w-[24px] h-[24px] rounded-[50%] cursor-pointer p-[4px] ${
              isFavorite ? "bg-[#FF034C1F]" : "bg-[#B2B7D066]"
            }`}
          >
            <img src={isFavorite ? heartFavorite : heart} alt="liked" />
          </button>
        </div>
        {product.discount && (
          <img
            className="absolute md:z-[111] z-[1] lg:bottom-[11px] md:bottom-[50px] bottom-[20px] md:right-[11px] right-[5px] w-[25px] md:w-auto"
            src={discount}
            alt="discount"
          />
        )}
      </div>

      <div className="mt-[16px]">
        <div className="flex justify-between items-center mb-[10px]">
          <div className="flex items-center gap-[8px]">
            <img src={product.avatar} alt="avatar" />
            <h4 className="font-medium text-[#475569] md:text-[14px] text-[10px] leading-[20px]">
              {product.userName}
            </h4>
          </div>
          <h5 className="flex gap-[4px] items-center font-medium text-[#475569] text-[10px] md:text-[14px] leading-[20px]">
            <Eye className="w-[15px] md:w-auto" /> {product.viewers}
          </h5>
        </div>

        <h2 className="font-semibold text-[#0F172A] md:text-[20px] text-[12px] leading-[28px]">
          {t(`products.${product.productTitle}`)}
        </h2>

        <h3 className="text-[#475569] line-through md:text-[14px] text-[12px] leading-[20px] mt-[8px]">
          {product.oldPrice} {t("currency")}
        </h3>

        <h3 className="text-[#FF034C] md:text-[20px] text-[16px] leading-[28px] mt-0 font-bold">
          {product.price} {t("currency")}
        </h3>

        <div className="flex items-center justify-between mt-[8px]">
          <h6 className="text-[#0F172A] text-[8px] md:text-[14px] bg-[#F1F5F9] rounded-[4px] flex gap-[4px] items-center p-[4px]">
            <MapPin className="w-[15px] md:w-auto" />
            {t(`regions.${product.location}`)}
          </h6>
          <h6 className="text-[#0F172A] text-[8px] md:text-[14px] bg-[#F1F5F9] rounded-[4px] p-[4px]">
            {product.date}
          </h6>
        </div>
      </div>
    </div>
  );
}
