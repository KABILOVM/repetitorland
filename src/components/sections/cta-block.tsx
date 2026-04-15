"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function CtaBlock() {
  const t = useTranslations("cta");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="rounded-3xl bg-gradient-to-r from-brand-500 to-brand-700 p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              {t("subtitle")}
            </p>
            <Button className="bg-white text-brand-600 hover:bg-brand-50 px-8 h-12 text-base font-medium rounded-lg border-0">
              {t("apply")}
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
