import { createClient } from "@/lib/supabase/server";
import type { Course, Teacher, Branch, Review, Post } from "@/types";

export async function getCourses(category?: string): Promise<Course[]> {
  const supabase = await createClient();
  let query = supabase
    .from("courses")
    .select("*")
    .eq("is_active", true)
    .order("order_index");

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as Course[];
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error) return null;
  return data as Course;
}

export async function getTeachers(): Promise<Teacher[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("teachers")
    .select("*")
    .order("order_index");

  if (error) throw error;
  return data as Teacher[];
}

export async function getBranches(): Promise<Branch[]> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("branches").select("*");

  if (error) throw error;
  return data as Branch[];
}

export async function getReviews(courseId?: string): Promise<Review[]> {
  const supabase = await createClient();
  let query = supabase
    .from("reviews")
    .select("*")
    .eq("is_published", true)
    .order("year", { ascending: false });

  if (courseId) {
    query = query.eq("course_id", courseId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as Review[];
}

export async function getPosts(limit?: number): Promise<Post[]> {
  const supabase = await createClient();
  let query = supabase
    .from("posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as Post[];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) return null;
  return data as Post;
}
