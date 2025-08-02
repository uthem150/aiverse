import { useState, useRef, useEffect } from 'react';
import { RotateCcw, Zap, Crown } from 'lucide-react';
import TestContainer from '@/components/common/TestContainer/TestContainer';
import Button from '@/components/common/Button/Button';
import Typography from '@/components/common/Typography/Typography';
import AILibraryLoader from '@/utils/aiLibraryLoader';
import {
  StyledTestStep,
  StyledImageUpload,
  StyledImagePreview,
  StyledResultSection,
  StyledResultCard,
  StyledLoadingAnimation,
  StyledHouseInfo,
  StyledMembersList,
} from './HogwartsTestPage.style';
import ShareResult from '@/components/common/ShareResult/ShareResult';

interface HogwartsResult {
  house: string;
  confidence: number;
  description: string;
  members: string;
  message: string;
}

const HogwartsTestPage = () => {
  const [step, setStep] = useState<'upload' | 'analysis' | 'result'>('upload');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<HogwartsResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState('AI 라이브러리 로딩 중...');
  const [showShareResult, setShowShareResult] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isMountedRef = useRef(true);

  // AI 라이브러리 로딩
  useEffect(() => {
    let cancel = false;
    const loadLibraries = async () => {
      try {
        const loader = AILibraryLoader.getInstance();
        setLoadingStep('TensorFlow.js 로딩 중...');
        await loader.loadTensorFlow();
        if (cancel || !isMountedRef.current) return;

        setLoadingStep('Teachable Machine 로딩 중...');
        await loader.loadTeachableMachine();
        if (cancel || !isMountedRef.current) return;

        if (loader.isTeachableMachineReady()) {
          setIsModelReady(true);
        } else {
          throw new Error('AI 라이브러리 초기화 실패');
        }
      } catch (e) {
        setModelError(e instanceof Error ? e.message : '알 수 없는 오류');
        setIsModelReady(false);
      }
    };
    loadLibraries();
    return () => {
      cancel = true;
    };
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const houseInfo = {
    그리핀도르: {
      emoji: '🦁',
      color: '#C41E3A',
      bgColor: '#FFE4E1',
      description: '"그 이름에 걸맞은 용기를 보여주는 아이들은 누구나 다 가르치도록 하세"',
      members: '해리포터, 론 위즐리, 헤르미온느, 덤블도어, 맥고나걸, 네빌',
      traits: '용기, 기사도, 대담함',
    },
    슬리데린: {
      emoji: '🐍',
      color: '#2A5D31',
      bgColor: '#E8F5E8',
      description: '"가장 순수한 혈통을 지닌 아이들만 가르치도록 하세"',
      members: '스네이프, 말포이, 벨라트릭스 레스트레인지, 볼드모트',
      traits: '야망, 교활함, 리더십',
    },
    레번클로: {
      emoji: '🦅',
      color: '#1F4E79',
      bgColor: '#E1F0FF',
      description: '"가장 똑똑한 아이들만 가르치도록 하세"',
      members: '루나 러브굿, 초 챙, 플리트윅, 파드마 패틸',
      traits: '지혜, 학습, 재치',
    },
    후플푸프: {
      emoji: '🦡',
      color: '#FFCC00',
      bgColor: '#FFF8E1',
      description: '"나는 그 아이들을 똑같이 가르칠걸세"',
      members: '뉴트 스캐맨더, 케드릭 디고리, 토니 노트, 해나 애벗',
      traits: '성실함, 인내, 충성심',
    },
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
      const modelURL = 'https://teachablemachine.withgoogle.com/models/ryKiwHvb7/';
      const model = await window.tmImage.load(modelURL + 'model.json', modelURL + 'metadata.json');

      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = async () => {
        try {
          const predictions = await model.predict(img);
          const sorted = predictions.sort((a: any, b: any) => b.probability - a.probability);
          const top = sorted[0];
          const house = top.className;
          const info = houseInfo[house as keyof typeof houseInfo] || houseInfo['그리핀도르'];

          if (isMountedRef.current) {
            setResult({
              house,
              confidence: Math.round(top.probability * 100),
              description: info.description,
              members: info.members,
              message: `${info.emoji} 당신은 ${house} 기숙사입니다!`,
            });
            setStep('result');
          }
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
    setStep('upload');
    setSelectedImage(null);
    setResult(null);
    setIsLoading(false);
  };

  const shareResult = () => setShowShareResult(true);
  const closeShareResult = () => setShowShareResult(false);

  if (modelError) {
    return (
      <TestContainer title="🏰 AI 호그와트 기숙사 테스트" description="모델 로딩 실패">
        <StyledLoadingAnimation>
          <div className="error-icon" style={{ fontSize: '48px', color: '#EF4444' }}>
            ⚠️
          </div>
          <Typography variant="h5" color="#EF4444">
            AI 로딩 오류
          </Typography>
          <Typography variant="body2" color="#6B7280">
            {modelError}
          </Typography>
          <Button variant="primary" onClick={() => window.location.reload()}>
            새로고침
          </Button>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  if (!isModelReady) {
    return (
      <TestContainer
        title="🏰 AI 호그와트 기숙사 테스트"
        description="AI 모델을 로드하는 중입니다..."
      >
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">{loadingStep}</Typography>
          <Typography variant="caption" color="#6B7280">
            잠시만 기다려주세요 🎩
          </Typography>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  return (
    <TestContainer
      title="🏰 AI 호그와트 기숙사 테스트"
      description="AI가 당신에게 어울리는 호그와트 기숙사를 배정해드려요!"
      showShare={step === 'result'}
      onShare={shareResult}
    >
      {step === 'upload' && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            얼굴 사진을 업로드해주세요
          </Typography>
          <Typography variant="body2" align="center" color="#6B7280">
            마법사의 기질을 분석하여 가장 어울리는 기숙사를 찾아드려요
          </Typography>

          <StyledImageUpload onClick={() => fileInputRef.current?.click()}>
            <Crown size={48} color="#6366F1" />
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
              <RotateCcw size={16} /> 다시 선택
            </Button>
            <Button
              variant="primary"
              onClick={analyzeImage}
              loading={isLoading}
              disabled={isLoading}
            >
              <Zap size={16} /> {isLoading ? '마법사 기질 분석 중...' : '분석 시작'}
            </Button>
          </div>

          {isLoading && (
            <StyledLoadingAnimation>
              <div className="spinner" />
              <Typography variant="body1">분류모자가 당신을 분석 중입니다...</Typography>
              <Typography variant="caption" color="#6B7280">
                잠시만 기다려주세요 🎩
              </Typography>
            </StyledLoadingAnimation>
          )}
        </StyledTestStep>
      )}

      {step === 'result' && result && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            🎩 분류모자의 판정!
          </Typography>

          <StyledResultSection>
            <StyledResultCard
              color={houseInfo[result.house as keyof typeof houseInfo]?.color || '#6366F1'}
              bgColor={houseInfo[result.house as keyof typeof houseInfo]?.bgColor || '#F0F4FF'}
            >
              <div className="emoji">
                {houseInfo[result.house as keyof typeof houseInfo]?.emoji || '🏰'}
              </div>
              <Typography variant="h2" color="white">
                {result.house}
              </Typography>
              <Typography variant="body1" color="white">
                {result.description}
              </Typography>
              {/* <Typography variant="caption" color="rgba(255,255,255,0.8)">
                신뢰도: {result.confidence}%
              </Typography> */}
            </StyledResultCard>

            <StyledHouseInfo
              bgColor={houseInfo[result.house as keyof typeof houseInfo]?.bgColor || '#F0F4FF'}
            >
              <Typography variant="h6" align="center">
                🏠 {result.house}의 특징
              </Typography>
              <Typography variant="body1" align="center">
                {houseInfo[result.house as keyof typeof houseInfo]?.traits || '마법사의 기질'}
              </Typography>
            </StyledHouseInfo>

            <StyledMembersList>
              <Typography variant="h6" align="center">
                🧙‍♂️ 같은 기숙사 동료들
              </Typography>
              <Typography variant="body1" color="#6B7280">
                {result.members}
              </Typography>
            </StyledMembersList>

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
              testTitle="AI 호그와트 기숙사 테스트"
              result={result.house}
              description={result.message}
              // confidence={result.confidence}
              userImage={selectedImage || undefined}
              backgroundColor={
                houseInfo[result.house as keyof typeof houseInfo]?.color || '#6366F1'
              }
              emoji={houseInfo[result.house as keyof typeof houseInfo]?.emoji || '🏰'}
              onClose={closeShareResult}
            />
          )}
        </StyledTestStep>
      )}
    </TestContainer>
  );
};

export default HogwartsTestPage;
