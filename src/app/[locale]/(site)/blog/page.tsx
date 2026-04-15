import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { CtaBlock } from "@/components/sections/cta-block";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });

  // In production: const posts = await getPosts();
  const posts: { id: string; slug: string }[] = []; // Empty for now

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

      {/* Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-16 text-lg">
              {t("noPosts")}
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Blog cards would go here */}
            </div>
          )}
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
