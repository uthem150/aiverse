import fs from 'fs/promises';
import path from 'path';
import { testCategories } from '../src/data/tests';
import { getTestMeta } from '../src/data/testMeta';

// 완벽한 Progressive Enhancement HTML 템플릿
const createPerfectHTML = (testId: string, renderedContent: string, isGame = false) => {
  const meta = getTestMeta(testId);
  const siteName = 'AIverse-phi';
  const siteUrl = 'https://aiverse-phi.vercel.app';
  const testUrl = `${siteUrl}${isGame ? '/interactive' : '/test'}/${testId}`;
  const imageUrl = `${siteUrl}/images/thumbnail/${testId}.jpg`;
  
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
  
  <!-- Additional SEO -->
  <meta name="theme-color" content="#6366F1" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="${siteName}" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="${testUrl}" />
  
  <!-- Favicon and Icons -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://www.google-analytics.com" />
  
  <!-- Critical CSS for instant rendering -->
  <style>
    /* Critical CSS - 즉시 렌더링을 위한 최소 스타일 */
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
    
    .ssg-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }
    
    .ssg-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .ssg-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    @media (max-width: 768px) {
      .ssg-container { padding: 1rem; }
      .ssg-badges { gap: 0.5rem; }
      .ssg-grid { grid-template-columns: 1fr; }
    }
    
    /* React 앱이 로드되면 숨김 */
    .react-loaded .ssg-container {
      display: none;
    }
  </style>
  
  <!-- Progressive Enhancement Script -->
  <script>
    // React 앱 로딩 감지 및 부드러운 전환
    window.addEventListener('DOMContentLoaded', function() {
      // React 앱이 마운트되었는지 확인
      function checkReactMount() {
        const root = document.getElementById('root');
        if (root && root.children.length > 1) {
          // React 앱이 마운트됨 - SSG 콘텐츠 숨기기
          document.body.classList.add('react-loaded');
        } else {
          // 아직 로딩 중 - 계속 확인
          setTimeout(checkReactMount, 100);
        }
      }
      
      // React 번들 로딩 시작
      setTimeout(checkReactMount, 500);
    });
    
    // 성능 측정
    window.addEventListener('load', function() {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        console.log('SSG Page Load Time:', navigation.loadEventEnd - navigation.fetchStart, 'ms');
      }
    });
  </script>
</head>
<body>
  <div id="root">
    <!-- SSG Content - React 앱 로딩 전까지 표시 -->
    <div class="ssg-container">
      ${renderedContent}
    </div>
  </div>
  
  <!-- 구조화된 데이터 (Schema.org) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "${meta.title}",
    "description": "${meta.description}",
    "url": "${testUrl}",
    "applicationCategory": "${isGame ? 'GameApplication' : 'EducationalApplication'}",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    },
    "creator": {
      "@type": "Organization",
      "name": "AIverse Team",
      "url": "${siteUrl}"
    },
    "datePublished": "2024-01-01",
    "dateModified": "${new Date().toISOString().split('T')[0]}",
    "inLanguage": "ko-KR",
    "audience": {
      "@type": "Audience",
      "audienceType": "General Public"
    }
  }
  </script>
  
  <!-- FAQ 구조화된 데이터 -->
  ${isGame ? '' : `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "${meta.title}는 무료인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 모든 테스트는 완전 무료로 제공됩니다."
        }
      },
      {
        "@type": "Question", 
        "name": "결과는 정확한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI 기술과 심리학 이론을 바탕으로 한 재미있는 테스트입니다. 엔터테인먼트 목적으로 즐겨주세요."
        }
      }
    ]
  }
  </script>
  `}
</body>
</html>`;
};

// 개선된 테스트 페이지 콘텐츠
const createEnhancedTestContent = (testId: string) => {
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
        <h3 style="margin-bottom: 1rem; color: #374151;">🚀 AI 테스트 준비 중...</h3>
        <p style="color: #6b7280; margin-bottom: 1.5rem;">최고의 테스트 경험을 위해 AI 시스템을 로딩하고 있습니다.</p>
        <div style="width: 100%; height: 4px; background: #e5e7eb; border-radius: 2px; overflow: hidden;">
          <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #6366f1, #8b5cf6); transform: translateX(-100%); animation: progress 2s infinite;"></div>
        </div>
      </div>
      
      <div class="ssg-grid">
        <div class="ssg-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">${category?.icon || '🤖'}</div>
          <h4 style="margin-bottom: 0.5rem; color: #374151;">카테고리</h4>
          <p style="color: #6b7280; font-size: 0.9rem;">${category?.name || '테스트'}</p>
        </div>
        
        <div class="ssg-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
          <h4 style="margin-bottom: 0.5rem; color: #374151;">난이도</h4>
          <p style="color: #6b7280; font-size: 0.9rem;">${test.difficulty === 'easy' ? '쉬움' : test.difficulty === 'medium' ? '보통' : '어려움'}</p>
        </div>
        
        <div class="ssg-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚡</div>
          <h4 style="margin-bottom: 0.5rem; color: #374151;">테스트 유형</h4>
          <p style="color: #6b7280; font-size: 0.9rem;">${test.category.includes('ai') ? 'AI 분석' : '성격 분석'}</p>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border: 1px solid #0284c7; border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
        <h4 style="color: #0c4a6e; margin-bottom: 1rem;">💡 테스트 안내</h4>
        <ul style="color: #0369a1; text-align: left; line-height: 1.8; margin: 0; padding-left: 1.5rem;">
          <li><strong>소요시간:</strong> 약 ${test.estimatedTime}분</li>
          <li><strong>참여방법:</strong> 간단한 질문에 답변하기</li>
          <li><strong>결과공유:</strong> SNS 공유 가능</li>
          <li><strong>비용:</strong> 완전 무료</li>
        </ul>
      </div>
    </div>
    
    <style>
      @keyframes progress {
        to { transform: translateX(100%); }
      }
    </style>
  `;
};

