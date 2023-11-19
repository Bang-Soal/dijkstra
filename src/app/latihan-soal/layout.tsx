import Sidebar from "./components/Sidebar";

export default function LatihanSoalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grow">{children}</div>
    </div>
  );
}
