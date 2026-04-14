import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, DollarSign, BookOpen, CheckCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { localized } from "@/types";
import type { ProgramModule } from "@/types";
import { mockCourses } from "@/lib/mock-data";
import { CtaBlock } from "@/components/sections/cta-block";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const course = mockCourses.find((c) => c.slug === slug);
  if (!course) return { title: "Not Found" };

  return {
    title: localized(course, "title", locale),
    description: localized(course, "description", locale),
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "courses" });

  // In production: const course = await getCourseBySlug(slug);
  const course = mockCourses.find((c) => c.slug === slug);
  if (!course) notFound();

  const program: ProgramModule[] =
    locale === "tj" ? course.program_tj : course.program_ru;

  return (
    <>
      {/* Breadcrumb / Back */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-28 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="size-4" />
            {t("backToCourses")}
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-4">
              {t(course.category)}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              {localized(course, "title", locale)}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {localized(course, "description", locale)}
            </p>

            {/* Key info row */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="size-5 text-brand-500" />
                <span>
                  <span className="font-semibold text-gray-900">{t("duration")}:</span>{" "}
                  {course.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign className="size-5 text-brand-500" />
                <span className="font-semibold text-gray-900">
                  {t("priceFrom", { price: course.price_from })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program accordion */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="size-6 text-brand-500" />
            {t("program")}
          </h2>

          <Accordion>
            {program.map((mod, i) => (
              <AccordionItem key={i} value={`module-${i}`}>
                <AccordionTrigger className="text-base font-semibold">
                  {mod.title}
                  <span className="ml-2 text-xs font-normal text-gray-400">
                    ({mod.topics.length})
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-1">
                    {mod.topics.map((topic, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <CheckCircle className="size-4 text-brand-500 mt-0.5 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA button */}
          <div className="mt-10 text-center">
            <Button
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 text-base h-auto rounded-xl shadow-lg"
              render={<Link href="/contacts" />}
            >
              {t("apply")}
            </Button>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
