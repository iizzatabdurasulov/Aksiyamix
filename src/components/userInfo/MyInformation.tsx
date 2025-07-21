import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import plusIcon from "@/assets/icons/plusIcon.svg";

import { Form } from "../ui/form";
import { FormField, FormItem, FormControl } from "../ui/form";
import { Button } from "../ui/button";
import { styles } from "@/styles/styles";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import type { RootState } from "@/app/store";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function MyInformation() {
  const { t } = useTranslation();

  const user = useSelector((state: RootState) => state.auth.user);

  const form = useForm({
    defaultValues: {
      yourName: "",
      email: "",
      birthDate: "",
      surname: "",
      address: "",
      phoneNumber: "",
      gender: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        yourName: user.yourName || "",
        email: user.email || "",
        birthDate: user.birthDate || "",
        surname: user.surname || "",
        address: user.address || "",
        phoneNumber: user.phoneNumber || "",
        gender: user.gender || "",
      });
    }
  }, [user, form]);

  const onSubmit = (values: any) => {
    console.log("Updated values:", values);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#0F172A] font-semibold text-[24px] leading-[32px]">
          {t("userInfo.title1")}
        </h2>
        <button className="text-[#0CA4FA] font-medium text-[14px] leading-[20px] py-[10px] px-[16px] bg-[#0CA4FA1F] rounded-[8px] flex gap-[8px] items-center cursor-pointer">
          <img src={plusIcon} alt="" />
          {t("userInfo.addCompany")}
        </button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            <FormField
              control={form.control}
              name="yourName"
              render={({ field }) => (
                <FormItem>
                  <label className="font-medium mb-[4px] text-[#1E293B] text-[14px] leading-[20px] ">
                    {t("userInfo.yourName")}
                  </label>
                  <FormControl>
                    <Input className={cn(`${styles.input}`)} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <label className="font-medium mb-[4px] text-[#1E293B] text-[14px] leading-[20px] ">
                    {t("userInfo.email")}
                  </label>
                  <FormControl>
                    <Input className={cn(`${styles.input}`)} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <label className="font-medium mb-[4px] text-[#1E293B] text-[14px] leading-[20px] ">
                    {t("userInfo.date")}
                  </label>
                  <FormControl>
                    <Input
                      className={cn(`${styles.input}`)}
                      type="date"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <label className="font-medium mb-[4px] text-[#1E293B] text-[14px] leading-[20px] ">
                    {t("userInfo.surname")}
                  </label>
                  <FormControl>
                    <Input className={cn(`${styles.input}`)} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <label className="font-medium mb-[4px] text-[#1E293B] text-[14px] leading-[20px] ">
                    {t("userInfo.address")}
                  </label>
                  <FormControl>
                    <Input className={cn(`${styles.input}`)} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <label className="font-medium mb-[4px] text-[#1E293B] text-[14px] leading-[20px] ">
                    {t("userInfo.phoneNumber")}
                  </label>
                  <FormControl>
                    <Input className={cn(`${styles.input}`)} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
  control={form.control}
  name="gender"
  render={({ field }) => (
    <FormItem>
      <label className="font-medium mb-[4px] text-[#1E293B] text-[14px] leading-[20px]">
        {t("userInfo.gender")}
      </label>
      <FormControl>
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <SelectTrigger className={cn(`${styles.input}`)}>
            <SelectValue placeholder={t("userInfo.male")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">{t("userInfo.male")}</SelectItem>
            <SelectItem value="female">{t("userInfo.female")}</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
    </FormItem>
  )}
/>

          </div>
          <Button type="submit" className={`${styles.blueBtn} mt-[24px]`}>
            {t("userInfo.save")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
