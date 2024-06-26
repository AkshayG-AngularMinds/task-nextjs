"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function Theme() {
  const { setTheme, themes, resolvedTheme } = useTheme();

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

    if (t === "system") {
      if (resolvedTheme == "light") {
        return setTheme("dark");
      }
      let newTheme = resolvedTheme;
      console.log(newTheme);
      if (!resolvedTheme?.includes("dark")) {
        newTheme =
          "dark" +
          resolvedTheme.charAt(0).toUpperCase() +
          resolvedTheme.slice(1);
      }
      setTheme(newTheme);
    } else {
      if (
        (darkColors.includes(t) || darkColors.includes(res)) &&
        t !== "light"
      ) {
        if (resolvedTheme === "light") {
          setTheme(t);
        }
        if (t === "orange" || resolvedTheme === "orange")
          setTheme("darkOrange");
        if (t === "blue" || resolvedTheme === "blue") setTheme("darkBlue");
        if (t === "rose" || resolvedTheme === "rose") setTheme("darkRose");
        if (t === "green" || resolvedTheme === "green") setTheme("darkGreen");
      } else if (lightColors.includes(t)) {
        if (resolvedTheme === "dark") setTheme(t);
        if (t === "orange" || resolvedTheme === "darkOrange")
          setTheme("orange");
        if (t === "blue" || resolvedTheme === "darkBlue") setTheme("blue");
        if (t === "rose" || resolvedTheme === "darkRose") setTheme("rose");
        if (t === "green" || resolvedTheme === "darkGreen") setTheme("green");
      }
    }
  };
  const [currentTheme, setCurrentTheme] = useState<any>("");
  useEffect(() => {
    setCurrentTheme(
      resolvedTheme === "darkBlue"
        ? "Blue"
        : resolvedTheme === "darkOrange"
        ? "Orange"
        : resolvedTheme === "darkGreen"
        ? "Green"
        : "Rose"
    );
  }, [resolvedTheme]);
  return (
    <div className="m-5">
      <p className="font-bold size-7 ">Theme</p>
      <div className="flex justify-center gap-4 items-center">
        <label
          htmlFor="theme"
          className="block text-sm font-medium text-gray-700"
        >
          Select theme
        </label>
        <Select onValueChange={(val) => handleTheme(val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={currentTheme || ""} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Themes</SelectLabel>
              <div className="flex items-center justify-center">
                <SelectItem value="orange">Orange</SelectItem>
                <div className="flex h-4 w-5 items-center justify-center rounded-full bg-orange-500"></div>
              </div>
              <div className="flex items-center justify-center">
                <SelectItem value="green">Green</SelectItem>
                <div className="flex h-4 w-5 items-center justify-center rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center justify-center">
                <SelectItem value="rose">Rose</SelectItem>
                <div className="flex h-4 w-5 items-center justify-center rounded-full bg-rose-500"></div>
              </div>
              <div className="flex items-center justify-center">
                <SelectItem value="blue">Blue</SelectItem>
                <div className="flex h-4 w-5 items-center justify-center rounded-full bg-blue-500"></div>
              </div>
              <div className="flex items-center justify-center">
                <SelectItem value="light">Light </SelectItem>
                <div className="flex h-4 w-5 items-center justify-center rounded-full bg-white"></div>
              </div>
              <div className="flex items-center justify-center">
                <SelectItem value="dark">Dark</SelectItem>
                <div className="flex h-4 w-5 items-center justify-center rounded-full bg-black"></div>
              </div>
              <div className="flex items-center justify-center">
                <SelectItem value="system">System</SelectItem>
                <div className="flex h-4 w-5 items-center justify-center rounded-full"></div>
              </div>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Theme;
