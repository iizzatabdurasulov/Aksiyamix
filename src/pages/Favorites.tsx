import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import ProductItem from "@/components/product/ProductItem";
import { styles } from "@/styles/styles";
import { useTranslation } from "react-i18next";
import NotFound from "@/utils/NothingThere";
export default function Favorites() {
  const { t } = useTranslation();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  return (
    <div className={`${styles.container} mt-[56px] !block`}>
      <h2 className={`${styles.h2Title}`}>{t("favorites")}</h2>

      {favorites.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-[32px] gap-[20px] mt-[32px]">
          {favorites.map((product) => (
            <ProductItem key={product.id} productId={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
