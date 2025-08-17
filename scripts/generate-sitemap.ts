// scripts/generate-sitemap.ts
// -----------------------------------------------------------------------------
// 목적
// - 라우터 규칙에 맞춰 sitemap.xml 생성
//   * 홈:               '/'
//   * 목록/카테고리:     '/tests', '/tests/:category' (카테고리 목록은 데이터 연동 시 확장)
//   * 인터랙티브 허브:   '/interactive-hub'
//   * 인터랙티브 상세:   '/interactive/:id'
//   * 테스트 상세:       '/test/:id'
// - 소스: src/data/testMeta.ts 의 testMetaData 키(전체 컨텐츠 카탈로그)
//
// 주의
// - testMetaData에는 게임/테스트가 함께 들어있으므로 라우트 prefix를 분기해야 함.
// - 본 스크립트는 "인터랙티브 ID 목록"을 배열로 유지하여 라우팅을 결정한다.
// -----------------------------------------------------------------------------

import * as fs from 'node:fs';
import * as path from 'node:path';
import { testMetaData } from '../src/data/testMeta.ts';

// 1) BASE_URL 정규화 (환경변수 우선)
const RAW_BASE_URL = process.env.SITEMAP_BASE_URL ?? 'https://aiverse-phi.vercel.app';
const BASE_URL = RAW_BASE_URL.replace(/\/+$/, ''); // 끝 슬래시 제거
const TODAY = new Date().toISOString().slice(0, 10);

// 2) 라우터 기준 정적 경로
const staticPages: string[] = [
  '/', // 홈
  '/tests', // 전체 테스트 목록
  '/interactive-hub', // 체험관
  '/interactive/cursor',
  '/interactive/background',
  '/interactive/games',
];

// 3) 인터랙티브 라우트에 속하는 ID 목록
//    - router.tsx 에 정의된 경로들의 slug와 반드시 일치
const interactiveIds = new Set([
  // 허브형 키(메타 존재 시)
  'interactive-hub', // 단, 경로는 '/interactive-hub' (예외 처리)

  // 경험/카테고리
  'cursor',
  'background',
  'games',

  // 게임들
  'target-shooter',
  'orb-collector',
  'block-faller',
  'color-match',
  'math-quiz',
  'maze-runner',
  'memory-cards',
  'reaction-test',
  'simon-says',
  'sliding-puzzle',
  'snake-game',
  'speed-clicker',
  'tic-tac-toe',
  'whack-a-mole',
]);

// 4) testMetaData 기반 전체 ID -> 라우트 경로로 매핑
const allIds = Object.keys(testMetaData);

// 인터랙티브 허브 키 'interactive-hub'는 경로가 '/interactive-hub' 로 특수 처리,
// 나머지 인터랙티브 ID는 '/interactive/:id', 그 외는 '/test/:id'
function idToPath(id: string): string {
  if (id === 'interactive-hub') return '/interactive-hub';
  if (interactiveIds.has(id)) return `/interactive/${id}`;
  return `/test/${id}`;
}

const dynamicPages = allIds.map(idToPath);

// 5) 전체 경로 집합(중복 제거 후 정렬)
const allPages = Array.from(new Set([...staticPages, ...dynamicPages])).sort((a, b) =>
  a.localeCompare(b)
);

// 6) 정책: changefreq / priority
type Changefreq = 'daily' | 'weekly' | 'monthly';

function getChangefreq(p: string): Changefreq {
  if (p === '/') return 'daily';
  // 상세 컨텐츠(인터랙티브/테스트) → weekly
  if (p.startsWith('/interactive/') || p.startsWith('/test/')) return 'weekly';
  // 허브/목록 → monthly
  return 'monthly';
}

function getPriority(p: string): string {
  if (p === '/') return '1.0'; // 홈
  if (p === '/tests' || p === '/interactive-hub' || p === '/interactive/games') return '0.9'; // 주요 허브
  if (p.startsWith('/interactive/') || p.startsWith('/test/')) return '0.8'; // 상세
  return '0.7';
}

const xmlEscape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 7) XML 생성
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${allPages
  .map(p => {
    const loc = p === '/' ? `${BASE_URL}/` : `${BASE_URL}${p}`;
    return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(p)}</changefreq>
    <priority>${getPriority(p)}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

// 8) 파일 출력
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);

console.log('✅ sitemap.xml 생성 완료');
console.log(`📄 총 ${allPages.length}개 URL 포함`);
