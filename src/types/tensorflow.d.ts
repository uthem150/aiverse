// TensorFlow.js, Teachable Machine, face-api.js 전역 타입 정의
declare global {
  interface Window {
    tf: any;
    tmImage: {
      load: (modelUrl: string, metadataUrl: string) => Promise<any>;
      classify: (model: any, image: HTMLImageElement) => Promise<any[]>;
    };
    faceapi: any;
  }

  namespace tmImage {
    interface ClassificationResult {
      className: string;
      probability: number;
    }
  }
}

// face-api.js 모듈 타입 정의
declare module 'face-api.js' {
  export interface FaceDetection {
    box: { x: number; y: number; width: number; height: number };
    score: number;
  }

  export interface FaceExpressions {
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
  }

  export interface AgeGenderPrediction {
    age: number;
    gender: string;
    genderProbability: number;
  }

  export interface WithFaceExpressions<T> {
    expressions: FaceExpressions;
  }

  export interface WithAge<T> {
    age: number;
  }

  export interface WithGender<T> {
    gender: string;
    genderProbability: number;
  }
}

export {};
