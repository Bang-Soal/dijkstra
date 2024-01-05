import { Metadata } from "next";
import { DashboardAside } from "./DashboardAside";

export const metadata: Metadata = {
  title: "Dashboard | BangSoal",
  description:
    "BangSoal merupakan platform terbaik untuk persiapan UTBK dan ujian mandiri!",
};

function DashboardPage() {
  return (
    <div className="flex flex-row">
      <DashboardAside />
      <div className="grow">
        <p>Dashboard content</p>
      </div>
    </div>
  );
}

export default DashboardPage;
