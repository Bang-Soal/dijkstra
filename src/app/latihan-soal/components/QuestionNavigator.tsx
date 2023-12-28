import { Button } from "@/components/ui/button";
import * as Separator from "@radix-ui/react-separator";

const QuestionNavigator = () => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex gap-x-4">
        <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-100">
          <div className="i-ph-arrow-left-bold h-[16px] w-[16px] text-gray-500"></div>
        </button>
        <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-100">
          <div className="i-ph-arrow-right-bold h-[16px] w-[16px] text-gray-500"></div>
        </button>
      </div>
      <Separator.Root
        orientation="horizontal"
        className="h-[2px] flex-grow bg-gray-100"
      />
      <Button variant="emerald" className="rounded-full">
        Cek Jawaban
      </Button>
    </div>
  );
};

export default QuestionNavigator;
