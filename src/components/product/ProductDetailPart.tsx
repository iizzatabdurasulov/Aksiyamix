import type { RootState } from "@/app/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import commentImg from "@/assets/image/OBJECTS.png";
import { styles } from "@/styles/styles";
export default function ProductDetailPart() {
  const { t } = useTranslation();
  const { id } = useParams();

  const product = useSelector((state: RootState) =>
    state.products.allProducts.find((item) => item.id === id)
  );

  return (
    <div
      className={`${styles.container} flex-col lg:flex-row gap-[24px] mt-[50px] h-auto`}
    >
      <Tabs defaultValue="productDetail" className={cn(`lg:w-[50%] w-full  `)}>
        <TabsList
          className={cn(
            `w-full flex justify-between bg-[#F1F5F9] p-[15px]   rounded-[16px]`
          )}
        >
          <TabsTrigger
            className={cn(
              `text-[#010101] lg:text-[18px] sm:text-[12px] text-[9px] !py-[12px] cursor-pointer rounded-[8px]  leading-[24px] font-bold `
            )}
            value="productDetail"
          >
            {t("products.productDetail")}
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              `text-[#010101] lg:text-[18px]  sm:text-[12px] text-[9px] !py-[12px] cursor-pointer rounded-[8px]  leading-[24px] font-bold `
            )}
            value="characteristics"
          >
            {t("products.characteristics")}
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              `text-[#010101] lg:text-[18px]  sm:text-[12px] text-[9px] !py-[12px] cursor-pointer rounded-[8px]  leading-[24px] font-bold `
            )}
            value="comments"
          >
            {t("products.comments")}
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              `text-[#010101] lg:text-[18px]  sm:text-[12px] text-[9px] !py-[12px] cursor-pointer rounded-[8px]  leading-[24px] font-bold `
            )}
            value="aboutSeller"
          >
            {t("products.aboutSeller")}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className={cn(
            `border-[1px] border-[#D9DBE8] p-[16px] rounded-[8px] mt-[16px]`
          )}
          value="productDetail"
        >
          <p className="text-[#000000] text-[18px] leading-[32px] ">
            {" "}
            {t(`products.${product?.detailInfo}`)}{" "}
          </p>
        </TabsContent>
        <TabsContent
          className={cn(
            `border-[1px] border-[#D9DBE8] p-[16px] rounded-[8px] mt-[16px]`
          )}
          value="characteristics"
        >
          <ul className="flex flex-col gap-[16px]">
            {product?.characteristicsType.map(({ id, key, value }) => (
              <li className="flex justify-between items-center" key={id}>
                <span className="text-[#475569] md:text-[16px] text-[12px] leading-[24px] font-medium">
                  {t(`products.${key}`)}
                </span>
                <span className="font-semibold md:text-[18px] text-[14px] leading-[24px] text-black">
                  {t(`products.${value}`)}
                </span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent
          className={cn(
            `border-[1px] border-[#D9DBE8] p-[16px] rounded-[8px] mt-[16px]`
          )}
          value="comments"
        >
          <div className="w-[222px] m-auto flex flex-col justify-center items-center gap-[32px]">
            <img src={commentImg} alt="" />
            <h4 className="text-[#010101] text-[24px] leading-[32px] font-semibold ">
              {t("noReviews")}
            </h4>
            <button className="py-[14px] px-[32px] bg-[#FF034C] text-[16px] text-white leadin-[32px] font-medium rounded-[8px] cursor-pointer ">
              {t("feedback")}
            </button>
          </div>
        </TabsContent>
        <TabsContent
          className={cn(
            `border-[1px] border-[#D9DBE8] p-[16px] rounded-[8px] mt-[16px]`
          )}
          value="aboutSeller"
        >
           <div className="flex justify-between">
            <div className="flex items-center gap-[15px]">
              <img
                className="!w-[20px] !h-[20px] object-cover"
                src={product?.avatar}
                alt="avatar"
              />
              <h4 className="font-medium text-[#475569] md:text-[20px] text-[10px] leading-[20px]">
                {product?.userName}
              </h4>
            </div>
            <button
              className={`${styles.blueBtn} !px-[5px] py-[10px] text-[12px] leading-[14px]`}
            >
              {t(`products.${product?.follow}`)}
            </button>
          </div>

          <p className="mt-[20px] text-[12px] leading-[18px] text-[#334155]">
            {t(`products.${product?.adminDesc}`)}
          </p>

          <Link
            to={`tel:${product?.phone}`}
            className=" cursor-pointer text-[17px] leading-[20px] font-medium text-[#475569]  flex flex-col justify-end !items-end"
          >
            {product?.phone}
          </Link>
        </TabsContent>
      </Tabs>
      <div className="lg:w-[50%] w-full h-[100%]">
        <h2 className="font-bold text-[#0F172A] md:text-[32px] text-[25px] leading-[35px] mb-[32px] mt-[16px]">
          {t(`adress`)}
        </h2>
        <iframe
          src="https://yandex.com/map-widget/v1/?ll=69.247949%2C41.310646&z=17&pt=69.247949,41.310646,pm2rdm"
          height="100%"
          className="h-[456px] w-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
