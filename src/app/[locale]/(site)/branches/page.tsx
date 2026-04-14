import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Clock } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { BranchMap } from "@/components/branches/branch-map";
import { localized } from "@/types";
import { mockBranches } from "@/lib/mock-data";
import { CtaBlock } from "@/components/sections/cta-block";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "branchesPage" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function BranchesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "branchesPage" });
  const branches = mockBranches;

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

      {/* Map */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <BranchMap branches={branches} locale={locale} />
          </div>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {branches.map((branch, i) => (
              <AnimateOnScroll key={branch.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {localized(branch, "city", locale)}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <MapPin className="size-5 text-brand-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900">
                          {t("address")}:
                        </span>{" "}
                        {localized(branch, "address", locale)}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Phone className="size-5 text-brand-500 shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">
                          {t("phone")}:
                        </span>{" "}
                        <a
                          href={`tel:${branch.phone.replace(/\s/g, "")}`}
                          className="hover:text-brand-600 transition-colors"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock className="size-5 text-brand-500 shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">
                          {t("workingHours")}:
                        </span>{" "}
                        {branch.working_hours}
                      </div>
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
