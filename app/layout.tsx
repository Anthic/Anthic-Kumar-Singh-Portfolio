import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Recoleta local font matching reference design typography exactly
const recoleta = localFont({
  src: "../public/recoleta/Recoleta-RegularDEMO.otf",
  variable: "--font-recoleta",
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT"],
  weight: "variable",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Anthic Kumar Singh — Portfolio",
  description: "Personal portfolio of Anthic Kumar Singh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${recoleta.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF9F6] text-[#141416]">
        {children}
      </body>
    </html>
  );
}
