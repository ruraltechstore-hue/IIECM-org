export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  published_at: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-skills-for-working-professionals',
    title: 'AI Skills Every Working Professional Should Build in 2026',
    excerpt:
      'Practical ways to use generative AI responsibly at work—from prompting to workflow design—without replacing human judgment.',
    content: `Generative AI is now part of many workplaces. The goal is not to automate people out of jobs overnight, but to raise the floor on productivity and communication.

Start with clear prompts: state the role, the audience, constraints, and the output format. Iterate in short cycles rather than asking for a perfect answer in one shot.

Next, connect tools to real workflows: drafting emails, summarizing meetings, turning notes into structured plans. Keep sensitive data out of public tools unless your organization approves it.

Finally, invest in judgment: fact-check outputs, cite sources when needed, and know when to skip automation entirely. The strongest professionals in 2026 pair AI fluency with domain expertise.`,
    author: 'IIECM Editorial',
    category: 'Artificial Intelligence',
    published_at: '2026-03-15T10:00:00.000Z',
  },
  {
    id: '2',
    slug: 'career-pivots-with-online-credentials',
    title: 'How to Plan a Career Pivot Using Structured Online Learning',
    excerpt:
      'A simple framework for mapping skills gaps, choosing credible programs, and showing proof of learning to employers.',
    content: `Career pivots work best when they are intentional. Begin by listing target roles and the skills those roles require. Compare that list to your current strengths.

Choose learning paths that offer clear outcomes: projects you can show, assessments you can mention in interviews, and timelines you can stick to.

When you apply, lead with outcomes. Employers care less about course titles and more about what you built, measured, or improved. Pair credentials with a small portfolio or case study.

Stay consistent. Short, regular study blocks beat occasional marathon sessions. Track progress weekly so motivation does not depend on inspiration alone.`,
    author: 'IIECM Editorial',
    category: 'Career Development',
    published_at: '2026-02-01T10:00:00.000Z',
  },
];

function byPublishedDateDesc(a: BlogPost, b: BlogPost): number {
  return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
}

/** All posts, newest first (static content is treated as published). */
export function getAllPublishedBlogs(): BlogPost[] {
  return [...blogPosts].sort(byPublishedDateDesc);
}

export function getBlogsByCategory(selectedCategory: 'all' | string): BlogPost[] {
  const all = getAllPublishedBlogs();
  if (selectedCategory === 'all') return all;
  return all.filter((b) => b.category === selectedCategory);
}

export function getBlogBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return blogPosts.find((b) => b.slug === slug);
}
