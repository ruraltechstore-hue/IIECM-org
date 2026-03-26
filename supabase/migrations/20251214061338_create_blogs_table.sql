/*
  # Create Blogs Table

  ## New Tables
  
  ### blogs
  Stores blog posts and articles for the IIECM website.
  - `id` (uuid, primary key)
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly identifier
  - `excerpt` (text) - Short description/preview
  - `content` (text) - Full blog content
  - `author` (text) - Author name
  - `category` (text) - Blog category
  - `image_url` (text) - Featured image URL
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## Security
  - Enable RLS on blogs table
  - Public read access for published blogs
  - Authenticated users can view all blogs
*/

CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text DEFAULT 'IIECM Team',
  category text DEFAULT 'General',
  image_url text,
  published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published blogs"
  ON blogs FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published, published_at DESC);