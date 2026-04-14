"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative blur circles */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-50"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] lg:leading-tight font-heading font-medium text-text-primary">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-xl">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                render={<Link href="/courses" />}
                className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 h-12 text-base rounded-lg border-0"
              >
                {t("chooseCourse")}
              </Button>
              <Button
                variant="outline"
                className="border-brand-500 text-brand-500 hover:bg-brand-50 px-8 h-12 text-base"
              >
                {t("freeConsultation")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-brand-500">
              <span className="text-8xl">🎓</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
