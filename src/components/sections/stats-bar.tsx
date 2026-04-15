"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  labelKey: string;
}

const stats: StatItem[] = [
  { value: 20, suffix: "+", labelKey: "years" },
  { value: 10000, suffix: "+", labelKey: "graduates" },
  { value: 15, suffix: "+", labelKey: "branches" },
  { value: 95, suffix: "%", labelKey: "admission" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="text-3xl md:text-4xl font-heading font-medium text-brand-500"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const t = useTranslations("stats");

  return (
    <section className="py-12 bg-bg-section border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm text-text-secondary">
                {t(stat.labelKey)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
