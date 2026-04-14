"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";

const navItems = [
  { key: "courses", href: "/courses" },
  { key: "about", href: "/about" },
  { key: "teachers", href: "/teachers" },
  { key: "branches", href: "/branches" },
  { key: "reviews", href: "/reviews" },
  { key: "blog", href: "/blog" },
  { key: "contacts", href: "/contacts" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl text-brand-500 font-medium">
            Репетитор
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-text-secondary hover:text-brand-500 transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button className="bg-brand-500 hover:bg-brand-600 text-white">
            {t("apply")}
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
