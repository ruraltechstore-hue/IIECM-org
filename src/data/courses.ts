import type { Course } from '../types/course';

export const courses: Course[] = [
  {
    title: 'Introduction to Generative AI for Professionals',
    slug: 'intro-generative-ai',
    category: 'Artificial Intelligence & Future Skills',
    short_description:
      'Learn how large language models and generative tools work and how to apply them responsibly at work.',
    description:
      'Covers foundations of generative AI, prompt patterns, tooling landscape, and practical workflows for productivity and creativity.',
    target_audience: ['Working professionals', 'Students', 'Entrepreneurs'],
    modules: [
      { title: 'Foundations of Generative AI', summary: 'Models, tokens, and safe use.' },
      { title: 'Prompting & Workflows', summary: 'Patterns for reliable outputs.' },
      { title: 'Tools & Integration', summary: 'Applying AI in daily tasks.' },
    ],
    price: 12999,
    duration: '6 weeks',
    mode: 'Online',
    reviews: [
      {
        student_name: 'Ananya R.',
        rating: 5,
        review_text: 'Clear explanations and immediately useful for my day job. The LMS materials are strong.',
      },
      {
        student_name: 'Vikram M.',
        rating: 4,
        review_text: 'Well structured. Would have liked one more live Q&A session, but overall excellent value.',
      },
    ],
  },
  {
    title: 'Machine Learning Fundamentals',
    slug: 'machine-learning-fundamentals',
    category: 'Artificial Intelligence & Future Skills',
    short_description:
      'Build intuition for supervised learning, evaluation, and core algorithms with hands-on exercises.',
    description:
      'From data preparation to model selection and basic neural network concepts, aligned with industry practice.',
    target_audience: ['Aspiring data scientists', 'Developers', 'Analysts'],
    modules: [
      { title: 'Data & Features', summary: 'Cleaning, splits, and leakage.' },
      { title: 'Classical ML', summary: 'Regression, trees, ensembles.' },
      { title: 'Neural Networks Intro', summary: 'Basics of deep learning.' },
    ],
    price: 14999,
    duration: '8 weeks',
    mode: 'LMS',
  },
  {
    title: 'Prompt Engineering & AI Workflow Design',
    slug: 'prompt-engineering-ai-workflows',
    category: 'Artificial Intelligence & Future Skills',
    short_description:
      'Design robust prompts, chains, and evaluation habits for LLM-based applications.',
    description:
      'Structured prompting, few-shot design, guardrails, and lightweight automation patterns.',
    target_audience: ['Developers', 'Product managers', 'Consultants'],
    modules: [
      { title: 'Prompt Patterns', summary: 'Instruction, role, and format.' },
      { title: 'Chains & Tools', summary: 'Multi-step workflows.' },
      { title: 'Quality & Safety', summary: 'Evaluation and limits.' },
    ],
    price: 9999,
    duration: '4 weeks',
    mode: 'Online',
  },
  {
    title: 'Full Stack Web Development',
    slug: 'full-stack-web-development',
    category: 'Technical & IT Programs',
    short_description:
      'Modern HTML/CSS/JS, a backend stack, databases, and deployment for end-to-end web apps.',
    description: 'Project-based path from UI to API design, auth basics, and hosting.',
    target_audience: ['Beginners', 'Career switchers', 'Students'],
    modules: [
      { title: 'Frontend Foundations', summary: 'Components, routing, state.' },
      { title: 'Backend & APIs', summary: 'REST, validation, persistence.' },
      { title: 'Deploy & DevOps Intro', summary: 'CI, envs, monitoring.' },
    ],
    price: 24999,
    duration: '12 weeks',
    mode: 'Hybrid',
  },
  {
    title: 'Python for Data Analysis',
    slug: 'python-data-analysis',
    category: 'Technical & IT Programs',
    short_description:
      'Use Python, pandas, and visualization libraries to analyze and present real datasets.',
    description: 'Notebook workflows, aggregation, cleaning, and storytelling with charts.',
    target_audience: ['Analysts', 'Managers', 'Developers'],
    modules: [
      { title: 'Python Core', summary: 'Syntax and scripting.' },
      { title: 'Pandas & Cleaning', summary: 'Tables and missing data.' },
      { title: 'Visualization', summary: 'Plots and dashboards.' },
    ],
    price: 11999,
    duration: '6 weeks',
    mode: 'Online',
  },
  {
    title: 'Cloud Computing Essentials (AWS/Azure)',
    slug: 'cloud-computing-essentials',
    category: 'Technical & IT Programs',
    short_description:
      'Core cloud concepts: compute, storage, networking, IAM, and cost-aware design.',
    description: 'Hands-on labs for provisioning resources and securing simple architectures.',
    target_audience: ['IT professionals', 'Developers', 'Sysadmins'],
    modules: [
      { title: 'Cloud Models & IAM', summary: 'Shared responsibility and access.' },
      { title: 'Compute & Storage', summary: 'VMs, objects, databases.' },
      { title: 'Networking & Scale', summary: 'VPCs, load balancing intro.' },
    ],
    price: 17999,
    duration: '8 weeks',
    mode: 'LMS',
  },
  {
    title: 'Business Communication & Presentation Skills',
    slug: 'business-communication-presentation',
    category: 'Professional Skills',
    short_description:
      'Write clearly, present with impact, and handle professional conversations with confidence.',
    description: 'Email etiquette, slide design, storytelling, and feedback loops.',
    target_audience: ['Early-career professionals', 'Team leads', 'Sales & support'],
    modules: [
      { title: 'Written Communication', summary: 'Clarity and tone.' },
      { title: 'Presentations', summary: 'Structure and delivery.' },
      { title: 'Meetings & Feedback', summary: 'Collaboration habits.' },
    ],
    price: 4999,
    duration: '4 weeks',
    mode: 'Online',
  },
  {
    title: 'Project Management Fundamentals',
    slug: 'project-management-fundamentals',
    category: 'Professional Skills',
    short_description:
      'Plan, track, and deliver projects using practical frameworks and lightweight tools.',
    description: 'Scope, schedule, risk, and stakeholder basics suitable for any domain.',
    target_audience: ['Individual contributors', 'New managers', 'Consultants'],
    modules: [
      { title: 'Initiation & Scope', summary: 'Goals and requirements.' },
      { title: 'Scheduling & Tracking', summary: 'Milestones and burndown.' },
      { title: 'Risk & Closure', summary: 'Issues and retrospectives.' },
    ],
    price: 6999,
    duration: '5 weeks',
    mode: 'Online',
  },
  {
    title: 'Leadership & Team Management',
    slug: 'leadership-team-management',
    category: 'Professional Skills',
    short_description:
      'Build psychological safety, delegate effectively, and coach for performance.',
    description: 'One-on-ones, difficult conversations, and team rituals.',
    target_audience: ['New managers', 'Team leads', 'Entrepreneurs'],
    modules: [
      { title: 'Leadership Mindset', summary: 'Trust and accountability.' },
      { title: 'People Practices', summary: 'Goals and feedback.' },
      { title: 'Team Dynamics', summary: 'Conflict and alignment.' },
    ],
    price: 8999,
    duration: '6 weeks',
    mode: 'Hybrid',
  },
  {
    title: 'E-Commerce Store Setup & Operations',
    slug: 'ecommerce-store-setup',
    category: 'E-Commerce & Digital Marketing',
    short_description:
      'Launch and run an online store: catalog, payments, shipping, and basic analytics.',
    description: 'Platform walkthrough, conversion basics, and customer support workflows.',
    target_audience: ['Entrepreneurs', 'Small business owners', 'Students'],
    modules: [
      { title: 'Store Setup', summary: 'Catalog and checkout.' },
      { title: 'Operations', summary: 'Inventory and fulfillment.' },
      { title: 'Analytics', summary: 'Funnels and improvements.' },
    ],
    price: 8999,
    duration: '6 weeks',
    mode: 'Online',
  },
  {
    title: 'Digital Marketing & SEO Fundamentals',
    slug: 'digital-marketing-seo',
    category: 'E-Commerce & Digital Marketing',
    short_description:
      'Organic search, content strategy, and measurement for sustainable growth.',
    description: 'Keyword research, on-page SEO, technical basics, and analytics.',
    target_audience: ['Marketers', 'Founders', 'Freelancers'],
    modules: [
      { title: 'SEO Foundations', summary: 'Crawling and relevance.' },
      { title: 'Content Strategy', summary: 'Topics and calendars.' },
      { title: 'Measurement', summary: 'Search Console and goals.' },
    ],
    price: 7999,
    duration: '5 weeks',
    mode: 'LMS',
  },
  {
    title: 'Social Media Marketing & Growth',
    slug: 'social-media-marketing-growth',
    category: 'E-Commerce & Digital Marketing',
    short_description:
      'Plan campaigns, create thumb-stopping content, and iterate with data.',
    description: 'Channel fit, creatives, community, and paid/organic interplay.',
    target_audience: ['Creators', 'Brand managers', 'Agency beginners'],
    modules: [
      { title: 'Strategy & Positioning', summary: 'Audience and voice.' },
      { title: 'Content & Creative', summary: 'Formats and cadence.' },
      { title: 'Growth & Ads Intro', summary: 'Boosting and reporting.' },
    ],
    price: 6999,
    duration: '4 weeks',
    mode: 'Online',
  },
  {
    title: 'Diploma in Digital Business & E-Commerce',
    slug: 'diploma-digital-business-ecommerce',
    category: 'Diploma Programs',
    short_description:
      'Comprehensive diploma covering digital commerce models, operations, and growth levers.',
    description: 'Structured modules from marketplaces to analytics and compliance awareness.',
    target_audience: ['12th pass students', 'Career starters', 'Retail staff'],
    modules: [
      { title: 'Digital Commerce Landscape', summary: 'Models and players.' },
      { title: 'Operations & CX', summary: 'Orders and service.' },
      { title: 'Growth & Analytics', summary: 'Metrics and experiments.' },
    ],
    price: 44999,
    duration: '12 months',
    mode: 'Hybrid',
  },
  {
    title: 'Diploma in IT & Software Applications',
    slug: 'diploma-it-software-applications',
    category: 'Diploma Programs',
    short_description:
      'Practical IT skills: productivity suites, databases intro, and application support.',
    description: 'Hands-on labs and workplace scenarios.',
    target_audience: ['Students', 'Office administrators', 'Support staff'],
    modules: [
      { title: 'Productivity & OS', summary: 'Tools and security.' },
      { title: 'Databases Intro', summary: 'Tables and queries.' },
      { title: 'Support & Ticketing', summary: 'ITIL basics.' },
    ],
    price: 39999,
    duration: '10 months',
    mode: 'LMS',
  },
  {
    title: 'Diploma in AI-Enabled Business Operations',
    slug: 'diploma-ai-enabled-business',
    category: 'Diploma Programs',
    short_description:
      'Apply automation and AI assistants to streamline business processes responsibly.',
    description: 'Workflow mapping, tool selection, and change management.',
    target_audience: ['Operations teams', 'SMB owners', 'Analysts'],
    modules: [
      { title: 'Process Mapping', summary: 'Bottlenecks and KPIs.' },
      { title: 'Automation & AI', summary: 'Use cases and limits.' },
      { title: 'Rollout & Governance', summary: 'Policies and training.' },
    ],
    price: 47999,
    duration: '12 months',
    mode: 'Online',
  },
  {
    title: 'Bachelor of Business Administration (Digital Commerce)',
    slug: 'bba-digital-commerce',
    category: 'Degree Programs',
    short_description:
      'Undergraduate degree integrating management fundamentals with digital commerce and analytics.',
    description: 'Credit-based structure with projects and industry exposure.',
    target_audience: ['12th pass', 'Aspiring managers', 'Family business successors'],
    modules: [
      { title: 'Management Core', summary: 'Accounting, HR, marketing.' },
      { title: 'Digital Commerce', summary: 'Channels and platforms.' },
      { title: 'Analytics & Projects', summary: 'Data literacy and capstone.' },
    ],
    price: 185000,
    duration: '3 years',
    mode: 'Hybrid',
  },
  {
    title: 'Bachelor of Computer Applications (Industry Integrated)',
    slug: 'bca-industry-integrated',
    category: 'Degree Programs',
    short_description:
      'BCA with integrated projects, internships orientation, and modern stack exposure.',
    description: 'Programming, systems, and software engineering practices.',
    target_audience: ['12th Science/Commerce with Math', 'Tech aspirants'],
    modules: [
      { title: 'Programming & DS', summary: 'Core CS foundations.' },
      { title: 'Systems & DB', summary: 'OS and databases.' },
      { title: 'Industry Project', summary: 'Team software delivery.' },
    ],
    price: 165000,
    duration: '3 years',
    mode: 'Hybrid',
  },
  {
    title: 'Bachelor of Commerce (E-Business & Analytics)',
    slug: 'bcom-ebusiness-analytics',
    category: 'Degree Programs',
    short_description:
      'Commerce degree with e-business, accounting tech, and analytics applications.',
    description: 'Balances traditional commerce with digital tools.',
    target_audience: ['Commerce students', 'Finance & ops aspirants'],
    modules: [
      { title: 'Commerce Core', summary: 'Accounts and law.' },
      { title: 'E-Business', summary: 'Payments and compliance intro.' },
      { title: 'Analytics', summary: 'Excel to dashboards.' },
    ],
    price: 145000,
    duration: '3 years',
    mode: 'Online',
  },
  {
    title: 'MBA in E-Commerce & Digital Strategy',
    slug: 'mba-ecommerce-digital-strategy',
    category: 'Postgraduate Programs',
    short_description:
      'Strategic view of digital channels, platforms, and transformation for growth.',
    description: 'Case-based learning and capstone on digital strategy.',
    target_audience: ['Graduates with work experience', 'Managers', 'Entrepreneurs'],
    modules: [
      { title: 'Strategy & Economics', summary: 'Markets and moats.' },
      { title: 'Digital Growth', summary: 'Acquisition and retention.' },
      { title: 'Capstone', summary: 'Live business problem.' },
    ],
    price: 425000,
    duration: '2 years',
    mode: 'Hybrid',
  },
  {
    title: 'MCA with AI & Cloud Specialization',
    slug: 'mca-ai-cloud-specialization',
    category: 'Postgraduate Programs',
    short_description:
      'Advanced computing with electives in AI/ML and cloud-native development.',
    description: 'Research orientation and production-style projects.',
    target_audience: ['BCA/BSc CS graduates', 'Developers upskilling'],
    modules: [
      { title: 'Advanced Programming', summary: 'Systems and patterns.' },
      { title: 'AI & Cloud', summary: 'Models and services.' },
      { title: 'Thesis Project', summary: 'End-to-end build.' },
    ],
    price: 385000,
    duration: '2 years',
    mode: 'LMS',
  },
  {
    title: 'PG Diploma in Data Science & AI',
    slug: 'pg-diploma-data-science-ai',
    category: 'Postgraduate Programs',
    short_description:
      'Intensive PG diploma: statistics, ML, and applied AI projects.',
    description: 'Portfolio-ready projects and interview preparation.',
    target_audience: ['STEM graduates', 'Working analysts', 'Engineers'],
    modules: [
      { title: 'Math & Stats', summary: 'Probability and inference.' },
      { title: 'ML & Deep Learning', summary: 'Pipelines and tuning.' },
      { title: 'Applied AI', summary: 'Deployment and ethics.' },
    ],
    price: 199999,
    duration: '12 months',
    mode: 'Online',
  },
  {
    title: 'Certified E-Commerce Professional',
    slug: 'certified-ecommerce-professional',
    category: 'Certification Programs',
    short_description:
      'Industry-aligned certification covering store operations, marketplaces, and customer experience.',
    description: 'Assessment-based credential with practical checkpoints.',
    target_audience: ['Retail staff', 'Entrepreneurs', 'Career changers'],
    modules: [
      { title: 'E-Commerce Operations', summary: 'End-to-end flow.' },
      { title: 'Marketplaces', summary: 'Listings and policies.' },
      { title: 'Certification Exam', summary: 'Practical + theory.' },
    ],
    price: 12999,
    duration: '8 weeks',
    mode: 'Online',
  },
  {
    title: 'Certified Digital Marketing Associate',
    slug: 'certified-digital-marketing-associate',
    category: 'Certification Programs',
    short_description:
      'Foundation certification across SEO, paid media intro, and analytics.',
    description: 'Skills checklist and proctored assessment.',
    target_audience: ['Freshers', 'Freelancers', 'SMB marketers'],
    modules: [
      { title: 'Channels Overview', summary: 'Owned, earned, paid.' },
      { title: 'Campaign Basics', summary: 'Targeting and creatives.' },
      { title: 'Certification Exam', summary: 'Comprehensive test.' },
    ],
    price: 9999,
    duration: '6 weeks',
    mode: 'LMS',
  },
  {
    title: 'Certified AI & Automation Practitioner',
    slug: 'certified-ai-automation-practitioner',
    category: 'Certification Programs',
    short_description:
      'Certify practical ability to automate workflows and use AI tools safely.',
    description: 'Labs plus scenario-based evaluation.',
    target_audience: ['Operations', 'Developers', 'Consultants'],
    modules: [
      { title: 'Automation Patterns', summary: 'Triggers and integrations.' },
      { title: 'AI in the Workplace', summary: 'Policies and prompts.' },
      { title: 'Certification Exam', summary: 'Hands-on scenarios.' },
    ],
    price: 14999,
    duration: '7 weeks',
    mode: 'Hybrid',
  },
];

export function getCourseBySlug(slug: string | undefined): Course | undefined {
  if (!slug) return undefined;
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByCategory(category: string): Course[] {
  if (category === 'all') return courses;
  return courses.filter((c) => c.category === category);
}
