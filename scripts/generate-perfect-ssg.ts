import fs from 'fs/promises';
import path from 'path';
import { testCategories } from '../src/data/tests';
import { getTestMeta } from '../src/data/testMeta';

// Vite 빌드에서 스크립트 추출
async function extractViteAssets() {
  try {
    const distIndexPath = path.join(process.cwd(), 'dist', 'index.html');
    const distIndexContent = await fs.readFile(distIndexPath, 'utf-8');
    
    // 스크립트 태그 추출
    const scriptMatches = distIndexContent.match(/<script[^>]*src="[^"]*"[^>]*><\/script>/g) || [];
    const viteScripts = scriptMatches.join('\n  ');
    
    // CSS 링크 태그 추출
    const linkMatches = distIndexContent.match(/<link[^>]*rel="stylesheet"[^>]*>/g) || [];
    const viteStyles = linkMatches.join('\n  ');
    
    console.log('✅ Vite 에셋 추출 완료');
    return { viteScripts, viteStyles };
  } catch (error) {
    console.log('⚠️ Vite 빌드 파일을 찾을 수 없음 - 기본 설정 사용');
    return { viteScripts: '', viteStyles: '' };
  }
}

// 완벽한 SSG HTML 생성
const createSSGHTML = (testId: string, renderedContent: string, isGame = false, viteScripts = '', viteStyles = '') => {
  const meta = getTestMeta(testId);
  const siteName = 'AIverse-phi';
  const siteUrl = 'https://aiverse-phi.vercel.app';
  const testUrl = `${siteUrl}${isGame ? '/interactive' : '/test'}/${testId}`;
  
  // 실제 테스트 데이터에서 썸네일 가져오기
  const test = testCategories
    .flatMap(cat => cat.tests)
    .find(t => t.id === testId);
  
  let imageUrl;
  if (test && test.thumbnail) {
    imageUrl = test.thumbnail.startsWith('http') 
      ? test.thumbnail 
      : `${siteUrl}${test.thumbnail}`;
  } else {
    imageUrl = `${siteUrl}/images/aiverse-og-image.png`;
  }
  
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>${meta.title}</title>
  <meta name="title" content="${meta.title}" />
  <meta name="description" content="${meta.description}" />
  <meta name="keywords" content="${meta.keywords}" />
  <meta name="author" content="AIverse Team" />
  <meta name="robots" content="index, follow" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${testUrl}" />
  <meta property="og:title" content="${meta.ogTitle || meta.title}" />
  <meta property="og:description" content="${meta.ogDescription || meta.description}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="${siteName}" />
  <meta property="og:locale" content="ko_KR" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${testUrl}" />
  <meta name="twitter:title" content="${meta.ogTitle || meta.title}" />
  <meta name="twitter:description" content="${meta.ogDescription || meta.description}" />
  <meta name="twitter:image" content="${imageUrl}" />
  <meta name="twitter:creator" content="@AIverse_phi" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="${testUrl}" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  
  <!-- Vite CSS -->
  ${viteStyles}
  
  <!-- Critical CSS -->
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #fff;
    }
    
    .ssg-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.5s ease-in;
      transition: opacity 0.3s ease-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .ssg-content {
      max-width: 800px;
      text-align: center;
      width: 100%;
    }
    
    .ssg-title {
      font-size: clamp(1.5rem, 4vw, 3rem);
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .ssg-description {
      font-size: clamp(1rem, 2.5vw, 1.25rem);
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.7;
    }
    
    .ssg-badges {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }
    
    .ssg-badge {
      padding: 0.375rem 0.875rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: white;
    }
    
    .badge-hot { background: linear-gradient(135deg, #ff6b6b, #ff5252); }
    .badge-new { background: linear-gradient(135deg, #4ecdc4, #26a69a); }
    .badge-info { background: linear-gradient(135deg, #94a3b8, #64748b); }
    
    .ssg-loading {
      background: linear-gradient(135deg, #f8fafc, #e2e8f0);
      border-radius: 16px;
      padding: 2rem;
      margin: 2rem 0;
      position: relative;
      overflow: hidden;
    }
    
    .ssg-loading::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
      to { left: 100%; }
    }
    
    @keyframes progress {
      to { transform: translateX(100%); }
    }
    
    @media (max-width: 768px) {
      .ssg-container { padding: 1rem; }
    }
  </style>
</head>
<body>
  <div id="root">
    <div class="ssg-container">
      ${renderedContent}
    </div>
  </div>
  
  <!-- Vite JavaScript -->
  ${viteScripts}
  
  <!-- Progressive Enhancement -->
  <script>
    window.addEventListener('DOMContentLoaded', function() {
      let attempts = 0;
      const maxAttempts = 100; // 10초
      
      function checkReactApp() {
        attempts++;
        const ssgContainer = document.querySelector('.ssg-container');
        const reactContent = document.querySelector('header, nav, main, [data-testid]');
        
        if (reactContent && ssgContainer && reactContent !== ssgContainer) {
          console.log('✅ React 앱 로드 완료');
          ssgContainer.style.opacity = '0';
          setTimeout(() => ssgContainer.style.display = 'none', 300);
        } else if (attempts < maxAttempts) {
          setTimeout(checkReactApp, 100);
        } else {
          console.log('⚠️ React 앱 타임아웃 - SSG 콘텐츠 유지');
        }
      }
      
      setTimeout(checkReactApp, 500);
    });
  </script>
  
  <!-- 구조화된 데이터 -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "${meta.title}",
    "description": "${meta.description}",
    "url": "${testUrl}",
    "applicationCategory": "${isGame ? 'GameApplication' : 'EducationalApplication'}",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    }
  }
  </script>
</body>
</html>`;
};

// 테스트 페이지 콘텐츠
const createTestContent = (testId: string) => {
  const test = testCategories
    .flatMap(cat => cat.tests)
    .find(t => t.id === testId);
    
  if (!test) return '<div class="ssg-content">테스트를 찾을 수 없습니다.</div>';
  
  const category = testCategories.find(cat => cat.tests.some(t => t.id === testId));
  
  return `
    <div class="ssg-content">
      <h1 class="ssg-title">${test.title}</h1>
      <p class="ssg-description">${test.description}</p>
      
      <div class="ssg-badges">
        ${test.isHot ? '<span class="ssg-badge badge-hot">🔥 HOT</span>' : ''}
        ${test.isNew ? '<span class="ssg-badge badge-new">✨ NEW</span>' : ''}
        <span class="ssg-badge badge-info">⏱️ ${test.estimatedTime}분</span>
        ${test.participantCount ? `<span class="ssg-badge badge-info">👥 ${test.participantCount.toLocaleString()}명 참여</span>` : ''}
      </div>
      
      <div class="ssg-loading">
        <h3 style="margin-bottom: 1rem; color: #374151;">🚀 테스트 준비 중...</h3>
        <p style="color: #6b7280; margin-bottom: 1.5rem;">AI 시스템을 로딩하고 있습니다.</p>
        <div style="width: 100%; height: 4px; background: #e5e7eb; border-radius: 2px; overflow: hidden;">
          <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #6366f1, #8b5cf6); transform: translateX(-100%); animation: progress 2s infinite;"></div>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border: 1px solid #0284c7; border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
        <h4 style="color: #0c4a6e; margin-bottom: 1rem;">💡 테스트 안내</h4>
        <p style="color: #0369a1;">카테고리: ${category?.name || '테스트'} | 난이도: ${test.difficulty === 'easy' ? '쉬움' : test.difficulty === 'medium' ? '보통' : '어려움'} | 소요시간: ${test.estimatedTime}분</p>
      </div>
    </div>
  `;
};

// 게임 페이지 콘텐츠
const createGameContent = (gameId: string) => {
  const game = testCategories
    .find(cat => cat.id === 'interactive-experience')
    ?.tests.find(t => t.id === gameId);
    
  if (!game) return '<div class="ssg-content">게임을 찾을 수 없습니다.</div>';
  
  return `
    <div class="ssg-content">
      <h1 class="ssg-title">${game.title}</h1>
      <p class="ssg-description">${game.description}</p>
      
      <div class="ssg-badges">
        ${game.isHot ? '<span class="ssg-badge badge-hot">🔥 HOT</span>' : ''}
        ${game.isNew ? '<span class="ssg-badge badge-new">✨ NEW</span>' : ''}
        <span class="ssg-badge badge-info">🎮 게임</span>
      </div>
      
      <div class="ssg-loading">
        <h3 style="margin-bottom: 1rem; color: #374151;">🎮 게임 엔진 로딩 중...</h3>
        <p style="color: #6b7280; margin-bottom: 1.5rem;">3D 렌더링 시스템을 준비하고 있습니다.</p>
        <div style="width: 100%; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden;">
          <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #4facfe, #00f2fe); transform: translateX(-100%); animation: progress 1.5s infinite;"></div>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, #1e293b, #334155); color: white; border-radius: 16px; padding: 2rem; margin-top: 2rem;">
        <h4 style="margin-bottom: 1rem;">🎯 게임 특징</h4>
        <p>플레이 시간: ${game.estimatedTime}분 | 난이도: ${game.difficulty === 'easy' ? '쉬움' : game.difficulty === 'medium' ? '보통' : '어려움'} | 참여자: ${game.participantCount ? game.participantCount.toLocaleString() + '명' : '신규'}</p>
      </div>
    </div>
  `;
};

async function generateSSG() {
  console.log('🚀 SSG 생성 시작...');
  
  // Vite 에셋 추출
  const { viteScripts, viteStyles } = await extractViteAssets();
  
  // public 폴더에 생성
  const publicDir = path.join(process.cwd(), 'public');
  const testDir = path.join(publicDir, 'test');
  const interactiveDir = path.join(publicDir, 'interactive');
  
  await fs.mkdir(testDir, { recursive: true });
  await fs.mkdir(interactiveDir, { recursive: true });
  
  let generatedCount = 0;
  
  // 모든 테스트 생성
  for (const category of testCategories) {
    for (const test of category.tests) {
      try {
        if (test.category === 'interactive-experience') {
          // 게임 페이지
          const content = createGameContent(test.id);
          const html = createSSGHTML(test.id, content, true, viteScripts, viteStyles);
          
          const gameDir = path.join(interactiveDir, test.id);
          await fs.mkdir(gameDir, { recursive: true });
          await fs.writeFile(path.join(gameDir, 'index.html'), html, 'utf-8');
          
          console.log(`✅ 게임 페이지: /interactive/${test.id}/`);
        } else {
          // 테스트 페이지
          const content = createTestContent(test.id);
          const html = createSSGHTML(test.id, content, false, viteScripts, viteStyles);
          
          const testPageDir = path.join(testDir, test.id);
          await fs.mkdir(testPageDir, { recursive: true });
          await fs.writeFile(path.join(testPageDir, 'index.html'), html, 'utf-8');
          
          console.log(`✅ 테스트 페이지: /test/${test.id}/`);
        }
        
        generatedCount++;
      } catch (error) {
        console.error(`❌ ${test.id} 생성 실패:`, error);
      }
    }
  }
  
  console.log(`\n🎉 SSG 완료! 총 ${generatedCount}개 페이지 생성`);
  console.log('🚀 Vite 에셋 포함으로 완벽한 Progressive Enhancement 구현!');
}

// 스크립트 실행
generateSSG().catch(console.error);

export default generateSSG;
