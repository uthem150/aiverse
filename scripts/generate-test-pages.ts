import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname 대신 사용
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 기존 데이터 파일에서 import (상대 경로 사용)
import { testCategories } from '../src/data/tests.js';
import { getTestMeta, getTestThumbnailUrl } from '../src/data/testMeta.js';

// 기본 HTML 템플릿 읽기
const indexHtmlPath = path.resolve(__dirname, '../index.html');
const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// 각 테스트별 HTML 생성
function generateTestPages() {
  const distDir = path.resolve(__dirname, '../dist');
  
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 모든 테스트 ID 수집 (기존 데이터에서)
  const allTestIds = testCategories.flatMap(category => 
    category.tests.map(test => test.id)
  );
  
  // 인터랙티브 게임 ID들 (testCategories에서 interactive-experience 카테고리 찾기)
  const interactiveCategory = testCategories.find(cat => cat.id === 'interactive-experience');
  const interactiveGameIds = interactiveCategory ? 
    interactiveCategory.tests.map(test => test.id) : [
      'target-shooter', 'orb-collector', 'block-faller', 'color-match', 
      'math-quiz', 'maze-runner', 'memory-cards', 'reaction-test',
      'simon-says', 'sliding-puzzle', 'snake-game', 'speed-clicker',
      'tic-tac-toe', 'whack-a-mole'
    ];

  // 각 테스트 페이지 생성
  allTestIds.forEach(testId => {
    generateSingleTestPage(testId, 'test');
  });

  // 각 인터랙티브 게임 페이지 생성  
  interactiveGameIds.forEach(gameId => {
    generateSingleTestPage(gameId, 'interactive');
  });

  console.log(`✅ Generated ${allTestIds.length + interactiveGameIds.length} test pages with custom meta tags!`);
  console.log(`📝 Test pages: ${allTestIds.length}`);
  console.log(`🎮 Game pages: ${interactiveGameIds.length}`);
}

function generateSingleTestPage(testId: string, type: 'test' | 'interactive') {
  const meta = getTestMeta(testId);
  const thumbnail = getTestThumbnailUrl(testId);
  const url = `https://aiverse-phi.vercel.app/${type}/${testId}`;
  
  // 메타 태그 교체
  let html = baseHtml;
  
  // 기본 메타 태그 교체
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );
  
  html = html.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${meta.description}">`
  );
  
  html = html.replace(
    /<meta name="keywords" content=".*?">/,
    `<meta name="keywords" content="${meta.keywords}">`
  );

  // Open Graph 메타 태그 주입
  const ogTags = `
    <meta property="og:type" content="article">
    <meta property="og:title" content="${meta.ogTitle || meta.title}">
    <meta property="og:description" content="${meta.ogDescription || meta.description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${thumbnail}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:alt" content="${meta.title} 썸네일">`;
  
  // Twitter 메타 태그 주입  
  const twitterTags = `
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${meta.ogTitle || meta.title}">
    <meta name="twitter:description" content="${meta.ogDescription || meta.description}">
    <meta name="twitter:image" content="${thumbnail}">
    <meta name="twitter:image:alt" content="${meta.title} 썸네일">`;

  // 메타 태그를 head 태그 끝에 주입
  html = html.replace(
    /<meta name="twitter:site" content="@aiverse" \/>/,
    `<meta name="twitter:site" content="@aiverse" />
    ${ogTags}
    ${twitterTags}`
  );

  // 디렉토리 생성
  const pageDir = path.resolve(__dirname, `../dist/${type}/${testId}`);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  // HTML 파일 저장
  fs.writeFileSync(path.join(pageDir, 'index.html'), html);
  
  console.log(`📄 Generated: /${type}/${testId}/ → ${meta.title}`);
}

// 스크립트 실행
try {
  generateTestPages();
  console.log('🎉 All test pages generated successfully!');
} catch (error) {
  console.error('❌ Error generating test pages:', error);
  process.exit(1);
}
