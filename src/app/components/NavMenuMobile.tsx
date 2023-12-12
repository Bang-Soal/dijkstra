"use client";

// components
import Logo from "@/components/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// libs
import Link from "next/link";

// utils
import { cn } from "@/lib/utils";

export default function NavMenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex lg:hidden">
          <i className="i-ph-list-bold my-auto h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="block lg:hidden">
        <SheetHeader>
          <SheetTitle>
            <Link
              className="flex items-center gap-1 font-700 text-content-200"
              href="/"
            >
              <Logo className="h-8 w-8" />
              BangSoal
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start">
          <Accordion type="single" collapsible className="w-full px-4 pt-5">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="pb-2">Latihan soal</AccordionTrigger>
              <AccordionContent className="pb-0">
                <Link
                  href="/latihan-soal/pu"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-base",
                  )}
                >
                  Penalaran Umum
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="/try-out"
            className={cn(buttonVariants({ variant: "link" }), "text-base")}
          >
            Try out
          </Link>
          <Link
            href="/bang-catatan"
            className={cn(buttonVariants({ variant: "link" }), "text-base")}
          >
            Bang catatan
          </Link>
          <Link
            href="/leaderboard"
            className={cn(buttonVariants({ variant: "link" }), "text-base")}
          >
            Leaderboard
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
