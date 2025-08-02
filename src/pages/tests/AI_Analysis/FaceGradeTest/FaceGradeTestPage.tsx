import { useState, useRef, useEffect } from 'react';
import { Camera, RotateCcw, Zap, TrendingUp } from 'lucide-react';
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
  StyledGradeChart,
  StyledGradeBar,
  StyledGradeItem,
  StyledLoadingAnimation,
} from './FaceGradeTestPage.style';
import ShareResult from '@/components/common/ShareResult/ShareResult';
import { trackEvent, trackTestStart } from '@/utils/analytics';

interface GradeResult {
  className: string;
  probability: number;
}

interface AnalysisResult {
  topGrade: string;
  confidence: number;
  allGrades: GradeResult[];
  message: string;
  description: string;
}

const FaceGradeTestPage = () => {
  const [step, setStep] = useState<'gender' | 'upload' | 'analysis' | 'result'>('gender');
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [loadingStep, setLoadingStep] = useState('라이브러리 로딩 중...');
  const [modelError, setModelError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showShareResult, setShowShareResult] = useState(false);
  const isComponentMountedRef = useRef(true);

  const gradeInfo = {
    최상위천상계: {
      title: '최상위 천상계',
      color: '#8B5CF6',
      description:
        '당신의 외모는 그야말로 외모지상주의 최고의 수혜자입니다. 현실세계의 인간이라고는 믿기지 않는, 신이 빚어낸 듯한 완벽한 아름다움을 지녔습니다. 이목구비의 조화는 물론, 분위기까지 독보적이어서 어딜 가든 모든 이들의 시선을 사로잡습니다. 마치 신화 속 인물이 현실로 나온 듯한 당신의 존재는 그 자체로 하나의 예술 작품입니다.',
      emoji: '👑',
    },
    천상계: {
      title: '천상계',
      color: '#6366F1',
      description:
        '최상위 천상계와 함께 외모지상주의 최고 계층에 속합니다. 연예인 중에서도 가장 빛나는 스타들만이 이 등급에 오를 수 있죠. 어떤 각도에서 보아도 흠잡을 데 없는 완벽한 비주얼을 자랑하며, 독보적인 매력과 아우라로 대중을 매료시킵니다. 당신의 아름다움은 그 자체로 하나의 트렌드가 될 만큼 강력한 영향력을 가졌습니다.',
      emoji: '✨',
    },
    최상위인간계: {
      title: '최상위 인간계',
      color: '#06B6D4',
      description:
        '천상계를 제외하면 인간계의 최고 계급입니다. 길거리 캐스팅 제안을 수없이 받아봤을 법한, 누구나 한 번쯤 돌아보게 만드는 뛰어난 외모를 지녔습니다. 연예인이라고 해도 손색이 없을 만큼 뚜렷하고 매력적인 이목구비와 분위기를 가졌으며, 당신이 등장하는 곳은 어디든 런웨이가 됩니다.',
      emoji: '🌟',
    },
    상위권인간계: {
      title: '상위권 인간계',
      color: '#10B981',
      description:
        '당신은 매력적이라는 소리를 자주 듣는 상위권의 외모를 가졌습니다. 첫인상이 매우 좋고, 호감형이라는 평가를 많이 받습니다. 특유의 분위기와 개성으로 자신만의 매력을 확실하게 어필하며, 주변 사람들에게 긍정적인 에너지를 전달합니다. 타고난 매력에 꾸준한 자기관리까지 더해져 당신의 매력은 시간이 갈수록 더욱 빛을 발합니다.',
      emoji: '💫',
    },
    인간계: {
      title: '인간계',
      color: '#F59E0B',
      description:
        '당신은 대부분의 사람들이 속하는 평범한 인간계의 외모를 가졌습니다. 하지만 평범함 속에 특별함이 숨어있습니다. 어떤 스타일이든 무난하게 잘 소화하며, 친근하고 편안한 인상을 줍니다. 평균적인 외모이지만, 당신만의 개성과 매력을 살린다면 얼마든지 더 빛나는 존재가 될 수 있습니다. 이는 외모보다 당신의 내면이 더욱 중요한 가치를 지니고 있음을 의미합니다.',
      emoji: '😊',
    },
    하위권인간계: {
      title: '하위권 인간계',
      color: '#EF4444',
      description:
        '아쉽게도 평균보다 조금 떨어지는 외모라는 평가를 받을 수 있습니다. 하지만 외모는 절대적인 것이 아닙니다! 당신만의 장점을 찾아내고, 패션이나 자기계발을 통해 충분히 매력적인 사람으로 거듭날 수 있습니다. 긍정적인 마음과 노력은 그 어떤 외모보다 강력한 무기가 될 것입니다. 당신은 여전히 무궁무진한 가능성을 가진 소중한 존재입니다.',
      emoji: '🤔',
    },
    마계: {
      title: '마계',
      color: '#6B7280',
      description:
        '빛이 있다면 어둠이 있는 법, 당신은 균형의 상징입니다. 대중적인 미의 기준과는 조금 거리가 있을지 모르지만, 이는 오히려 당신만의 독특한 개성과 분위기를 만들어냅니다. 당신의 외모는 다른 사람들과 차별화되는 특별한 매력으로, 때로는 강렬한 인상을 남기기도 합니다. 개성을 사랑하고 존중하는 사람들이 당신의 매력을 발견하고 열광할 것입니다.',
      emoji: '🌙',
    },
  };

  // TensorFlow.js 및 Teachable Machine 로드
  useEffect(() => {
    let isCancelled = false;

    const loadModelsAndLibraries = async (): Promise<void> => {
      try {
        setLoadingStep('TensorFlow.js 로딩 중...');

        const loader = AILibraryLoader.getInstance();
        await loader.loadTensorFlow();

        if (isCancelled || !isComponentMountedRef.current) return;

        setLoadingStep('Teachable Machine 로딩 중...');
        await loader.loadTeachableMachine();

        if (isCancelled || !isComponentMountedRef.current) return;

        // 최종 확인
        if (loader.isTeachableMachineReady()) {
          console.log('✅ All libraries ready for Face Grade Test');
          setIsModelReady(true);
          setModelError(null);
          setLoadingStep('완료!');
        } else {
          throw new Error('라이브러리 로딩은 완료되었지만 초기화되지 않았습니다.');
        }
      } catch (error) {
        console.error('❌ Library loading failed:', error);
        if (!isCancelled && isComponentMountedRef.current) {
          const errorMessage = error instanceof Error ? error.message : '라이브러리 로드 실패';
          setModelError(errorMessage);
          setIsModelReady(false);
        }
      }
    };

    const timer = setTimeout(() => {
      if (!isCancelled) {
        loadModelsAndLibraries().catch(error => {
          console.error('Async loading error:', error);
          if (!isCancelled && isComponentMountedRef.current) {
            setModelError('라이브러리 로딩 중 예기치 못한 오류가 발생했습니다.');
          }
        });
      }
    }, 500);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    isComponentMountedRef.current = true;

    return () => {
      console.log('🚪 FaceGradeTest unmounting...');
      isComponentMountedRef.current = false;
    };
  }, []);

  const handleGenderSelect = (gender: 'male' | 'female'): void => {
    setSelectedGender(gender);
    setStep('upload');

    // 테스트 시작 추적
    trackTestStart('face-grade-test');
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
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

  const analyzeImage = async (): Promise<void> => {
    if (!selectedImage || !selectedGender || !isModelReady) {
      alert('모델이 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      // Teachable Machine 모델 URL
      const modelURL =
        selectedGender === 'male'
          ? 'https://teachablemachine.withgoogle.com/models/sWJFOW_Of/'
          : 'https://teachablemachine.withgoogle.com/models/g3pMiZBPT/';

      console.log('📦 Loading Teachable Machine model...');

      // 모델 로드
      const model = await window.tmImage.load(modelURL + 'model.json', modelURL + 'metadata.json');

      console.log('✅ Model loaded, starting prediction...');

      // 이미지 요소 생성 및 예측
      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = async (): Promise<void> => {
        try {
          const predictions = await model.predict(img);

          console.log('✅ Prediction completed:', predictions);

          // 예측 결과 정렬
          const sortedPredictions = predictions
            .map((pred: any) => ({
              className: pred.className,
              probability: pred.probability,
            }))
            .sort((a: GradeResult, b: GradeResult) => b.probability - a.probability);

          const topGrade = sortedPredictions[0];
          const gradeKey = topGrade.className.replace(/\s/g, '') as keyof typeof gradeInfo;
          const gradeData = gradeInfo[gradeKey] || gradeInfo['인간계'];

          if (isComponentMountedRef.current) {
            setResult({
              topGrade: gradeData.title,
              confidence: Math.round(topGrade.probability * 100),
              allGrades: sortedPredictions,
              message: gradeData.description,
              description: `AI가 분석한 결과 ${gradeData.emoji} ${gradeData.title}입니다!`,
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

      img.onerror = (): void => {
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

  const resetTest = (): void => {
    setStep('gender');
    setSelectedGender(null);
    setSelectedImage(null);
    setResult(null);
    setIsLoading(false);
  };

  const shareResult = (): void => {
    setShowShareResult(true);

    // 공유 모달 열기 추적
    trackEvent('share_modal_open', 'engagement', 'face-grade-test');
  };

  const closeShareResult = (): void => {
    setShowShareResult(false);
  };

  // 모델 로드 오류 시
  if (modelError) {
    return (
      <TestContainer
        title="✨ AI 외모 등급 테스트"
        description="라이브러리 로드 중 오류가 발생했습니다."
      >
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
            페이지 새로고침
          </Button>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  // 모델이 로드되지 않았을 때 로딩 표시
  if (!isModelReady) {
    return (
      <TestContainer title="✨ AI 외모 등급 테스트" description="AI 모델을 로드하는 중입니다...">
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">{loadingStep}</Typography>
          <Typography variant="caption" color="#6B7280">
            처음 방문 시 라이브러리 다운로드로 시간이 걸릴 수 있습니다 🤖
          </Typography>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  return (
    <TestContainer
      title="✨ AI 외모 등급 테스트"
      description="AI가 당신의 외모를 7단계로 분석해드려요!"
      showShare={step === 'result'}
      onShare={shareResult}
    >
      {/* Gender Selection */}
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

      {/* Image Upload */}
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

      {/* Analysis */}
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

      {/* Results */}
      {step === 'result' && result && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            🎉 분석 완료!
          </Typography>

          <StyledResultSection>
            <StyledResultCard>
              <Typography variant="h2" color="#efefff">
                {result.topGrade}
              </Typography>
              <Typography variant="body1">{result.message}</Typography>
              {/* <Typography variant="caption" color="#6B7280">
                신뢰도: {result.confidence}%
              </Typography> */}
            </StyledResultCard>

            <Typography variant="h5" align="center">
              <TrendingUp size={20} style={{ marginRight: '8px' }} />
              상세 분석 결과
            </Typography>

            <StyledGradeChart>
              {result.allGrades.map((grade, index) => {
                const gradeKey = grade.className.replace(/\s/g, '') as keyof typeof gradeInfo;
                const gradeData = gradeInfo[gradeKey] || gradeInfo['인간계'];
                const percentage = Math.round(grade.probability * 100);

                return (
                  <StyledGradeItem key={index}>
                    <div className="grade-info">
                      <span className="emoji">{gradeData.emoji}</span>
                      <Typography variant="body2">{gradeData.title}</Typography>
                    </div>
                    <StyledGradeBar color={gradeData.color} percentage={percentage}>
                      <div className="bar-fill" />
                      <Typography variant="caption" color="white">
                        {percentage}%
                      </Typography>
                    </StyledGradeBar>
                  </StyledGradeItem>
                );
              })}
            </StyledGradeChart>

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
          {/* 공유 결과 컴포넌트 - 조건부 렌더링 */}
          {showShareResult && (
            <ShareResult
              testTitle="AI 외모 등급 테스트"
              result={result.topGrade}
              description={result.message}
              // confidence={result.confidence}
              userImage={selectedImage || undefined}
              backgroundColor="#8B5CF6"
              emoji={
                gradeInfo[result.topGrade.replace(/\s/g, '') as keyof typeof gradeInfo]?.emoji ||
                '✨'
              }
              onClose={closeShareResult}
            />
          )}
        </StyledTestStep>
      )}
    </TestContainer>
  );
};

export default FaceGradeTestPage;
