import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Young_Serif } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const youngSerif = Young_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
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
      className={`${jakartaSans.variable} ${youngSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF9F6] text-[#141416]">
        {children}
      </body>
    </html>
  );
}
