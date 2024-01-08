import { Button } from "@/components/ui/button";
import { CrownIcon } from "lucide-react";
import { DashboardBoxContainer } from "../elements/DashboardBoxContainer";

export const Tips = () => {
  return (
    <DashboardBoxContainer variant={"warning"}>
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <div className="flex flex-col justify-start gap-3 md:w-1/2">
          <p>
            <span></span>
            Tips UTBK
          </p>
          <p className="text-sm">
            Review try out-mu, pelajari pembahasan soal yang salah untuk
            memperbaiki dan meningkatkan pemahamanmu.
          </p>
          <div>
            <Button className="text-white" variant={"bsPrimary"}>
              <CrownIcon /> Lihat Pembahasan
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          {/* animate /scroll wrong answer */}
          wrong answers only
        </div>
      </div>
    </DashboardBoxContainer>
  );
};
