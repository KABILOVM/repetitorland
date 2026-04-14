"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { localized } from "@/types";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const locale = useLocale();
  const t = useTranslations("courses");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/courses/${course.slug}`}
        className="group block h-full rounded-2xl bg-white border border-gray-100 shadow-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
      >
        {/* Image placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-brand-100 to-brand-200 overflow-hidden">
          <div className="absolute inset-0 bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors" />
          <div className="absolute bottom-3 left-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-brand-600">
              {t(course.category)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
            {localized(course, "title", locale)}
          </h3>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {localized(course, "description", locale)}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="size-4" />
                {course.duration}
              </span>
            </div>
            <span className="text-brand-600 font-bold text-sm">
              {t("priceFrom", { price: course.price_from })}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-1 text-brand-500 font-medium text-sm group-hover:gap-2 transition-all">
            {t("details")}
            <ArrowRight className="size-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
