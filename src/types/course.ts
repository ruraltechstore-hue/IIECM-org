export interface CourseModule {
  title: string;
  summary: string;
}

export interface CourseReview {
  student_name: string;
  rating: number;
  review_text: string;
}

export interface Course {
  title: string;
  slug: string;
  category: string;
  short_description: string;
  description: string | null;
  target_audience: string[];
  modules: CourseModule[];
  price: number;
  duration: string | null;
  mode: string;
  /** Optional demo reviews (not loaded from Supabase). */
  reviews?: CourseReview[];
}

export function courseCoverPath(slug: string): string {
  return `/courses/${slug}.jpg`;
}
