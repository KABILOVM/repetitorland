import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { GraduationCap, User } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { localized } from "@/types";
import { mockTeachers } from "@/lib/mock-data";
import { CtaBlock } from "@/components/sections/cta-block";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "teachers" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function TeachersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "teachers" });
  const teachers = mockTeachers;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachers.map((teacher, i) => (
              <AnimateOnScroll key={teacher.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                  {/* Photo placeholder */}
                  <div className="h-56 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                    <User className="size-20 text-brand-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {localized(teacher, "name", locale)}
                    </h3>
                    <p className="text-brand-600 font-medium text-sm mb-2">
                      {localized(teacher, "subject", locale)}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      {localized(teacher, "bio", locale)}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <GraduationCap className="size-4" />
                      {t("experience", { years: teacher.experience_years })}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
