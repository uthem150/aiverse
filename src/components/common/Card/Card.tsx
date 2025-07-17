import type { ReactNode } from 'react';
import { StyledCard, StyledCardContent } from './Card.style';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, hover = false, padding = 'md', className, onClick }: CardProps) => {
  return (
    <StyledCard hover={hover} padding={padding} className={className} onClick={onClick}>
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
};

export default Card;
