"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import Header from "./Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // const router = useRouter();
  // useEffect(() => {
  //   router.replace("/auth/login");
  // }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={[
            "light",
            "dark",
            "orange",
            "rose",
            "green",
            "blue",
            "darkBlue",
            "darkOrange",
            "darkRose",
            "darkGreen",
            "system",
          ]}
        >
          {pathname && !pathname.includes("auth") && <Header />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
