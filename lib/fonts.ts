import { Bebas_Neue, Inter } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
