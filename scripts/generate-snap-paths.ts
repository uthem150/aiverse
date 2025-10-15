import fs from 'fs';
import path from 'path';

/**
 * 이 스크립트는 `src/router/index.tsx` 파일을 텍스트로 읽어,
 * react-snap이 사전 렌더링(pre-rendering)해야 할 경로 목록을 자동으로 생성함
 * 생성된 경로 목록은 `package.json` 파일의 `reactSnap.include` 배열을 업데이트
 * * 실행 방식:
 * 1. 라우터 설정 파일을 텍스트로 읽음
 * 2. 정규식을 사용해 `path: '...'` 형태의 모든 경로 문자열을 추출합
 * 3. 사전 렌더링이 필요한 `/test/*` 와 `/interactive/*` 경로만 필터링
 * 4. `package.json`을 업데이트하여 빌드 시 react-snap이 이 경로들을 사용하도록 함
 * * 이 방식은 Node.js 환경에서 리액트 컴포넌트나 CSS 파일을 직접 import하지 않으므로,
 * `ERR_UNKNOWN_FILE_EXTENSION` 오류 없이 안전하게 실행됨
 */
const generateSnapPaths = () => {
  console.log('🚀 react-snap 경로 생성을 시작합니다 (텍스트 파싱 방식)...');

  try {
    // 읽어올 라우터 파일의 경로를 지정
    const routesFilePath = path.join(process.cwd(), 'src', 'router', 'index.tsx');
    const routesFileContent = fs.readFileSync(routesFilePath, 'utf-8');

    // 정규식을 사용하여 'path: "..."' 또는 "path: '...'" 패턴을 모두 찾음
    const pathRegex = /path:\s*['"](.+?)['"]/g;
    let matches;

    // 기본적으로 포함할 주요 경로들을 미리 추가
    const paths: string[] = ['/', '/tests', '/interactive-hub'];

    while ((matches = pathRegex.exec(routesFileContent)) !== null) {
      // 찾은 경로 문자열 (예: "test/face-age-test")
      const fullPath = matches[1];

      // 사전 렌더링할 경로만 필터. (동적 경로(:category)는 제외)
      if (
        (fullPath.startsWith('test/') || fullPath.startsWith('interactive/')) &&
        !fullPath.includes(':')
      ) {
        paths.push(`/${fullPath}`);
      }
    }

    // 중복된 경로를 제거하여 최종 목록 만듦
    const uniquePaths = [...new Set(paths)];
    console.log(`✅ 총 ${uniquePaths.length}개의 사전 렌더링 경로를 찾았습니다.`);
    console.log(uniquePaths); // 생성된 경로 목록을 터미널에 출력

    // package.json 파일을 읽고 reactSnap.include 부분을 업데이트
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    packageJson.reactSnap = {
      ...packageJson.reactSnap,
      source: 'dist',
      inlineCss: true,
      include: uniquePaths,
    };

    // 업데이트된 내용으로 package.json 파일을 다시 씀
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
    console.log('✨ package.json 파일에 경로가 성공적으로 업데이트되었습니다!');
  } catch (error) {
    console.error('❌ 경로 생성 스크립트 실행 중 오류가 발생했습니다:', error);
    process.exit(1); // 오류 발생 시 빌드 프로세스를 중단
  }
};

generateSnapPaths();
