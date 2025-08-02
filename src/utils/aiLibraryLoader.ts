// AI 라이브러리 통합 로더
class AILibraryLoader {
  private static instance: AILibraryLoader;
  private tfLoading = false;
  private tfLoaded = false;
  private tmLoading = false;
  private tmLoaded = false;
  private tfLoadPromise: Promise<void> | null = null;
  private tmLoadPromise: Promise<void> | null = null;

  private constructor() {}

  public static getInstance(): AILibraryLoader {
    if (!AILibraryLoader.instance) {
      AILibraryLoader.instance = new AILibraryLoader();
    }
    return AILibraryLoader.instance;
  }

  // TensorFlow.js 로드
  public async loadTensorFlow(): Promise<void> {
    if (this.tfLoaded && window.tf) {
      console.log('✅ TensorFlow.js already loaded');
      return Promise.resolve();
    }

    if (this.tfLoading && this.tfLoadPromise) {
      console.log('⏳ TensorFlow.js loading in progress...');
      return this.tfLoadPromise;
    }

    this.tfLoading = true;
    this.tfLoadPromise = this.loadTensorFlowScript();

    try {
      await this.tfLoadPromise;
      this.tfLoaded = true;
      console.log('🎉 TensorFlow.js loading completed');
    } catch (error) {
      this.tfLoading = false;
      this.tfLoadPromise = null;
      throw error;
    } finally {
      this.tfLoading = false;
    }
  }

  // Teachable Machine 로드
  public async loadTeachableMachine(): Promise<void> {
    // TensorFlow.js가 먼저 로드되어야 함
    if (!this.tfLoaded) {
      await this.loadTensorFlow();
    }

    if (this.tmLoaded && window.tmImage) {
      console.log('✅ Teachable Machine already loaded');
      return Promise.resolve();
    }

    if (this.tmLoading && this.tmLoadPromise) {
      console.log('⏳ Teachable Machine loading in progress...');
      return this.tmLoadPromise;
    }

    this.tmLoading = true;
    this.tmLoadPromise = this.loadTeachableMachineScript();

    try {
      await this.tmLoadPromise;
      this.tmLoaded = true;
      console.log('🎉 Teachable Machine loading completed');
    } catch (error) {
      this.tmLoading = false;
      this.tmLoadPromise = null;
      throw error;
    } finally {
      this.tmLoading = false;
    }
  }

  // Face-API 호환 TensorFlow.js 로드 (face-api.js의 import 오류 해결)
  public async loadTensorFlowForFaceAPI(): Promise<void> {
    await this.loadTensorFlow();

    // face-api.js가 ES 모듈 방식으로 tf를 찾을 수 있도록 전역 설정
    if (window.tf && !window.tf.version_core) {
      // face-api.js 호환성을 위한 추가 설정
      window.tf.version_core = window.tf.version?.['tfjs-core'] || '1.7.4';
    }

    console.log('✅ TensorFlow.js configured for face-api.js');
  }

  private loadTensorFlowScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.tf) {
        console.log('✅ TensorFlow.js found in window');
        resolve();
        return;
      }

      console.log('📦 Loading TensorFlow.js dynamically...');

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7.4/dist/tf.min.js';
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          if (window.tf) {
            console.log('✅ TensorFlow.js loaded successfully');
            console.log('📊 TensorFlow.js version:', window.tf.version);
            resolve();
          } else {
            reject(new Error('TensorFlow.js 로드되었지만 window.tf를 찾을 수 없습니다.'));
          }
        }, 200); // 초기화 시간 증가
      };

      script.onerror = () => {
        reject(new Error('TensorFlow.js 스크립트 로드에 실패했습니다.'));
      };

      document.head.appendChild(script);
    });
  }

  private loadTeachableMachineScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.tmImage) {
        console.log('✅ Teachable Machine found in window');
        resolve();
        return;
      }

      console.log('📦 Loading Teachable Machine dynamically...');

      const script = document.createElement('script');
      script.src =
        'https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js';
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          if (window.tmImage) {
            console.log('✅ Teachable Machine loaded successfully');
            resolve();
          } else {
            reject(new Error('Teachable Machine 로드되었지만 window.tmImage를 찾을 수 없습니다.'));
          }
        }, 300); // Teachable Machine 초기화 시간
      };

      script.onerror = () => {
        reject(new Error('Teachable Machine 스크립트 로드에 실패했습니다.'));
      };

      document.head.appendChild(script);
    });
  }

  // 상태 확인 메서드들
  public isTensorFlowReady(): boolean {
    return this.tfLoaded && !!window.tf;
  }

  public isTeachableMachineReady(): boolean {
    return this.tmLoaded && !!window.tmImage && this.isTensorFlowReady();
  }

  public isFaceAPIReady(): boolean {
    return this.isTensorFlowReady();
  }

  // 정리 함수
  public cleanup(): void {
    this.tfLoading = false;
    this.tmLoading = false;
    this.tfLoadPromise = null;
    this.tmLoadPromise = null;
    // 로드 상태는 유지 (재사용 가능)
  }
}

// 전역 타입 선언
declare global {
  interface Window {
    tf: any;
    tmImage: any;
  }
}

export default AILibraryLoader;
