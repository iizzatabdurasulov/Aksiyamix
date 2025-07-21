import { styles } from "@/styles/styles";
import { FaAngleRight } from "react-icons/fa";
import ProductItem from "./ProductItem";

interface ProductListProps {
  title?: string;
  productIds: string[];
}

export default function ProductList({ title, productIds }: ProductListProps) {
  return (
    <div className={`${styles.container} mt-[56px] !block`}>
      {title && (
        <h2 className={`${styles.h2Title} flex items-center lg:gap-[16px] gap-[8px]`}>
          {title} <FaAngleRight />
        </h2>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-[32px] md:gap-[20px] gap-[10px] mt-[56px]">
        {productIds.map((id) => (
          <ProductItem key={id} productId={id} />
        ))}
      </div>
    </div>
  );
}
