import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname 대신 사용
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 기존 데이터 파일에서 import
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
    
    let html = baseHtml;
    
    // 🔧 여러 줄 메타 태그를 위한 강력한 정규표현식
    
    // 1. 제목 교체
    html = html.replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${meta.title.replace(/"/g, '&quot;')}</title>`
    );
    
    // 2. Description 교체 (여러 줄 지원)
    html = html.replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />`
    );
    
    // 3. Keywords 교체 (여러 줄 지원)  
    html = html.replace(
      /<meta\s+name="keywords"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="keywords" content="${meta.keywords.replace(/"/g, '&quot;')}" />`
    );
    
    // 4. 기존 Open Graph 메타 태그들 완전 제거 및 교체
    // 기존 OG 태그들을 모두 찾아서 제거
    html = html.replace(/<meta\s+property="og:[\s\S]*?\/>/g, '');
    
    // 5. 기존 Twitter 메타 태그들 제거
    html = html.replace(/<meta\s+name="twitter:[\s\S]*?\/>/g, '');
    
    // 6. 새로운 메타 태그들을 </head> 바로 앞에 주입
    const newMetaTags = `
    <!-- 🎯 ${testId} 전용 소셜 미디어 메타 태그 -->
    
    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${(meta.ogTitle || meta.title).replace(/"/g, '&quot;')}">
    <meta property="og:description" content="${(meta.ogDescription || meta.description).replace(/"/g, '&quot;')}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="AIverse-phi">
    <meta property="og:locale" content="ko_KR">
    <meta property="og:image" content="${thumbnail}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:alt" content="${meta.title.replace(/"/g, '&quot;')} 썸네일">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@aiverse">
    <meta name="twitter:title" content="${(meta.ogTitle || meta.title).replace(/"/g, '&quot;')}">
    <meta name="twitter:description" content="${(meta.ogDescription || meta.description).replace(/"/g, '&quot;')}">
    <meta name="twitter:image" content="${thumbnail}">
    <meta name="twitter:image:alt" content="${meta.title.replace(/"/g, '&quot;')} 썸네일">
    
    <!-- Canonical URL 수정 -->
    <link rel="canonical" href="${url}">
    `;
    
    // </head> 바로 앞에 주입
    html = html.replace('</head>', `${newMetaTags}\n  </head>`);
    
    // 7. 기존 canonical 링크 제거 (중복 방지)
    html = html.replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/>/g, '');
    
    // 8. 디렉토리 생성
    const pageDir = path.resolve(__dirname, `../dist/${type}/${testId}`);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    // 9. HTML 파일 저장
    fs.writeFileSync(path.join(pageDir, 'index.html'), html);
    
    console.log(`  ✅ Generated: /${type}/${testId}/index.html`);
    
    // 10. 생성된 파일 검증
    const savedHtml = fs.readFileSync(path.join(pageDir, 'index.html'), 'utf-8');
    const hasCustomTitle = savedHtml.includes(meta.title);
    const hasCustomOG = savedHtml.includes(thumbnail);
    const hasCustomDesc = savedHtml.includes(meta.description.substring(0, 30));
    
    console.log(`  📊 Verification:`);
    console.log(`     - Custom title: ${hasCustomTitle ? '✅' : '❌'}`);
    console.log(`     - Custom description: ${hasCustomDesc ? '✅' : '❌'}`);  
    console.log(`     - Custom thumbnail: ${hasCustomOG ? '✅' : '❌'}`);
    
    if (!hasCustomTitle || !hasCustomOG || !hasCustomDesc) {
      console.log(`  ⚠️  Verification failed for ${testId}`);
      return false;
    }
    
    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`  ❌ Error generating ${testId}:`, errorMessage);
    return false;
  }
}

// 메인 함수
function generateTestPages() {
  const distDir = path.resolve(__dirname, '../dist');
  
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 모든 테스트 ID 수집
  const allTestIds = testCategories.flatMap(category => 
    category.tests.map(test => test.id)
  );
  
  // 인터랙티브 게임 ID들
  const interactiveCategory = testCategories.find(cat => cat.id === 'interactive-experience');
  const interactiveGameIds = interactiveCategory ? 
    interactiveCategory.tests.map(test => test.id) : [
      'target-shooter', 'orb-collector', 'block-faller', 'color-match', 
      'math-quiz', 'maze-runner', 'memory-cards', 'reaction-test',
      'simon-says', 'sliding-puzzle', 'snake-game', 'speed-clicker',
      'tic-tac-toe', 'whack-a-mole'
    ];

  console.log(`🚀 AIverse Social Media Meta Tag Generator`);
  console.log(`==========================================`);
  console.log(`🧪 Total tests: ${allTestIds.length}`);
  console.log(`🎮 Total games: ${interactiveGameIds.length}`);
  console.log('');

  let successCount = 0;
  let errorCount = 0;

  // 테스트 중 하나만 먼저 시도해보기
  console.log('🧪 Generating test pages...');
  for (const testId of allTestIds) {
    if (generateSingleTestPage(testId, 'test')) {
      successCount++;
    } else {
      errorCount++;
    }
  }

  console.log('');
  console.log('🎮 Generating interactive game pages...');
  for (const gameId of interactiveGameIds) {
    if (generateSingleTestPage(gameId, 'interactive')) {
      successCount++;
    } else {
      errorCount++;
    }
  }

  console.log('');
  console.log('✅ Generation completed!');
  console.log(`📈 Success: ${successCount} pages`);
  console.log(`❌ Errors: ${errorCount} pages`);
  console.log(`📊 Total: ${successCount + errorCount} pages`);
  
  return { successCount, errorCount };
}

// 스크립트 실행
try {
  const result = generateTestPages();
  
  if (result.errorCount === 0) {
    console.log('🎉 All test pages generated successfully!');
    console.log('');
    console.log('🔄 Next steps:');
    console.log('1. Run: npm run build:production');
    console.log('2. Deploy to Vercel');
    console.log('3. Test social sharing with Facebook Debugger');
    process.exit(0);
  } else {
    console.log(`⚠️  Generated with ${result.errorCount} errors`);
    process.exit(1);
  }
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error('💥 Fatal error:', errorMessage);
  process.exit(1);
}
