import { useTranslation } from "react-i18next";
import { styles } from "@/styles/styles";
import qrCode from "@/assets/image/QR_code_for_mobile_English_Wikipedia 1.png";
import phone1 from "@/assets/image/Phone1.png";
import phone2 from "@/assets/image/Phone2.png";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <div
      className={`${styles.container} justify-between mt-[56px] mb-[15px] rounded-[32px] lg:p-[56px] p-[28px] bg-gradient-to-r from-[#ACB6E5] to-[#86FDE8] relative overflow-hidden`}
    >
      <div className="max-w-[725px]  lg:text-start text-center">
        <h2 className="font-bold lg:text-[48px]  text-[24px] lg:leading-[56px] leading-[30px] text-white mb-[48px] ">
          {t("buyThrough")}
        </h2>
        <img src={qrCode} alt="" />
      </div>
      <img className="absolute z-[11] lg:block hidden top-[40px] right-[150px]" src={phone1} alt="" />
      <img className="absolute lg:block hidden  top-[80px] right-[20px]" src={phone2} alt="" />
    </div>
  );
}
