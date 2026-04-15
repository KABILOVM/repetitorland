-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Courses
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title_ru TEXT NOT NULL,
  title_tj TEXT NOT NULL,
  description_ru TEXT NOT NULL DEFAULT '',
  description_tj TEXT NOT NULL DEFAULT '',
  program_ru JSONB DEFAULT '[]'::jsonb,
  program_tj JSONB DEFAULT '[]'::jsonb,
  duration TEXT NOT NULL DEFAULT '',
  price_from INT NOT NULL DEFAULT 0,
  category TEXT NOT NULL CHECK (category IN ('cluster_5','cluster_4','cluster_3','cluster_1','abroad','english','math')),
  image_url TEXT DEFAULT '',
  is_active BOOLEAN DEFAULT TRUE,
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Teachers
CREATE TABLE teachers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_ru TEXT NOT NULL,
  name_tj TEXT NOT NULL,
  subject_ru TEXT NOT NULL DEFAULT '',
  subject_tj TEXT NOT NULL DEFAULT '',
  bio_ru TEXT NOT NULL DEFAULT '',
  bio_tj TEXT NOT NULL DEFAULT '',
  experience_years INT DEFAULT 0,
  photo_url TEXT DEFAULT '',
  order_index INT DEFAULT 0
);

-- Course-Teacher M2M
CREATE TABLE course_teachers (
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES teachers(id) ON DELETE CASCADE,
  PRIMARY KEY (course_id, teacher_id)
);

-- Branches
CREATE TABLE branches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  city_ru TEXT NOT NULL,
  city_tj TEXT NOT NULL,
  address_ru TEXT NOT NULL,
  address_tj TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  working_hours TEXT NOT NULL DEFAULT '',
  latitude FLOAT,
  longitude FLOAT,
  photos TEXT[] DEFAULT '{}'
);

-- Reviews
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name TEXT NOT NULL,
  university TEXT NOT NULL DEFAULT '',
  course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
  text_ru TEXT NOT NULL DEFAULT '',
  text_tj TEXT NOT NULL DEFAULT '',
  photo_url TEXT DEFAULT '',
  video_url TEXT DEFAULT '',
  year INT,
  is_published BOOLEAN DEFAULT FALSE
);

-- Blog Posts
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title_ru TEXT NOT NULL,
  title_tj TEXT NOT NULL,
  content_ru TEXT NOT NULL DEFAULT '',
  content_tj TEXT NOT NULL DEFAULT '',
  cover_url TEXT DEFAULT '',
  author TEXT NOT NULL DEFAULT '',
  published_at TIMESTAMPTZ DEFAULT NOW(),
  is_published BOOLEAN DEFAULT FALSE
);

-- Leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
  branch_id UUID REFERENCES branches(id) ON DELETE SET NULL,
  message TEXT DEFAULT '',
  source TEXT NOT NULL DEFAULT 'website',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','enrolled','rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_courses_active ON courses(is_active);
CREATE INDEX idx_reviews_published ON reviews(is_published);
CREATE INDEX idx_posts_published ON posts(is_published);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
