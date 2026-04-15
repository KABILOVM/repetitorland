import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Target, History, Heart, Award, Users, TrendingUp } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { CtaBlock } from "@/components/sections/cta-block";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  const values = [
    { icon: Award, key: "value1" as const },
    { icon: Users, key: "value2" as const },
    { icon: TrendingUp, key: "value3" as const },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <AnimateOnScroll>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                  <Target className="size-6 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    {t("mission")}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t("missionText")}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                  <History className="size-6 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    {t("history")}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t("historyText")}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            {t("values")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.key} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-card text-center">
                  <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="size-7 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(v.key)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`${v.key}desc`)}
                  </p>
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
