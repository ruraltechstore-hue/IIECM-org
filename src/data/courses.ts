import type { Course } from '../types/course';

export const courses: Course[] = [
  // ==========================================
  // ARTIFICIAL INTELLIGENCE & FUTURE SKILLS
  // ==========================================
  {
    title: 'Introduction to Generative AI for Professionals',
    slug: 'intro-generative-ai',
    category: 'Artificial Intelligence & Future Skills',
    badge: '🤖 AI-First Flagship',
    level: 'Beginner',
    rating: 4.9,
    reviewsCount: 142,
    enrolledCount: 3850,
    short_description:
      'Master frontier Foundation Models (GPT-4o, Claude 3.5, Gemini 1.5), autonomous prompt chains, multimodal content generation, and AI copilot productivity.',
    description:
      'Transform the way you work, create, and build. This masterclass takes you from foundational transformer mechanics to advanced generative AI workflows. You will master prompting frameworks (Chain-of-Thought, ReAct, Few-Shot), automate daily operational drudgery, synthesize high-resolution marketing assets, generate code with AI copilots, and understand enterprise data privacy and model governance.',
    target_audience: [
      'Corporate Professionals seeking 10x productivity',
      'Software Engineers & Designers adopting AI copilots',
      'Founders, Business Leaders & Strategy Consultants',
      'Students preparing for an AI-native workforce',
    ],
    prerequisites: 'No programming background required. Basic digital literacy and enthusiasm for AI.',
    aiHighlights: {
      headline: 'Work at the Speed of Frontier AI',
      description:
        'Learn how to leverage GPT-4o, Claude 3.5 Sonnet, and Midjourney to multiply personal execution speed by 10x. Understand token economics, context windows, hallucinations mitigation, and safe enterprise retrieval.',
      skills: [
        'Advanced Chain-of-Thought Prompting',
        'Multimodal Synthesis (Text, Code, Vision, Audio)',
        'Enterprise AI Governance & Guardrails',
        'Autonomous Workflow Augmentation',
      ],
      aiImpactFactor: '10x Execution Velocity & Automated Document Pipelines',
    },
    toolsAndTech: [
      'OpenAI GPT-4o',
      'Claude 3.5 Sonnet',
      'Google Gemini 1.5 Pro',
      'Midjourney v6',
      'Perplexity Pro',
      'Cursor AI',
      'ElevenLabs',
      'Notion AI',
    ],
    capstoneProject: {
      title: 'Autonomous Multimodal AI Executive Assistant',
      description:
        'Architect an end-to-end AI assistant that digests 100-page complex PDF financial reports, extracts actionable strategic summaries, designs visual pitch decks, and generates multilingual audio briefs.',
      deliverables: [
        'Custom System Prompt Architecture with guardrails',
        'Multimodal asset pipeline integrating visual and text models',
        'Production report synthesizing enterprise intelligence',
      ],
    },
    careerOutcomes: {
      roles: ['AI Operations Specialist', 'Generative AI Consultant', 'AI Productivity Lead', 'Innovation Strategist'],
      salaryRange: '₹8,50,000 - ₹24,00,000 / year',
      keyHiringSectors: ['Global Tech Firms', 'Consulting & Big 4', 'Fintech', 'Digital Marketing Agencies'],
    },
    keyTakeaways: [
      'Zero-shot, Few-shot, and ReAct prompt engineering mastery',
      'Safe integration of confidential enterprise data with local context',
      'Building agentic personal knowledge graphs with vector search',
      'Official IIECM Generative AI Certified Credential',
    ],
    modules: [
      {
        title: 'Module 1: The Transformer Paradigm & Frontier LLMs',
        summary: 'Deconstruct transformer neural networks, attention mechanisms, token embeddings, and context horizons.',
        topics: ['Tokens, Latency & Cost Optimization', 'Transformer Attention Mechanics', 'Frontier Model Comparison (OpenAI vs Anthropic vs Open-Source)', 'Mitigating Hallucinations with Grounding'],
        durationWeeks: 'Week 1-2',
        projectMilestone: 'Lab: Benchmarking LLM responses across reasoning, code, and creative tasks',
      },
      {
        title: 'Module 2: Advanced Prompt Engineering & Cognitive Patterns',
        summary: 'Engineer robust prompts using Few-Shot, Directional Stimulus, Chain-of-Thought, and Tree-of-Thoughts.',
        topics: ['System Prompt Formulation', 'Output Structuring (JSON Mode, XML schemas)', 'Reasoning Trajectories & Self-Consistency', 'Adversarial Prompt Injection & Defense'],
        durationWeeks: 'Week 3-4',
        projectMilestone: 'Lab: Constructing an infallible enterprise RFP extraction prompt system',
      },
      {
        title: 'Module 3: Multimodal Generation & AI-Native Workflows',
        summary: 'Generate visual assets, synthetic voiceover, dynamic presentations, and deploy automated personal agents.',
        topics: ['Midjourney & Flux Image Engineering', 'ElevenLabs Voice Cloning & Audio Synthesis', 'AI Copilots in Office Suites & Coding', 'Human-in-the-Loop Workflow Deployment'],
        durationWeeks: 'Week 5-6',
        projectMilestone: 'Capstone: End-to-end automated multimodal content campaign',
      },
    ],
    price: 12999,
    duration: '6 weeks',
    mode: 'Online (Interactive Labs)',
    reviews: [
      {
        student_name: 'Ananya Roy',
        role: 'Senior Product Lead at FinTech Scale-Up',
        rating: 5,
        review_text: 'This course completely flipped how our product team operates. We replaced 15 hours of manual synthesis every week with custom prompt chains. The instructor labs are top-tier!',
      },
      {
        student_name: 'Vikram Mehta',
        role: 'Operations Consultant',
        rating: 5,
        review_text: 'Most AI courses just skim ChatGPT. IIECM went deep into system prompts, token economics, and multi-agent patterns. Truly innovative curriculum.',
      },
    ],
  },

  {
    title: 'Machine Learning Fundamentals & Neural Systems',
    slug: 'machine-learning-fundamentals',
    category: 'Artificial Intelligence & Future Skills',
    badge: '⚡ Core AI Engineering',
    level: 'Intermediate',
    rating: 4.8,
    reviewsCount: 118,
    enrolledCount: 2940,
    short_description:
      'Train predictive algorithms, fine-tune neural architectures, build ML pipelines in PyTorch, and deploy production inference endpoints.',
    description:
      'Go beyond the black box. Build deep mechanical intuition for supervised, unsupervised, and deep learning algorithms. From gradient descent mathematics to loss landscape navigation, feature engineering, and CNN/Transformer architectures, you will write and train real models in Python, Scikit-learn, and PyTorch.',
    target_audience: [
      'Aspiring Machine Learning Engineers and Data Scientists',
      'Software Developers transitioning into AI systems',
      'Data Analysts looking to scale into predictive modeling',
    ],
    prerequisites: 'Basic Python programming syntax and fundamental high-school algebra or calculus concepts.',
    aiHighlights: {
      headline: 'From Mathematical First Principles to Production Models',
      description:
        'Understand exactly what happens inside neural weights during backpropagation. Master hyperparameter tuning, cross-validation, regularization against overfitting, and deployment to cloud endpoints.',
      skills: [
        'Supervised & Unsupervised Learning Algorithms',
        'Deep Neural Networks with PyTorch',
        'Feature Engineering & Data Pipeline Architecture',
        'Model Evaluation, Confusion Matrices & ROC-AUC',
      ],
      aiImpactFactor: 'Production Predictive Modeling & End-to-End Pipeline Engineering',
    },
    toolsAndTech: [
      'Python 3.11',
      'PyTorch',
      'Scikit-Learn',
      'NumPy & Pandas',
      'Matplotlib & Seaborn',
      'JupyterLab',
      'Hugging Face Hub',
      'Weights & Biases',
    ],
    capstoneProject: {
      title: 'Real-Time Neural Fraud Detection Engine',
      description:
        'Engineer a complete ML pipeline on an imbalanced financial transactions dataset (1M+ events). Train an ensemble classifier alongside a PyTorch deep neural network, evaluate ROC-AUC, and expose the inference service via FastAPI.',
      deliverables: [
        'Cleaned feature engineering pipeline with outlier detection',
        'PyTorch neural network with custom loss weighting',
        'Interactive Streamlit monitoring dashboard with real-time inference',
      ],
    },
    careerOutcomes: {
      roles: ['Junior ML Engineer', 'Data Scientist', 'AI Pipeline Developer', 'Algorithm Specialist'],
      salaryRange: '₹9,00,000 - ₹28,00,000 / year',
      keyHiringSectors: ['E-Commerce Platforms', 'Autonomous Tech', 'FinTech & Banking', 'Healthcare AI'],
    },
    keyTakeaways: [
      'Implement Linear/Logistic Regression, Random Forests, XGBoost from scratch',
      'Deep learning forward-pass, backprop, and activation functions',
      'Prevent data leakage and master k-fold cross-validation',
      'Publish your ML portfolio on GitHub and Hugging Face',
    ],
    modules: [
      {
        title: 'Module 1: Mathematical Foundations & Exploratory Data Science',
        summary: 'Master vectors, matrix multiplications, gradient descent, feature normalization, and statistical distributions.',
        topics: ['Vectorized Operations with NumPy', 'Data Preprocessing & Imputation', 'Loss Functions & Gradient Descent Calculus', 'Train/Val/Test Splits & Leakage Prevention'],
        durationWeeks: 'Week 1-2',
        projectMilestone: 'Lab: Vectorized Gradient Descent implementation from scratch',
      },
      {
        title: 'Module 2: Classical Machine Learning & Tree Ensembles',
        summary: 'Supervised classification and regression: Decision Trees, Random Forests, XGBoost, SVMs, and PCA.',
        topics: ['Linear & Polynomial Models', 'Entropy, Gini Impurity & Tree Splitting', 'Boosting vs Bagging (XGBoost, LightGBM)', 'Dimensionality Reduction with PCA & t-SNE'],
        durationWeeks: 'Week 3-5',
        projectMilestone: 'Lab: Tuning XGBoost hyperparameters for customer churn prediction',
      },
      {
        title: 'Module 3: Deep Learning, PyTorch & Deployment',
        summary: 'Design multi-layer perceptrons, convolutional feature extractors, and wrap models into REST APIs.',
        topics: ['PyTorch Tensors, Autograd & Datasets', 'Building Custom Neural Architectures', 'Optimizers (AdamW, SGD) & Learning Rate Schedulers', 'Containerizing & Serving ML Models with FastAPI'],
        durationWeeks: 'Week 6-8',
        projectMilestone: 'Capstone: End-to-end PyTorch deep learning fraud detector',
      },
    ],
    price: 14999,
    duration: '8 weeks',
    mode: 'LMS + Live Coding Labs',
    reviews: [
      {
        student_name: 'Kavita Sundaram',
        role: 'Data Analyst → Machine Learning Engineer',
        rating: 5,
        review_text: 'IIECM helped me make the career pivot I dreamed of for two years. The PyTorch modules and real-time labs gave me the exact confidence I needed in interviews.',
      },
      {
        student_name: 'Arjun Sen',
        role: 'Backend Developer',
        rating: 5,
        review_text: 'Clear, mathematically grounded, without overwhelming academic jargon. Building the fraud detection capstone project got me 3 job interview callbacks!',
      },
    ],
  },

  {
    title: 'Prompt Engineering & AI Workflow Design',
    slug: 'prompt-engineering-ai-workflows',
    category: 'Artificial Intelligence & Future Skills',
    badge: '🔥 High-Demand Skill',
    level: 'Intermediate',
    rating: 4.9,
    reviewsCount: 96,
    enrolledCount: 2450,
    short_description:
      'Design industrial-grade prompt architectures, autonomous LangChain agent loops, RAG pipelines, and automated LLM evaluation guardrails.',
    description:
      'Become an elite AI Prompt Architect. This course moves beyond basic chat prompts into programmatic orchestration. You will build autonomous AI agent swarms, implement Retrieval-Augmented Generation (RAG) with vector databases, enforce strict JSON schemas for API integrations, and write unit tests to benchmark LLM latency and hallucination rates.',
    target_audience: [
      'Full Stack & Frontend Developers integrating AI APIs',
      'Product Managers designing conversational interfaces',
      'Automation Engineers building multi-step enterprise workflows',
    ],
    prerequisites: 'Basic familiarity with REST APIs or JavaScript/Python scripting is helpful but optional.',
    aiHighlights: {
      headline: 'Architect Autonomous Agentic Workflows',
      description:
        'Bridge the gap between raw LLM capabilities and reliable enterprise software. Learn agent loop patterns (ReAct, Plan-and-Solve), semantic routing, tool calling, and vector embeddings.',
      skills: [
        'Agentic Tool Calling & Function Execution',
        'Retrieval-Augmented Generation (RAG) Architectures',
        'LangChain & LlamaIndex Orchestration',
        'LLM Benchmarking & Automated Guardrails',
      ],
      aiImpactFactor: 'Autonomous Multi-Step AI Agent Systems with Vector Memory',
    },
    toolsAndTech: [
      'LangChain',
      'LlamaIndex',
      'OpenAI Function Calling',
      'ChromaDB & Pinecone',
      'Ollama (Local Models)',
      'Promptfoo (Testing)',
      'Langfuse (Tracing)',
      'Flowise AI',
    ],
    capstoneProject: {
      title: 'Autonomous Research & Code Generation Agent Swarm',
      description:
        'Construct a multi-agent system where a "Planner Agent" decomposes customer feature briefs, a "Research Agent" queries documentation via RAG, and a "Coder Agent" writes, lints, and validates working code.',
      deliverables: [
        'Multi-agent state graph with LangGraph',
        'Vector database indexing 500+ documentation pages',
        'CI/CD prompt evaluation test suite measuring reliability',
      ],
    },
    careerOutcomes: {
      roles: ['Prompt Engineer', 'AI Solutions Architect', 'LLM Application Developer', 'Automation Specialist'],
      salaryRange: '₹10,00,000 - ₹30,00,000 / year',
      keyHiringSectors: ['SaaS Companies', 'AI Startups', 'IT Services & Consulting', 'Product Studios'],
    },
    keyTakeaways: [
      'Master Few-Shot, Chain-of-Thought, and ReAct paradigms',
      'Connect LLMs to databases, external APIs, and live internet search',
      'Build local offline RAG with open-weight models (Llama 3, Mistral)',
      'Implement NeMo Guardrails to block prompt injection attacks',
    ],
    modules: [
      {
        title: 'Module 1: Structured Output Engineering & Function Calling',
        summary: 'Force deterministic JSON/YAML outputs, configure tool calling schemas, and handle schema validation errors.',
        topics: ['Pydantic & Zod Schema Enforcement', 'Function Calling & Tool Binding', 'Semantic Routing & Intent Classification', 'Zero-shot to N-shot Prompt Optimization'],
        durationWeeks: 'Week 1',
        projectMilestone: 'Lab: Building a reliable structured data extractor from messy emails',
      },
      {
        title: 'Module 2: RAG, Embeddings & Vector Search',
        summary: 'Chunking strategies, cosine similarity, dense vector search, hybrid retrieval, and re-ranking models.',
        topics: ['Text Chunking & Token Overlap', 'Vector Embeddings (text-embedding-3-small)', 'Vector Store Operations (Pinecone & ChromaDB)', 'Context Compression & Re-ranking with Cohere'],
        durationWeeks: 'Week 2',
        projectMilestone: 'Lab: Building a custom legal contract question-answering RAG pipeline',
      },
      {
        title: 'Module 3: Autonomous Agents & State Machines',
        summary: 'Orchestrating agents with persistent memory, cyclical decision loops, and multi-agent consensus.',
        topics: ['ReAct (Reason + Act) Agent Loops', 'LangGraph & State Machine Design', 'Human-in-the-Loop Interrupts', 'Multi-Agent Collaboration Networks'],
        durationWeeks: 'Week 3',
        projectMilestone: 'Lab: Developing a self-correcting autonomous web research agent',
      },
      {
        title: 'Module 4: Safety, Security, Evaluation & Production Ops',
        summary: 'Prompt injection defenses, jailbreak prevention, latency profiling, and automated regression testing.',
        topics: ['Adversarial Prompt Injection & Sanitization', 'Automated LLM Evaluation with Promptfoo', 'Tracing & Observability with Langfuse', 'Production Cost & Rate Limit Management'],
        durationWeeks: 'Week 4',
        projectMilestone: 'Capstone: Production-ready resilient agent swarm deployment',
      },
    ],
    price: 9999,
    duration: '4 weeks',
    mode: 'Online (Hands-On Labs)',
    reviews: [
      {
        student_name: 'Pooja Iyer',
        role: 'Lead Frontend Engineer',
        rating: 5,
        review_text: 'The best investment in my career this year. Learning LangChain and RAG directly in practical code allowed me to launch our company’s internal AI assistant within 3 weeks!',
      },
      {
        student_name: 'Rohit Verma',
        role: 'AI Product Specialist',
        rating: 5,
        review_text: 'No hand-waving here. We built real autonomous agents and stress-tested prompt injection scenarios. Essential knowledge for anyone building with AI.',
      },
    ],
  },

  // ==========================================
  // TECHNICAL & IT PROGRAMS
  // ==========================================
  {
    title: 'Full Stack Web Development (AI-Powered 2026 Stack)',
    slug: 'full-stack-web-development',
    category: 'Technical & IT Programs',
    badge: '🚀 Career Accelerator',
    level: 'All Levels',
    rating: 4.9,
    reviewsCount: 165,
    enrolledCount: 4200,
    short_description:
      'Build production full-stack web applications with React, Next.js, Node.js, PostgreSQL, Cursor AI coding workflows, and integrated LLM features.',
    description:
      'Software engineering in 2026 requires more than typing boilerplate: it requires building AI-native, high-performance web applications. You will learn modern TypeScript, React 19, Next.js App Router, Tailwind CSS, REST & GraphQL APIs, relational database design with PostgreSQL & Prisma, secure JWT authentication, and how to accelerate your coding speed 5x using Cursor AI and GitHub Copilot.',
    target_audience: [
      'Fresh graduates and career switchers entering software engineering',
      'Frontend developers wanting to master backend & database architecture',
      'Entrepreneurs wanting to build their own SaaS startups',
    ],
    prerequisites: 'No prior coding experience required. We start from foundational logic and build up.',
    aiHighlights: {
      headline: 'Develop Like a 10x Engineer with AI Coding Workflows',
      description:
        'Integrate Cursor AI, v0 by Vercel, and Claude 3.5 Sonnet into your daily development cycle. Learn to build AI-powered features: streaming chatbot interfaces, vector search, and automated background jobs.',
      skills: [
        'AI Copilot & Cursor AI Development Acceleration',
        'Streaming LLM UI with Vercel AI SDK',
        'Database Vector Search with pgvector',
        'Production CI/CD & Automated Testing',
      ],
      aiImpactFactor: '5x Software Engineering Velocity with Next.js & AI Copilots',
    },
    toolsAndTech: [
      'React 19 & Next.js',
      'TypeScript',
      'Node.js & Express',
      'PostgreSQL & Prisma ORM',
      'Tailwind CSS & shadcn/ui',
      'Cursor AI & Copilot',
      'Docker & GitHub Actions',
      'Vercel & Supabase',
    ],
    capstoneProject: {
      title: 'Full-Stack AI-Powered SaaS Collaborative Workspace',
      description:
        'Build and launch a production-grade Notion-meets-Slack web app with real-time collaborative editing, authentication, Stripe billing, and an integrated AI document copilot that drafts and summarizes in real time.',
      deliverables: [
        'Responsive Next.js web application with Server Components',
        'PostgreSQL database schema with pgvector semantic search',
        'Live deployment on custom domain with automated CI/CD pipeline',
      ],
    },
    careerOutcomes: {
      roles: ['Full Stack Developer', 'Software Engineer', 'Frontend Engineer (React/Next.js)', 'Backend Engineer (Node/Postgres)'],
      salaryRange: '₹7,50,000 - ₹22,00,000 / year',
      keyHiringSectors: ['Product Companies', 'High-Growth Tech Startups', 'IT Consulting', 'FinTech'],
    },
    keyTakeaways: [
      'Build end-to-end full-stack architectures from zero to deployment',
      'Master TypeScript, React hooks, server actions, and state management',
      'Design normalized databases with indexing and ACID compliance',
      'Complete 4 portfolio-worthy web applications deployed to production',
    ],
    modules: [
      {
        title: 'Module 1: Modern Frontend Architecture & React 19',
        summary: 'HTML5/CSS3 mastery, modern JavaScript ES6+, TypeScript type safety, React component lifecycles, and Tailwind CSS.',
        topics: ['TypeScript Deep Dive', 'React 19 Hooks & State Machines', 'Tailwind CSS & Responsive Layouts', 'Next.js App Router & Server Components'],
        durationWeeks: 'Weeks 1-4',
        projectMilestone: 'Lab: Building a responsive interactive analytics dashboard',
      },
      {
        title: 'Module 2: Scalable Backend, APIs & Databases',
        summary: 'Node.js runtime, RESTful API design, PostgreSQL relational modeling, Prisma ORM, and JWT authentication.',
        topics: ['Node.js & Express Architecture', 'PostgreSQL Schema Design & Migrations', 'Authentication & Role-Based Access Control', 'Connecting Vercel AI SDK for Streaming'],
        durationWeeks: 'Weeks 5-8',
        projectMilestone: 'Lab: Architecting a high-throughput authenticated REST API',
      },
      {
        title: 'Module 3: DevOps, Cloud Hosting & Production Capstone',
        summary: 'Containerization with Docker, CI/CD with GitHub Actions, edge caching, production monitoring, and final capstone launch.',
        topics: ['Dockerizing Full Stack Apps', 'GitHub Actions Automated Testing', 'Stripe Billing & Webhook Handling', 'Performance Optimization (Lighthouse 95+)'],
        durationWeeks: 'Weeks 9-12',
        projectMilestone: 'Capstone: Live launch of production AI SaaS collaborative app',
      },
    ],
    price: 24999,
    duration: '12 weeks',
    mode: 'Hybrid (Live Mentorship + LMS)',
    reviews: [
      {
        student_name: 'Aditya Nair',
        role: 'Full Stack Engineer at Unicorn Startup',
        rating: 5,
        review_text: 'The curriculum is relentlessly modern. While other bootcamps teach outdated stacks, IIECM taught us Next.js App Router, Cursor AI workflows, and streaming AI APIs. I got placed in 45 days.',
      },
    ],
  },

  {
    title: 'Python for Data Analysis & Predictive Analytics',
    slug: 'python-data-analysis',
    category: 'Technical & IT Programs',
    badge: '📊 High Demand',
    level: 'Beginner to Intermediate',
    rating: 4.8,
    reviewsCount: 88,
    enrolledCount: 3100,
    short_description:
      'Master Python, Pandas, data wrangling, interactive visual storytelling, automated dashboarding, and AI-assisted data analytics.',
    description:
      'Turn raw, chaotic data into multimillion-dollar strategic insights. Learn Python from the ground up with a focus on data science. Clean corrupt datasets, compute complex multi-dimensional aggregations in Pandas, construct dynamic visual dashboards, and leverage AI code interpreters to supercharge analytical speed.',
    target_audience: [
      'Business & Financial Analysts upgrading from Excel to Python',
      'Engineers and Researchers handling large empirical datasets',
      'Students targeting Data Analyst and Business Intelligence positions',
    ],
    prerequisites: 'No coding experience needed. Comfort with basic spreadsheet calculations is helpful.',
    aiHighlights: {
      headline: 'Supercharged Analytics with AI Code Interpreters',
      description:
        'Harness the power of AI data analysis assistants to automatically write complex regex cleanups, detect anomalies in millions of rows, and generate executive charts on demand.',
      skills: [
        'Pandas & NumPy High-Performance Vectorization',
        'Automated Exploratory Data Analysis (EDA)',
        'Interactive Visualizations with Plotly & Streamlit',
        'Statistical Hypothesis Testing & A/B Test Evaluation',
      ],
      aiImpactFactor: 'Automated Insight Extraction & Predictive Forecasting',
    },
    toolsAndTech: [
      'Python 3',
      'Pandas',
      'NumPy',
      'Plotly & Seaborn',
      'Streamlit',
      'Jupyter Notebooks',
      'SQL / SQLite',
      'OpenAI Advanced Data Analysis',
    ],
    capstoneProject: {
      title: 'E-Commerce Omnichannel Growth & Customer Retention Engine',
      description:
        'Ingest over 500,000 anonymized e-commerce transaction records. Clean anomalies, perform RFM (Recency, Frequency, Monetary) segmentation, build churn prediction models, and deploy an interactive live Streamlit dashboard.',
      deliverables: [
        'End-to-end reproducible Jupyter Notebook analysis',
        'Customer RFM cohort visualization matrix',
        'Live deployed interactive Streamlit dashboard for executives',
      ],
    },
    careerOutcomes: {
      roles: ['Data Analyst', 'Business Intelligence Analyst', 'Analytics Consultant', 'Operations Analyst'],
      salaryRange: '₹6,00,000 - ₹16,00,000 / year',
      keyHiringSectors: ['E-Commerce', 'FinTech & Banking', 'Management Consulting', 'Retail Tech'],
    },
    keyTakeaways: [
      'Write clean, idiomatic Python scripts and automated pipelines',
      'Master groupby, pivot tables, merges, and time-series resampling in Pandas',
      'Design compelling interactive visual stories that convince C-suite stakeholders',
      'Integrate SQL querying with Python data pipelines',
    ],
    modules: [
      {
        title: 'Module 1: Python Core & Data Structures',
        summary: 'Variables, loops, functions, lists, dictionaries, error handling, and reading CSV/JSON/API data.',
        topics: ['Python Logic & Syntax', 'Working with Files & REST APIs', 'NumPy Arrays & Mathematical Operations', 'Writing Clean Modular Functions'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Automated script fetching and parsing weather & sales feeds',
      },
      {
        title: 'Module 2: Wrangling & Aggregation with Pandas',
        summary: 'Data cleaning, missing values imputation, filtering, grouping, pivoting, and merging datasets.',
        topics: ['DataFrames & Series Manipulation', 'Handling Nulls, Duplicates & Datetimes', 'Advanced GroupBy & Multi-Index', 'Feature Transformation & Encoding'],
        durationWeeks: 'Weeks 3-4',
        projectMilestone: 'Lab: Cleaning a messy 100,000-row retail transaction log',
      },
      {
        title: 'Module 3: Storytelling, Dashboards & Capstone',
        summary: 'Interactive charts with Plotly, statistical inference, hypothesis testing, and Streamlit app deployment.',
        topics: ['Plotly Dynamic Visualizations', 'Correlation & Statistical Significance', 'Building Streamlit Web Apps', 'Automating Reports with AI'],
        durationWeeks: 'Weeks 5-6',
        projectMilestone: 'Capstone: Interactive E-Commerce Customer Analytics Dashboard',
      },
    ],
    price: 11999,
    duration: '6 weeks',
    mode: 'Online (Self-Paced + Live Q&A)',
    reviews: [
      {
        student_name: 'Meera Nambiar',
        role: 'Business Analyst at Global Retailer',
        rating: 5,
        review_text: 'Moving from Excel to Python was intimidating until I took this course. The practical datasets and Streamlit capstone made everything click immediately.',
      },
    ],
  },

  {
    title: 'Cloud Computing Essentials (AWS, Azure & AI Cloud)',
    slug: 'cloud-computing-essentials',
    category: 'Technical & IT Programs',
    badge: '☁️ Cloud Architecture',
    level: 'Intermediate',
    rating: 4.8,
    reviewsCount: 74,
    enrolledCount: 2200,
    short_description:
      'Architect resilient cloud solutions on AWS & Azure: Compute, S3 storage, VPC networks, Serverless functions, IAM security, and AI model hosting.',
    description:
      'Gain hands-on mastery of the cloud backbones that power the modern digital economy. Learn how to configure elastic virtual machines, design scalable multi-tier architectures, secure corporate networks with VPCs and IAM policies, leverage serverless microservices, and deploy cost-optimized AI inference endpoints on AWS and Azure.',
    target_audience: [
      'IT Support Engineers, System Administrators, and DevOps aspirants',
      'Developers deploying applications to public cloud providers',
      'Tech leads migrating on-premise infrastructure to AWS/Azure',
    ],
    prerequisites: 'Basic understanding of computer networks and operating system concepts.',
    aiHighlights: {
      headline: 'Cloud Infrastructure for the Generative AI Era',
      description:
        'Master the hosting and provisioning of AI workloads: configuring GPU instances, running serverless containerized inference, and managing scalable object stores for training data.',
      skills: [
        'AWS EC2, S3, RDS & Azure Cloud Services',
        'Virtual Private Clouds (VPC) & Zero-Trust Security',
        'Serverless Compute (AWS Lambda, Azure Functions)',
        'Cost Optimization & Cloud AI Deployment',
      ],
      aiImpactFactor: 'Scalable Cloud Architecture & Elastic GPU Inference Deployment',
    },
    toolsAndTech: [
      'AWS Console & CLI',
      'Microsoft Azure',
      'Docker Containers',
      'Terraform (IaC)',
      'AWS Lambda',
      'Amazon S3 & RDS',
      'CloudWatch & Cost Explorer',
    ],
    capstoneProject: {
      title: 'High-Availability Multi-Tier E-Commerce Cloud Infrastructure',
      description:
        'Deploy a fault-tolerant, auto-scaling web application on AWS with an Application Load Balancer, multi-AZ RDS database, S3 asset delivery via CloudFront CDN, and automated SSL encryption.',
      deliverables: [
        'VPC architecture diagram with public/private subnet routing',
        'Automated auto-scaling group handling traffic spikes',
        'Infrastructure cost audit report with 40% savings optimization',
      ],
    },
    careerOutcomes: {
      roles: ['Cloud Engineer', 'AWS Cloud Solutions Associate', 'DevOps Junior Engineer', 'Cloud Infrastructure Administrator'],
      salaryRange: '₹8,00,000 - ₹20,00,000 / year',
      keyHiringSectors: ['Global Cloud Providers', 'Enterprise Tech', 'Banking & Insurance', 'SaaS Giants'],
    },
    keyTakeaways: [
      'Hands-on labs on both Amazon Web Services and Microsoft Azure',
      'Architect secure, fault-tolerant, and auto-scaling cloud topologies',
      'Pass AWS Solutions Architect Associate & Azure Fundamentals exams',
      'Understand FinOps and strategies to avoid unexpected cloud bills',
    ],
    modules: [
      {
        title: 'Module 1: Cloud Paradigms, IAM & Elastic Compute',
        summary: 'Cloud service models (IaaS/PaaS/SaaS), AWS global infrastructure, IAM policies, and provisioning EC2/Azure VMs.',
        topics: ['Regions, Availability Zones & Edge Locations', 'IAM Roles, Users, Groups & MFA', 'EC2 Instance Types, Key Pairs & Security Groups', 'Azure Virtual Machines & Resource Groups'],
        durationWeeks: 'Weeks 1-3',
        projectMilestone: 'Lab: Provisioning hardened Linux web server with custom IAM roles',
      },
      {
        title: 'Module 2: Storage, Databases & Networking',
        summary: 'Object storage (S3), relational/NoSQL databases, VPC networking, route tables, and internet gateways.',
        topics: ['Amazon S3 Lifecycle Policies & Static Websites', 'AWS RDS Multi-AZ & DynamoDB Basics', 'Designing Custom VPCs with Public/Private Subnets', 'NAT Gateways & Bastion Hosts'],
        durationWeeks: 'Weeks 4-6',
        projectMilestone: 'Lab: Building a private database network with public API ingress',
      },
      {
        title: 'Module 3: Serverless, AI Workloads & FinOps',
        summary: 'Serverless architectures (Lambda), containerized workloads, AI cloud APIs, and cloud cost management.',
        topics: ['AWS Lambda & Event-Driven Triggers', 'Hosting Containerized Apps with ECS/Fargate', 'Deploying AI Models on Cloud GPUs', 'AWS Cost Explorer & Well-Architected Framework'],
        durationWeeks: 'Weeks 7-8',
        projectMilestone: 'Capstone: Resilient multi-tier auto-scaling cloud deployment',
      },
    ],
    price: 17999,
    duration: '8 weeks',
    mode: 'LMS + Guided Cloud Labs',
    reviews: [
      {
        student_name: 'Dinesh Kumar',
        role: 'Systems Administrator → Cloud Engineer',
        rating: 5,
        review_text: 'The step-by-step hands-on labs with real AWS accounts made all the difference. I cleared my AWS Solutions Architect certification on my first attempt!',
      },
    ],
  },

  // ==========================================
  // PROFESSIONAL SKILLS
  // ==========================================
  {
    title: 'Executive Business Communication & AI Presentation Skills',
    slug: 'business-communication-presentation',
    category: 'Professional Skills',
    badge: '💎 Executive Presence',
    level: 'All Levels',
    rating: 4.9,
    reviewsCount: 62,
    enrolledCount: 1850,
    short_description:
      'Command boardrooms with compelling storytelling, AI-augmented slide decks, clear executive email memos, and confident public speaking.',
    description:
      'In a noisy, AI-saturated corporate world, human clarity, persuasive storytelling, and executive presence are the ultimate competitive differentiators. Learn how to draft crisp executive memos in minutes, design visually breathtaking presentation decks using AI visual tools (Gamma, Beautiful.ai), and communicate high-stakes messages with authority and charm.',
    target_audience: [
      'Emerging Team Leads, Managers, and Directors',
      'Engineers and Analysts seeking to communicate technical concepts clearly',
      'Client-facing Consultants and Sales Executives',
    ],
    prerequisites: 'Open to all professionals wanting to upgrade their influence and communication presence.',
    aiHighlights: {
      headline: 'Supercharge Executive Presentations with AI',
      description:
        'Leverage AI tools to structure story arcs, craft pitch-perfect corporate memos, and generate investor-grade visual slides in a fraction of standard preparation time.',
      skills: [
        'The Minto Pyramid Principle & Executive Synthesis',
        'AI Slide Generation & Visual Data Storytelling',
        'High-Stakes Persuasion & Impromptu Speaking',
        'Difficult Conversations & Active Listening',
      ],
      aiImpactFactor: 'High-Impact Executive Presence & Rapid AI Deck Synthesis',
    },
    toolsAndTech: [
      'Gamma AI',
      'Beautiful.ai',
      'Claude 3.5 (Executive Copy)',
      'Notion',
      'Loom',
      'Figma Slides',
    ],
    capstoneProject: {
      title: 'High-Stakes C-Suite Strategic Proposal Presentation',
      description:
        'Develop and deliver a live 10-minute executive presentation pitching a major organizational transformation. Includes a 1-page executive memo, an AI-designed slide deck, and a handling of live critical stakeholder questions.',
      deliverables: [
        '1-Page Executive Memo using the Minto Pyramid framework',
        '12-Slide AI-designed presentation deck',
        'Recorded pitch delivery with personalized speech feedback',
      ],
    },
    careerOutcomes: {
      roles: ['Strategy Lead', 'Senior Project Consultant', 'Executive Communications Manager', 'Client Partner'],
      salaryRange: '₹7,00,000 - ₹25,00,000 / year',
      keyHiringSectors: ['Management Consulting', 'Venture Capital', 'Multinational Corporations', 'High-Growth Tech'],
    },
    keyTakeaways: [
      'Eliminate filler words and speak with commanding vocal confidence',
      'Structure memos so executives understand your recommendations in 60 seconds',
      'Use AI tools to create stunning slides 4x faster',
      'Master body language, eye contact, and presence on video calls',
    ],
    modules: [
      {
        title: 'Module 1: The Architecture of Clear Thought & Writing',
        summary: 'The Minto Pyramid principle, drafting executive memos, eliminating corporate jargon, and AI writing partners.',
        topics: ['Structuring Top-Down Communication', 'Drafting 1-Page Action Memos', 'AI Prompts for Executive Polish', 'Email Etiquette for Fast Approvals'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Rewrite a 5-page chaotic update into a 1-page executive memo',
      },
      {
        title: 'Module 2: Visual Storytelling & AI Slide Design',
        summary: 'Slide composition, visual hierarchy, typography, data visualization, and AI slide generators.',
        topics: ['Story Arcs in Business Presentations', 'Designing Slides with Gamma & Beautiful.ai', 'Presenting Data without Clutter', 'Rehearsal Strategies for High Impact'],
        durationWeeks: 'Weeks 3-4',
        projectMilestone: 'Capstone: Live pitch delivery and comprehensive feedback',
      },
    ],
    price: 4999,
    duration: '4 weeks',
    mode: 'Online (Live Workshops)',
    reviews: [
      {
        student_name: 'Tanvi Joshi',
        role: 'Marketing Director',
        rating: 5,
        review_text: 'The techniques taught here helped me secure budget approval from our CEO on the very first try. Gamma AI combined with the Minto Pyramid framework is pure gold.',
      },
    ],
  },

  {
    title: 'Modern Project Management & Agile AI Leadership',
    slug: 'project-management-fundamentals',
    category: 'Professional Skills',
    badge: '🎯 Industry Standard',
    level: 'Beginner to Intermediate',
    rating: 4.8,
    reviewsCount: 59,
    enrolledCount: 1620,
    short_description:
      'Master Agile, Scrum, Kanban, Jira, and modern AI automation tools to deliver complex cross-functional projects on time and within budget.',
    description:
      'Deliver results in high-velocity environments. Learn how modern tech leaders define scope, manage risks, facilitate Scrum ceremonies, maintain Jira sprint boards, and use AI assistants to generate sprint tickets, automated burndown charts, and stakeholder updates.',
    target_audience: [
      'Project Managers, Scrum Masters, and Delivery Leads',
      'Software Developers moving into Technical Project Management',
      'Operations Managers overseeing cross-departmental initiatives',
    ],
    prerequisites: 'Open to all professionals and students interested in organizational management.',
    aiHighlights: {
      headline: 'AI-Augmented Sprint Planning & Risk Mitigation',
      description:
        'Use AI automation to decompose complex epics into detailed user stories with acceptance criteria, forecast sprint velocity, and detect delivery risks before deadlines hit.',
      skills: [
        'Agile, Scrum & Kanban Frameworks',
        'Jira Software & Confluence Administration',
        'AI Epic Decomposition & User Story Generation',
        'Risk Management & Stakeholder Alignment',
      ],
      aiImpactFactor: 'Predictive Velocity Tracking & Automated Sprint Governance',
    },
    toolsAndTech: [
      'Jira Software',
      'Confluence',
      'Trello & Asana',
      'Miro',
      'Linear',
      'ChatGPT for Agile Workflows',
    ],
    capstoneProject: {
      title: 'End-to-End Agile Product Release Simulation',
      description:
        'Set up a full enterprise project workspace in Jira. Decompose a new fintech product launch into 3 sprints with epics, user stories, acceptance criteria, story points, and risk contingency plans.',
      deliverables: [
        'Complete Jira backlog with sprint velocity metrics',
        'Risk register matrix with mitigation playbooks',
        'Sprint retrospective report with continuous improvement actions',
      ],
    },
    careerOutcomes: {
      roles: ['Associate Project Manager', 'Scrum Master', 'Agile Delivery Lead', 'Technical Program Manager'],
      salaryRange: '₹8,00,000 - ₹24,00,000 / year',
      keyHiringSectors: ['Software & SaaS Companies', 'Consulting Agencies', 'Automotive & Manufacturing', 'E-Commerce'],
    },
    keyTakeaways: [
      'Run seamless Daily Standups, Sprint Planning, and Retrospectives',
      'Eliminate scope creep through precise acceptance criteria',
      'Calculate critical path and build visual Gantt roadmaps',
      'Preparedness for PMI CAPM / Agile Scrum Master certifications',
    ],
    modules: [
      {
        title: 'Module 1: Project Lifecycles & Agile Foundations',
        summary: 'Waterfall vs Agile vs Hybrid, the Agile Manifesto, Scrum roles (Product Owner, Scrum Master, Developers).',
        topics: ['Agile Principles & Values', 'Scrum Ceremonies & Artifacts', 'Writing High-Impact User Stories', 'Story Point Estimation with Planning Poker'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Decomposing a product launch into an Agile backlog',
      },
      {
        title: 'Module 2: Jira Mastery & Execution Tracking',
        summary: 'Configuring Jira boards, swimlanes, workflows, burndown charts, and integrating AI documentation.',
        topics: ['Jira Setup & Custom Workflows', 'Kanban WIP Limits & Flow Efficiency', 'Burndown & Velocity Analysis', 'AI Prompts for Release Notes & Status Updates'],
        durationWeeks: 'Weeks 3-4',
        projectMilestone: 'Lab: Configuring an enterprise Jira board with automated transitions',
      },
      {
        title: 'Module 3: Risk, Stakeholders & Capstone Delivery',
        summary: 'Identifying bottlenecks, stakeholder negotiation, project closure, and retrospective continuous improvement.',
        topics: ['Risk Assessment & Mitigation Matrix', 'Managing Scope Creep & Budget Overruns', 'Leading Cross-Functional Teams', 'Final Capstone Project Evaluation'],
        durationWeeks: 'Week 5',
        projectMilestone: 'Capstone: Complete simulated enterprise product release',
      },
    ],
    price: 6999,
    duration: '5 weeks',
    mode: 'Online (Interactive Simulator)',
    reviews: [
      {
        student_name: 'Siddharth Rao',
        role: 'Scrum Master at Tier-1 IT Firm',
        rating: 5,
        review_text: 'Practical, no fluff. The hands-on Jira labs and AI prompt templates for user stories saved me dozens of hours on my actual job right away.',
      },
    ],
  },

  {
    title: 'High-Impact Leadership & AI-Augmented Team Management',
    slug: 'leadership-team-management',
    category: 'Professional Skills',
    badge: '👑 Executive Mastery',
    level: 'Intermediate to Advanced',
    rating: 4.9,
    reviewsCount: 71,
    enrolledCount: 1450,
    short_description:
      'Lead hybrid teams with psychological safety, coach for peak performance, make algorithmic decisions, and build an unstoppable organizational culture.',
    description:
      'Transition from individual contributor to inspirational leader. Discover how top global executives hire A-players, build cultures of psychological safety and radical candor, navigate organizational conflict, and integrate AI copilots to streamline management administrative burdens.',
    target_audience: [
      'Newly promoted Managers and Team Leads',
      'Senior Individual Contributors preparing for management tracks',
      'Entrepreneurs scaling teams from 5 to 50+ members',
    ],
    prerequisites: 'Prior professional experience or aspiring management role.',
    aiHighlights: {
      headline: 'Leading in the Era of AI-Augmented Workforces',
      description:
        'Learn how forward-thinking leaders integrate AI tools to analyze team velocity, draft unbiased performance reviews, and augment strategic decision-making while doubling down on human empathy.',
      skills: [
        'Radical Candor & High-Trust Coaching',
        'OKRs & KPI Alignment Frameworks',
        'Managing Hybrid & Remote High-Performance Teams',
        'Ethical AI Governance & Decision Making',
      ],
      aiImpactFactor: 'Strategic Team Empowerment & Algorithmic Decision Architecture',
    },
    toolsAndTech: [
      '15Five & Lattice',
      'Notion Leadership OS',
      'Slack & Loom',
      'Claude 3.5 (Coaching Simulator)',
      'Miro Mind Mapping',
    ],
    capstoneProject: {
      title: 'Comprehensive Organizational Scaling & Culture Playbook',
      description:
        'Author an actionable 360-degree leadership playbook for a scaling department: including hiring rubric, 1-on-1 coaching templates, OKR cascading framework, and a conflict resolution protocol.',
      deliverables: [
        'Quarterly OKR alignment matrix for a 20-person department',
        '1-on-1 meeting cadences and coaching frameworks',
        'Crisis management and performance improvement protocol',
      ],
    },
    careerOutcomes: {
      roles: ['Engineering Manager', 'Operations Director', 'Team Lead', 'Chief of Staff', 'Startup Founder'],
      salaryRange: '₹12,00,000 - ₹35,00,000 / year',
      keyHiringSectors: ['Global Tech Enterprises', 'Venture-Backed Startups', 'Consulting & Banking'],
    },
    keyTakeaways: [
      'Conduct 1-on-1s that energize and retain top performers',
      'Give difficult feedback without damaging motivation or trust',
      'Delegate high-leverage tasks while maintaining strict quality standards',
      'Foster psychological safety where innovation flourishes',
    ],
    modules: [
      {
        title: 'Module 1: The Transition to Leader & Trust Building',
        summary: 'Mindset shifts from "doing" to "multiplying", psychological safety, active listening, and building emotional intelligence.',
        topics: ['The Multiplier Mindset', 'Building Psychological Safety', 'Executive Presence & Vulnerability', 'Mapping Team Strengths with Gallup Strengths'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Analyzing and repairing a broken team culture case study',
      },
      {
        title: 'Module 2: Coaching, 1-on-1s & Radical Candor',
        summary: 'Structuring effective weekly 1-on-1s, the GROW coaching model, constructive feedback, and difficult conversations.',
        topics: ['The GROW Model in Practice', 'Radical Candor: Care Personally, Challenge Directly', 'Addressing Underperformance Constructively', 'Recognizing and Preventing Team Burnout'],
        durationWeeks: 'Weeks 3-4',
        projectMilestone: 'Lab: Simulated role-play of difficult performance conversation',
      },
      {
        title: 'Module 3: Strategic Alignment, OKRs & Capstone',
        summary: 'Goal setting with Objectives and Key Results (OKRs), delegation frameworks, scaling culture, and executive capstone.',
        topics: ['Cascading OKRs from Vision to Daily Tasks', 'Situational Leadership & Delegation Matrix', 'Leading Through Organizational Change', 'Final Leadership Playbook Defense'],
        durationWeeks: 'Weeks 5-6',
        projectMilestone: 'Capstone: Departmental Leadership & Culture Playbook',
      },
    ],
    price: 8999,
    duration: '6 weeks',
    mode: 'Hybrid (Mastermind Sessions + LMS)',
    reviews: [
      {
        student_name: 'Pooja Deshmukh',
        role: 'Engineering Manager at Global SaaS',
        rating: 5,
        review_text: 'Becoming a first-time manager was overwhelming until this course. The frameworks for 1-on-1s and radical candor gave me actionable scripts that made immediate improvements in my team’s retention.',
      },
    ],
  },

  // ==========================================
  // E-COMMERCE & DIGITAL MARKETING
  // ==========================================
  {
    title: 'E-Commerce Store Setup, AI Automation & Scaling',
    slug: 'ecommerce-store-setup',
    category: 'E-Commerce & Digital Marketing',
    badge: '🛍️ Fast-Track Launch',
    level: 'Beginner to Intermediate',
    rating: 4.8,
    reviewsCount: 110,
    enrolledCount: 3400,
    short_description:
      'Launch an automated e-commerce empire on Shopify, WooCommerce & marketplaces with AI product descriptions, automated ad creative engines, and smart logistics.',
    description:
      'Turn digital commerce into high-margin revenue. From finding winning niches to setting up high-converting Shopify stores, configuring payments (Stripe/Razorpay), automating fulfillment with local and international couriers, and utilizing AI for instant catalog generation and dynamic pricing.',
    target_audience: [
      'Aspiring E-Commerce Entrepreneurs and D2C Brand Founders',
      'Retailers transitioning from offline stores to online commerce',
      'Marketing professionals looking to master end-to-end commerce operations',
    ],
    prerequisites: 'Basic computer skills and ambition to launch or scale an online brand.',
    aiHighlights: {
      headline: 'Automate Your Entire Online Store with AI',
      description:
        'Harness AI to generate 500+ SEO-optimized product listings in minutes, generate photorealistic lifestyle product photos without physical photoshoots, and deploy 24/7 AI customer service bots.',
      skills: [
        'Shopify Theme Customization & High-Conversion UX',
        'AI Product Photography with Midjourney & Flair',
        'Automated Inventory & Shipping Integration',
        'Payment Gateway Integration (Razorpay, Stripe, COD)',
      ],
      aiImpactFactor: 'Autonomous Store Operations & AI-Generated Product Catalogs',
    },
    toolsAndTech: [
      'Shopify & Shopify Plus',
      'Razorpay & Stripe',
      'Shiprocket & Delhivery',
      'Midjourney for D2C Mockups',
      'Klaviyo (Email/SMS)',
      'Meta Ads Manager',
      'Tidio AI Chatbots',
    ],
    capstoneProject: {
      title: 'Full Launch of a Live AI-Powered D2C Brand Store',
      description:
        'Build a real, functioning Shopify storefront with 10 curated products, AI-synthesized product photography, configured payment gateways, automated shipping rates, and email abandonment automations.',
      deliverables: [
        'Live responsive Shopify storefront optimized for 60%+ mobile traffic',
        'Integrated Razorpay/Stripe checkout with abandoned cart triggers',
        'Complete supply chain & unit economics pricing model spreadsheet',
      ],
    },
    careerOutcomes: {
      roles: ['E-Commerce Manager', 'Shopify Store Specialist', 'D2C Brand Consultant', 'Online Merchandiser'],
      salaryRange: '₹6,50,000 - ₹18,00,000 / year',
      keyHiringSectors: ['D2C Brands', 'E-Commerce Aggregators', 'Retail Giants', 'Digital Agencies'],
    },
    keyTakeaways: [
      'Design high-converting product pages with trust badges and social proof',
      'Connect payment gateways and set up fraud protection rules',
      'Automate shipping labels, tracking notifications, and returns with Shiprocket',
      'Launch profitable customer retention flows in Klaviyo',
    ],
    modules: [
      {
        title: 'Module 1: Store Setup, Themes & Niche Validation',
        summary: 'Market research, domain setup, Shopify store configuration, collection hierarchy, and theme design.',
        topics: ['Niche Research & Competitive Moats', 'Shopify Architecture & Page Builders', 'Creating High-Trust Landing Pages', 'Mobile-First UX Best Practices'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Building a fully branded responsive store layout',
      },
      {
        title: 'Module 2: AI Product Catalogs & Checkout Systems',
        summary: 'Generating product descriptions with AI, synthesizing mockups, configuring currencies, taxes, and payment gateways.',
        topics: ['AI Product Descriptions that Rank and Convert', 'Midjourney Product Photography Workflows', 'Razorpay & Stripe Gateway Configuration', 'Cash-on-Delivery (COD) Risk Mitigation'],
        durationWeeks: 'Weeks 3-4',
        projectMilestone: 'Lab: Configuring live checkout with payment test transactions',
      },
      {
        title: 'Module 3: Logistics, Marketing & Scaling',
        summary: 'Courier integration (Shiprocket/Delhivery), Klaviyo email funnels, AI chatbots, and profitable advertising.',
        topics: ['Fulfillment & Warehouse Integrations', 'Abandoned Cart Recovery Automations', 'AI Customer Support Bot Setup', 'Unit Economics & Break-Even Scaling'],
        durationWeeks: 'Weeks 5-6',
        projectMilestone: 'Capstone: Official public launch of live e-commerce store',
      },
    ],
    price: 8999,
    duration: '6 weeks',
    mode: 'Online (Guided Practical Labs)',
    reviews: [
      {
        student_name: 'Harish Patel',
        role: 'D2C Brand Founder',
        rating: 5,
        review_text: 'I launched my sustainable apparel store within 4 weeks of starting this course. We crossed ₹2,50,000 in sales in our second month! The fulfillment and AI catalog modules alone paid for the course 50x over.',
      },
    ],
  },

  {
    title: 'Digital Marketing & Programmatic AI SEO Mastery',
    slug: 'digital-marketing-seo',
    category: 'E-Commerce & Digital Marketing',
    badge: '🚀 Organic Growth Engine',
    level: 'Beginner to Intermediate',
    rating: 4.8,
    reviewsCount: 92,
    enrolledCount: 2800,
    short_description:
      'Rank #1 on Google with programmatic SEO, semantic search intent, AI content pipelines, technical website audits, and conversion rate optimization.',
    description:
      'Search engine optimization has experienced its greatest revolution in 20 years. Learn how Google’s Search Generative Experience (SGE) and AI Overviews evaluate content. Master technical SEO, programmatic page generation at scale, topical authority clustering, backlink acquisition, and Google Search Console analytics.',
    target_audience: [
      'Digital Marketers seeking modern organic acquisition tactics',
      'Content Creators, Bloggers, and Affiliate Marketers',
      'Founders wanting to drive free organic search traffic to their products',
    ],
    prerequisites: 'Basic knowledge of websites. No prior coding skills required.',
    aiHighlights: {
      headline: 'Master Google AI Overviews & Programmatic SEO',
      description:
        'Build topical authority maps and programmatic SEO databases that generate hundreds of high-ranking, valuable search landing pages automatically without algorithmic penalties.',
      skills: [
        'Semantic Keyword Clustering & Search Intent',
        'Programmatic SEO Page Architecture',
        'Core Web Vitals & Technical Crawl Audits',
        'Optimizing for Google Search Generative Experience (SGE)',
      ],
      aiImpactFactor: 'Topical Authority Generation & Programmatic Scaling to 100K+ Visits',
    },
    toolsAndTech: [
      'Ahrefs & Semrush',
      'Google Search Console',
      'Screaming Frog SEO Spider',
      'SurferSEO / Frase',
      'Claude 3.5 (Topical Articles)',
      'Google Looker Studio',
    ],
    capstoneProject: {
      title: 'Comprehensive 10,000-Page Programmatic SEO Architecture',
      description:
        'Conduct a competitive gap audit, build a database-driven programmatic SEO template, create 15 topical pillar clusters, and optimize Core Web Vitals to achieve high organic rankings.',
      deliverables: [
        'Complete Screaming Frog technical audit & remediation plan',
        'Topical map spreadsheet with 250+ targeted long-tail keywords',
        'Live published programmatic SEO cluster with rich schema markup',
      ],
    },
    careerOutcomes: {
      roles: ['SEO Specialist', 'Organic Growth Lead', 'Content Strategist', 'Technical SEO Consultant'],
      salaryRange: '₹6,00,000 - ₹17,00,000 / year',
      keyHiringSectors: ['SaaS Companies', 'E-Commerce Brands', 'Media & Publishing', 'Marketing Agencies'],
    },
    keyTakeaways: [
      'Optimize for user search intent rather than outdated keyword stuffing',
      'Fix indexation bloat, canonical loops, and Core Web Vitals issues',
      'Scale high-quality editorial content using human-in-the-loop AI workflows',
      'Build authoritative natural backlinks that withstand Google algorithm updates',
    ],
    modules: [
      {
        title: 'Module 1: Modern Search Mechanics & Topical Authority',
        summary: 'How modern search engines crawl, index, and rank content. Google SGE, helpful content guidelines, and keyword clustering.',
        topics: ['Crawl Budgets & Indexing Pipelines', 'Keyword Research with Ahrefs/Semrush', 'Topical Authority & Content Silos', 'Search Intent (Informational, Transactional, Navigational)'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Building a complete topical map for a competitive niche',
      },
      {
        title: 'Module 2: Technical SEO & Site Architecture',
        summary: 'Site speed, mobile responsiveness, XML sitemaps, robots.txt, canonicalization, and schema markup.',
        topics: ['Screaming Frog Site Auditing', 'Core Web Vitals Optimization (LCP, FID, CLS)', 'JSON-LD Schema Markup Generation', 'Fixing Redirect Chains & 404 Errors'],
        durationWeeks: 'Weeks 3-4',
        projectMilestone: 'Lab: Running a technical audit and resolving 10 critical site errors',
      },
      {
        title: 'Module 3: Programmatic SEO & Authority Building',
        summary: 'Building database-driven programmatic pages, ethical link acquisition, and Search Console analytics.',
        topics: ['Programmatic SEO Principles & Templates', 'Safe AI-Assisted Editorial Workflows', 'Digital PR & White-Hat Link Building', 'Google Search Console & Looker Studio Dashboards'],
        durationWeeks: 'Week 5',
        projectMilestone: 'Capstone: Publishing live programmatic cluster and audit report',
      },
    ],
    price: 7999,
    duration: '5 weeks',
    mode: 'LMS + Practical Audits',
    reviews: [
      {
        student_name: 'Rahul Shenoy',
        role: 'Organic Growth Lead',
        rating: 5,
        review_text: 'IIECM’s focus on modern semantic SEO and programmatic clustering took our SaaS blog from 2,000 to 45,000 monthly organic visits in 4 months. Unbeatable quality!',
      },
    ],
  },

  {
    title: 'Social Media Marketing, Viral Growth & AI Content Engines',
    slug: 'social-media-marketing-growth',
    category: 'E-Commerce & Digital Marketing',
    badge: '🔥 Viral Playbook',
    level: 'Beginner to Intermediate',
    rating: 4.8,
    reviewsCount: 84,
    enrolledCount: 2650,
    short_description:
      'Engineer thumb-stopping short-form video (Reels, TikTok), viral storytelling, automated AI content engines, and paid Meta ad campaigns that convert.',
    description:
      'Crack the modern social algorithms. Master the science of short-form video retention, create captivating hooks, automate content calendar creation with generative AI, and scale paid Meta & LinkedIn ad campaigns with positive Return on Ad Spend (ROAS).',
    target_audience: [
      'Social Media Managers, Creators, and Brand Strategists',
      'Entrepreneurs seeking rapid organic social acquisition',
      'Agency freelancers managing client accounts',
    ],
    prerequisites: 'Comfort using Instagram, LinkedIn, or YouTube.',
    aiHighlights: {
      headline: 'AI Video & Copywriting Content Multipliers',
      description:
        'Produce a month’s worth of viral video scripts, social carousels, and high-converting ad variations in a single afternoon using generative video and copy engines.',
      skills: [
        'Short-Form Video Scripting & Retention Hooks',
        'AI Content Engine (ChatGPT, CapCut, Opus Clip)',
        'Meta Ads Manager & Paid Performance Scaling',
        'Brand Voice Development & Community Building',
      ],
      aiImpactFactor: '10x Content Production Speed & 3x ROAS Optimization',
    },
    toolsAndTech: [
      'Meta Ads Manager',
      'CapCut & Opus Clip',
      'Canva Pro & Figma',
      'ElevenLabs Voice AI',
      'Buffer & Hootsuite',
      'Google Analytics 4',
    ],
    capstoneProject: {
      title: 'Full 30-Day Viral Omnichannel Social Growth Campaign',
      description:
        'Create and schedule a 30-day viral content calendar featuring 15 short-form video reels, 8 LinkedIn carousel posts, and a live ₹5,000 Meta ad campaign structured for conversions.',
      deliverables: [
        '30-day content calendar with hook-first scripts and visual assets',
        '3 polished short-form video reels edited with CapCut and AI subtitles',
        'Meta ad campaign blueprint with A/B creative testing matrix',
      ],
    },
    careerOutcomes: {
      roles: ['Social Media Strategist', 'Performance Marketing Specialist', 'Content Creator', 'Growth Marketer'],
      salaryRange: '₹5,50,000 - ₹15,00,000 / year',
      keyHiringSectors: ['D2C Brands', 'Creator Economy Startups', 'Advertising Agencies', 'Entertainment & Media'],
    },
    keyTakeaways: [
      'Hook audiences in the first 2 seconds to boost video completion rate',
      'Structure high-converting Meta ad campaigns (ABO vs CBO, custom audiences)',
      'Build automated repurposing pipelines from 1 long video into 10 micro-assets',
      'Track customer acquisition cost (CAC) and lifetime value (LTV)',
    ],
    modules: [
      {
        title: 'Module 1: The Psychology of Virality & Algorithm Mechanics',
        summary: 'How Instagram Reels, TikTok, and YouTube Shorts algorithms work. Attention retention curves and emotional triggers.',
        topics: ['Deconstructing Viral Hooks', 'The 3-Second Rule & Visual Pattern Interrupts', 'Understanding Watch Time & Completion Rate', 'Defining Your Core Brand Persona'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Scripting and filming 3 high-retention video hooks',
      },
      {
        title: 'Module 2: AI Content Engines & Paid Ads Mastery',
        summary: 'AI scripting with ChatGPT, automated video cutting with Opus Clip, and launching profitable Meta ad campaigns.',
        topics: ['Automated Content Pipelines with AI', 'CapCut & Dynamic Subtitle Generation', 'Meta Ads Campaign Setup & Pixel Tracking', 'A/B Creative Testing & Scaling Winners'],
        durationWeeks: 'Weeks 3-4',
        projectMilestone: 'Capstone: 30-Day Content Engine & Meta Ad Campaign Launch',
      },
    ],
    price: 6999,
    duration: '4 weeks',
    mode: 'Online (Practical Creative Labs)',
    reviews: [
      {
        student_name: 'Rhea Banerjee',
        role: 'Social Media Lead',
        rating: 5,
        review_text: 'Our Instagram page went from 1,200 to 28,000 followers within 6 weeks using the hook templates and CapCut AI workflows from this course! Truly game-changing.',
      },
    ],
  },

  // ==========================================
  // DIPLOMA PROGRAMS
  // ==========================================
  {
    title: 'Diploma in Digital Business & E-Commerce Strategy',
    slug: 'diploma-digital-business-ecommerce',
    category: 'Diploma Programs',
    badge: '📜 Industry Diploma',
    level: 'All Levels',
    rating: 4.8,
    reviewsCount: 98,
    enrolledCount: 2150,
    short_description:
      'Comprehensive 12-month diploma covering digital enterprise models, global marketplace operations, omnichannel supply chains, and AI commercial strategy.',
    description:
      'A holistic, career-defining diploma program tailored for future business leaders and digital operators. Bridge traditional commerce and high-growth digital economies. You will master multi-marketplace operations (Amazon, Flipkart), D2C digital store architecture, digital payments, cross-border commerce compliance, and AI-driven business strategy.',
    target_audience: [
      '12th Pass students and Undergraduates launching commercial careers',
      'Retail entrepreneurs modernizing family businesses',
      'Professionals aiming for executive roles in digital commerce',
    ],
    prerequisites: 'Higher Secondary (10+2) completion in any stream.',
    aiHighlights: {
      headline: 'AI Transformation Across the Commerce Value Chain',
      description:
        'Understand how modern enterprises implement predictive inventory replenishment, automated dynamic marketplace pricing, and AI customer support to dominate omnichannel retail.',
      skills: [
        'Omnichannel Retail Architecture',
        'Marketplace Optimization (Amazon & Flipkart Seller Central)',
        'Digital Supply Chain & Inventory Operations',
        'AI Pricing Algorithms & Customer Lifetime Analytics',
      ],
      aiImpactFactor: 'End-to-End Enterprise Commerce Operations & AI Efficiency',
    },
    toolsAndTech: [
      'Shopify Plus',
      'Amazon Seller Central',
      'Flipkart Marketplace Hub',
      'Zoho Inventory & Books',
      'PowerBI',
      'Google Analytics 4',
    ],
    capstoneProject: {
      title: 'Enterprise Omnichannel Brand Commercial Launch Plan',
      description:
        'Architect a 5-year digital commerce expansion plan for an FMCG brand: encompassing D2C Shopify setup, Amazon FBA marketplace integration, automated inventory software, and a full P&L financial forecast.',
      deliverables: [
        'Full 40-page strategic business plan and operational roadmap',
        'Amazon & D2C catalog setup with optimized listings and advertising strategy',
        'Financial pro forma model calculating Gross Margin, CAC, and EBITDA',
      ],
    },
    careerOutcomes: {
      roles: ['Digital Business Analyst', 'E-Commerce Operations Lead', 'Marketplace Category Specialist', 'Retail Strategy Associate'],
      salaryRange: '₹6,00,000 - ₹18,00,000 / year',
      keyHiringSectors: ['E-Commerce Marketplaces', 'FMCG Conglomerates', 'Logistics & Supply Chain', 'D2C Brands'],
    },
    keyTakeaways: [
      'Complete understanding of digital retail, marketplace fees, and margin optimization',
      'Manage Amazon Ads (Sponsored Products/Brands) profitably',
      'Navigate tax compliance, GST invoicing, and international cross-border trade',
      'Official IIECM 12-Month Diploma with placement assistance',
    ],
    modules: [
      {
        title: 'Trimester 1: Digital Business Models & D2C Foundations',
        summary: 'Evolution of commerce, platform business models, customer journey mapping, and D2C storefront setup.',
        topics: ['Platform Economics & Network Effects', 'D2C Brand Strategy', 'Storefront Architecture & Payment Gateways', 'Customer Journey Mapping & Funnel Analytics'],
        durationWeeks: 'Months 1-4',
        projectMilestone: 'Project: Launching an operational D2C digital storefront',
      },
      {
        title: 'Trimester 2: Global Marketplaces & Supply Chain Logistics',
        summary: 'Amazon & Flipkart algorithms, FBA fulfillment, catalog management, inventory planning, and returns reduction.',
        topics: ['Amazon A9/COSMO Search Algorithms', 'Inventory Turnover & Safety Stock Modeling', 'Third-Party Logistics (3PL) Contracting', 'Customer Service & Return Management'],
        durationWeeks: 'Months 5-8',
        projectMilestone: 'Project: Complete marketplace catalog launch and FBA shipment plan',
      },
      {
        title: 'Trimester 3: Growth, AI Operations & Capstone Defense',
        summary: 'Paid performance marketing, AI-driven dynamic pricing, financial forecasting, and final diploma capstone.',
        topics: ['Performance Marketing & Unit Economics', 'AI Predictive Demand Forecasting', 'Financial Modeling & P&L Mastery', 'Final Diploma Capstone Defense'],
        durationWeeks: 'Months 9-12',
        projectMilestone: 'Capstone: Comprehensive Enterprise Omnichannel Commercial Strategy',
      },
    ],
    price: 44999,
    duration: '12 months',
    mode: 'Hybrid (Live Lectures + Campus Labs + LMS)',
    reviews: [
      {
        student_name: 'Karan Singhal',
        role: 'Category Specialist at E-Commerce Firm',
        rating: 5,
        review_text: 'This diploma transformed my career path. The depth of marketplace operations, inventory management, and digital marketing prepared me for real enterprise leadership from day one.',
      },
    ],
  },

  {
    title: 'Diploma in IT & Modern Software Applications',
    slug: 'diploma-it-software-applications',
    category: 'Diploma Programs',
    badge: '💻 Practical IT',
    level: 'Beginner',
    rating: 4.7,
    reviewsCount: 68,
    enrolledCount: 1900,
    short_description:
      'Practical 10-month diploma in workplace IT systems, database querying (SQL), cloud productivity suites, cybersecurity hygiene, and application support.',
    description:
      'Equip yourself with the essential technical backbone of modern enterprise IT departments. Master operating systems (Windows Server, Linux basics), relational SQL databases, ticketing systems (Jira Service Desk), network configuration, cybersecurity best practices, and office automation tools.',
    target_audience: [
      'Students seeking entry into corporate IT and tech support roles',
      'Administrative professionals upgrading to IT systems coordinators',
      'Fresh graduates wanting a practical computing diploma',
    ],
    prerequisites: '10th or 12th standard completion.',
    aiHighlights: {
      headline: 'Next-Gen IT Support with Automated Diagnostics',
      description:
        'Learn how corporate IT desks use AI triage bots, automated software deployment scripts, and intelligent troubleshooting copilots to resolve user tickets in minutes.',
      skills: [
        'Enterprise IT Systems & OS Administration',
        'Relational Databases & SQL Querying',
        'Computer Networking & Zero-Trust Cybersecurity',
        'ITIL Best Practices & Incident Management',
      ],
      aiImpactFactor: 'Automated IT Diagnostics & Infrastructure Reliability',
    },
    toolsAndTech: [
      'Windows Server & Linux (Ubuntu)',
      'MySQL / PostgreSQL',
      'Jira Service Management',
      'Microsoft 365 & Google Workspace Admin',
      'Wireshark (Networking)',
      'PowerShell Scripting',
    ],
    capstoneProject: {
      title: 'Enterprise Corporate IT Infrastructure & Helpdesk Deployment',
      description:
        'Design and simulate a 50-user corporate network: configure user directory permissions, deploy automated backup scripts, set up a secure SQL database, and configure a Jira Service Management ticketing portal.',
      deliverables: [
        'Network topology diagram with IP subnet allocation',
        'Relational SQL database with automated scheduled backup scripts',
        'Configured ITIL service desk portal with SLA escalation rules',
      ],
    },
    careerOutcomes: {
      roles: ['IT Support Specialist', 'Junior Database Administrator', 'Systems Coordinator', 'Desktop Support Engineer'],
      salaryRange: '₹4,00,000 - ₹9,50,000 / year',
      keyHiringSectors: ['IT Services & BPOs', 'Healthcare Systems', 'Educational Institutions', 'Banking Operations'],
    },
    keyTakeaways: [
      'Troubleshoot network connectivity, DNS, DHCP, and firewall issues',
      'Write complex SQL queries (SELECT, JOIN, GROUP BY, subqueries)',
      'Manage corporate user access, passwords, and security permissions',
      'Receive hands-on training with industry-standard ITIL processes',
    ],
    modules: [
      {
        title: 'Module 1: Computer Systems, OS & Hardware',
        summary: 'Computer hardware architectures, Windows Server setup, Linux shell commands, and file permissions.',
        topics: ['Computer Architecture & Peripheral Hardware', 'Windows Server & Active Directory Basics', 'Linux Command Line Fundamentals', 'System Maintenance & Software Packaging'],
        durationWeeks: 'Months 1-3',
        projectMilestone: 'Lab: Configuring Linux server user permissions and security policies',
      },
      {
        title: 'Module 2: Networking & Relational SQL Databases',
        summary: 'TCP/IP protocols, routers, switches, subnets, database normalization, and SQL querying.',
        topics: ['IP Addressing, DNS & Subnetting', 'Database Design & ER Diagrams', 'SQL CRUD Operations & Multi-Table Joins', 'Database Backups & Recovery Procedures'],
        durationWeeks: 'Months 4-7',
        projectMilestone: 'Lab: Building and querying a normalized 5-table company database',
      },
      {
        title: 'Module 3: Cybersecurity Hygiene, ITIL & Capstone',
        summary: 'Threat prevention, phishing defenses, ITIL ticketing workflows, SLA management, and capstone deployment.',
        topics: ['Cybersecurity Best Practices & MFA', 'ITIL Incident, Problem & Change Management', 'Jira Service Management Configuration', 'Final Enterprise IT Deployment Capstone'],
        durationWeeks: 'Months 8-10',
        projectMilestone: 'Capstone: Full 50-user simulated corporate IT infrastructure',
      },
    ],
    price: 39999,
    duration: '10 months',
    mode: 'LMS + Guided Computer Labs',
    reviews: [
      {
        student_name: 'Deepak Shinde',
        role: 'IT Support Engineer at MNC',
        rating: 5,
        review_text: 'Coming from a non-engineering background, this diploma gave me the exact hands-on skills I needed. The SQL and networking modules helped me clear my campus interview easily.',
      },
    ],
  },

  {
    title: 'Diploma in AI-Enabled Business Operations & Automation',
    slug: 'diploma-ai-enabled-business',
    category: 'Diploma Programs',
    badge: '🤖 AI Transformation',
    level: 'Intermediate',
    rating: 4.9,
    reviewsCount: 112,
    enrolledCount: 2300,
    short_description:
      'Pioneer the future of work. Learn to audit business bottlenecks, integrate autonomous AI agents, deploy Zapier/Make automation pipelines, and govern enterprise AI.',
    description:
      'Businesses that fail to automate will be replaced by those that do. This groundbreaking 12-month diploma trains you to become the AI Transformation Lead for modern companies. Learn to map inefficient business workflows, connect disparate enterprise apps using Zapier, Make, and webhook APIs, deploy intelligent document processing engines, and train teams on responsible AI adoption.',
    target_audience: [
      'Operations Managers, Process Analysts, and Continuous Improvement Leads',
      'Entrepreneurs and SMB owners seeking 80%+ operational automation',
      'Consultants guiding corporate digital transformations',
    ],
    prerequisites: 'Undergraduate degree or equivalent workplace experience.',
    aiHighlights: {
      headline: 'Architect Autonomous Enterprise Workflows',
      description:
        'Connect CRMs, ERPs, accounting software, and communication tools into self-orchestrating, autonomous AI systems that process invoices, resolve customer tickets, and compile compliance audits.',
      skills: [
        'Enterprise Business Process Mapping (BPMN)',
        'No-Code/Low-Code AI Automation (Zapier, Make.com)',
        'Intelligent Document Extraction (IDP)',
        'Enterprise AI Governance, Security & Compliance',
      ],
      aiImpactFactor: '80% Reduction in Manual Data Entry & Autonomous Operations',
    },
    toolsAndTech: [
      'Make.com & Zapier',
      'OpenAI Enterprise APIs',
      'Airtable & Notion Enterprise',
      'HubSpot / Salesforce Integration',
      'Miro (Process Mapping)',
      'Claude 3.5 Sonnet',
    ],
    capstoneProject: {
      title: 'Full Autonomous Operational Overhaul for Mid-Market Company',
      description:
        'Map the complete operations of a 100-person logistics or retail company. Build a multi-platform automation system in Make.com connecting customer inquiries to CRM, generating invoice receipts with AI extraction, and alerting dispatch via Slack.',
      deliverables: [
        'Before-and-after BPMN process flowchart showing 65% labor savings',
        'Working Make.com scenario with 15+ API nodes, webhooks, and AI parsers',
        'Enterprise AI governance handbook detailing data safety and ethics',
      ],
    },
    careerOutcomes: {
      roles: ['AI Operations Manager', 'Business Automation Consultant', 'Process Transformation Lead', 'Chief AI Officer (SMB)'],
      salaryRange: '₹9,50,000 - ₹26,00,000 / year',
      keyHiringSectors: ['Tech Startups', 'Logistics & Supply Chain', 'Financial Services', 'Management Consulting'],
    },
    keyTakeaways: [
      'Audit any company department and identify high-ROI automation opportunities',
      'Build resilient API webhook workflows with error-handling fallback logic',
      'Deploy autonomous AI agents that perform multi-step administrative tasks',
      'Develop company-wide guidelines for secure, compliant AI usage',
    ],
    modules: [
      {
        title: 'Trimester 1: Process Mapping & Low-Code Automations',
        summary: 'Deconstructing workflows with BPMN, identifying bottlenecks, and building foundational automations with Make and Zapier.',
        topics: ['Business Process Modeling Notation (BPMN)', 'Identifying Automation High-Value Targets', 'Zapier Triggers, Filters & Multi-Step Paths', 'Make.com Routers, Iterators & Data Stores'],
        durationWeeks: 'Months 1-4',
        projectMilestone: 'Project: Automated lead qualification and CRM ingestion pipeline',
      },
      {
        title: 'Trimester 2: AI Integration & Intelligent Document Processing',
        summary: 'Connecting LLM endpoints to databases, automated invoice/contract parsing, and conversational AI customer support.',
        topics: ['OpenAI & Claude API Webhook Integration', 'Parsing Unstructured PDFs with Structured AI', 'Dynamic Document Synthesis & Dispatch', 'Automating Customer Support Triage'],
        durationWeeks: 'Months 5-8',
        projectMilestone: 'Project: Zero-touch invoice ingestion and accounting reconciliation bot',
      },
      {
        title: 'Trimester 3: Governance, Change Management & Capstone',
        summary: 'Data protection regulations (GDPR/DPDP), training employees to use AI tools, ROI reporting, and final capstone defense.',
        topics: ['Data Privacy, PII Redaction & Enterprise Security', 'Change Management: Getting Teams to Adopt AI', 'Measuring Automation ROI & Time Savings', 'Final Operational Transformation Defense'],
        durationWeeks: 'Months 9-12',
        projectMilestone: 'Capstone: Full Enterprise Autonomous Operations Overhaul',
      },
    ],
    price: 47999,
    duration: '12 months',
    mode: 'Online (Interactive Labs + Case Studies)',
    reviews: [
      {
        student_name: 'Amitabh Sengupta',
        role: 'Operations VP at Supply Chain Firm',
        rating: 5,
        review_text: 'This program paid for itself in week 3. We automated our vendor onboarding process with Make and OpenAI, cutting processing time from 4 days to 4 minutes.',
      },
    ],
  },

  // ==========================================
  // DEGREE PROGRAMS
  // ==========================================
  {
    title: 'Bachelor of Business Administration (BBA - Digital Commerce)',
    slug: 'bba-digital-commerce',
    category: 'Degree Programs',
    badge: '🎓 3-Year Degree',
    level: 'All Levels',
    rating: 4.8,
    reviewsCount: 135,
    enrolledCount: 3100,
    short_description:
      'Premier 3-year undergraduate degree blending core management, financial accounting, global e-commerce, digital marketing, and AI business strategy.',
    description:
      'Prepare for leadership in the digital era. This 3-year comprehensive degree program integrates classical management education (Finance, HR, Economics, Marketing, Corporate Law) with modern digital commerce execution. Students graduate with real internship experience, portfolio-proven e-commerce stores, and mastery of modern AI commercial tools.',
    target_audience: [
      '12th standard graduates from Commerce, Science, or Arts streams',
      'Future entrepreneurs intending to launch their own business ventures',
      'Students aspiring for top management roles in multinational corporations',
    ],
    prerequisites: 'Successful completion of 10+2 from a recognized educational board.',
    aiHighlights: {
      headline: 'The Next-Generation Business Degree',
      description:
        'Unlike traditional degrees trapped in 1990s theory, IIECM equips you with AI financial forecasting, digital consumer psychology, and algorithmic supply chain tools from semester one.',
      skills: [
        'Strategic Management & Corporate Finance',
        'Digital Commerce & Omnichannel Retail',
        'AI Data Analytics & Market Intelligence',
        'Entrepreneurship & Venture Capital Pitching',
      ],
      aiImpactFactor: 'Modern Corporate Management Integrated with AI Digital Strategy',
    },
    toolsAndTech: [
      'Shopify Plus',
      'Microsoft Excel & PowerBI',
      'TallyPrime & Zoho Books',
      'Google Analytics 4',
      'Meta Ads Manager',
      'Claude for Market Research',
    ],
    capstoneProject: {
      title: 'Full Venture Incubation & Commercial Business Launch',
      description:
        'Over the final two semesters, conceive, fundraise, and launch a real commercial business venture with complete financial statements, marketing engine, and operational team.',
      deliverables: [
        'Audited 3-year financial model with Balance Sheet, P&L, and Cash Flow',
        'Live operational digital commercial enterprise generating revenue',
        'Formal pitch presentation evaluated by venture capital investors',
      ],
    },
    careerOutcomes: {
      roles: ['Management Trainee', 'Digital Marketing Associate', 'Business Development Manager', 'Founder / Entrepreneur'],
      salaryRange: '₹5,00,000 - ₹14,00,000 / year (Entry Level)',
      keyHiringSectors: ['E-Commerce Giants', 'Banking & Financial Institutions', 'Global Consultancies', 'Tech Startups'],
    },
    keyTakeaways: [
      'UGC-recognized university degree curriculum integration',
      'Mandatory corporate internships with top industry ecosystem partners',
      'Learn accounting, taxation, company law, and ethical leadership',
      'Placement support with access to 50+ hiring partner companies',
    ],
    modules: [
      {
        title: 'Year 1: Management Foundations & Digital Literacy',
        summary: 'Principles of management, business economics, financial accounting, marketing principles, and digital business tools.',
        topics: ['Organizational Behavior & Leadership', 'Micro & Macro Economics', 'Financial Accounting Principles', 'Digital Tools & Spreadsheet Analytics'],
        durationWeeks: 'Year 1 (Sem 1 & 2)',
        projectMilestone: 'Project: Financial statement analysis of 5 publicly traded companies',
      },
      {
        title: 'Year 2: Commerce Specialization, Legal & Marketing',
        summary: 'Corporate law, e-commerce storefronts, consumer behavior, digital marketing, and supply chain logistics.',
        topics: ['Company Law & Intellectual Property', 'Omnichannel E-Commerce Strategy', 'Paid Media & Search Optimization', 'Operations & Inventory Management'],
        durationWeeks: 'Year 2 (Sem 3 & 4)',
        projectMilestone: 'Project: Launching an e-commerce pilot with live customer transactions',
      },
      {
        title: 'Year 3: Strategic Leadership, Capstone & Internship',
        summary: 'International business, venture creation, AI in corporate strategy, full-time industry internship, and final thesis.',
        topics: ['Strategic Management & Business Policy', 'AI & Data-Driven Commercial Decision Making', 'Corporate Internship Immersion', 'Final Degree Thesis & Venture Launch'],
        durationWeeks: 'Year 3 (Sem 5 & 6)',
        projectMilestone: 'Capstone: Live Venture Incubation and Investment Pitch',
      },
    ],
    price: 185000,
    duration: '3 years',
    mode: 'Hybrid (Campus + Interactive Labs + Internships)',
    reviews: [
      {
        student_name: 'Shreya Kulkarni',
        role: 'BBA Graduate → Associate Brand Strategist',
        rating: 5,
        review_text: 'Unlike other colleges where business is taught purely out of textbooks, IIECM had us running real digital campaigns and building actual stores. I secured a job at an e-commerce aggregator before graduation!',
      },
    ],
  },

  {
    title: 'Bachelor of Computer Applications (BCA - Industry Integrated)',
    slug: 'bca-industry-integrated',
    category: 'Degree Programs',
    badge: '💻 3-Year Tech Degree',
    level: 'All Levels',
    rating: 4.9,
    reviewsCount: 148,
    enrolledCount: 3600,
    short_description:
      'Rigorous 3-year computer applications degree featuring computer science fundamentals, full-stack programming, cloud systems, and applied AI software engineering.',
    description:
      'Launch an elite software engineering career. This 3-year industry-integrated BCA is engineered to bridge academic computer science with Silicon Valley engineering standards. Master Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Modern Web & Mobile Development, and AI System Integration.',
    target_audience: [
      '12th standard graduates aspiring to become Software Engineers',
      'Tech enthusiasts wanting a deep, industry-aligned computing education',
      'Students looking for guaranteed internship exposure and software placements',
    ],
    prerequisites: '10+2 with Mathematics or Computer Science preferred.',
    aiHighlights: {
      headline: 'Software Engineering in the AI-Augmented Era',
      description:
        'Master the foundational algorithms that power modern AI alongside practical development using Cursor AI, GitHub Copilot, and LLM APIs to build scalable, fault-tolerant software.',
      skills: [
        'Data Structures & Algorithms (C++, Java, Python)',
        'Full Stack Web & Mobile App Development',
        'Database Internals & Distributed Systems',
        'Applied AI Engineering & Cloud Microservices',
      ],
      aiImpactFactor: 'Deep CS Foundations Combined with AI-Native Software Engineering',
    },
    toolsAndTech: [
      'C++ & Java',
      'Python',
      'React & Node.js',
      'PostgreSQL & MongoDB',
      'Docker & Git',
      'Linux Shell',
      'Cursor AI & Copilot',
    ],
    capstoneProject: {
      title: 'Scalable Distributed Cloud Software Application',
      description:
        'Architect and deploy a multi-service software platform with microservices, authenticated REST/GraphQL APIs, real-time WebSockets, automated CI/CD pipelines, and high-concurrency benchmarks.',
      deliverables: [
        'Production repository with 90%+ unit test coverage',
        'System architecture design document detailing data flow and scaling',
        'Live deployed platform serving real-time users on cloud infrastructure',
      ],
    },
    careerOutcomes: {
      roles: ['Software Development Engineer (SDE-1)', 'Frontend / Backend Engineer', 'Full Stack Developer', 'Cloud / DevOps Associate'],
      salaryRange: '₹6,00,000 - ₹18,00,000 / year (Entry Level)',
      keyHiringSectors: ['Product Tech Companies', 'FinTech & Banking', 'Cloud Infrastructure Providers', 'Global IT Firms'],
    },
    keyTakeaways: [
      'Master LeetCode-style data structures and algorithms for tech interviews',
      'Build end-to-end applications from scratch in multiple languages',
      '6-month industry internship embedded directly into final year',
      'Comprehensive preparation for campus placements and technical rounds',
    ],
    modules: [
      {
        title: 'Year 1: Programming Foundations & Mathematical CS',
        summary: 'C/C++ programming, discrete mathematics, digital logic, computer organization, and algorithms introduction.',
        topics: ['C & C++ Programming In-Depth', 'Discrete Mathematics & Logic', 'Computer Architecture & Assembly Basics', 'Data Structures (Arrays, Linked Lists, Stacks, Queues)'],
        durationWeeks: 'Year 1 (Sem 1 & 2)',
        projectMilestone: 'Project: Memory management and custom data structures library in C++',
      },
      {
        title: 'Year 2: OOP, Databases, Web Systems & Operating Systems',
        summary: 'Java/Python OOP, Database Management Systems (DBMS), Linux OS internals, and full stack web development.',
        topics: ['Object-Oriented Programming (Java/Python)', 'Database Internals, Normalization & SQL', 'Operating System Processes, Threads & Memory', 'Modern Web Stack (React, Node, Express)'],
        durationWeeks: 'Year 2 (Sem 3 & 4)',
        projectMilestone: 'Project: Full stack authenticated web application with relational database',
      },
      {
        title: 'Year 3: Cloud, Applied AI, Internship & Capstone',
        summary: 'Cloud computing, containerization with Docker, applied machine learning, 6-month industry internship, and capstone.',
        topics: ['Cloud Architecture & Docker Containers', 'Applied AI & Neural Networks', 'System Design Fundamentals', '6-Month Industry Internship & Thesis'],
        durationWeeks: 'Year 3 (Sem 5 & 6)',
        projectMilestone: 'Capstone: Distributed High-Concurrency Software Platform',
      },
    ],
    price: 165000,
    duration: '3 years',
    mode: 'Hybrid (Interactive Coding Labs + Internships)',
    reviews: [
      {
        student_name: 'Varun Swaminathan',
        role: 'SDE-1 at Cloud Software Firm',
        rating: 5,
        review_text: 'The best decision I made was picking IIECM over generic universities. The emphasis on Data Structures, Git, modern React, and AI coding meant I sailed through my campus placements with multiple offers.',
      },
    ],
  },

  {
    title: 'Bachelor of Commerce (B.Com - E-Business & Analytics)',
    slug: 'bcom-ebusiness-analytics',
    category: 'Degree Programs',
    badge: '📊 Modern Commerce',
    level: 'All Levels',
    rating: 4.8,
    reviewsCount: 110,
    enrolledCount: 2750,
    short_description:
      'Modern 3-year commerce degree integrating corporate accounting, taxation, auditing, fintech platforms, financial modeling, and predictive analytics.',
    description:
      'Reinvent traditional commerce for the digital banking and algorithmic finance age. Gain mastery over financial accounting, corporate auditing, Goods & Services Tax (GST), banking law, financial modeling in Excel, and data analytics tools (Python, PowerBI) to analyze balance sheets and economic trends.',
    target_audience: [
      '12th Commerce and Arts/Science students pursuing financial careers',
      'Aspirants targeting CA, CMA, CFA, or corporate finance roles',
      'Students wanting a future-proof commerce degree with tech skills',
    ],
    prerequisites: '10+2 from a recognized educational board.',
    aiHighlights: {
      headline: 'FinTech, Algorithmic Auditing & AI Accounting',
      description:
        'Master the technological revolution transforming corporate finance: automated reconciliation algorithms, AI fraud detection in transaction ledgers, and dynamic financial dashboards.',
      skills: [
        'Advanced Financial Accounting & Corporate Taxation',
        'GST Compliance & Auditing Standards',
        'Financial Modeling & Valuation (DCF, LBO)',
        'Data Analytics with PowerBI & Python for Finance',
      ],
      aiImpactFactor: 'Modern Fintech Literacy & Automated Financial Intelligence',
    },
    toolsAndTech: [
      'TallyPrime with GST',
      'Advanced Excel & VBA',
      'PowerBI',
      'Zoho Books',
      'Python for Finance Basics',
    ],
    capstoneProject: {
      title: 'Full Corporate Financial Audit & Valuation Model',
      description:
        'Perform a comprehensive forensic financial audit of a major corporate entity. Reconstruct accounting ledgers, audit GST tax filings, build a 3-statement financial valuation model, and present a buy/sell equity recommendation.',
      deliverables: [
        '3-Statement dynamic financial model in Excel with DCF valuation',
        'Comprehensive corporate tax & GST compliance audit report',
        'Executive PowerBI dashboard tracking key liquidity & solvency ratios',
      ],
    },
    careerOutcomes: {
      roles: ['Financial Analyst', 'Corporate Accountant', 'Tax Consultant', 'FinTech Operations Associate', 'Audit Associate'],
      salaryRange: '₹4,50,000 - ₹12,00,000 / year (Entry Level)',
      keyHiringSectors: ['Big 4 Accounting Firms', 'Commercial Banks & NBFCs', 'Fintech Startups', 'Corporate Finance Divisions'],
    },
    keyTakeaways: [
      'Deep grounding in Indian and International Accounting Standards (Ind AS / IFRS)',
      'Practical training in TallyPrime, GST filing, and TDS computations',
      'Build professional financial models from blank spreadsheets',
      'Internship placement support with financial institutions and chartered firms',
    ],
    modules: [
      {
        title: 'Year 1: Financial Accounting & Business Economics',
        summary: 'Accounting principles, journal ledgers, trial balance, business mathematics, microeconomics, and banking fundamentals.',
        topics: ['Financial Accounting & Preparation of Final Accounts', 'Business Mathematics & Statistics', 'Microeconomics & Cost Analysis', 'Banking Operations & Digital Payment Systems'],
        durationWeeks: 'Year 1 (Sem 1 & 2)',
        projectMilestone: 'Project: Preparing complete books of accounts for an SME business',
      },
      {
        title: 'Year 2: Corporate Law, Auditing & Taxation',
        summary: 'Corporate accounting, GST compliance, income tax laws, auditing standards, and financial management.',
        topics: ['Corporate Accounting & Share Capital', 'Direct Taxation (Income Tax)', 'Indirect Taxation (GST Laws & Invoicing)', 'Principles of Auditing & Internal Controls'],
        durationWeeks: 'Year 2 (Sem 3 & 4)',
        projectMilestone: 'Project: Preparing mock corporate tax returns and GST reconciliations',
      },
      {
        title: 'Year 3: Financial Modeling, Analytics & Internship',
        summary: 'Financial modeling, PowerBI dashboards, fintech ecosystems, corporate internship, and capstone valuation thesis.',
        topics: ['Advanced Financial Modeling & Valuation', 'PowerBI Financial Dashboarding', 'FinTech & Blockchain in Banking', 'Corporate Internship & Capstone Defense'],
        durationWeeks: 'Year 3 (Sem 5 & 6)',
        projectMilestone: 'Capstone: Corporate Financial Audit & Dynamic Valuation Model',
      },
    ],
    price: 145000,
    duration: '3 years',
    mode: 'Hybrid (Campus + Interactive Finance Labs)',
    reviews: [
      {
        student_name: 'Pawan Khandelwal',
        role: 'Audit Associate at Big 4 Firm',
        rating: 5,
        review_text: 'Most B.Com graduates only know textbook accounting. IIECM taught us PowerBI, financial modeling, and GST software. In my Big 4 interview, the partners were genuinely impressed by my portfolio.',
      },
    ],
  },

  // ==========================================
  // POSTGRADUATE PROGRAMS
  // ==========================================
  {
    title: 'MBA in E-Commerce & Digital Strategy (Executive)',
    slug: 'mba-ecommerce-digital-strategy',
    category: 'Postgraduate Programs',
    badge: '🏆 Premier PG Degree',
    level: 'Advanced',
    rating: 4.9,
    reviewsCount: 154,
    enrolledCount: 2200,
    short_description:
      'Elite 2-year postgraduate MBA program designed for future C-suite executives, transformation directors, and leaders of high-growth digital enterprises.',
    description:
      'Ascend into the executive suite. This master’s degree provides rigorous training in corporate strategy, algorithmic pricing, platform economics, digital supply chains, global marketplace consolidation, venture capital financing, and organizational AI transformation.',
    target_audience: [
      'Graduates with 1-5 years of professional work experience',
      'Mid-level managers targeting Director and VP leadership tracks',
      'Entrepreneurs scaling modern D2C and tech-enabled businesses',
    ],
    prerequisites: 'Bachelor’s degree in any discipline with minimum 50% aggregate.',
    aiHighlights: {
      headline: 'Strategic AI Leadership at the Boardroom Level',
      description:
        'Develop the strategic playbook for integrating generative AI, algorithmic demand forecasting, and autonomous operations across multi-billion-dollar enterprise ecosystems.',
      skills: [
        'Strategic Corporate Transformation & Moat Design',
        'Platform Business Models & Two-Sided Network Economics',
        'Venture Capital, Mergers & Acquisitions (M&A)',
        'Enterprise AI Governance & Strategic Operations',
      ],
      aiImpactFactor: 'Strategic Boardroom Leadership & Enterprise AI Transformation',
    },
    toolsAndTech: [
      'Tableau & PowerBI',
      'Statista & Gartner Research',
      'Capital IQ / PitchBook Datasets',
      'Miro (Strategic Mapping)',
      'Claude 3.5 (Strategy Synthesis)',
    ],
    capstoneProject: {
      title: 'Full Corporate Digital Transformation & Market Expansion Thesis',
      description:
        'Select a traditional multi-billion-dollar legacy corporation (e.g., traditional retail, automotive, or consumer goods). Design a 5-year digital transformation blueprint encompassing omnichannel retail, supply chain AI, financial modeling, and an M&A roadmap.',
      deliverables: [
        '50-page board-ready strategic transformation blueprint',
        '10-year discounted cash flow financial forecast with M&A synergies',
        'Executive defense presentation delivered to an industry jury',
      ],
    },
    careerOutcomes: {
      roles: ['Director of Digital Strategy', 'Vice President of E-Commerce', 'Senior Management Consultant', 'Chief Operating Officer (COO)'],
      salaryRange: '₹18,00,000 - ₹45,00,000 / year',
      keyHiringSectors: ['Top Management Consultancies', 'E-Commerce Conglomerates', 'Private Equity & VC', 'Global Retail Groups'],
    },
    keyTakeaways: [
      'Case-study method learning modeled on Harvard & INSEAD business schools',
      'Executive networking masterclasses with leading CEOs and Founders',
      'Comprehensive mastery of unit economics, contribution margins, and CAC/LTV ratios',
      'Global corporate placement immersion with leading corporate partners',
    ],
    modules: [
      {
        title: 'Year 1: Strategic Foundations & Digital Economy',
        summary: 'Corporate strategy, strategic marketing, managerial economics, digital platform models, and quantitative decision analysis.',
        topics: ['Competitive Strategy & Value Innovation', 'Managerial Economics & Pricing Power', 'Digital Platform Economics & Moats', 'Strategic Financial Management'],
        durationWeeks: 'Year 1 (Sem 1 & 2)',
        projectMilestone: 'Project: Competitive strategic audit of Amazon vs Walmart vs Reliance',
      },
      {
        title: 'Year 2: Global Supply Chain, AI Transformation & Capstone',
        summary: 'Omnichannel supply chains, AI-driven operations, venture capital, M&A strategy, and executive capstone defense.',
        topics: ['Global Logistics & Supply Chain Optimization', 'Enterprise AI Strategy & Governance', 'Venture Capital, Private Equity & M&A', 'Executive Capstone Thesis Defense'],
        durationWeeks: 'Year 2 (Sem 3 & 4)',
        projectMilestone: 'Capstone: Enterprise Digital Transformation Strategy Defense',
      },
    ],
    price: 425000,
    duration: '2 years',
    mode: 'Hybrid (Weekend Executive Cohort + Virtual Labs)',
    reviews: [
      {
        student_name: 'Rajesh Subramanian',
        role: 'Director of Digital Operations',
        rating: 5,
        review_text: 'IIECM’s MBA curriculum is in a league of its own. The focus on platform economics, supply chain AI, and corporate strategy directly helped me transition from a senior manager into a business unit director.',
      },
    ],
  },

  {
    title: 'Master of Computer Applications (MCA - AI & Cloud Specialization)',
    slug: 'mca-ai-cloud-specialization',
    category: 'Postgraduate Programs',
    badge: '⚡ Advanced Computing',
    level: 'Advanced',
    rating: 4.9,
    reviewsCount: 126,
    enrolledCount: 2400,
    short_description:
      'Rigorous 2-year postgraduate computing degree mastering distributed cloud systems, neural network architectures, Kubernetes, microservices, and LLMOps.',
    description:
      'The definitive master’s program for elite computer science specialists. Go deep into distributed computing, Kubernetes cluster orchestration, cloud-native architecture, deep neural networks, transformer models, LLMOps, and high-throughput microservices. Graduate as a high-caliber Principal Architect or AI Systems Engineer.',
    target_audience: [
      'BCA, B.Sc Computer Science, or B.Tech graduates seeking an advanced degree',
      'Software engineers aspiring to become Cloud Architects or AI Specialists',
      'Technical leads wanting mastery over modern distributed systems',
    ],
    prerequisites: 'Bachelor’s degree in Computer Science, BCA, or equivalent degree with mathematics.',
    aiHighlights: {
      headline: 'Deep Neural Architectures & Cloud-Scale LLMOps',
      description:
        'Master the intersection of deep learning and distributed systems: distributed model training across multi-node GPU clusters, vLLM inference optimization, model quantization, and RAG architectures.',
      skills: [
        'Distributed Systems & High-Concurrency Architecture',
        'Deep Learning with PyTorch & Hugging Face',
        'Container Orchestration with Kubernetes & Docker',
        'LLMOps: Model Serving, Quantization & Fine-Tuning',
      ],
      aiImpactFactor: 'Production LLMOps & Distributed Cloud Computing at Hyperscale',
    },
    toolsAndTech: [
      'PyTorch & Hugging Face',
      'Kubernetes & Docker',
      'Go & Python',
      'Apache Kafka',
      'AWS / GCP Cloud',
      'vLLM & TensorRT-LLM',
      'Prometheus & Grafana',
    ],
    capstoneProject: {
      title: 'Distributed Multi-GPU LLM Inference & Search Cluster',
      description:
        'Engineer a production Kubernetes cluster that orchestrates distributed inference for open-weights LLMs (Llama 3 / Mistral) using vLLM, Kafka event queues, Redis semantic caching, and Grafana latency monitoring.',
      deliverables: [
        'Terraform scripts provisioning cloud GPU nodes',
        'Kubernetes Helm charts configuring auto-scaling inference workers',
        'Benchmarking report proving 3x throughput improvements with P99 latency < 200ms',
      ],
    },
    careerOutcomes: {
      roles: ['Principal Cloud Architect', 'AI Systems Engineer', 'Senior DevOps / SRE Lead', 'Staff Software Engineer'],
      salaryRange: '₹14,00,000 - ₹38,00,000 / year',
      keyHiringSectors: ['Hyperscale Cloud Providers', 'AI Infrastructure Startups', 'Fintech & Quant Trading', 'Global Tech R&D'],
    },
    keyTakeaways: [
      'In-depth mastery of distributed consensus (Raft, Paxos), CAP theorem, and event-driven design',
      'Fine-tune open-source models using LoRA / QLoRA on custom domain datasets',
      'Deploy and monitor zero-downtime microservice clusters on Kubernetes',
      'Publish research-grade technical projects and participate in hackathons',
    ],
    modules: [
      {
        title: 'Year 1: Distributed Systems, Advanced Algorithms & Cloud Native',
        summary: 'Advanced data structures, distributed systems architecture, Go programming, Docker, and Kubernetes orchestration.',
        topics: ['Advanced Algorithm Design & Complexity', 'Distributed Consensus & Event-Driven Systems (Kafka)', 'Containerization & Kubernetes Cluster Architecture', 'Cloud-Native Microservices in Go & Python'],
        durationWeeks: 'Year 1 (Sem 1 & 2)',
        projectMilestone: 'Project: High-throughput distributed message queue engine in Go',
      },
      {
        title: 'Year 2: Deep Learning, LLMOps, Thesis & Placement',
        summary: 'Deep neural networks in PyTorch, Transformer architectures, LLMOps, model quantization, 6-month industry internship, and thesis.',
        topics: ['Deep Learning Mathematics & Backprop in PyTorch', 'Transformers, Attention & Hugging Face', 'LLMOps: Fine-Tuning with LoRA & vLLM Serving', '6-Month Industry Project & Master’s Thesis'],
        durationWeeks: 'Year 2 (Sem 3 & 4)',
        projectMilestone: 'Capstone: Distributed Multi-GPU LLM Inference & Search Cluster',
      },
    ],
    price: 385000,
    duration: '2 years',
    mode: 'LMS + Research Labs + Industry Co-Op',
    reviews: [
      {
        student_name: 'Nikhil Ranganathan',
        role: 'AI Infrastructure Engineer',
        rating: 5,
        review_text: 'IIECM’s MCA gave me the exact combination the industry is starving for: deep distributed systems knowledge combined with PyTorch and LLMOps. It completely redefined my career trajectory.',
      },
    ],
  },

  {
    title: 'Postgraduate Diploma in Data Science, Machine Learning & AI',
    slug: 'pg-diploma-data-science-ai',
    category: 'Postgraduate Programs',
    badge: '🧬 Frontier AI Track',
    level: 'Advanced',
    rating: 4.9,
    reviewsCount: 138,
    enrolledCount: 2600,
    short_description:
      'Intensive 12-month postgraduate diploma: Statistical learning, Big Data pipelines, Computer Vision, Natural Language Processing, and LLM fine-tuning.',
    description:
      'A rigorous, high-impact PG Diploma tailored for ambitious engineers, statisticians, and analysts. Master probability, linear algebra, deep learning architectures, Large Language Model fine-tuning with PEFT/LoRA, Vector RAG pipelines, and big data processing with Apache Spark.',
    target_audience: [
      'Software engineers, analysts, and STEM graduates looking to break into elite AI roles',
      'Professionals seeking a recognized postgraduate credential in Artificial Intelligence',
    ],
    prerequisites: 'Bachelor’s degree in Engineering, Mathematics, Statistics, Computer Science, or related quantitative field.',
    aiHighlights: {
      headline: 'End-to-End Frontier AI Engineering',
      description:
        'Build deep theoretical and practical capability across the entire AI lifecycle: from exploratory data wrangling and big data ETL to fine-tuning multi-billion-parameter LLMs and deploying production RAG systems.',
      skills: [
        'Advanced Mathematics for Machine Learning',
        'Deep Learning (CNNs, RNNs, Transformers)',
        'Natural Language Processing & LLM Fine-Tuning',
        'Big Data Analytics with Apache Spark',
      ],
      aiImpactFactor: 'Frontier AI Research & Production Model Fine-Tuning',
    },
    toolsAndTech: [
      'Python & PyTorch',
      'Hugging Face Transformers',
      'Apache Spark',
      'LangChain & LlamaIndex',
      'MLflow',
      'Docker & AWS SageMaker',
    ],
    capstoneProject: {
      title: 'Multimodal Medical / Financial Knowledge RAG System with Domain Fine-Tuning',
      description:
        'Fine-tune an open-source 8B LLM using LoRA on specialized domain records. Pair it with a hybrid vector search pipeline and deploy a verified, audited question-answering service with citation tracking.',
      deliverables: [
        'Model training code with loss and perplexity evaluation logs',
        'Benchmarked RAG pipeline with dense & sparse reciprocal rank fusion',
        'Production container image deployed with monitoring hooks in MLflow',
      ],
    },
    careerOutcomes: {
      roles: ['Senior Data Scientist', 'AI Research Engineer', 'Machine Learning Architect', 'NLP Specialist'],
      salaryRange: '₹12,00,000 - ₹32,00,000 / year',
      keyHiringSectors: ['AI Research Labs', 'Healthcare & Biotech', 'FinTech & Hedge Funds', 'Autonomous Systems'],
    },
    keyTakeaways: [
      'Master mathematical rigor: multivariate calculus, Bayesian inference, and eigenvalues',
      'Fine-tune transformer models on your own custom domain corpora',
      'Handle terabyte-scale datasets with distributed Spark clusters',
      'Graduate with an elite portfolio of 6 production-grade AI projects',
    ],
    modules: [
      {
        title: 'Trimester 1: Mathematical Foundations & Supervised Learning',
        summary: 'Linear algebra, probability theory, optimization algorithms, Scikit-learn pipelines, and tree ensembles.',
        topics: ['Matrix Decomposition & Vector Calculus', 'Statistical Hypothesis Testing & Bayesian Priors', 'Supervised Learning Algorithms In-Depth', 'Feature Engineering & Cross-Validation'],
        durationWeeks: 'Months 1-4',
        projectMilestone: 'Project: High-performance algorithmic predictive model pipeline',
      },
      {
        title: 'Trimester 2: Deep Learning, Computer Vision & NLP',
        summary: 'PyTorch deep neural nets, convolutional networks, recurrent models, attention mechanisms, and transformers.',
        topics: ['Neural Network Architectures with PyTorch', 'Computer Vision: ResNet, Vision Transformers (ViT)', 'NLP: Word Embeddings to BERT and GPT', 'Training Optimization & Regularization'],
        durationWeeks: 'Months 5-8',
        projectMilestone: 'Project: Multi-class semantic document classifier using Transformers',
      },
      {
        title: 'Trimester 3: LLMs, Fine-Tuning, Big Data & Capstone',
        summary: 'Apache Spark, parameter-efficient fine-tuning (LoRA), vector databases, RAG, and master capstone thesis.',
        topics: ['Distributed Big Data with Apache Spark', 'LLM Fine-Tuning with PEFT & LoRA', 'Advanced RAG with Hybrid Re-ranking', 'Final Capstone Project Defense'],
        durationWeeks: 'Months 9-12',
        projectMilestone: 'Capstone: Domain Fine-Tuned Multimodal AI Knowledge Engine',
      },
    ],
    price: 199999,
    duration: '12 months',
    mode: 'Online (Live Intensive Labs + Research Guidance)',
    reviews: [
      {
        student_name: 'Dr. Siddharth Sen',
        role: 'Senior Data Scientist at HealthTech',
        rating: 5,
        review_text: 'The academic rigor combined with state-of-the-art Hugging Face and PyTorch labs makes this PG Diploma exceptional. It gave me the skills to lead our company’s GenAI research team.',
      },
    ],
  },

  // ==========================================
  // CERTIFICATION PROGRAMS
  // ==========================================
  {
    title: 'Certified E-Commerce Professional (CECP)',
    slug: 'certified-ecommerce-professional',
    category: 'Certification Programs',
    badge: '🏅 Industry Credential',
    level: 'Intermediate',
    rating: 4.8,
    reviewsCount: 82,
    enrolledCount: 2100,
    short_description:
      'Globally recognized professional credential validating operational mastery across D2C store setup, marketplace management, and AI logistics.',
    description:
      'Earn the industry standard credential that verifies your operational authority. The CECP credential evaluates end-to-end commerce management: catalog taxonomy, payment gateways, fulfillment routing, Amazon/Flipkart policy compliance, and customer retention systems.',
    target_audience: [
      'E-Commerce Operations Professionals seeking recognized credentialing',
      'Retail entrepreneurs proving capability to investors and brands',
      'Fresh graduates targeting verified e-commerce career placement',
    ],
    prerequisites: 'Basic knowledge of e-commerce platforms or retail operations.',
    aiHighlights: {
      headline: 'Certified for Modern Automated Commerce',
      description:
        'Evaluates and certifies modern competencies including AI-driven catalog generation, dynamic repricing systems, automated customer support triage, and inventory forecasting.',
      skills: [
        'E-Commerce Operations & Compliance Standards',
        'Omnichannel Inventory Architecture',
        'Marketplace Performance Metrics (ODR, Buy Box, ACoS)',
        'Automated Customer Lifetime Journey Mapping',
      ],
      aiImpactFactor: 'Industry-Standard Verified Certification in Modern Digital Commerce',
    },
    toolsAndTech: [
      'Shopify & WooCommerce',
      'Amazon Brand Analytics',
      'Flipkart Seller Hub',
      'Shiprocket Post-Purchase',
      'Razorpay Settlement Portal',
    ],
    capstoneProject: {
      title: 'Official CECP Proctored Practical Operations Audit',
      description:
        'Complete a 4-hour live proctored simulation: audit a malfunctioning e-commerce store with declining conversion rates, optimize listing keywords, resolve shipping bottlenecks, and calculate unit profitability.',
      deliverables: [
        'Comprehensive 15-point store turnaround recommendations audit',
        'Marketplace listing optimization with high-conversion copy',
        'Passing score (80%+) on the proctored CECP certification exam',
      ],
    },
    careerOutcomes: {
      roles: ['Certified E-Commerce Specialist', 'Store Operations Manager', 'Marketplace Account Manager', 'D2C Merchant Lead'],
      salaryRange: '₹5,50,000 - ₹15,00,000 / year',
      keyHiringSectors: ['D2C Brands', 'E-Commerce Enablers', 'Retail Chains', 'Digital Agencies'],
    },
    keyTakeaways: [
      'Digital badge and verifiable credential on LinkedIn & Credly',
      'Comprehensive understanding of marketplace terms of service and compliance',
      'Practical frameworks for reducing return-to-origin (RTO) on COD orders',
      'Lifetime access to IIECM E-Commerce Alumni Network',
    ],
    modules: [
      {
        title: 'Module 1: D2C Store Architecture & Checkout Optimization',
        summary: 'Site speed benchmarks, catalog taxonomy, payment gateway security, and checkout funnel optimization.',
        topics: ['Catalog Taxonomy & Merchandising', 'Payment Processing & Gateway Redundancy', 'Checkout Drop-off Analysis', 'Trust Signals & Risk Minimization'],
        durationWeeks: 'Weeks 1-3',
        projectMilestone: 'Lab: Auditing and optimizing checkout funnels for 3% conversion rates',
      },
      {
        title: 'Module 2: Marketplace Mastery & Supply Chain Logistics',
        summary: 'Amazon Buy Box algorithms, ACoS advertising optimization, 3PL courier selection, and inventory holding costs.',
        topics: ['Winning the Amazon & Flipkart Buy Box', 'Advertising Strategies on Marketplaces', 'Warehousing, SLA & Fulfillment Rates', 'RTO Reduction Tactics for Indian Commerce'],
        durationWeeks: 'Weeks 4-6',
        projectMilestone: 'Lab: Complete marketplace advertising and inventory audit',
      },
      {
        title: 'Module 3: Certification Examination & Case Defense',
        summary: 'Comprehensive review, mock examinations, proctored practical assessment, and credential issuance.',
        topics: ['Mock Exam Simulation & Review', 'Practical Operations Scenario Defense', 'Proctored Online Certification Exam', 'Credential Issuance & Career Advisory'],
        durationWeeks: 'Weeks 7-8',
        projectMilestone: 'Capstone: Official Proctored CECP Certification Examination',
      },
    ],
    price: 12999,
    duration: '8 weeks',
    mode: 'Online (Proctored Credential Track)',
    reviews: [
      {
        student_name: 'Pooja Anand',
        role: 'Certified E-Commerce Manager',
        rating: 5,
        review_text: 'Adding the CECP credential to my LinkedIn profile dramatically increased recruiter reach-outs. The exam tests actual operational realities that companies care about.',
      },
    ],
  },

  {
    title: 'Certified Digital Marketing Associate (CDMA)',
    slug: 'certified-digital-marketing-associate',
    category: 'Certification Programs',
    badge: '🎯 In-Demand Credential',
    level: 'Beginner',
    rating: 4.8,
    reviewsCount: 79,
    enrolledCount: 2400,
    short_description:
      'Foundational industry credential across SEO, paid search (Google Ads), social performance marketing (Meta), and Google Analytics 4.',
    description:
      'Validate your full-spectrum digital marketing competencies. The CDMA certification tests real-world skills: setting up paid campaigns, conducting keyword gap analyses, setting up conversion tracking tags in Google Tag Manager, and calculating CPA, ROAS, and CAC metrics.',
    target_audience: [
      'Fresh graduates and early-career marketers wanting certified proof of skill',
      'Freelancers looking to win higher-paying corporate clients',
      'Small business owners managing their own digital advertising budgets',
    ],
    prerequisites: 'Open to all backgrounds. Basic familiarity with web browsing and social media.',
    aiHighlights: {
      headline: 'Next-Gen Certified Performance Marketing',
      description:
        'Certifies your ability to use AI for high-velocity ad creative testing, automated bid optimization, predictive audience targeting, and multi-channel attribution modeling.',
      skills: [
        'Google Ads Search & Performance Max Campaigns',
        'Meta Ads Strategy & Creative Testing',
        'Google Analytics 4 & Tag Manager Setup',
        'Search Engine Optimization & Content Strategy',
      ],
      aiImpactFactor: 'Verified Multi-Channel Digital Marketing & Paid Ad Competency',
    },
    toolsAndTech: [
      'Google Ads & Google Tag Manager',
      'Meta Ads Manager',
      'Google Analytics 4',
      'Canva Pro & Midjourney',
      'Semrush Basics',
    ],
    capstoneProject: {
      title: 'Full Cross-Channel Paid & Organic Growth Strategy Audit',
      description:
        'Build and simulate a ₹50,000 multi-channel marketing budget allocation: set up Google Search ad groups, design Meta creatives with AI, configure GA4 event tracking, and forecast ROI.',
      deliverables: [
        'Google Ads keyword and ad copy structure document',
        'Meta Ads creative variation matrix with AI-generated copy',
        'Passing score on the proctored CDMA certification assessment',
      ],
    },
    careerOutcomes: {
      roles: ['Certified Digital Marketing Associate', 'Paid Media Specialist', 'Digital Marketing Executive', 'PPC Analyst'],
      salaryRange: '₹4,50,000 - ₹11,00,000 / year',
      keyHiringSectors: ['Digital Marketing Agencies', 'E-Commerce Brands', 'EdTech & FinTech', 'Hospitality & Travel'],
    },
    keyTakeaways: [
      'Officially verified CDMA digital credential and certificate',
      'Set up conversion tracking accurately in Google Tag Manager',
      'Eliminate wasted ad spend with negative keyword lists and bid adjustments',
      'Build client-ready performance marketing reports in Looker Studio',
    ],
    modules: [
      {
        title: 'Module 1: Search Marketing & Google Ads',
        summary: 'Keyword research, Google Ads quality score, ad extensions, bidding strategies (Target CPA, Target ROAS).',
        topics: ['Google Search Ad Mechanics', 'Quality Score & Ad Rank Optimization', 'Match Types & Negative Keywords', 'Performance Max & Display Ads Basics'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Creating a complete high-intent Google Search campaign structure',
      },
      {
        title: 'Module 2: Social Media Ads & Conversion Analytics',
        summary: 'Meta Ads Manager, audience pixel retargeting, creative testing, and Google Analytics 4 event setup.',
        topics: ['Meta Audience Targeting & Lookalikes', 'Creative Testing & Hook Variations', 'GA4 Custom Events & Conversion Funnels', 'Attribution Models & ROAS Calculation'],
        durationWeeks: 'Weeks 3-4',
        projectMilestone: 'Lab: Configuring GA4 custom events and conversion tracking',
      },
      {
        title: 'Module 3: Certification Examination & Practical Assessment',
        summary: 'Review of digital marketing ethics, mock assessments, and proctored certification exam.',
        topics: ['Comprehensive Knowledge Review', 'Live Campaign Troubleshooting Scenarios', 'Proctored CDMA Certification Exam', 'Portfolio Credential Verification'],
        durationWeeks: 'Weeks 5-6',
        projectMilestone: 'Capstone: Official CDMA Proctored Assessment & Credential',
      },
    ],
    price: 9999,
    duration: '6 weeks',
    mode: 'LMS + Guided Campaign Sandbox',
    reviews: [
      {
        student_name: 'Aditi Deshmukh',
        role: 'Digital Marketing Associate',
        rating: 5,
        review_text: 'The hands-on simulation with Google Tag Manager and Meta Ads Manager gave me practical experience that directly impressed my hiring manager. A must-have certificate!',
      },
    ],
  },

  {
    title: 'Certified AI & Automation Practitioner (CAAP)',
    slug: 'certified-ai-automation-practitioner',
    category: 'Certification Programs',
    badge: '🤖 Future-Proof Credential',
    level: 'Intermediate',
    rating: 4.9,
    reviewsCount: 104,
    enrolledCount: 2250,
    short_description:
      'Elite practitioner credential validating hands-on ability to orchestrate autonomous AI agents, multi-step API automations, and enterprise LLM tooling.',
    description:
      'The definitive professional credential for the AI era. The CAAP evaluates your practical ability to design, deploy, and monitor automated AI workflows that eliminate repetitive human labor across enterprise departments. Candidates must prove competency in low-code integration, prompt engineering guardrails, webhook error recovery, and data security.',
    target_audience: [
      'Operations Managers, RPA Developers, and IT Consultants',
      'Software engineers wanting verified proof of AI workflow orchestration',
      'Professionals aiming to become certified internal AI champions in their companies',
    ],
    prerequisites: 'Basic understanding of business operations and API concepts.',
    aiHighlights: {
      headline: 'The Gold Standard in AI Workflow Certification',
      description:
        'Demonstrate certified mastery in constructing autonomous multi-agent systems, integrating LLMs into existing software ecosystems, and ensuring enterprise-grade data protection.',
      skills: [
        'Autonomous AI Workflow Orchestration',
        'API & Webhook Architecture (Make, Zapier, n8n)',
        'Enterprise LLM Guardrails & Prompt Security',
        'Intelligent Automation Performance Auditing',
      ],
      aiImpactFactor: 'Verified Enterprise AI & Automation Practitioner Credential',
    },
    toolsAndTech: [
      'Make.com',
      'Zapier Central',
      'OpenAI API',
      'Claude 3.5 Sonnet',
      'n8n Workflow Automation',
      'Airtable Enterprise',
      'Postman API Tester',
    ],
    capstoneProject: {
      title: 'Official CAAP Practical Multi-System Automation Assessment',
      description:
        'Build a real-time, fault-tolerant automation architecture within a timed 4-hour proctored environment: receive inbound leads, parse company credentials with AI, route high-priority tickets, and update a CRM while maintaining strict data governance.',
      deliverables: [
        'Live deployed multi-step automation scenario in Make/n8n',
        'Error handling logic protecting against API rate limits and invalid payloads',
        'Passing score (85%+) on the official CAAP practitioner assessment',
      ],
    },
    careerOutcomes: {
      roles: ['Certified AI Practitioner', 'Automation Solutions Architect', 'Enterprise AI Specialist', 'RPA & AI Consultant'],
      salaryRange: '₹9,00,000 - ₹24,00,000 / year',
      keyHiringSectors: ['Technology Consultancies', 'Financial Services', 'Enterprise SaaS', 'High-Growth Startups'],
    },
    keyTakeaways: [
      'Globally recognizable CAAP digital credential with cryptographic verification',
      'Master error-handling, fallback branches, and retries in mission-critical workflows',
      'Gain practical experience connecting cutting-edge AI models with corporate databases',
      'Join an exclusive community of certified automation practitioners across 15+ countries',
    ],
    modules: [
      {
        title: 'Module 1: Automation Fundamentals & API Protocols',
        summary: 'HTTP methods (GET, POST, PUT), JSON payloads, authentication headers, webhooks, and rate limit management.',
        topics: ['REST APIs, Endpoints & Authentication (OAuth, Bearer Tokens)', 'JSON Data Parsing & Schema Validation', 'Webhook Triggers & Event Listeners', 'Handling API Errors, Timeouts & Retries'],
        durationWeeks: 'Weeks 1-2',
        projectMilestone: 'Lab: Building resilient two-way webhook integrations with Postman',
      },
      {
        title: 'Module 2: Autonomous AI Orchestration & Guardrails',
        summary: 'Integrating LLMs into automation loops, system prompts for automation, structured outputs, and security guardrails.',
        topics: ['AI Model Parameter Tuning (Temperature, Top-p)', 'Ensuring Strict JSON Schema Outputs from LLMs', 'Defending Against Prompt Injection in Automation', 'PII Masking & Data Privacy Compliance'],
        durationWeeks: 'Weeks 3-5',
        projectMilestone: 'Lab: Deploying an automated customer escalation agent with guardrails',
      },
      {
        title: 'Module 3: Proctored Practical Exam & Certification Defense',
        summary: 'Stress-testing complex scenarios, enterprise scalability audits, and official proctored CAAP examination.',
        topics: ['Enterprise High-Volume Automation Stress Testing', 'Security & Access Control Architecture', 'Proctored CAAP Practical Examination', 'Credential Issuance & Alumni Showcase'],
        durationWeeks: 'Weeks 6-7',
        projectMilestone: 'Capstone: Official Proctored CAAP Practical Automation Assessment',
      },
    ],
    price: 14999,
    duration: '7 weeks',
    mode: 'Hybrid (Live Coaching + Proctored Credential)',
    reviews: [
      {
        student_name: 'Kartik Narayanan',
        role: 'Certified AI & Automation Lead',
        rating: 5,
        review_text: 'Passing the CAAP exam was challenging because it tests real scenarios, not multiple-choice trivia. Having this certification gave our consulting firm immediate credibility with enterprise clients.',
      },
    ],
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
