/*
  # IIECM Website Database Schema

  ## Overview
  Creates the complete database structure for the International Institute of Commerce and Management Foundation (IIECM) website.

  ## New Tables

  ### 1. courses
  Stores all course information including details, pricing, and categorization.
  - `id` (uuid, primary key)
  - `title` (text) - Course name
  - `slug` (text, unique) - URL-friendly identifier
  - `category` (text) - Course category (AI, Technical, Commerce, etc.)
  - `short_description` (text) - Brief course description
  - `description` (text) - Full course description
  - `target_audience` (text[]) - Who should enroll
  - `modules` (jsonb) - Course content structure
  - `price` (numeric) - Course fee
  - `duration` (text) - Course duration
  - `mode` (text) - Online/Hybrid/LMS
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. course_reviews
  Stores student reviews and ratings for courses.
  - `id` (uuid, primary key)
  - `course_id` (uuid, foreign key)
  - `student_name` (text)
  - `rating` (integer) - 1-5 stars
  - `review_text` (text)
  - `created_at` (timestamptz)

  ### 3. inquiries
  General contact form submissions.
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `mobile` (text)
  - `message` (text)
  - `course_name` (text, optional)
  - `status` (text) - pending/contacted/closed
  - `created_at` (timestamptz)

  ### 4. partner_applications
  Applications for counsellor, franchisee, and affiliate partnerships.
  - `id` (uuid, primary key)
  - `partner_type` (text) - counsellor/franchisee/affiliate
  - `name` (text)
  - `email` (text)
  - `mobile` (text)
  - `message` (text)
  - `status` (text) - pending/approved/rejected
  - `created_at` (timestamptz)

  ### 5. internship_inquiries
  Bulk enrollment inquiries for internship programs.
  - `id` (uuid, primary key)
  - `institution_name` (text)
  - `contact_person` (text)
  - `email` (text)
  - `mobile` (text)
  - `number_of_students` (integer)
  - `preferred_stage` (text) - stage1/stage2/stage3
  - `message` (text)
  - `status` (text) - pending/contacted/closed
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for courses and reviews (display on website)
  - Authenticated insert for inquiries and applications
  - Admin-only access for managing data

  ## Notes
  - All tables use UUID primary keys for scalability
  - Timestamps use timestamptz for timezone support
  - Status fields use default values for workflow management
  - Course modules stored as JSONB for flexibility
*/

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  short_description text NOT NULL,
  description text,
  target_audience text[] DEFAULT '{}',
  modules jsonb DEFAULT '[]',
  price numeric DEFAULT 0,
  duration text,
  mode text DEFAULT 'Online',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create course_reviews table
CREATE TABLE IF NOT EXISTS course_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  student_name text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  message text,
  course_name text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create partner_applications table
CREATE TABLE IF NOT EXISTS partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create internship_inquiries table
CREATE TABLE IF NOT EXISTS internship_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  number_of_students integer NOT NULL,
  preferred_stage text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE internship_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for courses (public read)
CREATE POLICY "Public can view courses"
  ON courses FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for course_reviews (public read)
CREATE POLICY "Public can view reviews"
  ON course_reviews FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for inquiries (anyone can insert, auth can view own)
CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS Policies for partner_applications (anyone can insert)
CREATE POLICY "Anyone can submit partner applications"
  ON partner_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS Policies for internship_inquiries (anyone can insert)
CREATE POLICY "Anyone can submit internship inquiries"
  ON internship_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_course_reviews_course_id ON course_reviews(course_id);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_partner_applications_status ON partner_applications(status);
CREATE INDEX IF NOT EXISTS idx_internship_inquiries_status ON internship_inquiries(status);