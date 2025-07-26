import { useState, useRef, useEffect } from 'react';
import { RotateCcw, Zap, Eye } from 'lucide-react';
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
  StyledCelebSection,
  StyledCelebCard,
} from './EyeTestPage.style';
import ShareResult from '@/components/common/ShareResult/ShareResult';

interface EyeAnalysisResult {
  eyeType: string;
  confidence: number;
  description: string;
  celebrities: string;
  message: string;
}

const EyeTestPage = () => {
  const [step, setStep] = useState<'gender' | 'upload' | 'analysis' | 'result'>('gender');
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<EyeAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [showShareResult, setShowShareResult] = useState(false);
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

  const eyeTypeInfo = {
    봉황안: {
      emoji: '🦅',
      color: '#8B5CF6',
      description:
        "눈 관상 중에서도 최고로 꼽는 봉황안. 봉황안에 대한 특징은 단 한 문장으로 끝납니다. '불가능이란 없다.'",
      celebrities: '부처님, 세종대왕, 유승호, 이순신, 소지섭, 마크 주커버그, 빌게이츠, 워렌버핏',
    },
    용안: {
      emoji: '🐉',
      color: '#6366F1',
      description:
        '봉황안과 마찬가지로 눈 관상중 최고 등급의 관상중 하나로, 용안을 갖춘 자는 일국의 제왕이나 황후가 될 가능성이 높았다고 합니다.',
      celebrities: '김연아, 트와이스 다현, 블랙핑크 제니',
    },
    호안: {
      emoji: '🐅',
      color: '#06B6D4',
      description:
        '온화하고, 기품이 있으며, 강직한 성격에 정의감 있는 타입입니다. 부와 명예를 누릴 가능성이 높습니다.',
      celebrities: '강동원, 방탄소년단 진, 티아라 지연, 주원',
    },
    공작안: {
      emoji: '🦚',
      color: '#10B981',
      description:
        '현명하고 사리판단에 밝은 성격으로, 부부가 화목하고, 이름을 드날리거나 가업이 흥할 눈이라고 합니다.',
      celebrities: '한예슬, 임보라',
    },
    사자눈: {
      emoji: '🦁',
      color: '#F59E0B',
      description:
        '지혜롭고 호탕한 성격을 가지며, 사람들이 많이 따르는 리더형의 기질을 가진 눈입니다. 일찍 출세하지만 자만심에 주의해야 합니다.',
      celebrities: '고수, 장동건',
    },
    소눈: {
      emoji: '🐄',
      color: '#EF4444',
      description:
        '인자한 성품에 인내심이 강하고 부지런한 성격입니다. 재물을 많이 가지게 되며, 긴 수명을 가지고 오래 부를 누린다고 합니다.',
      celebrities: '박보영, 트와이스 쯔위',
    },
    거북이눈: {
      emoji: '🐢',
      color: '#6B7280',
      description:
        '둥근 눈 위에 눈꺼풀이 여러겹 겹쳐있는 형태로, 느긋하고 고고한 성품을 가집니다. 건강한 신체로 장수하고 행복한 삶을 영위합니다.',
      celebrities: '원빈, 장혁',
    },
    학눈: {
      emoji: '🦢',
      color: '#EC4899',
      description:
        '보통 크기의 눈에 또렷한 눈동자를 보입니다. 청렴하고, 큰 포부를 가지며, 주변에 대한 선망도 높은 편입니다.',
      celebrities: '수지, 수애, 허지웅',
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
    if (!selectedImage || !isModelReady) {
      alert('모델이 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      const modelURL =
        selectedGender === 'male'
          ? 'https://teachablemachine.withgoogle.com/models/jdyVHXvhx/'
          : 'https://teachablemachine.withgoogle.com/models/jdyVHXvhx/';
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
          const eyeType = topPrediction.className;
          const eyeData = eyeTypeInfo[eyeType as keyof typeof eyeTypeInfo] || eyeTypeInfo['학눈'];

          setResult({
            eyeType,
            confidence: Math.round(topPrediction.probability * 100),
            description: eyeData.description,
            celebrities: eyeData.celebrities,
            message: `${eyeData.emoji} 당신의 눈은 ${eyeType}입니다!`,
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
    setShowShareResult(true);
  };

  const closeShareResult = () => {
    setShowShareResult(false);
  };

  if (!isModelReady) {
    return (
      <TestContainer title="👁️ AI 눈 관상 테스트" description="AI 모델을 로드하는 중입니다...">
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">AI 모델 로딩 중...</Typography>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  return (
    <TestContainer
      title="👁️ AI 눈 관상 테스트"
      description="AI가 당신의 눈을 분석해서 관상을 알려드려요!"
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
            눈이 잘 보이는 사진을 업로드해주세요
          </Typography>
          <Typography variant="body2" align="center" color="#6B7280">
            정면을 바라보고 눈이 선명하게 보이는 사진일수록 정확해요
          </Typography>

          <StyledImageUpload onClick={() => fileInputRef.current?.click()}>
            <Eye size={48} color="#6366F1" />
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
              {isLoading ? '관상 분석 중...' : '분석 시작'}
            </Button>
          </div>

          {isLoading && (
            <StyledLoadingAnimation>
              <div className="spinner" />
              <Typography variant="body1">AI가 당신의 눈을 자세히 분석 중입니다...</Typography>
              <Typography variant="caption" color="#6B7280">
                잠시만 기다려주세요 👁️
              </Typography>
            </StyledLoadingAnimation>
          )}
        </StyledTestStep>
      )}

      {step === 'result' && result && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            🎉 관상 분석 완료!
          </Typography>

          <StyledResultSection>
            <StyledResultCard
              color={eyeTypeInfo[result.eyeType as keyof typeof eyeTypeInfo]?.color || '#6366F1'}
            >
              <div className="emoji">
                {eyeTypeInfo[result.eyeType as keyof typeof eyeTypeInfo]?.emoji || '👁️'}
              </div>
              <Typography variant="h2" color="white">
                {result.eyeType}
              </Typography>
              <Typography variant="body1" color="">
                {result.description}
              </Typography>
              {/* <Typography variant="caption" color="rgba(255,255,255,0.8)">
                신뢰도: {result.confidence}%
              </Typography> */}
            </StyledResultCard>

            <StyledCelebSection>
              <Typography variant="h5" align="center">
                👑 같은 눈을 가진 유명인들
              </Typography>
              <StyledCelebCard>
                <Typography variant="body1">{result.celebrities}</Typography>
              </StyledCelebCard>
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

          {showShareResult && (
            <ShareResult
              testTitle="AI 눈 관상 테스트"
              result={result.eyeType}
              description={result.description}
              // confidence={result.confidence}
              userImage={selectedImage || undefined}
              backgroundColor={
                eyeTypeInfo[result.eyeType as keyof typeof eyeTypeInfo]?.color || '#6366F1'
              }
              emoji={eyeTypeInfo[result.eyeType as keyof typeof eyeTypeInfo]?.emoji || '👁️'}
              onClose={closeShareResult}
            />
          )}
        </StyledTestStep>
      )}
    </TestContainer>
  );
};

export default EyeTestPage;
