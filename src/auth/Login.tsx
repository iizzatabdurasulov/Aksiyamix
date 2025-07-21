import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { styles } from "@/styles/styles";
import { auth } from "@/firebase/auth";
import googleIcon from "@/assets/icons/google.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { formSchema, type FormSchemaType } from "@/schemas/formSchema";
import { useDispatch } from "react-redux";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setPhone, setactiveDialog } from "@/features/authLogin";
import { setUser } from "@/features/authSlice";

export default function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
    }
  }

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email ?? "",
            displayName: user.displayName ?? "",
            photoURL: user.photoURL ?? "",
          })
        );
      }
    } catch (error: any) {
      console.error("Google Sign-In Error:", error);
      alert(error.message || "Google bilan kirishda xatolik yuz berdi.");
    }
  }


  const handleClick = () => {
    alert('Currently in the process of registering with a phone number !!!\n You can continue with Google')
  }

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col gap-[20px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                      dispatch(setPhone(value || ""));
                    }}
                    international
                    defaultCountry="UZ"
                    className={`${styles.input} outline-none !focus:outline-none focus:ring-0 focus:border-none`}
                  />
                </FormControl>
                <FormMessage className="text-[crimson] text-[12px] mb-[15px]" />
              </FormItem>
            )}
          />

          <Button
          onClick={handleClick}
            type="submit"
            className={styles.blueBtn}
          >
            {t("signUp.getCode")}
          </Button>
        </form>
      </Form>

      <div className="mt-[10px]">
        <Button
          onClick={handleGoogleSignIn}
          className="w-full text-black bg-transparent lg:px-[24px] lg:py-[10px] lg:text-[16px] px-[12px] py-[5px] text-[12px] font-[600] border border-black rounded-[8px] cursor-pointer hover:opacity-60 hover:bg-[#F1F5F9]"
        >
          <img src={googleIcon} alt="google icon" className="mr-2" />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
