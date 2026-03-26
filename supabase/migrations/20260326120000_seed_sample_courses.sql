-- Sample courses: ~3 per UI category (see src/pages/Courses.tsx). Idempotent on slug.

INSERT INTO public.courses (
  title,
  slug,
  category,
  short_description,
  description,
  target_audience,
  modules,
  price,
  duration,
  mode
) VALUES
  (
    'Introduction to Generative AI for Professionals',
    'intro-generative-ai',
    'Artificial Intelligence & Future Skills',
    'Learn how large language models and generative tools work and how to apply them responsibly at work.',
    'Covers foundations of generative AI, prompt patterns, tooling landscape, and practical workflows for productivity and creativity.',
    ARRAY['Working professionals', 'Students', 'Entrepreneurs'],
    '[
      {"title": "Foundations of Generative AI", "summary": "Models, tokens, and safe use."},
      {"title": "Prompting & Workflows", "summary": "Patterns for reliable outputs."},
      {"title": "Tools & Integration", "summary": "Applying AI in daily tasks."}
    ]'::jsonb,
    12999,
    '6 weeks',
    'Online'
  ),
  (
    'Machine Learning Fundamentals',
    'machine-learning-fundamentals',
    'Artificial Intelligence & Future Skills',
    'Build intuition for supervised learning, evaluation, and core algorithms with hands-on exercises.',
    'From data preparation to model selection and basic neural network concepts, aligned with industry practice.',
    ARRAY['Aspiring data scientists', 'Developers', 'Analysts'],
    '[
      {"title": "Data & Features", "summary": "Cleaning, splits, and leakage."},
      {"title": "Classical ML", "summary": "Regression, trees, ensembles."},
      {"title": "Neural Networks Intro", "summary": "Basics of deep learning."}
    ]'::jsonb,
    14999,
    '8 weeks',
    'LMS'
  ),
  (
    'Prompt Engineering & AI Workflow Design',
    'prompt-engineering-ai-workflows',
    'Artificial Intelligence & Future Skills',
    'Design robust prompts, chains, and evaluation habits for LLM-based applications.',
    'Structured prompting, few-shot design, guardrails, and lightweight automation patterns.',
    ARRAY['Developers', 'Product managers', 'Consultants'],
    '[
      {"title": "Prompt Patterns", "summary": "Instruction, role, and format."},
      {"title": "Chains & Tools", "summary": "Multi-step workflows."},
      {"title": "Quality & Safety", "summary": "Evaluation and limits."}
    ]'::jsonb,
    9999,
    '4 weeks',
    'Online'
  ),

  (
    'Full Stack Web Development',
    'full-stack-web-development',
    'Technical & IT Programs',
    'Modern HTML/CSS/JS, a backend stack, databases, and deployment for end-to-end web apps.',
    'Project-based path from UI to API design, auth basics, and hosting.',
    ARRAY['Beginners', 'Career switchers', 'Students'],
    '[
      {"title": "Frontend Foundations", "summary": "Components, routing, state."},
      {"title": "Backend & APIs", "summary": "REST, validation, persistence."},
      {"title": "Deploy & DevOps Intro", "summary": "CI, envs, monitoring."}
    ]'::jsonb,
    24999,
    '12 weeks',
    'Hybrid'
  ),
  (
    'Python for Data Analysis',
    'python-data-analysis',
    'Technical & IT Programs',
    'Use Python, pandas, and visualization libraries to analyze and present real datasets.',
    'Notebook workflows, aggregation, cleaning, and storytelling with charts.',
    ARRAY['Analysts', 'Managers', 'Developers'],
    '[
      {"title": "Python Core", "summary": "Syntax and scripting."},
      {"title": "Pandas & Cleaning", "summary": "Tables and missing data."},
      {"title": "Visualization", "summary": "Plots and dashboards."}
    ]'::jsonb,
    11999,
    '6 weeks',
    'Online'
  ),
  (
    'Cloud Computing Essentials (AWS/Azure)',
    'cloud-computing-essentials',
    'Technical & IT Programs',
    'Core cloud concepts: compute, storage, networking, IAM, and cost-aware design.',
    'Hands-on labs for provisioning resources and securing simple architectures.',
    ARRAY['IT professionals', 'Developers', 'Sysadmins'],
    '[
      {"title": "Cloud Models & IAM", "summary": "Shared responsibility and access."},
      {"title": "Compute & Storage", "summary": "VMs, objects, databases."},
      {"title": "Networking & Scale", "summary": "VPCs, load balancing intro."}
    ]'::jsonb,
    17999,
    '8 weeks',
    'LMS'
  ),

  (
    'Business Communication & Presentation Skills',
    'business-communication-presentation',
    'Professional Skills',
    'Write clearly, present with impact, and handle professional conversations with confidence.',
    'Email etiquette, slide design, storytelling, and feedback loops.',
    ARRAY['Early-career professionals', 'Team leads', 'Sales & support'],
    '[
      {"title": "Written Communication", "summary": "Clarity and tone."},
      {"title": "Presentations", "summary": "Structure and delivery."},
      {"title": "Meetings & Feedback", "summary": "Collaboration habits."}
    ]'::jsonb,
    4999,
    '4 weeks',
    'Online'
  ),
  (
    'Project Management Fundamentals',
    'project-management-fundamentals',
    'Professional Skills',
    'Plan, track, and deliver projects using practical frameworks and lightweight tools.',
    'Scope, schedule, risk, and stakeholder basics suitable for any domain.',
    ARRAY['Individual contributors', 'New managers', 'Consultants'],
    '[
      {"title": "Initiation & Scope", "summary": "Goals and requirements."},
      {"title": "Scheduling & Tracking", "summary": "Milestones and burndown."},
      {"title": "Risk & Closure", "summary": "Issues and retrospectives."}
    ]'::jsonb,
    6999,
    '5 weeks',
    'Online'
  ),
  (
    'Leadership & Team Management',
    'leadership-team-management',
    'Professional Skills',
    'Build psychological safety, delegate effectively, and coach for performance.',
    'One-on-ones, difficult conversations, and team rituals.',
    ARRAY['New managers', 'Team leads', 'Entrepreneurs'],
    '[
      {"title": "Leadership Mindset", "summary": "Trust and accountability."},
      {"title": "People Practices", "summary": "Goals and feedback."},
      {"title": "Team Dynamics", "summary": "Conflict and alignment."}
    ]'::jsonb,
    8999,
    '6 weeks',
    'Hybrid'
  ),

  (
    'E-Commerce Store Setup & Operations',
    'ecommerce-store-setup',
    'E-Commerce & Digital Marketing',
    'Launch and run an online store: catalog, payments, shipping, and basic analytics.',
    'Platform walkthrough, conversion basics, and customer support workflows.',
    ARRAY['Entrepreneurs', 'Small business owners', 'Students'],
    '[
      {"title": "Store Setup", "summary": "Catalog and checkout."},
      {"title": "Operations", "summary": "Inventory and fulfillment."},
      {"title": "Analytics", "summary": "Funnels and improvements."}
    ]'::jsonb,
    8999,
    '6 weeks',
    'Online'
  ),
  (
    'Digital Marketing & SEO Fundamentals',
    'digital-marketing-seo',
    'E-Commerce & Digital Marketing',
    'Organic search, content strategy, and measurement for sustainable growth.',
    'Keyword research, on-page SEO, technical basics, and analytics.',
    ARRAY['Marketers', 'Founders', 'Freelancers'],
    '[
      {"title": "SEO Foundations", "summary": "Crawling and relevance."},
      {"title": "Content Strategy", "summary": "Topics and calendars."},
      {"title": "Measurement", "summary": "Search Console and goals."}
    ]'::jsonb,
    7999,
    '5 weeks',
    'LMS'
  ),
  (
    'Social Media Marketing & Growth',
    'social-media-marketing-growth',
    'E-Commerce & Digital Marketing',
    'Plan campaigns, create thumb-stopping content, and iterate with data.',
    'Channel fit, creatives, community, and paid/organic interplay.',
    ARRAY['Creators', 'Brand managers', 'Agency beginners'],
    '[
      {"title": "Strategy & Positioning", "summary": "Audience and voice."},
      {"title": "Content & Creative", "summary": "Formats and cadence."},
      {"title": "Growth & Ads Intro", "summary": "Boosting and reporting."}
    ]'::jsonb,
    6999,
    '4 weeks',
    'Online'
  ),

  (
    'Diploma in Digital Business & E-Commerce',
    'diploma-digital-business-ecommerce',
    'Diploma Programs',
    'Comprehensive diploma covering digital commerce models, operations, and growth levers.',
    'Structured modules from marketplaces to analytics and compliance awareness.',
    ARRAY['12th pass students', 'Career starters', 'Retail staff'],
    '[
      {"title": "Digital Commerce Landscape", "summary": "Models and players."},
      {"title": "Operations & CX", "summary": "Orders and service."},
      {"title": "Growth & Analytics", "summary": "Metrics and experiments."}
    ]'::jsonb,
    44999,
    '12 months',
    'Hybrid'
  ),
  (
    'Diploma in IT & Software Applications',
    'diploma-it-software-applications',
    'Diploma Programs',
    'Practical IT skills: productivity suites, databases intro, and application support.',
    'Hands-on labs and workplace scenarios.',
    ARRAY['Students', 'Office administrators', 'Support staff'],
    '[
      {"title": "Productivity & OS", "summary": "Tools and security."},
      {"title": "Databases Intro", "summary": "Tables and queries."},
      {"title": "Support & Ticketing", "summary": "ITIL basics."}
    ]'::jsonb,
    39999,
    '10 months',
    'LMS'
  ),
  (
    'Diploma in AI-Enabled Business Operations',
    'diploma-ai-enabled-business',
    'Diploma Programs',
    'Apply automation and AI assistants to streamline business processes responsibly.',
    'Workflow mapping, tool selection, and change management.',
    ARRAY['Operations teams', 'SMB owners', 'Analysts'],
    '[
      {"title": "Process Mapping", "summary": "Bottlenecks and KPIs."},
      {"title": "Automation & AI", "summary": "Use cases and limits."},
      {"title": "Rollout & Governance", "summary": "Policies and training."}
    ]'::jsonb,
    47999,
    '12 months',
    'Online'
  ),

  (
    'Bachelor of Business Administration (Digital Commerce)',
    'bba-digital-commerce',
    'Degree Programs',
    'Undergraduate degree integrating management fundamentals with digital commerce and analytics.',
    'Credit-based structure with projects and industry exposure.',
    ARRAY['12th pass', 'Aspiring managers', 'Family business successors'],
    '[
      {"title": "Management Core", "summary": "Accounting, HR, marketing."},
      {"title": "Digital Commerce", "summary": "Channels and platforms."},
      {"title": "Analytics & Projects", "summary": "Data literacy and capstone."}
    ]'::jsonb,
    185000,
    '3 years',
    'Hybrid'
  ),
  (
    'Bachelor of Computer Applications (Industry Integrated)',
    'bca-industry-integrated',
    'Degree Programs',
    'BCA with integrated projects, internships orientation, and modern stack exposure.',
    'Programming, systems, and software engineering practices.',
    ARRAY['12th Science/Commerce with Math', 'Tech aspirants'],
    '[
      {"title": "Programming & DS", "summary": "Core CS foundations."},
      {"title": "Systems & DB", "summary": "OS and databases."},
      {"title": "Industry Project", "summary": "Team software delivery."}
    ]'::jsonb,
    165000,
    '3 years',
    'Hybrid'
  ),
  (
    'Bachelor of Commerce (E-Business & Analytics)',
    'bcom-ebusiness-analytics',
    'Degree Programs',
    'Commerce degree with e-business, accounting tech, and analytics applications.',
    'Balances traditional commerce with digital tools.',
    ARRAY['Commerce students', 'Finance & ops aspirants'],
    '[
      {"title": "Commerce Core", "summary": "Accounts and law."},
      {"title": "E-Business", "summary": "Payments and compliance intro."},
      {"title": "Analytics", "summary": "Excel to dashboards."}
    ]'::jsonb,
    145000,
    '3 years',
    'Online'
  ),

  (
    'MBA in E-Commerce & Digital Strategy',
    'mba-ecommerce-digital-strategy',
    'Postgraduate Programs',
    'Strategic view of digital channels, platforms, and transformation for growth.',
    'Case-based learning and capstone on digital strategy.',
    ARRAY['Graduates with work experience', 'Managers', 'Entrepreneurs'],
    '[
      {"title": "Strategy & Economics", "summary": "Markets and moats."},
      {"title": "Digital Growth", "summary": "Acquisition and retention."},
      {"title": "Capstone", "summary": "Live business problem."}
    ]'::jsonb,
    425000,
    '2 years',
    'Hybrid'
  ),
  (
    'MCA with AI & Cloud Specialization',
    'mca-ai-cloud-specialization',
    'Postgraduate Programs',
    'Advanced computing with electives in AI/ML and cloud-native development.',
    'Research orientation and production-style projects.',
    ARRAY['BCA/BSc CS graduates', 'Developers upskilling'],
    '[
      {"title": "Advanced Programming", "summary": "Systems and patterns."},
      {"title": "AI & Cloud", "summary": "Models and services."},
      {"title": "Thesis Project", "summary": "End-to-end build."}
    ]'::jsonb,
    385000,
    '2 years',
    'LMS'
  ),
  (
    'PG Diploma in Data Science & AI',
    'pg-diploma-data-science-ai',
    'Postgraduate Programs',
    'Intensive PG diploma: statistics, ML, and applied AI projects.',
    'Portfolio-ready projects and interview preparation.',
    ARRAY['STEM graduates', 'Working analysts', 'Engineers'],
    '[
      {"title": "Math & Stats", "summary": "Probability and inference."},
      {"title": "ML & Deep Learning", "summary": "Pipelines and tuning."},
      {"title": "Applied AI", "summary": "Deployment and ethics."}
    ]'::jsonb,
    199999,
    '12 months',
    'Online'
  ),

  (
    'Certified E-Commerce Professional',
    'certified-ecommerce-professional',
    'Certification Programs',
    'Industry-aligned certification covering store operations, marketplaces, and customer experience.',
    'Assessment-based credential with practical checkpoints.',
    ARRAY['Retail staff', 'Entrepreneurs', 'Career changers'],
    '[
      {"title": "E-Commerce Operations", "summary": "End-to-end flow."},
      {"title": "Marketplaces", "summary": "Listings and policies."},
      {"title": "Certification Exam", "summary": "Practical + theory."}
    ]'::jsonb,
    12999,
    '8 weeks',
    'Online'
  ),
  (
    'Certified Digital Marketing Associate',
    'certified-digital-marketing-associate',
    'Certification Programs',
    'Foundation certification across SEO, paid media intro, and analytics.',
    'Skills checklist and proctored assessment.',
    ARRAY['Freshers', 'Freelancers', 'SMB marketers'],
    '[
      {"title": "Channels Overview", "summary": "Owned, earned, paid."},
      {"title": "Campaign Basics", "summary": "Targeting and creatives."},
      {"title": "Certification Exam", "summary": "Comprehensive test."}
    ]'::jsonb,
    9999,
    '6 weeks',
    'LMS'
  ),
  (
    'Certified AI & Automation Practitioner',
    'certified-ai-automation-practitioner',
    'Certification Programs',
    'Certify practical ability to automate workflows and use AI tools safely.',
    'Labs plus scenario-based evaluation.',
    ARRAY['Operations', 'Developers', 'Consultants'],
    '[
      {"title": "Automation Patterns", "summary": "Triggers and integrations."},
      {"title": "AI in the Workplace", "summary": "Policies and prompts."},
      {"title": "Certification Exam", "summary": "Hands-on scenarios."}
    ]'::jsonb,
    14999,
    '7 weeks',
    'Hybrid'
  )
ON CONFLICT (slug) DO NOTHING;
