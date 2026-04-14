import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
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
    <html suppressHydrationWarning className={montserrat.variable}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
