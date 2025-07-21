import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { setactiveDialog } from "@/features/authLogin";
import { cn } from "@/lib/utils";
import { formSchema, type FormSchemaType } from "@/schemas/formSchema";
import { styles } from "@/styles/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function CodeVerification() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(59);
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

 
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      phone: "",
    },
  });

  async function onSubmit(data: FormSchemaType) {
    if (data.phone) {
      dispatch(setactiveDialog("codeVerification"));
      form.reset();
       alert('bu faqat test rejimida ishlaydi. Siz kiritgan telefon raqamga hech qanday kod bormaydi (hozirchaa !!!). Lekin siz Google orqali kirishingiz mumkin')
    }
  }

  function handleResendCode() {
    setTimer(59);
 
  }

  return (
    <div className="flex !justify-center items-center">
      <Form {...form}>
        <form
          className="flex flex-col  items-center gap-[20px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputOTP className="flex gap-2 items-center !justify-center" maxLength={5}>
            <InputOTPSlot className={cn(`${styles.input} !p-0`)} index={0} />
            <InputOTPSlot className={cn(`${styles.input} !p-0`)} index={1} />
            <InputOTPSlot className={cn(`${styles.input} !p-0`)} index={2} />
            <InputOTPSlot className={cn(`${styles.input} !p-0`)} index={3} />
            <InputOTPSlot className={cn(`${styles.input} !p-0`)} index={4} />
          </InputOTP>

          <Button
            type="submit"
            className={styles.blueBtn}
          >
            {t("signUp.enterCode")}
          </Button>

          <div className="text-center text-[#475569] text-[14px] mt-[25px] leading-[20px]">
            {timer > 0 ? (
              <p>
                {t("signUp.newCode")}{" "}
                <span className="text-[crimson] font-semibold">
                  {timer}
                </span>
              </p>
            ) : (
              <button
                onClick={handleResendCode}
                type="button"
                className="text-[crimson] font-semibold hover:underline"
              >
                {t("signUp.resendCode")}
              </button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
