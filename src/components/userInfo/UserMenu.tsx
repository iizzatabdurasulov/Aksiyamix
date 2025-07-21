import { useTranslation } from "react-i18next";
import { userMenuData } from "./user.config";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/firebase/auth";

import { useNavigate } from "react-router-dom";
import type { RootState } from "@/app/store";
import { setUser } from "@/features/authSlice";
import { setSelectedMenu } from "@/features/userInfoSlice";

export default function UserMenu() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedMenu = useSelector(
    (state: RootState) => state.userInfo.selectedMenu
  );
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(setUser(null));
      navigate("/");
    } catch (error: any) {
      alert("Tizimdan chiqishda xatolik yuz berdi");
    }
  };

  const handleSelect = (id: number, isLast: boolean) => {
    if (isLast) {
      handleSignOut();
    } else {
      dispatch(setSelectedMenu(id));
    }
  };

  return (
    <div className="border-[1px] border-[#D9DBE8] rounded-[16px] lg:p-[24px] p-[12px]">
      <ul className="flex lg:flex-col flex-row items-center lg:items-start  gap-[20px] md:gap-0 flex-wrap ">
        {userMenuData.map(({ id, title, icon }, index) => {
          const isLast = index === userMenuData.length - 1;
          const isActive = id === selectedMenu;

          return (
            <li
              key={id}
              onClick={() => handleSelect(id, isLast)}
              className={`flex justify-between items-center gap-[8px] lg:text-[16px] text-[12px] font-medium leading-[24px] lg:border-b-[1px]  last:border-b-0 lg:pb-[16px] border-[#D9DBE8] lg:pt-[16px] lg:first:pt-0 cursor-pointer hover:text-[#0CA4FA] ${
                isActive ? "text-[#0CA4FA]" : "text-[#0F172A]"
              }`}
            >
              <div className="flex items-center lg:gap-[8px] gap-[5px]">
                <img src={icon} alt={title} />
                {t(`userInfo.${title}`)}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
