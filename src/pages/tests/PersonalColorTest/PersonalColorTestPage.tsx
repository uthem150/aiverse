import { useState, useRef, useEffect } from 'react';
import { Camera, Upload, RotateCcw, Zap, Palette } from 'lucide-react';
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
  StyledColorPalette,
  StyledColorCard,
  StyledHashtagSection,
} from './PersonalColorTestPage.style';

interface PersonalColorResult {
  colorType: string;
  confidence: number;
  description: string;
  celebrities: string;
  hashtags: string;
  message: string;
}

const PersonalColorTestPage = () => {
  const [step, setStep] = useState<'upload' | 'analysis' | 'result'>('upload');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<PersonalColorResult | null>(null);
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

  const colorTypeInfo = {
    봄웜톤: {
      emoji: '🌸',
      color: '#FF6B8A',
      description:
        '파스텔 톤이 잘 어울리는 봄 웜톤! 선명하면서 예쁜 눈동자와 아름다운 머릿결을 가지고 있으며, 사랑스러우면서 부드러운 이미지로 주변 사람들과 이성에게 인기가 많은 편입니다.',
      celebrities: '수지, 박보영, 아이유, 정채연, 서현진',
      hashtags: '#발랄한 #귀여운 #산뜻한',
      colors: ['#FFE4E8', '#FFD4E4', '#FFC4D8', '#FFB4CC'],
    },
    여름쿨톤: {
      emoji: '🌊',
      color: '#4ECDC4',
      description:
        '청순함이 물씬 풍기는 여름 쿨톤! 깨끗한 피부와 얇고 부드러운 머릿결을 가지고 있으며, 청순하면서 차분한 이미지로 누구에게나 사랑받는 편입니다.',
      celebrities: '김연아, 태연, 김태리, 이유비, 이영애, 다현',
      hashtags: '#청순한 #시원한 #청량한',
      colors: ['#E8F8FF', '#D4F4FF', '#C4F0FF', '#B4ECFF'],
    },
    가을웜톤: {
      emoji: '🍂',
      color: '#D4A574',
      description:
        '부드럽고 따뜻한 분위기가 느껴지는 가을 웜톤! 따뜻한 눈빛이 느껴지는 예쁜 눈을 가지고 있으며, 다정하고 부드러운 이미지로 많은 사람들이 편하게 다가가고 신뢰하는 특징을 가지고 있습니다.',
      celebrities: '이성경, 공효진, 신민아, 박신혜, 정려원, 한효주',
      hashtags: '#차분한 #따뜻한 #부드러운',
      colors: ['#F4F0E8', '#E8DDD4', '#DCCAC4', '#D0B7B4'],
    },
    겨울쿨톤: {
      emoji: '❄️',
      color: '#1E3A8A',
      description:
        '분위기에서부터 멋짐이 풍기는 겨울 쿨톤! 흰 피부톤과 뚜렷한 이목구비를 가지고 있으며, 카리스마있고 세련된 이미지로 그 멋짐에 반한 많은 사람들의 인기를 가지는 특징을 가지고 있습니다.',
      celebrities: '카리나, 현아, 선미, 청하, 김혜수, 화사',
      hashtags: '#차가운 #섹시한 #매력적인',
      colors: ['#F0F4FF', '#E0E8FF', '#D0DCFF', '#C0D0FF'],
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
      const modelURL = 'https://teachablemachine.withgoogle.com/models/oUhDGTuyQ/';
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
          const colorType = topPrediction.className;
          const colorData =
            colorTypeInfo[colorType as keyof typeof colorTypeInfo] || colorTypeInfo['봄웜톤'];

          setResult({
            colorType,
            confidence: Math.round(topPrediction.probability * 100),
            description: colorData.description,
            celebrities: colorData.celebrities,
            hashtags: colorData.hashtags,
            message: `${colorData.emoji} 당신의 퍼스널 컬러는 ${colorType}입니다!`,
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
    if (result) {
      const text = `${result.message} (신뢰도 ${result.confidence}%)`;

      if (navigator.share) {
        navigator.share({
          title: 'AIverse 퍼스널 컬러 테스트',
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
      <TestContainer title="🎨 AI 퍼스널 컬러 테스트" description="AI 모델을 로드하는 중입니다...">
        <StyledLoadingAnimation>
          <div className="spinner" />
          <Typography variant="body1">AI 모델 로딩 중...</Typography>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  return (
    <TestContainer
      title="🎨 AI 퍼스널 컬러 테스트"
      description="AI가 당신에게 어울리는 퍼스널 컬러를 찾아드려요!"
      showShare={step === 'result'}
      onShare={shareResult}
    >
      {step === 'upload' && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            자연스러운 얼굴 사진을 업로드해주세요
          </Typography>
          <Typography variant="body2" align="center" color="#6B7280">
            자연광에서 촬영한 메이크업 없는 사진이 가장 정확해요
          </Typography>

          <StyledImageUpload onClick={() => fileInputRef.current?.click()}>
            <Palette size={48} color="#6366F1" />
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
              {isLoading ? '퍼스널 컬러 분석 중...' : '분석 시작'}
            </Button>
          </div>

          {isLoading && (
            <StyledLoadingAnimation>
              <div className="spinner" />
              <Typography variant="body1">AI가 당신의 퍼스널 컬러를 분석 중입니다...</Typography>
              <Typography variant="caption" color="#6B7280">
                잠시만 기다려주세요 🎨
              </Typography>
            </StyledLoadingAnimation>
          )}
        </StyledTestStep>
      )}

      {step === 'result' && result && (
        <StyledTestStep>
          <Typography variant="h4" align="center">
            🎉 퍼스널 컬러 분석 완료!
          </Typography>

          <StyledResultSection>
            <StyledResultCard
              color={
                colorTypeInfo[result.colorType as keyof typeof colorTypeInfo]?.color || '#6366F1'
              }
            >
              <div className="emoji">
                {colorTypeInfo[result.colorType as keyof typeof colorTypeInfo]?.emoji || '🎨'}
              </div>
              <Typography variant="h2" color="white">
                {result.colorType}
              </Typography>
              <Typography variant="body1" color="white">
                {result.description}
              </Typography>
              <Typography variant="caption" color="rgba(255,255,255,0.8)">
                신뢰도: {result.confidence}%
              </Typography>
            </StyledResultCard>

            <StyledColorPalette>
              <Typography variant="h6" align="center">
                💄 추천 컬러 팔레트
              </Typography>
              <div className="color-grid">
                {colorTypeInfo[result.colorType as keyof typeof colorTypeInfo]?.colors.map(
                  (color, index) => (
                    <StyledColorCard key={index} color={color} />
                  )
                )}
              </div>
            </StyledColorPalette>

            <StyledHashtagSection>
              <Typography variant="h6" align="center">
                ✨ 당신의 이미지 키워드
              </Typography>
              <Typography variant="body1" color="#6366F1">
                {result.hashtags}
              </Typography>
            </StyledHashtagSection>

            <div style={{ textAlign: 'center', width: '100%' }}>
              <Typography variant="h6">👑 같은 퍼스널 컬러 연예인들</Typography>
              <Typography variant="body1" color="#6B7280">
                {result.celebrities}
              </Typography>
            </div>

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

export default PersonalColorTestPage;
