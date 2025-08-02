import { useState, useRef, useEffect } from 'react';
import { RotateCcw, Zap, Flower } from 'lucide-react';
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
  StyledGenderSelector,
  StyledGenderOption,
  StyledLoadingAnimation,
  StyledFlowerInfo,
  StyledCelebSection,
} from './FlowerTestPage.style';
import ShareResult from '@/components/common/ShareResult/ShareResult';

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
  const [modelError, setModelError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState('AI 라이브러리 로딩 중...');
  const [showShareResult, setShowShareResult] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isMountedRef = useRef(true);

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

  const flowerInfo = {
    장미: {
      emoji: '🌹',
      color: '#E91E63',
      description:
        '당신은 아름다움과 열정의 상징, 장미와 닮았습니다. 고혹적인 매력을 뿜어내는 당신의 존재는 시선을 단번에 사로잡죠. 강렬하고 화려한 아름다움 속에 숨겨진 섬세함은, 마치 장미의 겹겹이 쌓인 꽃잎처럼 다채로운 매력을 발산합니다. 당신의 뚜렷한 개성과 자신감은 주변 사람들에게 깊은 인상을 남기며, 사랑과 열정이라는 꽃말처럼 뜨거운 에너지를 전합니다.',
      celebrities: '제니(블랙핑크), 리사(블랙핑크), 아이린(레드벨벳), 강동원, 유승호',
      meaning: '사랑, 아름다움, 열정',
    },
    벚꽃: {
      emoji: '🌸',
      color: '#FFB6C1',
      description:
        '당신에게 어울리는 꽃은 순결하고 청초한 벚꽃입니다. 순백의 부드러운 꽃잎처럼 맑고 깨끗한 분위기를 지녔으며, 보는 이로 하여금 설렘을 자아냅니다. 꽃말인 ‘절세미인’처럼 자연스럽고 은은한 아름다움이 당신의 가장 큰 매력입니다. 마치 봄날의 벚꽃처럼 당신의 존재만으로도 주변이 환해지며, 찰나의 순간을 영원히 기억하게 만듭니다.',
      celebrities: '수지, 한효주, 정해인, 서강준',
      meaning: '순결, 절세미인, 인생의 아름다움',
    },
    나팔꽃: {
      emoji: '🎺',
      color: '#9C27B0',
      description:
        '신비롭고 매혹적인 나팔꽃처럼 당신은 자꾸만 기다려지는 사람입니다. 매력적인 보랏빛처럼 깊고 오묘한 분위기를 풍기며, 독특한 아름다움으로 사람들의 호기심을 자극하죠. 꽃말인 ‘기쁜 소식’처럼 당신의 등장은 언제나 반가움을 안겨주고, 당신과 함께하는 시간은 늘 즐거움으로 가득합니다. 당신의 신비로운 매력은 쉽게 잊히지 않는 깊은 여운을 남깁니다.',
      celebrities: '한예슬, 서예지, 한소희, 원빈, 이동욱',
      meaning: '기쁜 소식, 희망, 신비로움',
    },
    민들레: {
      emoji: '🌼',
      color: '#FFC107',
      description:
        '수수하면서도 따뜻한 민들레는 당신과 가장 잘 어울리는 꽃입니다. 화려하진 않지만, 누구에게나 편안함과 안정감을 주는 부드러운 매력을 지녔습니다. 꽃말인 ‘행복, 감사, 진심’처럼 당신의 따뜻한 마음과 진정성은 주변 사람들에게 큰 힘이 됩니다. 소박하지만 강인한 생명력처럼, 어떤 환경에서도 꿋꿋하게 자신의 행복을 찾아가는 당신의 모습은 많은 이들에게 귀감이 됩니다.',
      celebrities: '아이유, 김태리, 최우식, 박서준',
      meaning: '행복, 감사, 진심',
    },
    코스모스: {
      emoji: '🌺',
      color: '#FF5722',
      description:
        '가을을 알리는 꽃, 코스모스처럼 당신은 청순하고 순수한 매력을 지녔습니다. 바람에 한들거리는 여리여리한 모습처럼 부드럽고 섬세한 감성을 가졌죠. 꽃말인 ‘순정’처럼 풋풋하고 순수한 사랑을 떠올리게 하는 당신의 모습은 보는 이들의 마음을 정화시킵니다. 어떤 환경에서도 조화를 이루며 자신을 뽐내지 않는 겸손함이 당신을 더욱 빛나게 만듭니다.',
      celebrities: '서현진, 이영애, 태연(소녀시대), 지창욱, 박보검',
      meaning: '순정, 조화, 겸손',
    },
    튤립: {
      emoji: '🌷',
      color: '#FF6F00',
      description:
        '이색적인 모양과 부드러운 아름다움을 지닌 튤립은 당신과 완벽하게 어울립니다. 단아하고 세련된 분위기를 풍기며, 겉으로 드러나지 않는 깊은 매력을 가졌죠. 꽃말처럼 ‘사랑의 고백, 영원한 애정’이라는 의미를 담고 있는 튤립은, 당신이 누군가에게 소중한 마음을 전할 때 가장 좋은 꽃이 될 것입니다. 당신의 우아하고 기품 있는 아름다움은 많은 사람들의 마음을 사로잡습니다.',
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
      alert('모델이 아직 로드되지 않았습니다.');
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
          const sorted = predictions.sort((a: any, b: any) => b.probability - a.probability);
          const top = sorted[0];
          const flowerType = top.className;
          const info = flowerInfo[flowerType as keyof typeof flowerInfo] || flowerInfo['민들레'];

          if (isMountedRef.current) {
            setResult({
              flowerType,
              confidence: Math.round(top.probability * 100),
              description: info.description,
              celebrities: info.celebrities,
              meaning: info.meaning,
              message: `${info.emoji} 당신과 닮은 꽃은 ${flowerType}입니다!`,
            });
            setStep('result');
          }
        } catch {
          alert('분석 중 오류가 발생했습니다.');
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
      alert('모델 로드에 실패했습니다.');
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

  if (modelError) {
    return (
      <TestContainer title="🌸 AI 나와 닮은 꽃 찾기" description="모델 로딩 실패">
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
      <TestContainer title="🌸 AI 나와 닮은 꽃 찾기" description="AI 모델을 로드하는 중입니다...">
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">{loadingStep}</Typography>
          <Typography variant="caption" color="#6B7280">
            처음 방문 시 로딩에 시간이 걸릴 수 있어요 🌿
          </Typography>
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
      {/* 성별 선택 */}
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

      {/* 사진 업로드 */}
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

      {/* 분석 단계 */}
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
              <Zap size={16} /> {isLoading ? '꽃 분석 중...' : '분석 시작'}
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

      {/* 결과 보기 */}
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
              {/* <Typography variant="caption" color="rgba(255,255,255,0.8)">
                신뢰도: {result.confidence}%
              </Typography> */}
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

          {showShareResult && (
            <ShareResult
              testTitle="AI 나와 닮은 꽃 찾기"
              result={result.flowerType}
              description={result.message}
              // confidence={result.confidence}
              userImage={selectedImage || undefined}
              backgroundColor={
                flowerInfo[result.flowerType as keyof typeof flowerInfo]?.color || '#6366F1'
              }
              emoji={flowerInfo[result.flowerType as keyof typeof flowerInfo]?.emoji || '🌸'}
              onClose={closeShareResult}
            />
          )}
        </StyledTestStep>
      )}
    </TestContainer>
  );
};

export default FlowerTestPage;
