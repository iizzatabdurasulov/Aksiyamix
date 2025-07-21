import infoIcon from "@/assets/icons/infoIcon.svg";
import shopIcon from "@/assets/icons/shopIcon.svg";
import likeIcon from "@/assets/icons/likeIcon.svg";
import settingsIcon from "@/assets/icons/settingsIcon.svg";
import logOutIcon from "@/assets/icons/logOutIcon.svg";
import type { IUserMenu } from "@/types";

export const userMenuData: IUserMenu[] = [
  {
    id: 1,
    title: "title1",
    icon: infoIcon,
  },
  {
    id: 2,
    title: "title2",
    icon: shopIcon,
  },
  {
    id: 3,
    title: "title3",
    icon: likeIcon,
  },
  {
    id: 4,
    title: "title4",
    icon: settingsIcon,
  },
  {
    id: 5,
    title: "title5",
    icon: logOutIcon,
  },
];
