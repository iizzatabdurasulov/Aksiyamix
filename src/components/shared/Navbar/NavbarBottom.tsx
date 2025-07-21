import { Link, useNavigate } from "react-router-dom";
import { BiBell, BiHeart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "@/assets/icons/logo.svg";
import { styles } from "@/styles/styles";
import Search from "./Search";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import Auth from "../../../auth/Auth";
import userDefaultAvatar from '@/assets/icons/userDefaultAvatar.png'
export default function NavbarBottom() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.auth.user);
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const handleNavigate = () => navigate("/userInfo");
  const handleNavigateToFavorites = () => navigate("/favorites");

  return (
    <div className="w-full py-[20px]">
      <div
        className={`${styles.container} flex-col lg:flex-row gap-[16px] lg:gap-[24px] items-start lg:items-center`}
      >
        <div className="flex justify-between w-full items-center gap-[16px]">
          <div className="flex flex-col gap-[10px] lg:flex-row lg:items-center w-full lg:w-auto">
            <div className="flex items-center gap-[12px]">
              <Link to="/" className="flex items-center gap-[12px]">
                <img src={logo} alt="logo" />
                <span className="text-[#000] hidden lg:block font-semibold text-[20px]">
                  Aksiya Mix
                </span>
              </Link>
              <button className="md:flex cursor-pointer hidden items-center gap-[10px] lg:py-[10px] lg:px-[14px] px-[12px] py-[8px] rounded-[8px] !bg-[#FF034C1F] text-[#FF034C] font-medium text-[12px] lg:text-[14px]">
                <FaBars /> {t("katalog")}
              </button>
            </div>

            <div className="hidden lg:block">
              <Search />
            </div>
          </div>

          <div className="flex items-center gap-[20px]">
            <button className="lg:text-[24px] text-[18px] cursor-pointer">
              <BiBell />
            </button>

            <button
              onClick={handleNavigateToFavorites}
              className={`lg:text-[24px] text-[18px] cursor-pointer relative ${
                favorites.length > 0
                  ? "text-[crimson]"
                  : "text-black"
              }`}
            >
              {favorites.length > 0 && (
                <span className="absolute top-[-10px] left-[-10px] w-[16px] h-[16px] rounded-full text-[11px] font-medium bg-[crimson] text-white flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
              <BiHeart />
            </button>

            {user ? (
  <button
    onClick={handleNavigate}
    className="flex items-center w-[30px] h-[30px] gap-[10px] cursor-pointer"
  >
    <img
      src={
        user.photoURL ||
        userDefaultAvatar
      }
      alt="User"
      className="w-[30px] h-[30px] rounded-full object-cover"
    />
  </button>
) : (
  <Auth />
)}

          </div>
        </div>
      </div>
    </div>
  );
}
