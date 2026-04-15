import type { MetadataRoute } from "next";
import { mockCourses } from "@/lib/mock-data";

const BASE_URL = "https://repetitor.tj";
const locales = ["ru", "tj"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/courses",
    "/about",
    "/teachers",
    "/branches",
    "/reviews",
    "/blog",
    "/contacts",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
          ),
        },
      });
    }
  }

  // Course detail pages
  for (const course of mockCourses) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/courses/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/courses/${course.slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
