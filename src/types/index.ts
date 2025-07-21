export type ISectionKey =
  | "best_ads"
  | "discount_start_announcement"
  | "forYou"
  | "discountNearby"
  | "lastViewedAds"
  | "categories"
  | "stoppedAds";




export type MemoryType = {
  "64gb": string;
  "128gb": string;
  "256gb": string;
};

export type Color = {
  black: string;
  green: string;
  blue: string;
  grey: string;
};
type ICharacteristicsType = {
  id: number;
  key: string;
  value: string;
};

export interface IProduct {
  id: string;
  productTitle: string;
  img: string;
  price: string;
  oldPrice: string;
  date: string;
  location: string;
  discountAmount: number;
  promoCode: string
  discount?: boolean;
  isTop?: boolean;
  userName: string;
  avatar?: string;
  viewers: string;
  memory: string;
  memoryType: { [key: string]: string };
  slot: string;
  productColor: string;
  discountDeadline: string;
  complaint: string;
  color: { [key: string]: string };
  adminDesc: string;
  follow: string;
  phone: string;
  productDetail: string;
  detailInfo: string;
  characteristics: string;
  comments: string;
  characteristicsType: ICharacteristicsType[];
}


export interface ISection {
  id: number;
  title: string;
}

export interface IRegions {
  id: number;
  area: string;
}

export interface ICategory {
  id: number;
  title: string;
  img: string;
}

export interface IUserMenu {
  title: string;
  id: number;
  icon: string;
}

export interface IUser {
  yourName?: string;
  email?: string;
  birthDate?: string;
  surname?: string;
  address?: string;
  phoneNumber?: string;
  gender?: string;
  photoURL: string | null;
  displayName?: string | null;
  uid?: string;
}
