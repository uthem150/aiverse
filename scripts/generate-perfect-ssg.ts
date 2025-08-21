import fs from 'fs/promises';
import path from 'path';
import { testCategories } from '../src/data/tests';
import { getTestMeta } from '../src/data/testMeta';

// 실제 테스트 콘텐츠 생성 (JavaScript 없이도 사용 가능)
const createFullTestContent = (testId: string) => {
  const test = testCategories
    .flatMap(cat => cat.tests)
    .find(t => t.id === testId);
    
  if (!test) return '<div>테스트를 찾을 수 없습니다.</div>';
  
  const category = testCategories.find(cat => cat.tests.some(t => t.id === testId));
  
  return `
    <main class="test-page">
      <header class="test-header">
        <h1>${test.title}</h1>
        <p class="test-description">${test.description}</p>
        
        <div class="test-badges">
          ${test.isHot ? '<span class="badge badge-hot">🔥 HOT</span>' : ''}
          ${test.isNew ? '<span class="badge badge-new">✨ NEW</span>' : ''}
          <span class="badge badge-info">⏱️ ${test.estimatedTime}분</span>
          ${test.participantCount ? `<span class="badge badge-info">👥 ${test.participantCount.toLocaleString()}명 참여</span>` : ''}
        </div>
      </header>
      
      <section class="test-content">
        <div class="test-intro">
          <h2>📋 테스트 안내</h2>
          <ul>
            <li><strong>카테고리:</strong> ${category?.name || '테스트'}</li>
            <li><strong>소요시간:</strong> 약 ${test.estimatedTime}분</li>
            <li><strong>난이도:</strong> ${test.difficulty === 'easy' ? '쉬움' : test.difficulty === 'medium' ? '보통' : '어려움'}</li>
            <li><strong>비용:</strong> 완전 무료</li>
          </ul>
        </div>
        
        <!-- 실제 테스트 시작 폼 (JavaScript 없이도 작동) -->
        <div class="test-form">
          <h3>🚀 테스트 시작하기</h3>
          <p>아래 버튼을 클릭하여 ${test.title}를 시작하세요!</p>
          
          <form action="/" method="get" class="start-form">
            <input type="hidden" name="test" value="${testId}">
            <input type="hidden" name="start" value="true">
            <button type="submit" class="start-button">
              테스트 시작하기
            </button>
          </form>
          
          <div class="test-features">
            <div class="feature">
              <h4>✨ 특징</h4>
              <p>AI 기술을 활용한 정확한 분석</p>
            </div>
            <div class="feature">
              <h4>📊 결과</h4>
              <p>상세한 분석 결과와 개선 방향 제시</p>
            </div>
            <div class="feature">
              <h4>🔗 공유</h4>
              <p>SNS로 친구들과 결과 공유 가능</p>
            </div>
          </div>
        </div>
        
        <div class="test-info">
          <h3>💡 이런 분들께 추천</h3>
          <ul>
            <li>자신의 ${test.category.includes('ai') ? 'AI 분석' : '성격'}에 대해 궁금한 분</li>
            <li>재미있는 테스트를 찾고 있는 분</li>
            <li>친구들과 함께 즐길 콘텐츠가 필요한 분</li>
          </ul>
          
          <h3>📱 사용법</h3>
          <ol>
            <li>위의 "테스트 시작하기" 버튼 클릭</li>
            <li>간단한 질문들에 답변</li>
            <li>결과 확인 및 친구들과 공유</li>
          </ol>
        </div>
      </section>
      
      <!-- React 앱이 로드되면 이 영역이 대체됨 -->
      <div id="react-mount-point" style="display: none;"></div>
    </main>
  `;
};

