import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { BranchMap } from "@/components/branches/branch-map";
import { mockBranches } from "@/lib/mock-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contacts" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contacts" });
  const tFooter = await getTranslations({ locale, namespace: "footer" });
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

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl shadow-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="size-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t("phone")}
                </h3>
                <a
                  href="tel:+992900123456"
                  className="text-brand-600 hover:text-brand-700 transition-colors text-sm"
                >
                  +992 900 123 456
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl shadow-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="size-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t("email")}
                </h3>
                <a
                  href="mailto:info@repetitor.tj"
                  className="text-brand-600 hover:text-brand-700 transition-colors text-sm"
                >
                  info@repetitor.tj
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="bg-white rounded-2xl shadow-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="size-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t("address")}
                </h3>
                <p className="text-sm text-gray-600">
                  г. Душанбе, ул. Рудаки 120
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div className="bg-white rounded-2xl shadow-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="size-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {tFooter("schedule")}
                </h3>
                <p className="text-sm text-gray-600">
                  {tFooter("weekdays")}
                  <br />
                  {tFooter("weekend")}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Telegram CTA */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-8 text-center text-white">
            <MessageCircle className="size-10 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-2">
              {t("sendMessage")}
            </h2>
            <p className="text-brand-100 mb-6 text-sm">
              Telegram / WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.me/repetitor_tj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-600 font-semibold hover:bg-brand-50 transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/992900123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <BranchMap branches={branches} locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
