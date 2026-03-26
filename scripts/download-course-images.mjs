/**
 * Verifies each Unsplash URL returns 200, then downloads to public/courses/{slug}.jpg
 * Run from repo root: node scripts/download-course-images.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'courses');

const entries = [
  ['intro-generative-ai', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'],
  ['machine-learning-fundamentals', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80'],
  ['prompt-engineering-ai-workflows', 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80'],
  ['full-stack-web-development', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'],
  ['python-data-analysis', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'],
  ['cloud-computing-essentials', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'],
  ['business-communication-presentation', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80'],
  ['project-management-fundamentals', 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80'],
  ['leadership-team-management', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'],
  ['ecommerce-store-setup', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80'],
  ['digital-marketing-seo', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'],
  ['social-media-marketing-growth', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80'],
  ['diploma-digital-business-ecommerce', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'],
  ['diploma-it-software-applications', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80'],
  ['diploma-ai-enabled-business', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'],
  ['bba-digital-commerce', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'],
  ['bca-industry-integrated', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'],
  ['bcom-ebusiness-analytics', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80'],
  ['mba-ecommerce-digital-strategy', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80'],
  ['mca-ai-cloud-specialization', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'],
  ['pg-diploma-data-science-ai', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
  ['certified-ecommerce-professional', 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80'],
  ['certified-digital-marketing-associate', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'],
  ['certified-ai-automation-practitioner', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'],
];

async function main() {
  await mkdir(outDir, { recursive: true });

  for (const [slug, url] of entries) {
    const get = await fetch(url);
    if (!get.ok) {
      throw new Error(`GET ${slug}: ${get.status} ${get.statusText}`);
    }
    const ct = get.headers.get('content-type') || '';
    if (!ct.startsWith('image/')) {
      throw new Error(`GET ${slug}: expected image/*, got ${ct}`);
    }
    const buf = Buffer.from(await get.arrayBuffer());
    const outPath = join(outDir, `${slug}.jpg`);
    await writeFile(outPath, buf);
    console.log('OK', slug, buf.length, 'bytes');
  }
  console.log('Done:', entries.length, 'files -> public/courses/');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
