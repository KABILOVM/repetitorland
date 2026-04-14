"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { CourseCategory } from "@/types";

const categories: (CourseCategory | "all")[] = [
  "all",
  "cluster_5",
  "cluster_4",
  "cluster_3",
  "cluster_1",
  "abroad",
  "english",
  "math",
];

export function CategoryFilter() {
  const t = useTranslations("courses");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = searchParams.get("category") || "all";

  function handleFilter(category: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all",
            active === cat
              ? "bg-brand-500 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-brand-50 hover:text-brand-600"
          )}
        >
          {t(cat)}
        </button>
      ))}
    </div>
  );
}
