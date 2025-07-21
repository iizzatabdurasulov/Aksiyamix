import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSimilarProducts,
  selectSimilarProducts,
} from "@/features/productsSlice";
import { similarProducts } from "@/constants/data"; // static similarProducts array
import ProductList from "@/components/product/ProductList";
import { useTranslation } from "react-i18next";
import ProductDetailInfo from "@/components/product/ProductDetailInfo";
import ProductDetailPart from "@/components/product/ProductDetailPart";
import { useParams } from "react-router-dom";
import { type RootState } from "@/app/store";
import NothingThere from "@/components/NothingThere";

export default function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();

  const allProducts = useSelector(
    (state: RootState) => state.products.allProducts
  );
  const product = allProducts.find((item) => item.id === id);

  useEffect(() => {
    dispatch(setSimilarProducts(similarProducts));
  }, [dispatch]);

  const similar = useSelector(selectSimilarProducts);

  if (!product) {
    return <NothingThere />;
  }

  return (
    <>
      <ProductDetailInfo />
      <ProductDetailPart />
      <ProductList
        title={t("similarProducts")}
        productIds={similar.map((p) => p.id)}
      />
    </>
  );
}
