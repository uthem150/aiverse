import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
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
    sourcemap: false, // 배포 시 소스맵 제거로 크기 줄이기
    rollupOptions: {
      output: {
        manualChunks: {
          // face-api.js를 별도 청크로 분리
          'face-api': ['face-api.js'],
          // emotion 관련 라이브러리 분리
          emotion: ['@emotion/react', '@emotion/styled'],
          // react 관련 라이브러리 분리
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // 기타 라이브러리들
          vendor: ['zustand', 'framer-motion', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600, // 경고 한도를 600KB로 조정
  },
  // 정적 파일 최적화
  assetsInclude: ['**/*.bin', '**/*.shard*', '**/*.json'],
});
