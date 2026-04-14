export interface Course {
  id: string;
  slug: string;
  title_ru: string;
  title_tj: string;
  description_ru: string;
  description_tj: string;
  program_ru: ProgramModule[];
  program_tj: ProgramModule[];
  duration: string;
  price_from: number;
  category: CourseCategory;
  image_url: string;
  is_active: boolean;
  order_index: number;
}

export interface ProgramModule {
  title: string;
  topics: string[];
}

export type CourseCategory =
  | "cluster_5"
  | "cluster_4"
  | "cluster_3"
  | "cluster_1"
  | "abroad"
  | "english"
  | "math";

export interface Teacher {
  id: string;
  name_ru: string;
  name_tj: string;
  subject_ru: string;
  subject_tj: string;
  bio_ru: string;
  bio_tj: string;
  experience_years: number;
  photo_url: string;
  order_index: number;
}

export interface Branch {
  id: string;
  city_ru: string;
  city_tj: string;
  address_ru: string;
  address_tj: string;
  phone: string;
  working_hours: string;
  latitude: number;
  longitude: number;
  photos: string[];
}

export interface Review {
  id: string;
  student_name: string;
  university: string;
  course_id: string;
  text_ru: string;
  text_tj: string;
  photo_url: string;
  video_url: string | null;
  year: number;
}

export interface Post {
  id: string;
  slug: string;
  title_ru: string;
  title_tj: string;
  content_ru: string;
  content_tj: string;
  cover_url: string;
  author: string;
  published_at: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  course_id: string | null;
  branch_id: string | null;
  message: string | null;
  source: string;
  status: "new" | "contacted" | "enrolled" | "rejected";
  created_at: string;
}

/** Helper to pick localized field */
export function localized<T extends Record<string, unknown>>(
  item: T,
  field: string,
  locale: string
): string {
  return (item[`${field}_${locale}`] as string) || (item[`${field}_ru`] as string) || "";
}
