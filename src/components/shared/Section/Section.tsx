import { styles } from "../../../styles/styles";
import { useTranslation } from "react-i18next";
import { section } from "./section.config";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { setSelectedTitle } from "@/features/sectionSlice";

export default function Section() {
  const { t } = useTranslation();
const dispatch = useDispatch()
  const selectedTitle = useSelector((state: RootState) => state.sectionState.selectedTitle)
  return (
    <ul className={`${styles.container} flex flex-wrap gap-[10px] lg:gap-[20px] pt-[20px]`}>
      {section.map(({ id, title }) => {
        const isActive = selectedTitle === title;
        return (
          <li
            key={id}
            className={`cursor-pointer text-[12px] lg:text-[14px] p-[4px] lg:px-[16px] lg:py-[8px] rounded-[8px] font-[500] leading-[16px] lg:leading-[20px] 
              ${isActive ? "text-[#0CA4FA] bg-[#0CA4FA1A]" : "text-[#475569]"}`}
            onClick={() => dispatch(setSelectedTitle(title))}
          >
            {t(`${title}`)}
          </li>
        );
      })}
    </ul>
  );
}
