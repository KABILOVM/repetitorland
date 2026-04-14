"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  ClipboardList,
  Search,
  BookOpen,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const steps = [
  {
    icon: ClipboardList,
    titleRu: "Заявка",
    titleTj: "Дархост",
    descRu: "Оставьте заявку на сайте или позвоните",
    descTj: "Дар сайт дархост гузоред ё занг занед",
  },
  {
    icon: Search,
    titleRu: "Диагностика",
    titleTj: "Ташхис",
    descRu: "Определим ваш уровень знаний",
    descTj: "Сатҳи донишҳои шуморо муайян мекунем",
  },
  {
    icon: BookOpen,
    titleRu: "Программа",
    titleTj: "Барнома",
    descRu: "Подберём индивидуальную программу",
    descTj: "Барномаи инфиродӣ интихоб мекунем",
  },
  {
    icon: Trophy,
    titleRu: "Результат",
    titleTj: "Натиҷа",
    descRu: "Поступление в вуз мечты",
    descTj: "Дохилшавӣ ба донишгоҳи орзуӣ",
  },
];

export function HowItWorks() {
  const t = useTranslations("sections");
  const locale = useLocale();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            {t("howItWorks")}
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15}>
              <div className="relative text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] hidden lg:flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-brand-300" />
                  </div>
                )}
                <h3 className="font-heading font-medium text-lg">
                  {locale === "tj" ? step.titleTj : step.titleRu}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {locale === "tj" ? step.descTj : step.descRu}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
