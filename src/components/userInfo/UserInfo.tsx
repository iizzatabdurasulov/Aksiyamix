import { useSelector } from "react-redux";
import MyInformation from "./MyInformation";
import type { RootState } from "@/app/store";

export default function UserInfo() {
  const selectedMenu = useSelector(
    (state: RootState) => state.userInfo.selectedMenu
  );

  const renderContent = () => {
    switch (selectedMenu) {
      case 1:
        return <MyInformation/>
      case 2:
        return <p>Bu yerda sozlamalarni o‘zgartirishingiz mumkin.</p>;
      case 3:
        return <p>Bildirishnomalarni shu yerda ko‘rishingiz mumkin.</p>;
      default:
        return <p>Tanlangan bo‘limga mos ma’lumot topilmadi.</p>;
    }
  };

  return (
    <div className="border-[1px] rounded-[16px] border-[#D9DBE8] lg:p-[24px] p-[12px]">
      {renderContent()}
    </div>
  );
}
