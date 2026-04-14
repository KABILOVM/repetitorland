"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 rounded transition-colors ${
            locale === loc
              ? "bg-brand-500 text-white"
              : "text-text-secondary hover:text-brand-500"
          }`}
        >
          {loc === "ru" ? "RU" : "TJ"}
        </button>
      ))}
    </div>
  );
}
