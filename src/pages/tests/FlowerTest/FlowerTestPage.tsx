import { useState, useRef, useEffect } from 'react';
import { Camera, Upload, RotateCcw, Zap, Flower } from 'lucide-react';
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
  StyledFlowerInfo,
  StyledCelebSection,
} from './FlowerTestPage.style';

interface FlowerResult {
  flowerType: string;
  confidence: number;
  description: string;
  celebrities: string;
  message: string;
  meaning: string;
}

const FlowerTestPage = () => {
  const [step, setStep] = useState<'gender' | 'upload' | 'analysis' | 'result'>('gender');
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<FlowerResult | null>(null);
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

  const flowerInfo = {
    장미: {
      emoji: '🌹',
      color: '#E91E63',
      description: '아름다움을 상징하는 가장 대표적인 꽃 장미. 당신에게 어울리는 꽃은 장미입니다.',
      celebrities: '제니, 리사, 아이린, 강동원, 유승호',
      meaning: '사랑, 아름다움, 열정',
    },
    벚꽃: {
      emoji: '🌸',
      color: '#FFB6C1',
      description:
        "꽃말로 '순결, 절세미인'의 뜻을 지닌 벚꽃. 순백의 부드러운 꽃잎처럼 당신은 벚꽃을 닮았습니다.",
      celebrities: '수지, 한효주, 정해인, 서강준',
      meaning: '순결, 절세미인, 인생의 아름다움',
    },
    나팔꽃: {
      emoji: '🎺',
      color: '#9C27B0',
      description:
        "매력적인 보라빛이 인상적인 나팔꽃, '기쁜 소식'이라는 꽃말을 지닌 나팔꽃처럼 당신은 자꾸 기다려지는 사람입니다.",
      celebrities: '한예슬, 서예지, 한소희, 원빈, 이동욱',
      meaning: '기쁜 소식, 희망, 신비로움',
    },
    민들레: {
      emoji: '🌼',
      color: '#FFC107',
      description:
        '수수하면서도 따뜻한 봄의 민들레처럼, 당신은 민들레와 어울리는 부드럽고 따뜻한 사람입니다.',
      celebrities: '아이유, 김태리, 최우식, 박서준',
      meaning: '행복, 감사, 진심',
    },
    코스모스: {
      emoji: '🌺',
      color: '#FF5722',
      description:
        "가을을 알리는 꽃 코스모스, '순정'이라는 꽃말처럼 풋풋한 사랑이 생각나는 당신은 코스모스와 닮았습니다.",
      celebrities: '서현진, 이영애, 태연, 지창욱, 박보검',
      meaning: '순정, 조화, 겸손',
    },
    튤립: {
      emoji: '🌷',
      color: '#FF6F00',
      description:
        "이색적인 모양으로, 부드러운 아름다움을 지닌 튤립. '사랑의 고백, 영원한 애정'등의 꽃말을 지닌 튤립처럼 당신은 아름다운 튤립과 어울립니다.",
      celebrities: '최유정, 김유정, 박보영, 조정석, 이민호',
      meaning: '사랑의 고백, 영원한 애정, 완벽한 사랑',
    },
  };

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
      const modelURL =
        selectedGender === 'male'
          ? 'https://teachablemachine.withgoogle.com/models/ALsfXoD7E/'
          : 'https://teachablemachine.withgoogle.com/models/ksBXhbi6Q/';

      const model = await window.tmImage.load(modelURL + 'model.json', modelURL + 'metadata.json');

      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = async () => {
        try {
          const predictions = await model.predict(img);
          const sortedPredictions = predictions.sort(
            (a: any, b: any) => b.probability - a.probability
          );

          const topPrediction = sortedPredictions[0];
          const flowerType = topPrediction.className;
          const flowerData =
            flowerInfo[flowerType as keyof typeof flowerInfo] || flowerInfo['민들레'];

          setResult({
            flowerType,
            confidence: Math.round(topPrediction.probability * 100),
            description: flowerData.description,
            celebrities: flowerData.celebrities,
            meaning: flowerData.meaning,
            message: `${flowerData.emoji} 당신과 닮은 꽃은 ${flowerType}입니다!`,
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

  const resetTest = () => {
    setStep('gender');
    setSelectedGender(null);
    setSelectedImage(null);
    setResult(null);
    setIsLoading(false);
  };

  const shareResult = () => {
    if (result) {
      const text = `${result.message} (신뢰도 ${result.confidence}%) 🌸`;

      if (navigator.share) {
        navigator.share({
          title: 'AIverse 나와 닮은 꽃 찾기',
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
      <TestContainer title="🌸 AI 나와 닮은 꽃 찾기" description="AI 모델을 로드하는 중입니다...">
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">AI 모델 로딩 중...</Typography>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  return (
    <TestContainer
      title="🌸 AI 나와 닮은 꽃 찾기"
      description="AI가 당신과 닮은 꽃을 찾아드려요!"
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
            자연스러운 표정의 사진일수록 정확한 분석이 가능해요
          </Typography>

          <StyledImageUpload onClick={() => fileInputRef.current?.click()}>
            <Flower size={48} color="#6366F1" />
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
              {isLoading ? '꽃 분석 중...' : '분석 시작'}
            </Button>
          </div>

          {isLoading && (
            <StyledLoadingAnimation>
              <div className="spinner" />
              <Typography variant="body1">AI가 당신과 닮은 꽃을 찾고 있습니다...</Typography>
              <Typography variant="caption" color="#6B7280">
                잠시만 기다려주세요 🌸
              </Typography>
            </StyledLoadingAnimation>
          )}
        </StyledTestStep>
      )}

      {step === 'result' && result && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            🌺 꽃 분석 완료!
          </Typography>

          <StyledResultSection>
            <StyledResultCard
              color={flowerInfo[result.flowerType as keyof typeof flowerInfo]?.color || '#6366F1'}
            >
              <div className="emoji">
                {flowerInfo[result.flowerType as keyof typeof flowerInfo]?.emoji || '🌸'}
              </div>
              <Typography variant="h2" color="white">
                {result.flowerType}
              </Typography>
              <Typography variant="body1" color="white">
                {result.description}
              </Typography>
              <Typography variant="caption" color="rgba(255,255,255,0.8)">
                신뢰도: {result.confidence}%
              </Typography>
            </StyledResultCard>

            <StyledFlowerInfo>
              <Typography variant="h6" align="center">
                🌻 꽃말
              </Typography>
              <Typography variant="body1" align="center" color="#6366F1">
                {result.meaning}
              </Typography>
            </StyledFlowerInfo>

            <StyledCelebSection>
              <Typography variant="h6" align="center">
                ⭐ 같은 꽃을 닮은 연예인들
              </Typography>
              <Typography variant="body1" color="#6B7280">
                {result.celebrities}
              </Typography>
            </StyledCelebSection>

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

export default FlowerTestPage;
