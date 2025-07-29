import { useState } from 'react';
import { Clock, Star, Zap } from 'lucide-react';
import {
  StyledTestCard,
  StyledTestImage,
  StyledTestInfo,
  StyledTestMeta,
  StyledTestBadge,
  StyledTestStats,
} from './TestCard.style';
import Typography from '@/components/common/Typography/Typography';
import DefaultThumbnail from '@/components/common/DefaultThumbnail/DefaultThumbnail';
import { testCategories } from '@/data/tests';
import type { TestItem } from '@/types/test';

interface TestCardProps {
  test: TestItem;
  onClick?: () => void;
}

const TestCard = ({ test, onClick }: TestCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // const formatParticipantCount = (count: number) => {
  //   if (count >= 1000000) {
  //     return `${Math.floor(count / 100000) / 10}M`;
  //   }
  //   if (count >= 1000) {
  //     return `${Math.floor(count / 100) / 10}K`;
  //   }
  //   return count.toString();
  // };

  // 테스트가 속한 카테고리 정보 찾기
  const category = testCategories.find(cat => cat.id === test.category);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const getBadgeByPriority = () => {
    // HOT이 더 중요하므로 우선 표시
    if (test.isHot) {
      return (
        <StyledTestBadge type="hot">
          <Star size={12} />
          {test.isNew ? 'HOT & NEW' : 'HOT'}
        </StyledTestBadge>
      );
    }

    if (test.isNew) {
      return (
        <StyledTestBadge type="new">
          <Zap size={12} />
          NEW
        </StyledTestBadge>
      );
    }

    return null;
  };

  // 썸네일이 없거나 이미지 로드 실패시 기본 썸네일 사용
  const shouldShowDefaultThumbnail = !test.thumbnail || imageError;

  return (
    <StyledTestCard onClick={onClick}>
      <StyledTestImage>
        {shouldShowDefaultThumbnail ? (
          <DefaultThumbnail test={test} category={category} />
        ) : (
          <img
            src={test.thumbnail}
            alt={test.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              display: imageLoading ? 'none' : 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}

        {/* 이미지 로딩 중일 때 기본 썸네일 표시 */}
        {imageLoading && test.thumbnail && !imageError && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <DefaultThumbnail test={test} category={category} />
          </div>
        )}

        {getBadgeByPriority()}
      </StyledTestImage>

      <StyledTestInfo>
        <Typography variant="h6">{test.title}</Typography>
        <Typography variant="body2" color="#6B7280">
          {test.description}
        </Typography>

        <StyledTestMeta>
          <StyledTestStats>
            <Clock size={14} />
            <Typography variant="caption">{test.estimatedTime}분</Typography>
          </StyledTestStats>

          {/* {test.participantCount && (
            <StyledTestStats>
              <Users size={14} />
              <Typography variant="caption">
                {formatParticipantCount(test.participantCount)}명 참여
              </Typography>
            </StyledTestStats>
          )} */}
        </StyledTestMeta>
      </StyledTestInfo>
    </StyledTestCard>
  );
};

export default TestCard;
