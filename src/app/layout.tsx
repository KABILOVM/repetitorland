import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Репетитор — №1 в Таджикистане по подготовке к экзаменам",
  description:
    "Учебный центр «Репетитор» — 20+ лет опыта подготовки к вступительным экзаменам. Курсы для медвузов, кластеров, зарубежных вузов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${montserrat.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
