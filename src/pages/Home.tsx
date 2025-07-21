import { useDispatch, useSelector } from "react-redux";
import {
  selectBestAds,
  selectDiscountNearby,
  selectDiscountStartAnnouncement,
  selectLastViewedAds,
  selectStoppedAds,
  selectForYou,
  setAllProducts,
  setBestAds,
  setDiscountNearby,
  setDiscountStartAnnouncement,
  setLastViewedAds,
  setStoppedAds,
  setForYou,
} from "@/features/productsSlice";

import {
  productsForBestAds,
  productsForDiscountNearby,
  productsForDiscountStartAnnouncement,
  productsForLastViewedAds,
  productsForStoppedAds,
  productsForYou,
  similarProducts,
} from "@/constants/data";

import ProductList from "@/components/product/ProductList";
import Category from "@/components/Category";
import HeaderBanner from "@/components/HeaderBanner";
import AdSection from "@/components/AdSection";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import yandexImg from "@/assets/image/image 264.png";
import { styles } from "@/styles/styles";
import { type RootState } from "@/app/store";
import { selectSelectedTitle } from "@/features/sectionSlice";
import type { ISectionKey } from "@/types";

export default function Home() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const selectedTitle: ISectionKey = useSelector((state: RootState) =>
    selectSelectedTitle(state)
  );
  const refs: Record<ISectionKey, React.RefObject<HTMLDivElement | null>> = {
    categories: useRef<HTMLDivElement>(null),
    best_ads: useRef<HTMLDivElement>(null),
    discount_start_announcement: useRef<HTMLDivElement>(null),
    forYou: useRef<HTMLDivElement>(null),
    discountNearby: useRef<HTMLDivElement>(null),
    lastViewedAds: useRef<HTMLDivElement>(null),
    stoppedAds: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    refs[selectedTitle]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [selectedTitle]);

  useEffect(() => {
    dispatch(setBestAds(productsForBestAds));
    dispatch(setDiscountNearby(productsForDiscountNearby));
    dispatch(
      setDiscountStartAnnouncement(productsForDiscountStartAnnouncement)
    );
    dispatch(setLastViewedAds(productsForLastViewedAds));
    dispatch(setStoppedAds(productsForStoppedAds));
    dispatch(setForYou(productsForYou));

    const all = [
      ...productsForBestAds,
      ...productsForDiscountNearby,
      ...productsForDiscountStartAnnouncement,
      ...productsForLastViewedAds,
      ...productsForStoppedAds,
      ...productsForYou,
      ...similarProducts,
    ];

    dispatch(setAllProducts(all));
  }, [dispatch]);

  const bestAds = useSelector(selectBestAds);
  const discountNearby = useSelector(selectDiscountNearby);
  const discountStartAnnouncement = useSelector(
    selectDiscountStartAnnouncement
  );
  const lastViewedAds = useSelector(selectLastViewedAds);
  const stoppedAds = useSelector(selectStoppedAds);
  const forYou = useSelector(selectForYou);

  return (
    <div>
      <HeaderBanner />
      <div ref={refs.categories}>
        <Category />
      </div>

      <div ref={refs.best_ads}>
        <ProductList
          title={t("best_ads")}
          productIds={bestAds.map((p) => p.id)}
        />
      </div>

      <div ref={refs.discount_start_announcement}>
        <ProductList
          title={t("discount_start_announcement")}
          productIds={discountStartAnnouncement.map((p) => p.id)}
        />
      </div>

      <img
        className={`${styles.container} my-[56px]`}
        src={yandexImg}
        alt="Yandex Ad"
      />

      <div ref={refs.forYou}>
        <ProductList title={t("forYou")} productIds={forYou.map((p) => p.id)} />
      </div>

      <AdSection />

      <div ref={refs.discountNearby}>
        <ProductList
          title={t("discountNearby")}
          productIds={discountNearby.map((p) => p.id)}
        />
      </div>

      <div ref={refs.lastViewedAds}>
        <ProductList
          title={t("lastViewedAds")}
          productIds={lastViewedAds.map((p) => p.id)}
        />
      </div>

      <Partners />

      <div ref={refs.stoppedAds}>
        <ProductList
          title={t("stoppedAds")}
          productIds={stoppedAds.map((p) => p.id)}
        />
      </div>

      <Footer />
    </div>
  );
}
