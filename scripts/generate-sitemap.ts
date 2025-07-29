// scripts/generate-sitemap.ts
import fs from 'fs';
import path from 'path';
import { testCategories } from '../src/data/tests.js'; // .js 확장자 명시

const baseUrl = 'https://aiverse-phi.vercel.app';

const generateSitemap = () => {
  const staticPages = ['', '/tests'];

  // 카테고리 페이지들
  const categoryPages = testCategories.map(category => `/tests/${category.id}`);

  // 개별 테스트 페이지들
  const testPages = testCategories
    .flatMap(category => category.tests)
    .map(test => `/test/${test.id}`);

  const allPages = [...staticPages, ...categoryPages, ...testPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : page.startsWith('/test/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/test/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml 생성 완료!');
  console.log(`📄 총 ${allPages.length}개 페이지 포함`);
};

generateSitemap();
