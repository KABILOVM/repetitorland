"use client";

import { useTranslations, useLocale } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback } from "react";
import { mockReviews } from "@/lib/mock-data";
import { localized } from "@/types";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function Testimonials() {
  const t = useTranslations("sections");
  const locale = useLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-bg-section">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            {t("testimonials")}
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {mockReviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-card h-full">
                    <Quote className="w-8 h-8 text-brand-200 mb-4" />
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {localized(review, "text", locale)}
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-heading font-medium">
                        {review.student_name[0]}
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {review.student_name}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {review.university}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-brand-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-brand-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
