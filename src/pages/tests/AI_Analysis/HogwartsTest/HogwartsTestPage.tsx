import { useState, useRef, useEffect } from 'react';
import { RotateCcw, Zap, Crown } from 'lucide-react';
import TestContainer from '@/components/common/TestContainer/TestContainer';
import Button from '@/components/common/Button/Button';
import Typography from '@/components/common/Typography/Typography';
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

  const houseInfo = {
    그리핀도르: {
      emoji: '🦁',
      color: '#C41E3A',
      bgColor: '#FFE4E1',
      description:
        '"그 이름에 걸맞은 용기를 보여주는 아이들은 누구나 다 가르치도록 하세." 그리핀도르는 용감하고 대담한 자들을 위한 기숙사입니다. 불의를 보면 참지 못하는 강한 정의감과 기사도 정신을 중요하게 생각하죠. 어떤 위험에도 굴하지 않고 앞으로 나아가는 용기를 가진 당신은, 해리포터처럼 친구들을 위해 기꺼이 자신을 희생할 줄 아는 진정한 영웅입니다. 그리핀도르의 붉은색과 금색처럼, 당신의 열정과 용기는 항상 빛을 발합니다.',
      members:
        '해리포터, 론 위즐리, 헤르미온느 그레인저, 알버스 덤블도어, 미네르바 맥고나걸, 네빌 롱바텀',
      traits: '용기, 기사도 정신, 대담함, 정의감',
    },
    슬리데린: {
      emoji: '🐍',
      color: '#2A5D31',
      bgColor: '#E8F5E8',
      description:
        '"가장 순수한 혈통을 지닌 아이들만 가르치도록 하세." 슬리데린은 야망 있고 교활하며, 리더십이 뛰어난 자들을 위한 기숙사입니다. 단순히 악하다기보다는, 자신의 목표를 이루기 위해 수단과 방법을 가리지 않는 현실주의자들이죠. 탁월한 지능과 냉철한 판단력으로 위기를 기회로 바꾸는 능력을 가졌습니다. 말포이나 스네이프 교수처럼 강한 자존심과 함께 누구보다 뛰어난 통찰력을 보여주는 당신은 슬리데린의 진정한 후계자입니다. 은색과 초록색처럼 당신의 야망은 차갑지만 빛나는 성공을 가져다줄 것입니다.',
      members:
        '세베루스 스네이프, 드레이코 말포이, 벨라트릭스 레스트레인지, 볼드모트, 호레이스 슬러그혼',
      traits: '야망, 교활함, 리더십, 뛰어난 통찰력',
    },
    레번클로: {
      emoji: '🦅',
      color: '#1F4E79',
      bgColor: '#E1F0FF',
      description:
        '"가장 똑똑한 아이들만 가르치도록 하세." 레번클로는 지혜와 학문을 추구하는 자들을 위한 기숙사입니다. 논리적이고 창의적인 사고방식을 가졌으며, 새로운 것을 배우는 것에 대한 끝없는 열정을 가지고 있습니다. 엉뚱하지만 깊은 통찰력을 가진 루나 러브굿처럼, 당신은 세상의 이치를 꿰뚫어보는 특별한 재능을 지녔습니다. 푸른색과 청동색처럼, 당신의 지식과 지혜는 어떤 보물보다 값진 가치를 지닙니다.',
      members: '루나 러브굿, 초 챙, 필리우스 플리트윅, 파드마 패틸, 모우닝 머틀',
      traits: '지혜, 학습 욕구, 창의성, 재치',
    },
    후플푸프: {
      emoji: '🦡',
      color: '#FFCC00',
      bgColor: '#FFF8E1',
      description:
        '"나는 그 아이들을 똑같이 가르칠걸세." 후플푸프는 성실하고 인내심이 강한, 그리고 무엇보다 친구를 소중히 여기는 따뜻한 마음을 가진 사람들을 위한 기숙사입니다. 특별한 재능보다는 꾸준한 노력과 충성심을 더 높이 평가하죠. <신비한 동물사전>의 뉴트 스캐맨더처럼, 당신은 남을 배려하고 묵묵히 자신의 길을 가는 진정한 성실함을 갖췄습니다. 검은색과 노란색처럼 당신의 따뜻한 마음은 주변 사람들에게 항상 안정감을 줍니다.',
      members: '뉴트 스캐맨더, 케드릭 디고리, 토니 노트, 해나 애벗, 님파도라 통스',
      traits: '성실함, 인내심, 충성심, 정의로운',
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
          const sortedPredictions = predictions.sort(
            (a: any, b: any) => b.probability - a.probability
          );

          const topPrediction = sortedPredictions[0];
          const house = topPrediction.className;
          const houseData = houseInfo[house as keyof typeof houseInfo] || houseInfo['그리핀도르'];

          setResult({
            house,
            confidence: Math.round(topPrediction.probability * 100),
            description: houseData.description,
            members: houseData.members,
            message: `${houseData.emoji} 당신은 ${house} 기숙사입니다!`,
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
    setStep('upload');
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
      <TestContainer
        title="🏰 AI 호그와트 기숙사 테스트"
        description="AI 모델을 로드하는 중입니다..."
      >
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">AI 모델 로딩 중...</Typography>
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
              {isLoading ? '마법사 기질 분석 중...' : '분석 시작'}
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
