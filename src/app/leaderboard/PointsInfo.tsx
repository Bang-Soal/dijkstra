import { ImageCarousel } from "@/components/ui/image-carousel";
import { SLIDER_IMAGES } from "./constants";

export const PointsInfo = () => {
  return (
    <div className="flex h-48 justify-center rounded-2xl bg-blue-400 py-1">
      <ImageCarousel images={SLIDER_IMAGES} />
    </div>
  );
};
