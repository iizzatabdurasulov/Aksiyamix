import { BsSearch } from "react-icons/bs";
import { regions } from "./search.config";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
const Search = () => {
  const { t } = useTranslation();

  return (
    <form className="relative w-full">
      <input
        type="text"
        placeholder={t("search")}
        className="w-full lg:w-[851px] border-[1px] border-[#D9DBE8] rounded-[8px] py-[12px] px-[16px] lg:text-[16px] font-medium leading-[24px] text-[14px] "
      />
      <div className="absolute top-0 right-[10px] flex">
        <Select>
          <SelectTrigger
            className={cn(
              "!h-[48px] rounded-[0px] border-t-[0px] border-b-[0px] outline-none"
            )}
          >
            <SelectValue placeholder={t("regions.allRegions")} />
          </SelectTrigger>
          <SelectContent
            className={cn(
              " text-[#010101] cursor-pointer lg:w-full w-[100px]  font-[400] text-[12px] lg:text-[14px] leading-[20px] border-l-1 border-[#D9DBE8] lg:pl-[14px] pl-[5px] py-[16px]"
            )}
          >
            {regions.map(({ id, area }) => (
              <SelectItem
                className={cn("text-[black] text-[12px] lg:text-[14px]")}
                key={id}
                value={area}
              >
                {t(`regions.${area}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button className="border-l-1 text-[#010101] lg:text-[24px] text-[16px] border-[#D9DBE8] pl-[14px] cursor-pointer">
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
