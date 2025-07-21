import { styles } from "../../../styles/styles";
import ru from "@/assets/icons/russia.svg";
import uz from "@/assets/icons/uzbekistan.svg";
import i18n from "../../../i18n/i18n";

export default function NavbarTop() {
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full bg-[#F8FAFC] py-[8px]">
      <div className={`${styles.container} justify-center lg:justify-end`}>
        <div className="flex flex-wrap items-center gap-[10px] lg:gap-[30px] justify-center lg:justify-end">
          <div className="flex gap-[10px] lg:gap-[24px] items-center">
            <span className="text-[#010101] text-[14px] leading-[20px] font-medium">
              рыба текст
            </span>
            <span className="text-[#010101] text-[14px] leading-[20px] font-medium">
              рыба текст
            </span>
          </div>
          <div className="flex gap-[12px]">
            <button
              onClick={() => handleLanguageChange("ru")}
              className="flex items-center gap-[4px] p-[4px] hover:bg-[#0CA4FA1A] rounded-[4px] text-[#0CA4FA] cursor-pointer text-[14px] font-medium"
            >
              <img src={ru} alt="Russia" /> Ру
            </button>
            <button
              onClick={() => handleLanguageChange("uz")}
              className="flex items-center gap-[4px] p-[4px] hover:bg-[#0CA4FA1A] rounded-[4px] text-[#0CA4FA] cursor-pointer text-[14px] font-medium"
            >
              <img src={uz} alt="Uzbekistan" /> O'z
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
