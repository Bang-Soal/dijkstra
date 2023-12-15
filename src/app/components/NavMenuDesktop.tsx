// components
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
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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
          <Link href="/bang-catatan" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              BangCatatan
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/leaderboard" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Leaderboard
            </NavigationMenuLink>
          </Link>
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
