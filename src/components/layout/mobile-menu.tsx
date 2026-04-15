"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";

const navItems = [
  { key: "courses", href: "/courses" },
  { key: "about", href: "/about" },
  { key: "teachers", href: "/teachers" },
  { key: "branches", href: "/branches" },
  { key: "reviews", href: "/reviews" },
  { key: "blog", href: "/blog" },
  { key: "contacts", href: "/contacts" },
] as const;

export function MobileMenu() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden p-2" aria-label="Открыть меню">
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-brand-500 transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="pt-4 border-t">
            <LanguageSwitcher />
          </div>
          <Button
            className="bg-brand-500 hover:bg-brand-600 mt-2"
            onClick={() => setOpen(false)}
          >
            {t("apply")}
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