// 게임 콘텐츠 생성
const createFullGameContent = (gameId: string) => {
  const game = testCategories
    .find(cat => cat.id === 'interactive-experience')
    ?.tests.find(t => t.id === gameId);
    
  if (!game) return '<div>게임을 찾을 수 없습니다.</div>';
  
  return `
    <main class="game-page">
      <header class="game-header">
        <h1>${game.title}</h1>
        <p class="game-description">${game.description}</p>
        
        <div class="game-badges">
          ${game.isHot ? '<span class="badge badge-hot">🔥 HOT</span>' : ''}
          ${game.isNew ? '<span class="badge badge-new">✨ NEW</span>' : ''}
          <span class="badge badge-info">🎮 게임</span>
        </div>
      </header>
      
      <section class="game-content">
        <div class="game-intro">
          <h2>🎯 게임 정보</h2>
          <ul>
            <li><strong>플레이 시간:</strong> ${game.estimatedTime}분</li>
            <li><strong>난이도:</strong> ${game.difficulty === 'easy' ? '쉬움' : game.difficulty === 'medium' ? '보통' : '어려움'}</li>
            <li><strong>참여자:</strong> ${game.participantCount ? game.participantCount.toLocaleString() + '명' : '신규 게임'}</li>
          </ul>
        </div>
        
        <div class="game-start">
          <h3>🚀 게임 시작하기</h3>
          <p>최고의 게임 경험을 위해 JavaScript를 활성화해주세요.</p>
          
          <noscript>
            <div class="no-js-message">
              <p>⚠️ 이 게임은 JavaScript가 필요합니다. 브라우저에서 JavaScript를 활성화한 후 다시 시도해주세요.</p>
            </div>
          </noscript>
          
          <div class="game-preview">
            <div class="preview-area">
              <p>🎮 게임 화면이 여기에 표시됩니다</p>
              <button onclick="alert('JavaScript가 활성화되면 게임이 시작됩니다!')" class="preview-button">
                게임 미리보기
              </button>
            </div>
          </div>
        </div>
        
        <div class="game-features">
          <h3>✨ 게임 특징</h3>
          <div class="features-grid">
            <div class="feature">
              <h4>📊 실시간 점수</h4>
              <p>게임 진행 중 실시간으로 점수 확인</p>
            </div>
            <div class="feature">
              <h4>🏆 티어 시스템</h4>
              <p>실력에 따른 티어 배정</p>
            </div>
            <div class="feature">
              <h4>📈 통계</h4>
              <p>상세한 플레이 통계 제공</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- React 게임이 로드되면 이 영역이 대체됨 -->
      <div id="react-game-mount" style="display: none;"></div>
    </main>
  `;
};