// 개선된 게임 페이지 콘텐츠  
const createEnhancedGameContent = (gameId: string) => {
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
        <p style="color: #6b7280; margin-bottom: 1.5rem;">최고의 게임 경험을 위해 3D 렌더링 시스템을 준비하고 있습니다.</p>
        <div style="width: 100%; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden;">
          <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #4facfe, #00f2fe); transform: translateX(-100%); animation: gameProgress 1.5s infinite;"></div>
        </div>
      </div>
      
      <div class="ssg-grid">
        <div class="ssg-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏱️</div>
          <h4 style="margin-bottom: 0.5rem; color: #374151;">플레이 시간</h4>
          <p style="color: #6b7280; font-size: 0.9rem;">${game.estimatedTime}분</p>
        </div>
        
        <div class="ssg-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏆</div>
          <h4 style="margin-bottom: 0.5rem; color: #374151;">난이도</h4>
          <p style="color: #6b7280; font-size: 0.9rem;">${game.difficulty === 'easy' ? '쉬움' : game.difficulty === 'medium' ? '보통' : '어려움'}</p>
        </div>
        
        <div class="ssg-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">👥</div>
          <h4 style="margin-bottom: 0.5rem; color: #374151;">참여자</h4>
          <p style="color: #6b7280; font-size: 0.9rem;">${game.participantCount ? game.participantCount.toLocaleString() + '명' : '신규 게임'}</p>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, #1e293b, #334155); color: white; border-radius: 16px; padding: 2rem; margin-top: 2rem;">
        <h4 style="margin-bottom: 1rem;">🎯 게임 특징</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; text-align: left;">
          <div>✨ 실시간 점수 추적</div>
          <div>🏆 티어 시스템</div>
          <div>📊 상세 통계</div>
          <div>🎮 반응형 컨트롤</div>
        </div>
      </div>
    </div>
    
    <style>
      @keyframes gameProgress {
        to { transform: translateX(100%); }
      }
    </style>
  `;
};

async function generatePerfectSSG() {
  console.log('🚀 Perfect Progressive Enhancement SSG 생성 시작...');
  
  const distDir = path.join(process.cwd(), 'dist');
  
  // dist/test 디렉토리 생성
  const testDir = path.join(distDir, 'test');
  await fs.mkdir(testDir, { recursive: true });
  
  // dist/interactive 디렉토리 생성
  const interactiveDir = path.join(distDir, 'interactive');
  await fs.mkdir(interactiveDir, { recursive: true });
  
  let generatedCount = 0;
  
  // 모든 테스트에 대해 정적 HTML 생성
  for (const category of testCategories) {
    for (const test of category.tests) {
      try {
        if (test.category === 'interactive-experience') {
          // 인터랙티브 게임 페이지
          const gameContent = createEnhancedGameContent(test.id);
          const html = createPerfectHTML(test.id, gameContent, true);
          
          const gameDir = path.join(interactiveDir, test.id);
          await fs.mkdir(gameDir, { recursive: true });
          await fs.writeFile(path.join(gameDir, 'index.html'), html, 'utf-8');
          
          console.log(`✅ 게임 페이지: /interactive/${test.id}/`);
        } else {
          // 일반 테스트 페이지
          const testContent = createEnhancedTestContent(test.id);
          const html = createPerfectHTML(test.id, testContent, false);
          
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
  
  console.log(`\n🎉 Perfect SSG 완료! 총 ${generatedCount}개 페이지 생성`);
  console.log('📁 생성된 구조:');
  console.log('  └── dist/test/{testId}/index.html');
  console.log('  └── dist/interactive/{gameId}/index.html');
  console.log('\n✅ 이제 완벽한 SEO + UX + 성능을 모두 달성했습니다!');
  console.log('🔍 특징:');
  console.log('  • 리다이렉트 없는 Progressive Enhancement');
  console.log('  • 완벽한 SEO 메타데이터');
  console.log('  • 구조화된 데이터 (Schema.org)');
  console.log('  • 즉시 렌더링되는 정적 콘텐츠');
  console.log('  • React 앱으로 부드러운 전환');
}

// 스크립트 실행 (ES 모듈에서 항상 실행)
generatePerfectSSG().catch(console.error);

export default generatePerfectSSG;
