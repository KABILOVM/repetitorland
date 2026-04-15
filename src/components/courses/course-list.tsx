"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { CourseCard } from "./course-card";
import type { Course } from "@/types";

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  const searchParams = useSearchParams();
  const t = useTranslations("courses");
  const category = searchParams.get("category");

  const filtered = category
    ? courses.filter((c) => c.category === category)
    : courses;

  if (filtered.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">{t("noCourses")}</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i} />
      ))}
    </div>
  );
}
