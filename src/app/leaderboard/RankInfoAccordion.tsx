import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LeaderboardData } from "@/types";
interface RankInfoAccordionI {
  data: LeaderboardData;
}

export const RankInfoAccordion = ({ data }: RankInfoAccordionI) => {
  const {
    user: {
      full_name,
      highschool,
      choosen_university_one,
      choosen_major_one,
      choosen_university_two,
      choosen_major_two,
      choosen_university_three,
      choosen_major_three,
    },
    totalPoints,
    rank,
  } = data;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-lg bg-gray-100 "
    >
      <AccordionItem value="item" className="border-b-0">
        <AccordionTrigger className="w-full px-2 py-2 hover:no-underline ">
          <div className="grid grow border-spacing-2 grid-cols-6 place-items-center gap-4 px-2 text-left lg:grid-cols-12">
            <div className="col-span-1 font-bold">{rank}</div>
            <div className="col-span-4 rounded-lg">
              <p className="font-bold">{full_name}</p>
              <p className="text-sm">{highschool}</p>
            </div>
            <div className="col-span-1 pl-4 font-bold">{totalPoints}</div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="rounded-b-lg p-2 ">
          <div className="grid border-spacing-2 grid-cols-6 gap-4 px-2 text-left lg:grid-cols-12">
            <div className="col-span-2 font-bold">Pilihan 1</div>
            <div className="col-span-2 font-bold">Pilihan 2</div>
            <div className="col-span-2 font-bold">Pilihan 3</div>
          </div>
          <div className="grid border-spacing-2 grid-cols-6 gap-4 px-2 text-left lg:grid-cols-12">
            <div className="col-span-2 rounded-lg">
              <p className="font-bold">{choosen_university_one}</p>
              <p className="text-sm">{choosen_major_one}</p>
            </div>
            <div className="col-span-2 rounded-lg">
              <p className="font-bold">{choosen_university_two}</p>
              <p className="text-sm">{choosen_major_two}</p>
            </div>
            <div className="col-span-2 rounded-lg">
              <p className="font-bold">{choosen_university_three}</p>
              <p className="text-sm">{choosen_major_three}</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
