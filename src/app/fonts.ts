import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const newYork = localFont({
  src: [
    {
      path: "../../public/fonts/NewYork PERSONAL USE.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-newyork",
  display: "swap",
});
