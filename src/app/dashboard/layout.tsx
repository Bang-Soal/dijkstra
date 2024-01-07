import { Metadata } from "next";
import { DashboardAside } from "./DashboardAside";

export const metadata: Metadata = {
  title: "Dashboard | BangSoal",
  description:
    "BangSoal merupakan platform terbaik untuk persiapan UTBK dan ujian mandiri!",
};

function DashboardPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-row lg:h-[90vh]">
      <DashboardAside />
      <div className="grow border-t border-gray-300 px-4 lg:overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}

export default DashboardPageLayout;
