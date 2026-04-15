"use client";

import { useTranslations, useLocale } from "next-intl";
import { MapPin, Phone, Clock } from "lucide-react";
import { mockBranches } from "@/lib/mock-data";
import { localized } from "@/types";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function BranchesPreview() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            {t("sections.ourBranches")}
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBranches.map((branch, i) => (
            <AnimateOnScroll key={branch.id} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-white shadow-card">
                <h3 className="font-heading text-lg font-medium mb-3">
                  {localized(branch, "city", locale)}
                </h3>
                <div className="flex flex-col gap-2 text-sm text-text-secondary">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                    {localized(branch, "address", locale)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                    {branch.phone}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                    {branch.working_hours}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            render={<Link href="/branches" />}
            className="border-brand-500 text-brand-500"
          >
            {t("branches.allOnMap")}
          </Button>
        </div>
      </div>
    </section>
  );
}
