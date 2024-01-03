import { CarouselItemType } from "@/components/ui/swipe-carousel";

export const RANK_POSITION = ["first", "second", "third"];
export type RANK_TYPE = "first" | "second" | "third";
export const SLIDER_IMAGES = [
  "/icons/England.svg",
  "/icons/Indonesia.svg",
  "/icons/inten.svg",
];

export const PointsInfoItems: CarouselItemType[] = [
  {
    image_url: SLIDER_IMAGES[0],
    content:
      "Bagi catatan belajar mu di Bang Catatan dan dapatkan poin bila dilike atau disimpan ",
  },
  {
    image_url: SLIDER_IMAGES[1],
    content:
      "Bagi catatan belajar mu di Bang Catatan dan dapatkan poin bila dilike atau disimpan ",
  },
  {
    image_url: SLIDER_IMAGES[2],
    content:
      "Bagi catatan belajar mu di Bang Catatan dan dapatkan poin bila dilike atau disimpan ",
  },
];
