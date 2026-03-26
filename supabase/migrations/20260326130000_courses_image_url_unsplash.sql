-- Course cover images: Unsplash CDN URLs (see https://unsplash.com/license).

ALTER TABLE public.courses ADD COLUMN IF NOT EXISTS image_url text;

UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'intro-generative-ai';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'machine-learning-fundamentals';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1676297659840-5f39c8e8e5a0?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'prompt-engineering-ai-workflows';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'full-stack-web-development';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'python-data-analysis';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'cloud-computing-essentials';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'business-communication-presentation';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'project-management-fundamentals';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'leadership-team-management';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'ecommerce-store-setup';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'digital-marketing-seo';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'social-media-marketing-growth';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'diploma-digital-business-ecommerce';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'diploma-it-software-applications';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'diploma-ai-enabled-business';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'bba-digital-commerce';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'bca-industry-integrated';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'bcom-ebusiness-analytics';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'mba-ecommerce-digital-strategy';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'mca-ai-cloud-specialization';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'pg-diploma-data-science-ai';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'certified-ecommerce-professional';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1432888622747-4eb9a8f4948f?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'certified-digital-marketing-associate';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1531746797556-804f8076ccd6?auto=format&fit=crop&w=1200&q=80' WHERE slug = 'certified-ai-automation-practitioner';
