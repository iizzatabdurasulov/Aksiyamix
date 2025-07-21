import itemsImg from "@/assets/image/Items.png";
import { useTranslation } from "react-i18next";

export default function NothingThere() {
     const {t}= useTranslation()
  return (
    <div>
     <div className="flex items-center justify-center text-center flex-col gap-0 py-[50px]">
          <img src={itemsImg} alt="" />
          <h4 className="text-[#0F172A] lg:text-[24px] text-[16px] lg:leading-[32px] leading-[16px] font-medium pt-[48px] ">
            {t("noFavorites")}
          </h4>
          <p className="text-[#475569] lg:text-[16px] text-[14px] font-medium leading-[24px] pt-[12px] pb-[32px] ">
            {t("clickLikeIcon")}
          </p>
          <button className="border-[1px] border-[#FF034C] lg:py-[14px] py-[12px] lg:px-[32px] px-[26px] cursor-pointer rounded-[8px]  text-[#FF034C] hover:text-white font-semibold leading-[20px] text-[14px] hover:bg-[#FF034C] text-center ">
            {t("goToProductCatalog")}
          </button>
        </div>
    </div>
  )
}
