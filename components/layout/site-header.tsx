"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Survivors", href: routes.characters },
  { label: "Infected", href: routes.infected },
  { label: "Locations", href: routes.locations },
  { label: "Factions", href: routes.factions },
] as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="mask-section-bottom fixed inset-x-0 top-0 z-2 bg-black/80 pbe-16 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href={routes.home}
          className="hover:text-brand-gold flex items-center gap-3.5"
        >
          <Image
            preload
            src="/img/dl_logo.webp"
            alt="Dying Light"
            width={575}
            height={164}
            className="h-auto w-48"
          />
          <div className="sm hidden flex-col gap-0.5 border-l border-white/20 pl-3.5 md:flex">
            <span className="font-brand text-lg leading-none tracking-wider">
              HARRAN FILES
            </span>
            <span className="text-muted-foreground text-[0.6rem] tracking-[0.18em] uppercase">
              Fan Encyclopedia
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex" aria-label="Main navigation">
          <NavigationMenuList className="gap-7">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className="font-brand text-foreground/90 text-lg tracking-widest uppercase transition-colors"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile hamburger → full-screen Sheet */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MenuIcon className="size-5" />
              </Button>
            }
          />
          <SheetContent
            side="left"
            showCloseButton={true}
            className="bg-background/80 w-screen! max-w-none! border-none px-8 pt-20"
          >
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-bebas text-foreground/80 border-b border-white/6 py-5 text-2xl tracking-wider transition-colors hover:text-orange-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
