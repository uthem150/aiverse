import { useState, useRef } from 'react';
import { Camera, Upload, RotateCcw } from 'lucide-react';
import TestContainer from '@/components/common/TestContainer/TestContainer';
import Button from '@/components/common/Button/Button';
import Typography from '@/components/common/Typography/Typography';
import {
  StyledTestStep,
  StyledImageUpload,
  StyledImagePreview,
  StyledResultSection,
  StyledResultCard,
} from './FaceAgeTestPage.style';

interface AnalysisResult {
  predictedAge: number;
  confidence: number;
  actualAge?: number;
  message: string;
}

const FaceAgeTestPage = () => {
  const [step, setStep] = useState<'upload' | 'analysis' | 'result'>('upload');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setSelectedImage(e.target?.result as string);
        setStep('analysis');
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsLoading(true);

    // AI 분석 시뮬레이션 (실제로는 TensorFlow.js나 API 호출)
    setTimeout(() => {
      const mockAge = Math.floor(Math.random() * 30) + 20; // 20-50세 랜덤
      const confidence = Math.floor(Math.random() * 20) + 80; // 80-100% 신뢰도

      setResult({
        predictedAge: mockAge,
        confidence,
        message: getAgeMessage(mockAge),
      });

      setStep('result');
      setIsLoading(false);
    }, 3000);
  };

  const getAgeMessage = (age: number): string => {
    if (age < 25) return '정말 젊어 보이시네요! ✨';
    if (age < 35) return '한창 매력적인 나이네요! 💫';
    if (age < 45) return '성숙한 매력이 느껴져요! 🌟';
    return '경험과 지혜가 묻어나는 모습이에요! 👑';
  };

  const resetTest = () => {
    setStep('upload');
    setSelectedImage(null);
    setResult(null);
    setIsLoading(false);
  };

  const shareResult = () => {
    if (result) {
      const text = `AI가 분석한 내 나이는 ${result.predictedAge}세! ${result.message}`;

      if (navigator.share) {
        navigator.share({
          title: 'AIverse 얼굴 나이 테스트',
          text,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(`${text} ${window.location.href}`);
        alert('결과가 복사되었습니다!');
      }
    }
  };

  return (
    <TestContainer
      title="🤖 AI 얼굴 나이 테스트"
      description="AI가 당신의 얼굴을 분석해서 나이를 예측해드려요!"
      showShare={step === 'result'}
      onShare={shareResult}
    >
      {step === 'upload' && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            얼굴 사진을 업로드해주세요
          </Typography>
          <Typography variant="body2" align="center" color="#6B7280">
            정면을 바라보는 선명한 사진일수록 정확한 분석이 가능해요
          </Typography>

          <StyledImageUpload onClick={() => fileInputRef.current?.click()}>
            <Camera size={48} color="#6366F1" />
            <Typography variant="body1">사진 선택하기</Typography>
            <Typography variant="caption" color="#6B7280">
              JPG, PNG 파일만 가능 (최대 10MB)
            </Typography>
          </StyledImageUpload>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </StyledTestStep>
      )}

      {step === 'analysis' && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            업로드된 사진
          </Typography>

          {selectedImage && (
            <StyledImagePreview>
              <img src={selectedImage} alt="업로드된 사진" />
            </StyledImagePreview>
          )}

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Button variant="secondary" onClick={resetTest}>
              <RotateCcw size={16} />
              다시 선택
            </Button>
            <Button
              variant="primary"
              onClick={analyzeImage}
              loading={isLoading}
              disabled={isLoading}
            >
              <Upload size={16} />
              {isLoading ? 'AI 분석 중...' : '분석 시작'}
            </Button>
          </div>
        </StyledTestStep>
      )}

      {step === 'result' && result && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            🎉 분석 완료!
          </Typography>

          <StyledResultSection>
            <StyledResultCard>
              <Typography variant="h1" color="#6366F1">
                {result.predictedAge}세
              </Typography>
              <Typography variant="body1">{result.message}</Typography>
              <Typography variant="caption" color="#6B7280">
                신뢰도: {result.confidence}%
              </Typography>
            </StyledResultCard>

            {selectedImage && (
              <StyledImagePreview>
                <img src={selectedImage} alt="분석된 사진" />
              </StyledImagePreview>
            )}
          </StyledResultSection>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Button variant="secondary" onClick={resetTest}>
              다시 테스트
            </Button>
            <Button variant="primary" onClick={shareResult}>
              결과 공유하기
            </Button>
          </div>
        </StyledTestStep>
      )}
    </TestContainer>
  );
};

export default FaceAgeTestPage;
