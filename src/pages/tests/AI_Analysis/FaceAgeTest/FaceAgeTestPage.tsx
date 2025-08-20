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
import ShareResult from '@/components/common/ShareResult/ShareResult';

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
    if (age < 20) {
      return '싱그러운 10대의 풋풋함이 가득 느껴지네요! 마치 봄날의 새싹처럼 빛나고 있습니다. 🌱 앞으로 펼쳐질 무한한 가능성이 기대되는 나이예요.';
    }
    if (age < 25) {
      return '찬란한 20대 초반의 청춘이 넘실대고 있어요! ✨ 모든 것이 새로워 보이고, 가슴 설레는 도전들이 기다리고 있는 아름다운 시기입니다.';
    }
    if (age < 30) {
      return '20대의 절정, 가장 빛나는 순간을 보내고 있군요! 💫 자신만의 색깔을 찾아가는 시기이자, 활력과 열정이 넘치는 때입니다. 이 순간을 마음껏 즐기세요.';
    }
    if (age < 35) {
      return '30대 초반, 성숙함과 여유가 더해져 더욱 매력적인 모습이에요! 🌟 삶의 깊이를 알아가면서도 젊음의 에너지를 잃지 않는, 가장 멋진 시기입니다.';
    }
    if (age < 40) {
      return '30대 후반, 안정감과 우아함이 돋보이는 시기네요! 👑 수많은 경험을 통해 다져진 지혜와 자신감이 은은한 빛을 발하고 있습니다. 더욱 깊어진 당신의 매력이 느껴져요.';
    }
    if (age < 45) {
      return '40대 초반, 삶의 중심을 잡고 자신만의 길을 걷는 멋진 모습이에요! 🔥 깊이 있는 눈빛에서 느껴지는 여유와 노련함이 당신을 더욱 빛나게 만듭니다.';
    }
    if (age < 50) {
      return '40대 후반, 인생의 황금기를 맞이하고 있군요! ☀️ 젊음과 지혜를 모두 갖춘 당신의 모습에서 성숙한 아름다움이 느껴집니다. 삶의 진정한 풍요를 누리고 있는 때입니다.';
    }
    if (age < 60) {
      return '50대의 깊이와 연륜이 묻어나는 모습이에요! 🍂 수많은 이야기가 담긴 듯한 표정에서 삶의 지혜가 느껴집니다. 존경심을 불러일으키는 당신의 존재 자체가 아름답습니다.';
    }
    if (age < 70) {
      return '60대, 인생의 아름다운 결실을 맺는 시기네요! 🌅 당신의 온화한 미소에서 인생의 편안함과 너그러움이 느껴집니다. 지나온 삶의 모든 순간들이 지금의 당신을 만들었네요.';
    }
    if (age < 80) {
      return '70대, 인생의 지혜가 가득한 모습입니다! 🏞️ 따뜻하고 인자한 눈빛에서 삶을 초월한 깊은 통찰이 느껴집니다. 당신의 존재 자체가 모두에게 큰 울림을 줍니다.';
    }
    return '모든 세월을 품은 당신의 모습에 경의를 표합니다. 💎 삶의 모든 순간을 아름답게 살아온 당신은 살아있는 역사와 같습니다.';
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
              <Typography variant="h2" color="#efefff">
                {result.predictedAge}세
              </Typography>
              <Typography variant="body1">{result.message}</Typography>
              {/* <Typography variant="caption" color="#6B7280">
                신뢰도: {result.confidence}%
              </Typography> */}
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

          {showShareResult && (
            <ShareResult
              testTitle="AI 얼굴 나이 테스트"
              result={`${result.predictedAge}세`}
              description={result.message}
              // confidence={result.confidence}
              userImage={selectedImage || undefined}
              backgroundColor="#6366F1"
              emoji="📆"
              onClose={closeShareResult}
            />
          )}
        </StyledTestStep>
      )}
    </TestContainer>
  );
};

export default FaceAgeTestPage;
