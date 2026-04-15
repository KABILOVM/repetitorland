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
  title: {
    default: "Репетитор — №1 в Таджикистане по подготовке к экзаменам",
    template: "%s | Репетитор",
  },
  description:
    "Учебный центр «Репетитор» — 20+ лет опыта подготовки к вступительным экзаменам. Курсы для медвузов, кластеров, зарубежных вузов.",
  metadataBase: new URL("https://repetitor.tj"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Репетитор",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Репетитор" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      ru: "https://repetitor.tj/ru",
      tg: "https://repetitor.tj/tj",
    },
  },
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
