import { type AppDispatch, type RootState } from "@/app/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "@/styles/styles";
import CodeVerification from "./CodeVerification";
import { setactiveDialog } from "@/features/authLogin";
import { MoveLeft } from "lucide-react";
import Login from "./Login";

export default function Auth() {
  const { t } = useTranslation();
  const activeDialog = useSelector(
    (state: RootState) => state.authLogin.activeDialog
  );
  const phone = useSelector((state: RootState) => state.authLogin.phone);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className={styles.blueBtn}>{t("logIn")}</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {activeDialog === "codeVerification" ? (
              <button
                className="absolute top-[20px] left-[20px] cursor-pointer font-bold text-[24px] "
                onClick={() => dispatch(setactiveDialog("login"))}
              >
                <MoveLeft />
              </button>
            ) : (
              ""
            )}
            <h2 className="text-[#0F172A] text-center text-[24px] font-semibold">
              {activeDialog === "login"
                ? t("signUp.phone")
                : activeDialog === "codeVerification"
                ? t(`signUp.codeVerification`)
                : ""}
            </h2>
            <p className="text-[#475569] text-center text-[16px] mt-[8px] mb-[24px]">
              {activeDialog === "login" ? (
                t("signUp.smsInfo")
              ) : activeDialog === "codeVerification" ? (
                <>
                  {t("signUp.confirmPhone")}{" "}
                  <span className="text-[crimson] font-bold">{phone}</span>
                </>
              ) : null}
            </p>
          </DialogHeader>

          {activeDialog === "login" ? (
            <Login />
          ) : activeDialog === "codeVerification" ? (
            <CodeVerification />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
