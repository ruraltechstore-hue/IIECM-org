export interface CourseModule {
  title: string;
  summary: string;
  topics?: string[];
  durationWeeks?: string;
  projectMilestone?: string;
}

export interface CourseReview {
  student_name: string;
  rating: number;
  review_text: string;
  role?: string;
  date?: string;
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
  badge?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Executive';
  aiHighlights?: {
    headline: string;
    description: string;
    skills: string[];
    aiImpactFactor?: string;
  };
  toolsAndTech?: string[];
  capstoneProject?: {
    title: string;
    description: string;
    deliverables: string[];
  };
  careerOutcomes?: {
    roles: string[];
    salaryRange?: string;
    keyHiringSectors: string[];
  };
  keyTakeaways?: string[];
  prerequisites?: string;
  enrolledCount?: number;
  rating?: number;
  reviewsCount?: number;
  certificateDetails?: {
    title: string;
    issuingBody: string;
    perks: string[];
  };
  /** Optional demo reviews (static / bundled data). */
  reviews?: CourseReview[];
}

export function courseCoverPath(slug: string): string {
  return `/courses/${slug}.jpg`;
}
