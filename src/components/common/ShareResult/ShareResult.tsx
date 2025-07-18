import { useState, useEffect } from 'react';
import { Share2, Download, Copy, MessageCircle, X, Loader, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
    } catch (error) {
      console.error('이미지 생성 실패:', error);
      // 에러 발생시에도 버튼들은 표시되도록
    } finally {
      setIsGenerating(false);
    }
  };

  const shareToSocial = async (platform: 'kakao' | 'facebook' | 'twitter') => {
    const shareText = `${result} - ${description}`;
    const shareUrl = window.location.href;

    switch (platform) {
      case 'kakao':
        if (window.Kakao) {
          window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: testTitle,
              description: shareText,
              imageUrl: generatedImage || undefined,
              link: {
                mobileWebUrl: shareUrl,
                webUrl: shareUrl,
              },
            },
          });
        } else {
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
      await navigator.clipboard.writeText(`${text} ${url}`);
      alert('링크가 복사되었습니다!');
    }
  };

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.download = `${testTitle.replace(/\s+/g, '-')}-result.png`;
      link.href = generatedImage;
      link.click();
    } else {
      alert('이미지가 아직 생성되지 않았습니다.');
    }
  };

  const copyToClipboard = async () => {
    const text = `${result} - ${description} ${window.location.href}`;
    await navigator.clipboard.writeText(text);
    alert('결과가 복사되었습니다!');
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
          <span>카카오톡</span>
        </StyledShareButton>

        <StyledShareButton onClick={() => shareToSocial('facebook')} disabled={isGenerating}>
          <Share2 size={20} />
          <span>페이스북</span>
        </StyledShareButton>

        <StyledShareButton onClick={() => shareToSocial('twitter')} disabled={isGenerating}>
          <Share2 size={20} />
          <span>트위터</span>
        </StyledShareButton>

        <StyledShareButton onClick={downloadImage} disabled={isGenerating || !generatedImage}>
          <Download size={20} />
          <span>이미지 저장</span>
        </StyledShareButton>

        <StyledShareButton onClick={copyToClipboard} disabled={isGenerating}>
          <Copy size={20} />
          <span>링크 복사</span>
        </StyledShareButton>

        <StyledShareButton onClick={goToOtherTests} disabled={isGenerating}>
          <Gamepad2 size={20} />
          <span>다른 테스트</span>
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
