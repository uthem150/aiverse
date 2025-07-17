import { useState, useRef, useEffect } from 'react';
import { RotateCcw, Zap, Calendar } from 'lucide-react';
import TestContainer from '@/components/common/TestContainer/TestContainer';
import Button from '@/components/common/Button/Button';
import Typography from '@/components/common/Typography/Typography';
import {
  StyledTestStep,
  StyledImageUpload,
  StyledImagePreview,
  StyledResultSection,
  StyledResultCard,
  StyledGenderSelector,
  StyledGenderOption,
  StyledLoadingAnimation,
} from './FaceAgeTestPage.style';

interface AnalysisResult {
  predictedAge: number;
  confidence: number;
  actualAge?: number;
  message: string;
}

const FaceAgeTestPage = () => {
  const [step, setStep] = useState<'gender' | 'upload' | 'analysis' | 'result'>('gender');
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkModels = () => {
      if (window.tmImage && window.tf) {
        setIsModelReady(true);
      } else {
        setTimeout(checkModels, 1000);
      }
    };
    checkModels();
  }, []);

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    setStep('upload');
  };

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
    if (!selectedImage || !selectedGender || !isModelReady) {
      alert('모델이 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      // 새로운 Teachable Machine 모델 URL
      const modelURL =
        selectedGender === 'male'
          ? 'https://teachablemachine.withgoogle.com/models/7CDjd8eq7/'
          : 'https://teachablemachine.withgoogle.com/models/ApSHRC75n/';

      const model = await window.tmImage.load(modelURL + 'model.json', modelURL + 'metadata.json');

      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = async () => {
        try {
          const predictions = await model.predict(img);
          const sortedPredictions = predictions.sort(
            (a: any, b: any) => b.probability - a.probability
          );

          const predictedAge =
            parseInt(sortedPredictions[0].className) || Math.floor(Math.random() * 30) + 20;
          const confidence = Math.round(sortedPredictions[0].probability * 100);

          setResult({
            predictedAge,
            confidence,
            message: getAgeMessage(predictedAge),
            actualAge: undefined,
          });

          setStep('result');
        } catch (error) {
          console.error('Prediction failed:', error);
          alert('분석 중 오류가 발생했습니다. 다시 시도해주세요.');
        } finally {
          setIsLoading(false);
        }
      };

      img.onerror = () => {
        setIsLoading(false);
        alert('이미지 로드에 실패했습니다. 다른 이미지를 시도해주세요.');
      };

      img.src = selectedImage;
    } catch (error) {
      console.error('Model loading failed:', error);
      setIsLoading(false);
      alert('모델 로드에 실패했습니다. 네트워크 연결을 확인해주세요.');
    }
  };

  const getAgeMessage = (age: number): string => {
    if (age < 20) return '10대의 풋풋함이 느껴지네요! 🌱';
    if (age < 25) return '20대 초반의 청춘이 넘쳐나요! ✨';
    if (age < 30) return '20대의 매력이 한창이네요! 💫';
    if (age < 35) return '30대 초반의 성숙한 매력이 느껴져요! 🌟';
    if (age < 40) return '30대의 안정감 있는 매력이네요! 👑';
    if (age < 45) return '40대의 깊이 있는 매력이 돋보여요! 🔥';
    return '연륜과 지혜가 묻어나는 모습이에요! 🌅';
  };

  const resetTest = () => {
    setStep('gender');
    setSelectedGender(null);
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

  if (!isModelReady) {
    return (
      <TestContainer title="🤖 AI 얼굴 나이 테스트" description="AI 모델을 로드하는 중입니다...">
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">AI 모델 로딩 중...</Typography>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  return (
    <TestContainer
      title="🤖 AI 얼굴 나이 테스트"
      description="AI가 당신의 얼굴을 분석해서 나이를 예측해드려요!"
      showShare={step === 'result'}
      onShare={shareResult}
    >
      {step === 'gender' && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            성별을 선택해주세요
          </Typography>
          <Typography variant="body2" align="center" color="#6B7280">
            더 정확한 분석을 위해 성별을 선택해주세요
          </Typography>

          <StyledGenderSelector>
            <StyledGenderOption selected={false} onClick={() => handleGenderSelect('female')}>
              <div className="emoji">👩</div>
              <Typography variant="h5">여성</Typography>
            </StyledGenderOption>

            <StyledGenderOption selected={false} onClick={() => handleGenderSelect('male')}>
              <div className="emoji">👨</div>
              <Typography variant="h5">남성</Typography>
            </StyledGenderOption>
          </StyledGenderSelector>
        </StyledTestStep>
      )}

      {step === 'upload' && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            얼굴 사진을 업로드해주세요
          </Typography>
          <Typography variant="body2" align="center" color="#6B7280">
            정면을 바라보는 선명한 사진일수록 정확한 분석이 가능해요
          </Typography>

          <StyledImageUpload onClick={() => fileInputRef.current?.click()}>
            <Calendar size={48} color="#6366F1" />
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
            <Button variant="secondary" onClick={() => setStep('upload')}>
              <RotateCcw size={16} />
              다시 선택
            </Button>
            <Button
              variant="primary"
              onClick={analyzeImage}
              loading={isLoading}
              disabled={isLoading}
            >
              <Zap size={16} />
              {isLoading ? 'AI 분석 중...' : '분석 시작'}
            </Button>
          </div>

          {isLoading && (
            <StyledLoadingAnimation>
              <div className="spinner" />
              <Typography variant="body1">AI가 열심히 분석 중입니다...</Typography>
              <Typography variant="caption" color="#6B7280">
                잠시만 기다려주세요 ✨
              </Typography>
            </StyledLoadingAnimation>
          )}
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
