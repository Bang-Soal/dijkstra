// components
import Iconify from "@/components/Iconify";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// libs
import Link from "next/link";
import Image from "next/image";

const topics: {
  title: string;
  icon: string;
  href: string;
}[] = [
  {
    title: "Penalaran Umum",
    icon: "/icons/Brain.svg",
    href: "/latihan-soal/pu",
  },
  {
    title: "Pengetahuan dan Pemahaman Umum",
    icon: "/icons/LightbulbFilament.svg",
    href: "/latihan-soal/ppu",
  },
  {
    title: "Pemahaman Bacaan dan Menulis",
    icon: "/icons/BookOpenText.svg",
    href: "/latihan-soal/pbm",
  },
  {
    title: "Pengetahuan Kuantitatif",
    icon: "/icons/MathOperations.svg",
    href: "/latihan-soal/pk",
  },
  {
    title: "Bahasa Indonesia",
    icon: "/icons/Indonesia.svg",
    href: "/latihan-soal/bindo",
  },
  {
    title: "Bahasa Inggris",
    icon: "/icons/England.svg",
    href: "/latihan-soal/bing",
  },
];

export default function NavMenuDesktop() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/latihan-soal">Latihan soal</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 sm:grid-cols-2 lg:w-[500px]">
              {topics.map((topic) => (
                <ListItemTopic
                  key={topic.title}
                  title={topic.title}
                  icon={topic.icon}
                  href={topic.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/try-out" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Try out
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Leaderboard</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-3 p-6 md:w-[400px] lg:w-[500px]">
              <li className="col-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Iconify icon="ph:rocket-bold" className="text-base" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bang Catatan</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-3 p-6 md:w-[400px] lg:w-[500px]">
              <li className="col-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Iconify icon="ph:rocket-bold" className="text-base" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItemTopic({
  title,
  icon,
  href,
}: Readonly<{
  title: string;
  icon: string;
  href: string;
}>) {
  return (
    <li>
      <Link href={href}>
        <NavigationMenuLink asChild>
          <div className="group relative flex h-full w-full select-none items-center justify-start overflow-hidden rounded-md p-6 no-underline shadow-none outline-none transition-[transform,box-shadow] duration-500 ease-out-back before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-300 before:to-emerald-600 before:opacity-0 before:transition-[opacity] hover:-rotate-3 hover:scale-105 hover:shadow-xl before:hover:opacity-100 focus:shadow-md">
            <Image
              src={icon}
              alt={`${title} nav link icon`}
              width={512}
              height={512}
              className="absolute -right-4 h-20 w-20 text-surface-400 mix-blend-multiply"
            />
            <p className="z-10 font-600 transition-colors group-hover:text-white">
              {title}
            </p>
          </div>
        </NavigationMenuLink>
      </Link>
    </li>
  );
}
