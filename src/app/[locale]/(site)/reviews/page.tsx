import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Quote, GraduationCap } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { localized } from "@/types";
import { mockReviews } from "@/lib/mock-data";
import { CtaBlock } from "@/components/sections/cta-block";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reviewsPage" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "reviewsPage" });
  const reviews = mockReviews;

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

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <AnimateOnScroll key={review.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-card p-6 relative">
                  <Quote className="size-8 text-brand-100 absolute top-4 right-4" />
                  <p className="text-gray-600 leading-relaxed mb-4 italic">
                    &ldquo;{localized(review, "text", locale)}&rdquo;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">
                      {review.student_name}
                    </p>
                    {review.university && (
                      <div className="flex items-center gap-1.5 text-sm text-brand-600 mt-1">
                        <GraduationCap className="size-4" />
                        {t("university")}: {review.university}
                      </div>
                    )}
                    {review.year && (
                      <p className="text-xs text-gray-400 mt-1">
                        {review.year}
                      </p>
                    )}
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
