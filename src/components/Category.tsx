import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { category } from "@/constants/data";
import { cn } from "@/lib/utils";
import { styles } from "@/styles/styles";
import { useTranslation } from "react-i18next";

export default function Category() {
  const { t } = useTranslation();

  return (
    <div className={`${styles.container} flex-col mt-[56px]`}>
      <h2 className={`${styles.h2Title}`}>{t("categories")}</h2>
      <Carousel
        opts={{
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="flex w-full gap-[16px]">
          {category.map(({ id, title, img }) => (
            <CarouselItem key={id} className="basis-[192px] relative w-[192px]  px-0 shrink-0 cursor-pointer">
              <div className=" w-[192px]  h-[112px] rounded-[12px] ">
                <img
                  className=" absolute rounded-[12px]  max-w-full inset-0 !w-[192px] !h-[112px] !object-cover"
                  src={img}
                  alt=""
                />
                <h3 className="absolute top-[22px] left-[32px] z-10 max-w-[106px] font-semibold text-[16px] leading-[24px] text-white">
                  {t(`category.${title}`)}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={cn("left-[0px]")} />
        <CarouselNext
          className={cn("right-[0px] text-[#010101] bg-[white]")}
        />
      </Carousel>
    </div>
  );
}
