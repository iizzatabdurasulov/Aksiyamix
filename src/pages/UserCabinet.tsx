import UserInfo from "@/components/userInfo/UserInfo";
import UserMenu from "@/components/userInfo/UserMenu";
import { styles } from "@/styles/styles";
import { t } from "i18next";

export default function UserCabinet() {
  return (
    <div className={`${styles.container} mt-[32px] !block`}>
      <h2 className={styles.h2Title}>{t('userInfo.personalCabinet')}</h2>
      <div className="lg:flex block lg:justify-between lg:gap-[30px] gap-[15px] w-full ">
        <div className="lg:w-[30%] w-full">
        <UserMenu />
      </div>
      <div className="lg:w-[60%] w-full mt-[30px] lg:mt-0">
        <UserInfo/>
      </div>
      </div>
    </div>
  );
}
