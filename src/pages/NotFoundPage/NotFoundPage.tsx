import { useNavigate } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import {
  StyledNotFoundPage,
  StyledErrorCode,
  StyledErrorMessage,
  StyledActions,
} from './NotFoundPage.style';
import Typography from '@/components/common/Typography/Typography';
import Button from '@/components/common/Button/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <StyledNotFoundPage>
      <StyledErrorCode>404</StyledErrorCode>

      <StyledErrorMessage>
        <Typography variant="h2" align="center">
          🤖 페이지를 찾을 수 없습니다
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </Typography>
        <Typography variant="body2" align="center" color="#6B7280">
          AIverse에서 다른 흥미로운 테스트들을 만나보세요!
        </Typography>
      </StyledErrorMessage>

      <StyledActions>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          이전 페이지
        </Button>
        <Button variant="primary" onClick={() => navigate('/')}>
          <Home size={20} />
          홈으로 가기
        </Button>
        <Button variant="outlined" onClick={() => navigate('/tests')}>
          <Search size={20} />
          테스트 둘러보기
        </Button>
      </StyledActions>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
