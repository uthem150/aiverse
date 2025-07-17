import type { ReactNode } from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  StyledTestContainer,
  StyledTestHeader,
  StyledTestContent,
  StyledBackButton,
  StyledShareButton,
  StyledTestActions,
} from './TestContainer.style';
import Typography from '@/components/common/Typography/Typography';

interface TestContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
  showShare?: boolean;
  onShare?: () => void;
}

const TestContainer = ({
  title,
  description,
  children,
  showShare = false,
  onShare,
}: TestContainerProps) => {
  const navigate = useNavigate();

  return (
    <StyledTestContainer>
      <StyledTestHeader>
        <StyledTestActions>
          <StyledBackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </StyledBackButton>

          {showShare && (
            <StyledShareButton onClick={onShare}>
              <Share2 size={20} />
            </StyledShareButton>
          )}
        </StyledTestActions>

        <Typography variant="h2" align="center">
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" align="center" color="#6B7280">
            {description}
          </Typography>
        )}
      </StyledTestHeader>

      <StyledTestContent>{children}</StyledTestContent>
    </StyledTestContainer>
  );
};

export default TestContainer;