// Progressive Enhancement HTML 템플릿
const createProgressiveHTML = (testId: string, content: string, isGame = false) => {
  const meta = getTestMeta(testId);
  const siteName = 'AIverse-phi';
  const siteUrl = 'https://aiverse-phi.vercel.app';
  const testUrl = `${siteUrl}${isGame ? '/interactive' : '/test'}/${testId}`;
  
  // 썸네일 이미지
  const test = testCategories
    .flatMap(cat => cat.tests)
    .find(t => t.id === testId);
  
  const imageUrl = test?.thumbnail 
    ? (test.thumbnail.startsWith('http') ? test.thumbnail : `${siteUrl}${test.thumbnail}`)
    : `${siteUrl}/images/aiverse-og-image.png`;
  
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
  
  <!-- Canonical URL -->
  <link rel="canonical" href="${testUrl}" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  
  <!-- Progressive Enhancement CSS -->
  <style>
    /* Reset & Base */
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
    
    /* Layout */
    .test-page, .game-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
      min-height: 100vh;
    }
    
    /* Header */
    .test-header, .game-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .test-header h1, .game-header h1 {
      font-size: clamp(1.5rem, 4vw, 3rem);
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .test-description, .game-description {
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 1.5rem;
    }
    
    /* Badges */
    .test-badges, .game-badges {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .badge {
      padding: 0.375rem 0.875rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: white;
    }
    
    .badge-hot { background: linear-gradient(135deg, #ff6b6b, #ff5252); }
    .badge-new { background: linear-gradient(135deg, #4ecdc4, #26a69a); }
    .badge-info { background: linear-gradient(135deg, #94a3b8, #64748b); }
    
    /* Content Sections */
    .test-content, .game-content {
      display: grid;
      gap: 2rem;
    }
    
    .test-intro, .game-intro {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
      border: 1px solid #0284c7;
      border-radius: 12px;
      padding: 1.5rem;
    }
    
    .test-intro h2, .game-intro h2 {
      color: #0c4a6e;
      margin-bottom: 1rem;
    }
    
    .test-intro ul, .game-intro ul {
      color: #0369a1;
      line-height: 1.8;
      margin-left: 1.5rem;
    }
    
    /* Test Form */
    .test-form, .game-start {
      text-align: center;
      background: linear-gradient(135deg, #f8fafc, #e2e8f0);
      border-radius: 16px;
      padding: 2rem;
    }
    
    .test-form h3, .game-start h3 {
      margin-bottom: 1rem;
      color: #374151;
    }
    
    .start-button, .preview-button {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 12px;
      font-size: 1.125rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      margin: 1rem 0;
    }
    
    .start-button:hover, .preview-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    }
    
    /* Features */
    .test-features, .game-features {
      margin-top: 2rem;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .feature {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
    }
    
    .feature h4 {
      margin-bottom: 0.5rem;
      color: #374151;
    }
    
    .feature p {
      color: #6b7280;
      font-size: 0.875rem;
    }
    
    /* Info Sections */
    .test-info {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1.5rem;
    }
    
    .test-info h3 {
      margin-bottom: 1rem;
      color: #374151;
    }
    
    .test-info ul, .test-info ol {
      margin-left: 1.5rem;
      color: #4b5563;
      line-height: 1.8;
    }
    
    /* No JavaScript */
    .no-js-message {
      background: #fef3c7;
      border: 1px solid #f59e0b;
      border-radius: 8px;
      padding: 1rem;
      margin: 1rem 0;
      color: #92400e;
    }
    
    /* Game Preview */
    .game-preview {
      margin: 2rem 0;
    }
    
    .preview-area {
      background: #1f2937;
      color: white;
      border-radius: 12px;
      padding: 3rem;
      text-align: center;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .test-page, .game-page {
        padding: 1rem;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
      
      .test-badges, .game-badges {
        gap: 0.5rem;
      }
    }
    
    /* React Enhancement */
    .react-enhanced .test-page,
    .react-enhanced .game-page {
      display: none;
    }
  </style>
  
  <!-- Progressive Enhancement Script -->
  <script>
    // React 앱 로드 감지 및 전환
    document.addEventListener('DOMContentLoaded', function() {
      let attempts = 0;
      const maxAttempts = 50; // 5초
      
      function checkReactApp() {
        attempts++;
        
        // React 앱의 실제 컴포넌트 감지
        const reactElements = document.querySelectorAll('[data-testid], header[class*="styled"], nav, .react-app, main[class*="styled"]');
        const staticContent = document.querySelector('.test-page, .game-page');
        
        // React 컴포넌트가 로드되고 정적 콘텐츠와 다른 경우
        if (reactElements.length > 0 && staticContent) {
          // React 앱이 정적 콘텐츠를 대체했는지 확인
          const isReactTakeover = Array.from(reactElements).some(el => 
            el !== staticContent && !staticContent.contains(el)
          );
          
          if (isReactTakeover) {
            console.log('✅ React 앱으로 전환 완료');
            document.body.classList.add('react-enhanced');
            return;
          }
        }
        
        // 계속 시도하거나 타임아웃
        if (attempts < maxAttempts) {
          setTimeout(checkReactApp, 100);
        } else {
          console.log('ℹ️ 정적 콘텐츠 유지 (React 앱 미감지)');
        }
      }
      
      // React 앱 로드 대기
      setTimeout(checkReactApp, 500);
    });
    
    // 폼 제출 처리 (JavaScript가 활성화된 경우)
    document.addEventListener('DOMContentLoaded', function() {
      const startForm = document.querySelector('.start-form');
      if (startForm) {
        startForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const testId = this.querySelector('input[name="test"]').value;
          
          // React 앱으로 전환 시도
          if (window.location.pathname !== '/') {
            window.location.href = '/?test=' + testId;
          }
        });
      }
    });
  </script>
</head>
<body>
  <div id="root">
    ${content}
  </div>
  
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
    },
    "creator": {
      "@type": "Organization",
      "name": "AIverse Team",
      "url": "${siteUrl}"
    }
  }
  </script>
</body>
</html>`;
};

async function generateProgressiveSSG() {
  console.log('🚀 Progressive Enhancement SSG 생성 시작...');
  
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
          const content = createFullGameContent(test.id);
          const html = createProgressiveHTML(test.id, content, true);
          
          const gameDir = path.join(interactiveDir, test.id);
          await fs.mkdir(gameDir, { recursive: true });
          await fs.writeFile(path.join(gameDir, 'index.html'), html, 'utf-8');
          
          console.log(`✅ 게임 페이지: /interactive/${test.id}/`);
        } else {
          // 테스트 페이지
          const content = createFullTestContent(test.id);
          const html = createProgressiveHTML(test.id, content, false);
          
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
  
  console.log(`\n🎉 Progressive Enhancement SSG 완료!`);
  console.log(`📊 총 ${generatedCount}개 페이지 생성`);
  console.log('\n✅ 완전한 Progressive Enhancement 구현:');
  console.log('  • 정적 HTML에 완전한 콘텐츠 포함');
  console.log('  • JavaScript 없이도 기본 기능 사용 가능');
  console.log('  • React 앱 로드 시 향상된 경험 제공');
  console.log('  • 모든 사용자에게 동일한 의미 있는 HTML');
}

// 스크립트 실행
generateProgressiveSSG().catch(console.error);

export default generateProgressiveSSG;
