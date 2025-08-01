import { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, Play, Square, RotateCcw, AlertCircle } from 'lucide-react';
import * as faceapi from 'face-api.js';
import TestContainer from '@/components/common/TestContainer/TestContainer';
import Button from '@/components/common/Button/Button';
import Typography from '@/components/common/Typography/Typography';
import {
  StyledTestStep,
  StyledVideoContainer,
  StyledVideo,
  StyledCanvas,
  StyledResultPanel,
  StyledEmotionCard,
  StyledEmotionBar,
  StyledControls,
  StyledLoadingAnimation,
  StyledStatsGrid,
  StyledStatItem,
  StyledErrorMessage,
  StyledSpinner,
  StyledQualitySelect,
  StyledButtonGroup,
  StyledEmotionList,
} from './FaceEmotionTestPage.style';

interface EmotionData {
  name: string;
  value: number;
  color: string;
  emoji: string;
}

interface FaceStats {
  age: number;
  gender: string;
  genderConfidence: number;
  faceCount: number;
}

const FaceEmotionTestPage = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [emotions, setEmotions] = useState<EmotionData[]>([]);
  const [faceStats, setFaceStats] = useState<FaceStats | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionQuality, setDetectionQuality] = useState<'high' | 'medium' | 'low'>('medium');

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isComponentMountedRef = useRef(true); // 컴포넌트 마운트 상태 추적

  // 감정별 색상과 이모지 정의
  const emotionConfig = {
    neutral: { color: '#6B7280', emoji: '😐', name: '평온함' },
    happy: { color: '#10B981', emoji: '😊', name: '기쁨' },
    sad: { color: '#3B82F6', emoji: '😢', name: '슬픔' },
    angry: { color: '#EF4444', emoji: '😠', name: '화남' },
    fearful: { color: '#8B5CF6', emoji: '😨', name: '두려움' },
    disgusted: { color: '#F59E0B', emoji: '🤢', name: '혐오' },
    surprised: { color: '#06B6D4', emoji: '😲', name: '놀람' },
  };

  // 품질 설정
  const qualitySettings = {
    high: { interval: 150, minConfidence: 0.3, inputSize: 416 },
    medium: { interval: 300, minConfidence: 0.5, inputSize: 320 },
    low: { interval: 500, minConfidence: 0.7, inputSize: 224 },
  };

  // 완전한 cleanup 함수
  const performCompleteCleanup = useCallback(() => {
    console.log('🧹 Performing complete cleanup...');

    // 감지 중지
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }

    // 카메라 스트림 완전히 중지
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
        console.log('📷 Camera track stopped:', track.kind);
      });
      streamRef.current = null;
    }

    // 비디오 요소 정리
    if (videoRef.current) {
      videoRef.current.srcObject = null;
      videoRef.current.load(); // 비디오 완전히 언로드
    }

    // 캔버스 정리
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }

    // 상태 초기화 (컴포넌트가 마운트된 경우에만)
    if (isComponentMountedRef.current) {
      setIsStreaming(false);
      setIsDetecting(false);
      setEmotions([]);
      setFaceStats(null);
    }

    console.log('✅ Cleanup completed');
  }, []);

  // 감지 중지 함수
  const stopDetection = useCallback(() => {
    console.log('⏹️ Stopping detection...');
    setIsDetecting(false);

    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
  }, []);

  // 카메라 중지 함수
  const stopCamera = useCallback(() => {
    console.log('📷 Stopping camera...');
    performCompleteCleanup();
  }, [performCompleteCleanup]);

  // AI 모델 로드
  useEffect(() => {
    let isCancelled = false;

    const loadModels = async () => {
      try {
        if (!window.tf) {
          throw new Error('TensorFlow.js가 로드되지 않았습니다.');
        }

        console.log('🤖 Loading AI models...');
        const MODEL_URL = '/models';

        // 순차 로드
        await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
        if (isCancelled) return;

        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        if (isCancelled) return;

        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        if (isCancelled) return;

        try {
          await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL);
        } catch {
          console.warn('⚠️ Age gender model failed - continuing without it');
        }

        if (!isCancelled && isComponentMountedRef.current) {
          console.log('✅ All models loaded successfully!');
          setIsModelLoaded(true);
          setModelError(null);
        }
      } catch (error) {
        if (!isCancelled && isComponentMountedRef.current) {
          console.error('❌ Model loading failed:', error);
          setModelError(error instanceof Error ? error.message : '모델 로드 실패');
          setIsModelLoaded(false);
        }
      }
    };

    const timer = setTimeout(() => {
      if (!isCancelled) {
        loadModels();
      }
    }, 1500);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []); // 의존성 배열 비움 - 한 번만 실행

  // 컴포넌트 언마운트 시 완전한 정리
  useEffect(() => {
    isComponentMountedRef.current = true;

    return () => {
      console.log('🚪 Component unmounting - cleaning up all resources...');
      isComponentMountedRef.current = false;
      performCompleteCleanup();
    };
  }, [performCompleteCleanup]);

  // 페이지 가시성 변경 시 정리 (브라우저 탭 변경, 뒤로가기 등)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log('📱 Page hidden - pausing detection...');
        stopDetection();
      }
    };

    const handleBeforeUnload = () => {
      console.log('🚪 Page unloading - cleaning up...');
      performCompleteCleanup();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);
    };
  }, [stopDetection, performCompleteCleanup]);

  // 카메라 시작
  const startCamera = useCallback(async () => {
    if (!isModelLoaded) {
      alert('AI 모델이 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    try {
      console.log('📷 Starting camera...');

      // 기존 스트림이 있다면 정리
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280, max: 1920 },
          height: { ideal: 720, max: 1080 },
          facingMode: 'user',
          frameRate: { ideal: 30 },
        },
      });

      // 컴포넌트가 여전히 마운트되어 있는지 확인
      if (!isComponentMountedRef.current) {
        mediaStream.getTracks().forEach(track => track.stop());
        return;
      }

      streamRef.current = mediaStream;

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setIsStreaming(true);
        console.log('✅ Camera started successfully');
      }
    } catch (error) {
      console.error('❌ Camera error:', error);

      // 저품질로 재시도
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user',
          },
        });

        if (!isComponentMountedRef.current) {
          mediaStream.getTracks().forEach(track => track.stop());
          return;
        }

        streamRef.current = mediaStream;

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setIsStreaming(true);
          console.log('✅ Camera started with lower quality');
        }
      } catch (fallbackError) {
        console.error('❌ Fallback camera failed:', fallbackError);
        alert('카메라 접근에 실패했습니다. 권한을 확인해주세요.');
      }
    }
  }, [isModelLoaded]);

  // 얼굴 감지 시작
  const startDetection = useCallback(() => {
    if (
      !videoRef.current ||
      !canvasRef.current ||
      !isModelLoaded ||
      !isComponentMountedRef.current
    ) {
      return;
    }

    console.log('🎯 Starting face detection...');
    setIsDetecting(true);

    const settings = qualitySettings[detectionQuality];

    const detectFaces = async () => {
      // 컴포넌트가 언마운트되었거나 감지가 중지되었으면 종료
      if (!isComponentMountedRef.current || !detectionIntervalRef.current) {
        return;
      }

      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (!video || !canvas || video.readyState !== 4) return;

      try {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        if (videoWidth === 0 || videoHeight === 0) return;

        // 캔버스 크기 조정
        if (canvas.width !== videoWidth || canvas.height !== videoHeight) {
          canvas.width = videoWidth;
          canvas.height = videoHeight;
          faceapi.matchDimensions(canvas, { width: videoWidth, height: videoHeight });
        }

        // 얼굴 감지
        const detections = await faceapi
          .detectAllFaces(
            video,
            new faceapi.SsdMobilenetv1Options({
              minConfidence: settings.minConfidence,
              maxResults: 3,
            })
          )
          .withFaceLandmarks()
          .withFaceExpressions();

        // 컴포넌트 상태 재확인
        if (!isComponentMountedRef.current) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (detections.length > 0) {
          const mainDetection = detections.reduce((prev, current) => {
            return prev.detection.box.width * prev.detection.box.height >
              current.detection.box.width * current.detection.box.height
              ? prev
              : current;
          });

          // 캔버스 그리기 (거울 효과)
          ctx.save();
          ctx.scale(-1, 1);
          ctx.translate(-canvas.width, 0);

          const box = mainDetection.detection.box;
          const confidence = Math.round(mainDetection.detection.score * 100);

          // 경계 상자
          ctx.strokeStyle = confidence > 70 ? '#10B981' : confidence > 50 ? '#F59E0B' : '#EF4444';
          ctx.lineWidth = 3;
          ctx.strokeRect(box.x, box.y, box.width, box.height);

          // 랜드마크
          if (mainDetection.landmarks) {
            ctx.fillStyle = '#06B6D4';
            mainDetection.landmarks.positions.forEach((point: any) => {
              ctx.beginPath();
              ctx.arc(point.x, point.y, 1.5, 0, 2 * Math.PI);
              ctx.fill();
            });
          }

          ctx.restore();

          // 텍스트 (정상 방향)
          ctx.font = 'bold 16px Arial';
          ctx.fillStyle = confidence > 70 ? '#10B981' : confidence > 50 ? '#F59E0B' : '#EF4444';
          ctx.fillText(`신뢰도: ${confidence}%`, 10, 30);

          // 감정 분석 및 상태 업데이트
          if (mainDetection.expressions && isComponentMountedRef.current) {
            const expressions = mainDetection.expressions;
            const emotionData: EmotionData[] = Object.entries(expressions).map(([name, value]) => {
              const config = emotionConfig[name as keyof typeof emotionConfig];
              return {
                name: config?.name || name,
                value: Math.round((value as number) * 100),
                color: config?.color || '#6B7280',
                emoji: config?.emoji || '😐',
              };
            });

            emotionData.sort((a, b) => b.value - a.value);
            setEmotions(emotionData);

            if (emotionData[0] && emotionData[0].value > 20) {
              ctx.font = 'bold 20px Arial';
              ctx.fillStyle = emotionData[0].color;
              ctx.fillText(
                `${emotionData[0].emoji} ${emotionData[0].name} ${emotionData[0].value}%`,
                10,
                60
              );
            }
          }
        } else {
          // 얼굴 없음
          if (isComponentMountedRef.current) {
            setEmotions([]);
            setFaceStats(null);
          }

          ctx.font = '16px Arial';
          ctx.fillStyle = '#EF4444';
          ctx.fillText('얼굴을 찾을 수 없습니다', 10, 30);
        }
      } catch (error) {
        console.error('Detection error:', error);
      }
    };

    // interval 설정
    detectionIntervalRef.current = setInterval(detectFaces, settings.interval);
  }, [isModelLoaded, detectionQuality]);

  // 비디오 로드 시 자동 감지 시작
  const handleVideoLoaded = useCallback(() => {
    if (isStreaming && !isDetecting && isModelLoaded && isComponentMountedRef.current) {
      setTimeout(startDetection, 1000);
    }
  }, [isStreaming, isDetecting, isModelLoaded, startDetection]);

  const shareResult = useCallback(() => {
    if (emotions.length > 0) {
      const topEmotion = emotions[0];
      const text = `AI 감정 분석 결과: ${topEmotion.emoji} ${topEmotion.name} ${topEmotion.value}%! 실시간 얼굴 감정 인식 테스트를 체험해보세요.`;

      if (navigator.share) {
        navigator.share({
          title: 'AIverse 실시간 감정 인식 테스트',
          text,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(`${text} ${window.location.href}`);
        alert('결과가 복사되었습니다!');
      }
    }
  }, [emotions]);

  if (modelError) {
    return (
      <TestContainer
        title="🎭 실시간 얼굴 감정 인식"
        description="AI 모델 로드 중 오류가 발생했습니다."
      >
        <StyledErrorMessage>
          <AlertCircle size={48} color="#EF4444" />
          <Typography variant="h5" color="#EF4444">
            모델 로드 실패
          </Typography>
          <Typography variant="body2" color="#6B7280">
            {modelError}
          </Typography>
          <Button variant="primary" onClick={() => window.location.reload()}>
            페이지 새로고침
          </Button>
        </StyledErrorMessage>
      </TestContainer>
    );
  }

  if (!isModelLoaded) {
    return (
      <TestContainer title="🎭 실시간 얼굴 감정 인식" description="AI 모델을 로드하는 중입니다...">
        <StyledLoadingAnimation>
          <StyledSpinner />
          <Typography variant="body1">AI 감정 인식 모델 로딩 중...</Typography>
          <Typography variant="caption" color="#6B7280">
            face-api.js 모델들을 로드하고 있습니다 🤖
          </Typography>
        </StyledLoadingAnimation>
      </TestContainer>
    );
  }

  return (
    <TestContainer
      title="🎭 실시간 얼굴 감정 인식"
      description="AI가 당신의 얼굴 표정을 분석해서 실시간으로 감정을 인식합니다!"
      showShare={emotions.length > 0}
      onShare={shareResult}
    >
      <StyledTestStep>
        {/* ───────────── 비디오 & 캔버스 ───────────── */}
        <StyledVideoContainer>
          <StyledVideo
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleVideoLoaded}
          />
          <StyledCanvas ref={canvasRef} />
        </StyledVideoContainer>

        {/* ───────────── 컨트롤 ───────────── */}
        <StyledControls>
          {!isStreaming ? (
            <Button variant="primary" size="large" onClick={startCamera}>
              <Camera size={20} />
              카메라 시작
            </Button>
          ) : (
            <StyledButtonGroup>
              {!isDetecting ? (
                <Button variant="primary" onClick={startDetection}>
                  <Play size={16} />
                  감정 인식 시작
                </Button>
              ) : (
                <Button variant="secondary" onClick={stopDetection}>
                  <Square size={16} />
                  감정 인식 중지
                </Button>
              )}

              <Button variant="outlined" onClick={stopCamera}>
                <RotateCcw size={16} />
                카메라 중지
              </Button>

              <StyledQualitySelect
                value={detectionQuality}
                onChange={e => setDetectionQuality(e.target.value as any)}
                disabled={isDetecting}
              >
                <option value="high">고품질 (느림)</option>
                <option value="medium">보통 (권장)</option>
                <option value="low">저품질 (빠름)</option>
              </StyledQualitySelect>
            </StyledButtonGroup>
          )}
        </StyledControls>

        {/* ───────────── 결과 패널 ───────────── */}
        {(emotions.length > 0 || faceStats) && (
          <StyledResultPanel>
            {faceStats && (
              <StyledStatsGrid>
                <StyledStatItem>
                  <Typography variant="h6" color="#6366F1">
                    {faceStats.age}세
                  </Typography>
                  <Typography variant="caption" color="#6B7280">
                    예상 나이
                  </Typography>
                </StyledStatItem>
                <StyledStatItem>
                  <Typography variant="h6" color="#8B5CF6">
                    {faceStats.gender === 'male'
                      ? '남성'
                      : faceStats.gender === 'female'
                        ? '여성'
                        : '알 수 없음'}
                  </Typography>
                  <Typography variant="caption" color="#6B7280">
                    {faceStats.genderConfidence > 0
                      ? `${faceStats.genderConfidence}% 확신`
                      : `감지된 얼굴: ${faceStats.faceCount}개`}
                  </Typography>
                </StyledStatItem>
              </StyledStatsGrid>
            )}

            {emotions.length > 0 && (
              <>
                <Typography variant="h5" align="center">
                  실시간 감정 분석
                </Typography>

                <StyledEmotionList>
                  {emotions.slice(0, 5).map((emotion, index) => (
                    <StyledEmotionCard key={emotion.name} isTop={index === 0}>
                      <div className="emotion-header">
                        <span className="emoji">{emotion.emoji}</span>
                        <Typography variant={index === 0 ? 'h6' : 'body2'}>
                          {emotion.name}
                        </Typography>
                      </div>
                      <StyledEmotionBar color={emotion.color} percentage={emotion.value}>
                        <div className="bar-fill" />
                        <Typography variant="caption">{emotion.value}%</Typography>
                      </StyledEmotionBar>
                    </StyledEmotionCard>
                  ))}
                </StyledEmotionList>
              </>
            )}
          </StyledResultPanel>
        )}

        {isDetecting && (
          <Typography variant="body2" align="center" color="#10B981">
            🎯 실시간 감정 인식 중... 카메라를 향해 다양한 표정을 지어보세요!
          </Typography>
        )}
      </StyledTestStep>
    </TestContainer>
  );
};

export default FaceEmotionTestPage;
