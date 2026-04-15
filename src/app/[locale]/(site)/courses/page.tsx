import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { CategoryFilter } from "@/components/courses/category-filter";
import { CourseList } from "@/components/courses/course-list";
import { mockCourses } from "@/lib/mock-data";
import { CtaBlock } from "@/components/sections/cta-block";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "courses" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "courses" });

  // In production, replace with: const courses = await getCourses();
  const courses = mockCourses;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t("subtitle")}
          </p>
          <Suspense fallback={null}>
            <CategoryFilter />
          </Suspense>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Suspense fallback={<CourseGridSkeleton />}>
            <CourseList courses={courses} />
          </Suspense>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}

function CourseGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl bg-gray-100 animate-pulse h-[380px]"
        />
      ))}
    </div>
  );
}
