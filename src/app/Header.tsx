"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  CircleUser,
  Menu,
  Moon,
  Package2,
  Router,
  Search,
  Sun,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  const { setTheme, themes, resolvedTheme } = useTheme();
  const pathname = usePathname();

  const [darkColors, setDarkColors] = useState([
    "darkOrange",
    "darkBlue",
    "darkRose",
    "darkGreen",
    "dark",
  ]);
  const [lightColors, setLightColors] = useState([
    "orange",
    "blue",
    "green",
    "rose",
    "light",
  ]);

  const handleTheme = (t: string) => {
    let res = resolvedTheme || "";
    if ((darkColors.includes(t) || darkColors.includes(res)) && t !== "light") {
      console.log("this is dark", t, resolvedTheme);
      if (resolvedTheme === "light") {
        setTheme(t);
      }
      if (t === "orange" || resolvedTheme === "orange") setTheme("darkOrange");
      if (t === "blue" || resolvedTheme === "blue") setTheme("darkBlue");
      if (t === "rose" || resolvedTheme === "rose") setTheme("darkRose");
      if (t === "green" || resolvedTheme === "green") setTheme("darkGreen");
    } else if (lightColors.includes(t)) {
      console.log(t);
      if (resolvedTheme === "dark") setTheme(t);
      console.log("this is light", t, resolvedTheme);
      if (t === "orange" || resolvedTheme === "darkOrange") setTheme("orange");
      if (t === "blue" || resolvedTheme === "darkBlue") setTheme("blue");
      if (t === "rose" || resolvedTheme === "darkRose") setTheme("rose");
      if (t === "green" || resolvedTheme === "darkGreen") setTheme("green");
    }
  };
  return (
    <div className="flex w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/dashboard"
            className={
              pathname.includes("dashboard")
                ? "text-foreground transition-colors hover:text-foreground"
                : "text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Dashboard
          </Link>

          <Link
            href="/settings/profile"
            className={
              pathname.includes("settings")
                ? "text-foreground transition-colors hover:text-foreground"
                : "text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial"></form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/auth/login")}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}

export default Header;
