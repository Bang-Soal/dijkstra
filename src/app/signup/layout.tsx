import heroBgMesh from "@public/hero-bg-mesh.webp";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="-mb-10 flex min-h-screen flex-col items-stretch overflow-hidden px-5 pt-10 lg:px-20">
      {children}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image src={heroBgMesh} alt={""} className="h-full w-full" />
      </div>
    </main>
  );
}
