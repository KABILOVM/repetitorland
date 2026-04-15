import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { CoursesGrid } from "@/components/sections/courses-grid";
import { WhyUs } from "@/components/sections/why-us";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { BranchesPreview } from "@/components/sections/branches-preview";
import { CtaBlock } from "@/components/sections/cta-block";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StatsBar />
      <CoursesGrid />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <BranchesPreview />
      <CtaBlock />
    </>
  );
}
