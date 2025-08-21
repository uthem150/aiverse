import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname 대신 사용
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 기존 데이터 파일에서 import
import { testCategories } from '../src/data/tests.js';
import { getTestMeta, getTestThumbnailUrl } from '../src/data/testMeta.js';

function generateSocialHTML(testId: string, type: 'test' | 'interactive'): string {
  const meta = getTestMeta(testId);
  const thumbnail = getTestThumbnailUrl(testId);
  const url = `https://aiverse-phi.vercel.app/${type}/${testId}/`;
  const reactUrl = `https://aiverse-phi.vercel.app/${type}/${testId}`;
  
  return `<!doctype html>
<html lang="ko-KR">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/vite.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- 🎯 ${meta.title} 전용 소셜 미디어 메타 태그 -->
    <title>${meta.title.replace(/"/g, '&quot;')}</title>
    <meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />
    <meta name="keywords" content="${meta.keywords.replace(/"/g, '&quot;')}" />
    <meta name="author" content="AIverse-phi" />
    
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
    
    <!-- SEO -->
    <link rel="canonical" href="${url}">
    <meta name="robots" content="index,follow">
    
    <!-- React 앱 자동 리다이렉트 (사용자용) -->
    <script>
        // 소셜 크롤러는 JavaScript를 실행하지 않으므로 메타 태그만 읽음
        // 일반 사용자는 React 앱으로 리다이렉트
        if (typeof window !== 'undefined' && !navigator.userAgent.includes('bot')) {
            setTimeout(() => {
                window.location.href = '${reactUrl}';
            }, 1000);
        }
    </script>
</head>
<body>
    <!-- 소셜 크롤러를 위한 숨겨진 컨텐츠 -->
    <div style="display: none;">
        <h1>${meta.title.replace(/"/g, '&quot;')}</h1>
        <p>${meta.description.replace(/"/g, '&quot;')}</p>
        <img src="${thumbnail}" alt="${meta.title.replace(/"/g, '&quot;')} 썸네일">
    </div>
    
    <!-- 사용자를 위한 로딩 화면 -->
    <div style="text-align: center; padding: 50px; font-family: 'Pretendard', sans-serif;">
        <h2>🔄 ${meta.title}로 이동 중...</h2>
        <p>잠시 후 테스트 페이지로 이동합니다.</p>
        <p style="margin-top: 20px;">
            자동으로 이동하지 않으면 
            <a href="${reactUrl}" style="color: #6366F1; text-decoration: none;">여기를 클릭</a>하세요.
        </p>
        <div style="margin-top: 30px;">
            <img src="${thumbnail}" alt="${meta.title} 썸네일" style="max-width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        </div>
    </div>
</body>
</html>`;
}

function generateAllSocialPages() {
  console.log(`🚀 AIverse 소셜 미디어 페이지 자동 생성기`);
  console.log(`=========================================`);
  
  // Public 폴더 확인
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    throw new Error('Public 폴더를 찾을 수 없습니다!');
  }

  // 모든 테스트 ID 수집
  const allTestIds = testCategories.flatMap(category => 
    category.tests.map(test => test.id)
  );
  
  // 인터랙티브 게임 ID들
  const interactiveCategory = testCategories.find(cat => cat.id === 'interactive-experience');
  const interactiveGameIds = interactiveCategory ? 
    interactiveCategory.tests.map(test => test.id) : [];

  let successCount = 0;
  let errorCount = 0;

  console.log(`🧪 총 테스트: ${allTestIds.length}개`);
  console.log(`🎮 총 게임: ${interactiveGameIds.length}개`);
  console.log('');

  // 테스트 페이지들 생성
  console.log('🧪 테스트 페이지 생성 중...');
  for (const testId of allTestIds) {
    try {
      const testDir = path.resolve(publicDir, `test/${testId}`);
      if (!fs.existsSync(testDir)) {
        fs.mkdirSync(testDir, { recursive: true });
      }
      
      const html = generateSocialHTML(testId, 'test');
      fs.writeFileSync(path.join(testDir, 'index.html'), html);
      
      console.log(`  ✅ /test/${testId}/`);
      successCount++;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`  ❌ /test/${testId}/: ${errorMessage}`);
      errorCount++;
    }
  }

  console.log('');
  console.log('🎮 인터랙티브 게임 페이지 생성 중...');
  for (const gameId of interactiveGameIds) {
    try {
      const gameDir = path.resolve(publicDir, `interactive/${gameId}`);
      if (!fs.existsSync(gameDir)) {
        fs.mkdirSync(gameDir, { recursive: true });
      }
      
      const html = generateSocialHTML(gameId, 'interactive');
      fs.writeFileSync(path.join(gameDir, 'index.html'), html);
      
      console.log(`  ✅ /interactive/${gameId}/`);
      successCount++;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`  ❌ /interactive/${gameId}/: ${errorMessage}`);
      errorCount++;
    }
  }

  console.log('');
  console.log('✅ 생성 완료!');
  console.log(`📈 성공: ${successCount}개 페이지`);
  console.log(`❌ 실패: ${errorCount}개 페이지`);
  console.log(`📊 총 페이지: ${successCount + errorCount}개`);
  
  if (errorCount === 0) {
    console.log('');
    console.log('🎉 모든 소셜 미디어 페이지가 성공적으로 생성되었습니다!');
    console.log('');
    console.log('🔄 다음 단계:');
    console.log('1. Git에 커밋 & 푸시');
    console.log('2. Vercel 배포 대기');  
    console.log('3. 소셜 공유 테스트: https://aiverse-phi.vercel.app/test/deokjil-type-test/');
    console.log('4. Facebook Debugger: https://developers.facebook.com/tools/debug/');
  }
  
  return { successCount, errorCount };
}

// 스크립트 실행
try {
  generateAllSocialPages();
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error('💥 치명적 오류:', errorMessage);
  process.exit(1);
}
