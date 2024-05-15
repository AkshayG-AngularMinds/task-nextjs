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
import React, { useState } from "react";

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
    console.log("alo");
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
    <div className="m-5">
      <p className="font-bold size-7 ">Theme</p>
      <div className="flex justify-center gap-4 items-center">
        <Select
          onValueChange={(val) => handleTheme(val)}
          defaultValue={resolvedTheme}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Theme" />
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
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Theme;
