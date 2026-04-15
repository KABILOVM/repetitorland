"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  Award,
  BookOpen,
  Users,
  MapPin,
  GraduationCap,
  Building,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const reasons = [
  {
    icon: Award,
    titleRu: "Первый центр в стране",
    titleTj: "Аввалин марказ дар кишвар",
  },
  {
    icon: BookOpen,
    titleRu: "Лицензированная деятельность",
    titleTj: "Фаъолияти литсензиядор",
  },
  {
    icon: GraduationCap,
    titleRu: "Собственные методики",
    titleTj: "Усулҳои хусусӣ",
  },
  {
    icon: Users,
    titleRu: "Опытные преподаватели",
    titleTj: "Омӯзгорони ботаҷриба",
  },
  {
    icon: MapPin,
    titleRu: "Филиалы по всей стране",
    titleTj: "Филиалҳо дар саросари кишвар",
  },
  {
    icon: Building,
    titleRu: "Современные аудитории",
    titleTj: "Аудиторияҳои муосир",
  },
];

export function WhyUs() {
  const t = useTranslations("sections");
  const locale = useLocale();

  return (
    <section className="py-20 bg-bg-section">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            {t("whyUs")}
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-lg">
                    {locale === "tj" ? reason.titleTj : reason.titleRu}
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
