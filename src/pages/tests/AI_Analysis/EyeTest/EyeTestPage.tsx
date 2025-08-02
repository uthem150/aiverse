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
import AILibraryLoader from '@/utils/aiLibraryLoader';

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
  const [loadingStep, setLoadingStep] = useState('라이브러리 로딩 중...');
  const [modelError, setModelError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showShareResult, setShowShareResult] = useState(false);
  const isComponentMountedRef = useRef(true);

  const eyeTypeInfo = {
    봉황안: {
      emoji: '🦅',
      color: '#8B5CF6',
      description:
        "'불가능은 없다!' 봉황안은 눈 관상 중에서도 최고로 꼽히는 유형입니다. 눈이 길고 가늘며, 눈동자가 맑고 또렷해 고귀한 기품이 흐르는 것이 특징이죠. 지혜와 덕을 겸비하여 뛰어난 통찰력으로 세상을 읽고, 어떤 어려움도 극복해내는 강한 의지를 가졌습니다. 봉황안을 가진 사람은 큰 뜻을 품고 목표를 향해 굳건히 나아가며, 결국에는 모두의 존경을 받는 인물이 됩니다. 실제로 예로부터 봉황안은 제왕의 눈이라 불렸습니다.",
      celebrities: '부처님, 세종대왕, 이순신, 유승호, 소지섭, 마크 주커버그, 빌 게이츠, 워렌 버핏',
    },
    용안: {
      emoji: '🐉',
      color: '#6366F1',
      description:
        '봉황안과 더불어 최고의 관상으로 꼽히는 용안은, 마치 용의 눈처럼 위엄 있고 강렬한 기운을 발산합니다. 눈동자가 크고 흑백이 분명하며, 눈꼬리가 힘 있게 올라간 것이 특징입니다. 용안을 가진 사람은 타고난 리더십과 카리스마로 주변을 이끌며, 큰 조직이나 나라를 다스릴 기회를 얻습니다. 불의를 보면 참지 못하는 강직함과 시대를 꿰뚫는 혜안을 지녀, 많은 사람들의 존경과 신뢰를 받습니다.',
      celebrities: '김연아, 블랙핑크 제니, 트와이스 다현, 전지현, 이영애, 박서준',
    },
    호안: {
      emoji: '🐅',
      color: '#06B6D4',
      description:
        '호안(호랑이 눈)은 크고 둥근 눈매에 위아래 눈꺼풀이 두터워 강인하면서도 온화한 인상을 줍니다. 맹수의 왕인 호랑이처럼 용감하고 강직한 성격을 가졌으며, 한번 시작한 일은 끝까지 해내는 끈기와 추진력이 뛰어납니다. 정의감이 투철해 불의와 타협하지 않고, 리더로서 사람들을 이끄는 기질이 강합니다. 중년 이후 큰 재물과 명예를 얻어 풍족한 삶을 살 가능성이 높습니다.',
      celebrities: '강동원, 방탄소년단 진, 주원, 지연(티아라), 류준열, 김태리',
    },
    공작안: {
      emoji: '🦚',
      color: '#10B981',
      description:
        '화려하면서도 우아한 공작안은 아름다운 눈썹과 함께 매력적인 눈빛을 발산합니다. 총명하고 사리판단이 뛰어나 어떤 일을 하든 지혜롭게 해결합니다. 특히 예술적 감각이 뛰어나고, 주변 사람들에게 인기가 많아 좋은 배우자를 만나 화목한 가정을 이룰 가능성이 높습니다. 자신의 재능과 노력으로 가문을 일으키고 이름을 널리 알리게 될 운명을 타고났습니다.',
      celebrities: '한예슬, 임보라, 김민희, 아이린(레드벨벳)',
    },
    사자눈: {
      emoji: '🦁',
      color: '#F59E0B',
      description:
        '사자눈은 크고 시원한 눈매에 눈꼬리가 살짝 올라가 있어 듬직하고 호탕한 인상을 줍니다. 타고난 지혜와 용맹함으로 주변 사람들을 아우르는 강력한 리더십을 가졌습니다. 어떤 모임에서든 자연스럽게 중심이 되는 매력이 있으며, 젊은 나이에 일찍 출세하여 명성을 얻을 수 있습니다. 다만, 때로는 과한 자신감이 오만함으로 비춰질 수 있으니, 항상 겸손한 자세를 유지하는 것이 좋습니다.',
      celebrities: '고수, 장동건, 이병헌, 마동석, 최민수',
    },
    소눈: {
      emoji: '🐄',
      color: '#EF4444',
      description:
        '소눈은 눈의 가로 길이가 짧고 눈꺼풀이 두툼하여 순하고 인자한 느낌을 줍니다. 성품이 온화하고 인내심이 강해 어떤 어려움도 묵묵히 이겨내는 뚝심을 가졌습니다. 특히 성실하고 부지런한 성격 덕분에 젊은 시절부터 꾸준히 재물을 모아 큰 부를 이루게 됩니다. 건강한 체질로 장수하는 경향이 있으며, 오랜 시간 동안 가족과 함께 행복하고 풍요로운 삶을 누릴 수 있는 축복받은 눈입니다.',
      celebrities: '박보영, 트와이스 쯔위, 유재석, 강호동, 수현(악뮤)',
    },
    거북이눈: {
      emoji: '🐢',
      color: '#6B7280',
      description:
        '거북이눈은 둥근 눈매에 눈꺼풀이 여러 겹으로 겹쳐진 형태를 가리킵니다. 행동이 느긋하고 여유로운 성품을 지녔지만, 속으로는 깊은 지혜와 통찰력을 품고 있습니다. 겉으로 드러내지 않는 강인함으로 오랜 세월 건강하게 장수하며, 말년에는 평화롭고 행복한 삶을 영위합니다. 재물운이 좋고 주변 사람들에게 귀한 대접을 받으며, 꾸준히 노력하여 결국에는 큰 결실을 맺게 되는 눈입니다.',
      celebrities: '원빈, 장혁, 김종국, 이선균',
    },
    학눈: {
      emoji: '🦢',
      color: '#EC4899',
      description:
        '학눈은 눈이 길고 가늘며, 눈동자가 흑백이 뚜렷하여 맑고 고고한 느낌을 줍니다. 학처럼 청렴결백하고 깨끗한 성품을 지녔으며, 지적이고 학문적인 성취가 뛰어납니다. 높은 이상과 큰 포부를 가지고 있어 많은 사람들의 존경과 선망을 받습니다. 특히 학눈은 귀한 신분이나 지위를 얻을 가능성이 높아, 학자나 예술가, 고위 관료 등 정신적 가치를 추구하는 분야에서 큰 성공을 거둡니다.',
      celebrities: '수지, 수애, 허지웅, 김민희, 이나영',
    },
  };

  useEffect(() => {
    let isCancelled = false;

    const loadLibraries = async () => {
      try {
        setLoadingStep('TensorFlow.js 로딩 중...');
        const loader = AILibraryLoader.getInstance();
        await loader.loadTensorFlow();

        if (isCancelled || !isComponentMountedRef.current) return;

        setLoadingStep('Teachable Machine 로딩 중...');
        await loader.loadTeachableMachine();

        if (loader.isTeachableMachineReady()) {
          setIsModelReady(true);
          setModelError(null);
          setLoadingStep('완료!');
        } else {
          throw new Error('라이브러리는 로드되었으나 초기화되지 않았습니다.');
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : '라이브러리 로드 실패';
        if (!isCancelled) {
          setModelError(message);
          setIsModelReady(false);
        }
      }
    };

    const timer = setTimeout(() => {
      if (!isCancelled) loadLibraries();
    }, 500);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    isComponentMountedRef.current = true;
    return () => {
      isComponentMountedRef.current = false;
    };
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

  const shareResult = () => setShowShareResult(true);
  const closeShareResult = () => setShowShareResult(false);

  if (modelError) {
    return (
      <TestContainer title="👁️ AI 눈 관상 테스트" description="라이브러리 로드 중 오류 발생">
        <StyledLoadingAnimation>
          <div className="error-icon" style={{ fontSize: '48px', color: '#EF4444' }}>
            ⚠️
          </div>
          <Typography variant="h5" color="#EF4444">
            로드 실패
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
      <TestContainer title="👁️ AI 눈 관상 테스트" description="AI 모델을 로드하는 중입니다...">
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">{loadingStep}</Typography>
          <Typography variant="caption" color="#6B7280">
            처음 방문 시 시간이 다소 걸릴 수 있습니다 👁️
          </Typography>
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
