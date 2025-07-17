import styled from "@emotion/styled";

export const StyledHomePage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

export const StyledSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background.elevated};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.shadow.medium};
  transition: all
    ${({ theme }) =>
      `${theme.animation.duration.normal} ${theme.animation.easing.easeInOut}`};

  & > * {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadow.large};
  }
`;
