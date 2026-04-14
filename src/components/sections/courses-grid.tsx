"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Stethoscope,
  Calculator,
  FlaskConical,
  Globe,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const directions = [
  {
    slug: "med-cluster-5",
    icon: Stethoscope,
    titleRu: "Медвузы (кластер 5)",
    titleTj: "Донишгоҳҳои тиббӣ (кластери 5)",
    color: "from-red-500 to-pink-500",
  },
  {
    slug: "cluster-4",
    icon: Calculator,
    titleRu: "Кластер 4",
    titleTj: "Кластери 4",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "cluster-3",
    icon: FlaskConical,
    titleRu: "Кластер 3",
    titleTj: "Кластери 3",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "cluster-1",
    icon: GraduationCap,
    titleRu: "Кластер 1",
    titleTj: "Кластери 1",
    color: "from-purple-500 to-violet-500",
  },
  {
    slug: "abroad",
    icon: Globe,
    titleRu: "Зарубежные вузы",
    titleTj: "Донишгоҳҳои хориҷӣ",
    color: "from-orange-500 to-amber-500",
  },
  {
    slug: "english",
    icon: BookOpen,
    titleRu: "Английский язык",
    titleTj: "Забони англисӣ",
    color: "from-brand-500 to-brand-600",
  },
  {
    slug: "math",
    icon: Calculator,
    titleRu: "Математика",
    titleTj: "Математика",
    color: "from-yellow-500 to-orange-500",
  },
];

export function CoursesGrid() {
  const t = useTranslations("sections");
  const locale = useLocale();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            {t("courseDirections")}
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((dir, i) => (
            <AnimateOnScroll key={dir.slug} delay={i * 0.1}>
              <Link href={`/courses/${dir.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative p-6 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dir.color} flex items-center justify-center mb-4`}
                  >
                    <dir.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-medium">
                    {locale === "tj" ? dir.titleTj : dir.titleRu}
                  </h3>
                  <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </motion.div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
