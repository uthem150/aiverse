// src/components/common/ShareResult/ShareResult.tsx
import { useState, useEffect } from 'react';
import { Share2, Download, Copy, MessageCircle, X, Loader, Gamepad2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  StyledShareResult,
  StyledShareButton,
  StyledShareGrid,
  StyledImagePreview,
  StyledHeader,
  StyledCloseButton,
  StyledLoadingOverlay,
} from './ShareResult.style';
import Typography from '@/components/common/Typography/Typography';
import { generateResultImage } from '@/utils/canvasImageGenerator';
import { getTestMeta } from '@/data/testMeta';
import { trackImageGeneration, trackTestShare } from '@/utils/analytics';

interface ShareResultProps {
  testTitle: string;
  result: string;
  description: string;
  confidence?: number;
  userImage?: string;
  backgroundColor?: string;
  emoji?: string;
  onClose: () => void;
}

const ShareResult = ({
  testTitle,
  result,
  description,
  confidence,
  userImage,
  backgroundColor = '#6366F1',
  emoji = '✨',
  onClose,
}: ShareResultProps) => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 페이지에서 테스트 ID 추출
  const getTestIdFromPath = () => {
    const pathSegments = location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  };

  // 컴포넌트가 마운트되면 자동으로 이미지 생성
  useEffect(() => {
    generateImage();
  }, []);

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      const imageDataUrl = await generateResultImage({
        testTitle,
        result,
        description,
        confidence,
        userImage,
        backgroundColor,
        emoji,
      });
      setGeneratedImage(imageDataUrl);

      // 이미지 생성 추적
      trackImageGeneration(testTitle.toLowerCase().replace(/\s+/g, '-'));
    } catch (error) {
      console.error('이미지 생성 실패:', error);
      // 에러 발생시에도 버튼들은 표시되도록
    } finally {
      setIsGenerating(false);
    }
  };

  const shareToSocial = async (platform: 'kakao' | 'facebook' | 'twitter') => {
    // 공유 추적
    trackTestShare(testTitle.toLowerCase().replace(/\s+/g, '-'), platform);

    const testId = getTestIdFromPath();
    const meta = getTestMeta(testId);
    const shareUrl = window.location.href;

    // 더 매력적인 공유 텍스트 구성
    const shareText = `${meta.ogTitle || testTitle} - ${result}\n\n${meta.ogDescription || description}`;

    switch (platform) {
      case 'kakao':
        console.log('📱 카카오톡 공유 시도');

        // 메타 태그 기반 카카오톡 공유
        if (window.Kakao && window.Kakao.Share) {
          try {
            console.log('🔥 카카오톡 공유 시도 (메타 태그 기반)');

            // 현재 페이지의 메타 태그 정보 수집
            const ogTitle =
              document.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
              meta.ogTitle ||
              testTitle;
            const ogDescription =
              document.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
              meta.ogDescription ||
              description;
            const ogImage =
              document.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
              generatedImage ||
              'https://aiverse-phi.vercel.app/images/aiverse-og-image.png';

            window.Kakao.Share.sendDefault({
              objectType: 'feed',
              content: {
                title: ogTitle,
                description: `${result} - ${ogDescription}`,
                imageUrl: ogImage,
                link: {
                  mobileWebUrl: shareUrl,
                  webUrl: shareUrl,
                },
              },
              buttons: [
                {
                  title: '나도 테스트하기',
                  link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                  },
                },
              ],
            });

            console.log('✅ 카카오톡 공유 성공 (메타 태그 기반)');
          } catch (error) {
            console.error('❌ 카카오톡 공유 실패:', error);
            fallbackShare(shareText, shareUrl);
          }
        }
        // 구버전 Link API 호환성 (혹시 모를 경우)
        else if (window.Kakao && window.Kakao.Link) {
          try {
            console.log('🔥 Link API 사용 (구버전)');
            window.Kakao.Link.sendDefault({
              objectType: 'feed',
              content: {
                title: meta.ogTitle || testTitle,
                description: `${result} - ${description}`,
                imageUrl:
                  generatedImage ||
                  `https://aiverse-phi.vercel.app/images/thumbnails/${testId}.png`,
                link: {
                  mobileWebUrl: shareUrl,
                  webUrl: shareUrl,
                },
              },
              buttons: [
                {
                  title: '나도 테스트하기',
                  link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                  },
                },
              ],
            });
            console.log('✅ 카카오톡 공유 성공 (Link API)');
          } catch (error) {
            console.error('❌ 카카오 공유 실패 (Link API):', error);
            fallbackShare(shareText, shareUrl);
          }
        } else {
          console.error('❌ 카카오 SDK 또는 Share/Link 객체 없음');
          fallbackShare(shareText, shareUrl);
        }
        break;

      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
          '_blank',
          'width=600,height=400'
        );
        break;

      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          '_blank',
          'width=600,height=400'
        );
        break;
    }
  };

  const fallbackShare = async (text: string, url: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: testTitle,
          text,
          url,
        });
      } catch (error) {
        console.log('공유 취소됨');
      }
    } else {
      await navigator.clipboard.writeText(`${text}\n\n${url}`);
      alert('결과가 복사되었습니다!');
    }
  };

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.download = `${testTitle.replace(/\s+/g, '-')}-${result.replace(/\s+/g, '-')}.png`;
      link.href = generatedImage;
      link.click();
    } else {
      alert('이미지가 아직 생성되지 않았습니다.');
    }
  };

  const copyToClipboard = async () => {
    const testId = getTestIdFromPath();
    const meta = getTestMeta(testId);
    const shareUrl = window.location.href;
    const text = `${meta.ogTitle || testTitle} - ${result}\n\n${description}\n\n${shareUrl}`;

    try {
      await navigator.clipboard.writeText(text);
      alert('결과가 복사되었습니다! 📋');
    } catch (error) {
      console.error('복사 실패:', error);
      alert('복사에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const goToOtherTests = () => {
    // 현재 테스트와 다른 테스트들을 추천
    // 우선 테스트 목록 페이지로 이동
    navigate('/tests');
    onClose(); // 공유 모달 닫기
  };

  return (
    <StyledShareResult>
      <StyledHeader>
        <Typography variant="h5">📤 결과 공유하기</Typography>
        <StyledCloseButton onClick={onClose}>
          <X size={24} />
        </StyledCloseButton>
      </StyledHeader>

      {/* 로딩 오버레이 */}
      {isGenerating && (
        <StyledLoadingOverlay>
          <Loader size={32} className="spinning" />
          <Typography variant="body2">이미지 생성 중...</Typography>
        </StyledLoadingOverlay>
      )}

      {/* 생성된 이미지 미리보기 */}
      {generatedImage && !isGenerating && (
        <StyledImagePreview>
          <img src={generatedImage} alt="생성된 결과 이미지" />
        </StyledImagePreview>
      )}

      {/* 공유 버튼들 */}
      <StyledShareGrid>
        <StyledShareButton onClick={() => shareToSocial('kakao')} disabled={isGenerating}>
          <MessageCircle size={20} />
          <Typography variant="button" responsive align="center">
            카카오톡
          </Typography>
        </StyledShareButton>

        <StyledShareButton onClick={() => shareToSocial('facebook')} disabled={isGenerating}>
          <Share2 size={20} />
          <Typography variant="button" responsive align="center">
            페이스북
          </Typography>
        </StyledShareButton>

        <StyledShareButton onClick={() => shareToSocial('twitter')} disabled={isGenerating}>
          <Share2 size={20} />
          <Typography variant="button" responsive align="center">
            트위터
          </Typography>
        </StyledShareButton>

        <StyledShareButton onClick={downloadImage} disabled={isGenerating || !generatedImage}>
          <Download size={20} />
          <Typography variant="button" responsive align="center">
            이미지 저장
          </Typography>
        </StyledShareButton>

        <StyledShareButton onClick={copyToClipboard} disabled={isGenerating}>
          <Copy size={20} />
          <Typography variant="button" responsive align="center">
            링크 복사
          </Typography>
        </StyledShareButton>

        <StyledShareButton onClick={goToOtherTests} disabled={isGenerating}>
          <Gamepad2 size={20} />
          <Typography variant="button" responsive align="center">
            다른 테스트
          </Typography>
        </StyledShareButton>
      </StyledShareGrid>
    </StyledShareResult>
  );
};

export default ShareResult;

// 카카오 SDK 타입 정의
declare global {
  interface Window {
    Kakao: any;
  }
}
