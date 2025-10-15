import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
  // 사전 렌더링된 HTML이 있으면 hydrateRoot를 사용
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // 일반적인 개발 환경에서는 createRoot를 사용
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
