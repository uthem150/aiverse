import { Clock, Users, Star, Zap } from 'lucide-react';
import {
  StyledTestCard,
  StyledTestImage,
  StyledTestInfo,
  StyledTestMeta,
  StyledTestBadge,
  StyledTestStats,
} from './TestCard.style';
import Typography from '@/components/common/Typography/Typography';
import type { TestItem } from '@/types/test';

interface TestCardProps {
  test: TestItem;
  onClick?: () => void;
}

const TestCard = ({ test, onClick }: TestCardProps) => {
  const formatParticipantCount = (count: number) => {
    if (count >= 1000000) {
      return `${Math.floor(count / 100000) / 10}M`;
    }
    if (count >= 1000) {
      return `${Math.floor(count / 100) / 10}K`;
    }
    return count.toString();
  };

  return (
    <StyledTestCard onClick={onClick}>
      <StyledTestImage>
        <img src={test.thumbnail} alt={test.title} />
        {test.isNew && (
          <StyledTestBadge type="new">
            <Zap size={12} />
            NEW
          </StyledTestBadge>
        )}
        {test.isHot && (
          <StyledTestBadge type="hot">
            <Star size={12} />
            HOT
          </StyledTestBadge>
        )}
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

          {test.participantCount && (
            <StyledTestStats>
              <Users size={14} />
              <Typography variant="caption">
                {formatParticipantCount(test.participantCount)}명 참여
              </Typography>
            </StyledTestStats>
          )}
        </StyledTestMeta>
      </StyledTestInfo>
    </StyledTestCard>
  );
};

export default TestCard;
