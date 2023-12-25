import heroBgMesh from "@public/hero-bg-mesh.webp";
import Image from "next/image";
import { AuthGuard } from "../components/AuthGuard";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="-mb-10 flex min-h-screen flex-col items-stretch overflow-hidden px-5 lg:h-screen lg:px-20">
      <AuthGuard>
        <>
          {children}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <Image src={heroBgMesh} alt={""} className="h-full w-full" />
          </div>
        </>
      </AuthGuard>
    </main>
  );
}
