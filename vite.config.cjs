// vite.config.cjs

const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');
const fs = require('fs');
const prerender = require('vite-plugin-prerender');
const chromium = require('@sparticuz/chromium');

// --- 경로 자동 생성 로직 (기존과 동일) ---
const getPrerenderRoutes = () => {
  try {
    const routerFilePath = path.join(__dirname, 'src', 'router', 'index.tsx');
    const routerFileContent = fs.readFileSync(routerFilePath, 'utf-8');
    const pathRegex = /path:\s*['"](.+?)['"]/g;
    let matches;
    const paths = ['/', '/tests', '/interactive-hub'];

    while ((matches = pathRegex.exec(routerFileContent)) !== null) {
      const fullPath = matches[1];
      if (
        !fullPath.includes(':') &&
        (fullPath.startsWith('test/') || fullPath.startsWith('interactive/'))
      ) {
        paths.push(`/${fullPath}`);
      }
    }
    return [...new Set(paths)];
  } catch (error) {
    console.error('라우터 경로를 읽어오는 데 실패했습니다:', error);
    return ['/', '/tests'];
  }
};

const prerenderRoutes = getPrerenderRoutes();
console.log(`✨ 총 ${prerenderRoutes.length}개의 페이지를 사전 렌더링합니다.`);

// --- 경로 자동 생성 로직 끝 ---

// 2. chromium.executablePath를 await으로 호출하여 실제 경로(문자열)를 가져옴
module.exports = defineConfig(async () => {
  // 2. chromium.executablePath를 await으로 호출하여 실제 경로(문자열)를 가져옴
  const executablePath = process.env.VERCEL ? await chromium.executablePath() : undefined;

  // 3. 반환할 설정 객체를 정의
  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      prerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: prerenderRoutes,

        // 가져온 실제 경로(executablePath)를 사용
        renderer: new prerender.PuppeteerRenderer({
          executablePath,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
          // 한 번에 하나의 페이지만 렌더링하도록 설정
          concurrency: 1,

          // "각 페이지"를 로드할 때의 대기 시간 늘림
          navigationOptions: {
            timeout: 120000, // 120초
          },
        }),

        postProcess(renderedRoute) {
          renderedRoute.html = renderedRoute.html.replace(
            /<script\s*type="module"\s*crossorigin\s*src="\/assets\/index-.*\.js"><\/script>/,
            ''
          );
          return renderedRoute;
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/styles': path.resolve(__dirname, './src/styles'),
        '@/utils': path.resolve(__dirname, './src/utils'),
        '@/types': path.resolve(__dirname, './src/types'),
        '@/stores': path.resolve(__dirname, './src/stores'),
        '@/hooks': path.resolve(__dirname, './src/hooks'),
        '@/assets': path.resolve(__dirname, './src/assets'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  };
});
