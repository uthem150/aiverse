// TensorFlow.js와 Teachable Machine 전역 타입 정의
declare global {
  interface Window {
    tf: any;
    tmImage: {
      load: (modelUrl: string, metadataUrl: string) => Promise<any>;
      classify: (model: any, image: HTMLImageElement) => Promise<any[]>;
    };
  }

  namespace tmImage {
    interface ClassificationResult {
      className: string;
      probability: number;
    }
  }
}

export {};
