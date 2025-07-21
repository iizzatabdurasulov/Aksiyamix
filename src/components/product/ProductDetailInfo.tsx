import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store";
import {
  closeSwiper,
  openSwiper,
  setQuantitySelected,
  setSelectedColor,
  setSelectedMemory,
  setPromoInput,
  setDiscountAmount,
} from "@/features/productdetailSlice";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { addToFavorites, removeFromFavorites } from "@/features/favoritesSlice";
import heartFavorite from "@/assets/icons/heart-favorite.svg";
import heartBordered from "@/assets/icons/Heart, Favorite, Love.svg";
import plus from "@/assets/icons/plus-square-svgrepo-com.svg";
import minus from "@/assets/icons/minus-square-svgrepo-com (2).svg";
import { styles } from "@/styles/styles";
import { useEffect } from "react";
import { X } from "lucide-react";

export default function ProductDetailInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const product = useSelector((state: RootState) =>
    state.products.allProducts.find((item) => item.id === id)
  );

  const selectedColor = useSelector(
    (state: RootState) => state.productDetail.selectedColor
  );
  const selectedMemory = useSelector(
    (state: RootState) => state.productDetail.selectedMemory
  );
  const isSwiperOpen = useSelector(
    (state: RootState) => state.productDetail.isSwiperOpen
  );
  const selectedSwiperProductId = useSelector(
    (state: RootState) => state.productDetail.selectedSwiperProductId
  );


  const quantity = useSelector(
    (state: RootState) => state.productDetail.quantity
  );
  const discountAmount = useSelector(
    (state: RootState) => state.productDetail.discountAmount
  );
  const promoInput = useSelector(
    (state: RootState) => state.productDetail.promoInput
  );

  const handlePromoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPromoInput(e.target.value));
  };

  const handleDiscount = () => {
    if (promoInput === product?.promoCode) {
      dispatch(setDiscountAmount(product?.discountAmount));
    } else {
      dispatch(setDiscountAmount(0));
    }
  };

  const cleanPrice = product
    ? Number(product.price.toString().replace(/\s/g, ""))
    : 0;

  const discountedPrice =
    discountAmount && discountAmount > 0
      ? cleanPrice - (cleanPrice * discountAmount) / 100
      : cleanPrice;

  const totalPrice = quantity * discountedPrice;

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(setQuantitySelected(quantity - 1));
    }
  };

  const handleIncrease = () => {
    dispatch(setQuantitySelected(quantity + 1));
  };

  useEffect(() => {
    if (isSwiperOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isSwiperOpen]);

  if (!product) return <p>Mahsulot topilmadi.</p>;

  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    isFavorite
      ? dispatch(removeFromFavorites(product.id))
      : dispatch(addToFavorites(product));
  };

  return (
    <div
      className={`${styles.container} justify-between flex-col lg:flex-row mt-[50px] `}
    >
      <div className="lg:w-[60%] w-full flex flex-col lg:flex-row gap-[32px]">
        <Swiper
          onClick={() => dispatch(openSwiper(product.id))}
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          pagination={{ clickable: true }}
          effect="coverflow"
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className="lg:w-[490px]  h-auto w-full cursor-pointer "
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded-[8px] w-full h-full object-cover"
                src={product.img}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper fullscreen */}
        {isSwiperOpen && selectedSwiperProductId === product.id && (
          <div
            onClick={() => dispatch(closeSwiper())}
            className="fixed w-full h-[100dvh] top-0 left-0 z-[1111] bg-[#B2B7D04D] backdrop-blur-[5px] flex justify-center items-center"
          >
            <button className="absolute top-[80px] right-[120px] w-[30px] h-[30px] text-[crimson] cursor-pointer hover:opacity-[0.6] ">
              <X/>
            </button>
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
              pagination={{ clickable: true }}
              effect="coverflow"
              speed={1000}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              className="w-[600px] h-[600px]"
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
          </div>
        )}

        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-semibold text-[#0F172A] md:text-[20px] text-[16px] leading-[28px]">
                {t(`products.${product.productTitle}`)}
              </h2>
              <h3 className="text-[#475569] line-through md:text-[14px] text-[12px] mt-[8px]">
                {product.oldPrice} {t("currency")}
              </h3>
              <h3 className="text-[#FF034C] md:text-[32px] text-[16px] font-bold">
                {product.price} {t("currency")}
              </h3>
            </div>
            <button
              onClick={toggleFavorite}
              className="lg:hidden block w-[30px] h-[30px]"
            >
              <img
                src={isFavorite ? heartFavorite : heartBordered}
                alt="like"
              />
            </button>
          </div>

          {/* Memory */}
          <h4 className="text-[14px] font-semibold pt-[24px] pb-[8px]">
            {t(`products.${product.memory}`)} {selectedMemory}
          </h4>
          <ul className="flex gap-[10px]">
            {Object.entries(product.memoryType).map(([key, value]) => (
              <li
                key={key}
                onClick={() => dispatch(setSelectedMemory(value))}
                className={`border-[2px] px-[16px] py-[8px] rounded-[4px] cursor-pointer ${
                  selectedMemory === value
                    ? "border-[#008DFF] text-[#008DFF] font-semibold"
                    : "border-[#D9DBE8] text-[#0F172A]"
                }`}
              >
                {value}
              </li>
            ))}
          </ul>

          {/* Colors */}
          <h5 className="text-[14px] font-semibold pt-[16px] pb-[8px]">
            {t(`products.${product.productColor}`)}{" "}
            {t(`products.${selectedColor}`)}
          </h5>
          <ul className="flex gap-[10px] mb-[16px]">
            {Object.entries(product.color).map(([key, value]) => (
              <li
                key={key}
                onClick={() => dispatch(setSelectedColor(key))}
                className={`w-[30px] h-[30px] rounded-full border cursor-pointer ${
                  selectedColor === key
                    ? "border-[#008DFF] scale-130"
                    : "border-[#D9DBE8]"
                }`}
                style={{ backgroundColor: value }}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:w-[30%] w-full mt-[25px] lg:mt-0  flex gap-[20px]">
        <button
          onClick={toggleFavorite}
          className="lg:block hidden w-[50px] h-[50px]"
        >
          <img src={isFavorite ? heartFavorite : heartBordered} alt="like" />
        </button>

        <div className="p-[16px] rounded-[16px] bg-white shadow-[0px_0px_16px_0px_#4a4a4a0f] flex flex-col gap-[20px]">
          <ul className="flex flex-col gap-[15px]">
            <li className="flex justify-between items-center">
              <span className="text-[14px] text-gray-500">
                {t("products.regularPrice")}:
              </span>
              <span className="text-[14px] font-semibold">
                {cleanPrice.toLocaleString()} {t("currency")}
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-[14px] text-gray-500">
                {t("products.discount")}:
              </span>
              <span className="text-[14px] font-semibold">
                {discountAmount || 0}%
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-[14px] text-gray-500">
                {t("products.totalPrice")}:
              </span>
              <span className="text-[14px] font-semibold">
                {totalPrice.toLocaleString()} {t("currency")}
              </span>
            </li>
          </ul>

          <div className="flex items-center gap-[20px]">
            <button
              onClick={handleDecrease}
              className={`w-[40px] h-[40px] rounded-[10px]  cursor-pointer hover:opacity-[0.5] ${
                quantity === 1 ? "opacity-[0.5]" : ""
              }`}
            >
              <img src={minus} alt="-" />
            </button>
            <span className="text-[20px] border border-[crimson] rounded-[10px] w-[45px] h-[40px] flex justify-center items-center">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className={`w-[40px] h-[40px] rounded-[10px]  cursor-pointer hover:opacity-[0.5]`}
            >
              <img src={plus} alt="+" />
            </button>
          </div>

          <form className="flex flex-col gap-[15px]">
            <p className="mt-[20px] text-[12px] text-[#334155]">{t("promo")}</p>
            <input
              type="text"
              placeholder={t("enterPromo")}
              value={promoInput}
              onChange={handlePromoInputChange}
              className={`${styles.input}`}
            />
            <button
              type="button"
              onClick={handleDiscount}
              className={`${styles.blueBtn} !bg-[transparent] border-[1px] border-[#0CA4FA] !text-[#0CA4FA]`}
            >
              {t("applyPromo")}
            </button>
          </form>

          <button className={`${styles.blueBtn}`}>{t("buy")}</button>
        </div>
      </div>
    </div>
  );
}
