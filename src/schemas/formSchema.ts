import { z } from "zod";

export const formSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string().min(1, t("valid.emailError")),
       password: z
      .string()
      .min(6, t("valid.passwordMin")),
       phone: z
      .string()
      .regex(
        /^\+998\d{9}$/,
        t("valid.phoneError") || "Telefon raqam +998 bilan boshlanishi va 13 ta raqamdan iborat bo‘lishi kerak."
      ),
  });
};

export type FormSchemaType = z.infer<ReturnType<typeof formSchema>>;
