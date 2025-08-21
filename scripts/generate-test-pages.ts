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

function generateSingleTestPage(testId: string, type: 'test' | 'interactive'): boolean {
  try {
    const meta = getTestMeta(testId);
    const thumbnail = getTestThumbnailUrl(testId);
    const url = `https://aiverse-phi.vercel.app/${type}/${testId}`;
    
    console.log(`📄 Processing: ${testId}`);
    console.log(`  - Title: ${meta.title}`);
    console.log(`  - Thumbnail: ${thumbnail}`);
    
    // 메타 태그 교체
    let html = baseHtml;
    
    // 기본 메타 태그 교체 (따옴표 이스케이프 처리)
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${meta.title.replace(/"/g, '&quot;')}</title>`
    );
    
    html = html.replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${meta.description.replace(/"/g, '&quot;')}">`
    );
    
    html = html.replace(
      /<meta name="keywords" content=".*?">/,
      `<meta name="keywords" content="${meta.keywords.replace(/"/g, '&quot;')}">`
    );

    // Open Graph 메타 태그 주입
    const ogTags = `
    <!-- 🎯 동적 Open Graph 메타 태그 -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${(meta.ogTitle || meta.title).replace(/"/g, '&quot;')}">
    <meta property="og:description" content="${(meta.ogDescription || meta.description).replace(/"/g, '&quot;')}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${thumbnail}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:alt" content="${meta.title.replace(/"/g, '&quot;')} 썸네일">`;
    
    // Twitter 메타 태그 주입  
    const twitterTags = `
    <!-- 🐦 동적 Twitter 메타 태그 -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${(meta.ogTitle || meta.title).replace(/"/g, '&quot;')}">
    <meta name="twitter:description" content="${(meta.ogDescription || meta.description).replace(/"/g, '&quot;')}">
    <meta name="twitter:image" content="${thumbnail}">
    <meta name="twitter:image:alt" content="${meta.title.replace(/"/g, '&quot;')} 썸네일">`;

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
    
    console.log(`  ✅ Generated: /${type}/${testId}/index.html`);
    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`  ❌ Error generating ${testId}:`, errorMessage);
    return false;
  }
}

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

  console.log(`🚀 Starting test page generation...`);
  console.log(`🧪 Total tests: ${allTestIds.length}`);
  console.log(`🎮 Total games: ${interactiveGameIds.length}`);
  console.log('');

  let successCount = 0;
  let errorCount = 0;

  // 각 테스트 페이지 생성
  console.log('🧪 Generating test pages...');
  allTestIds.forEach(testId => {
    if (generateSingleTestPage(testId, 'test')) {
      successCount++;
    } else {
      errorCount++;
    }
  });

  console.log('');
  console.log('🎮 Generating interactive game pages...');
  // 각 인터랙티브 게임 페이지 생성  
  interactiveGameIds.forEach(gameId => {
    if (generateSingleTestPage(gameId, 'interactive')) {
      successCount++;
    } else {
      errorCount++;
    }
  });

  console.log('');
  console.log('✅ Generation completed!');
  console.log(`📈 Success: ${successCount} pages`);
  console.log(`❌ Errors: ${errorCount} pages`);
  console.log(`📊 Total: ${successCount + errorCount} pages`);
  
  return { successCount, errorCount };
}

// 스크립트 실행
try {
  console.log('🎯 AIverse Test Page Generator');
  console.log('==============================');
  
  const result = generateTestPages();
  
  if (result.errorCount === 0) {
    console.log('🎉 All test pages generated successfully!');
    process.exit(0);
  } else {
    console.log(`⚠️  Generated with ${result.errorCount} errors`);
    process.exit(1);
  }
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error('💥 Fatal error generating test pages:', errorMessage);
  process.exit(1);
}
