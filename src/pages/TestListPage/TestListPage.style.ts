import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledTestListPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
`;

export const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
`;

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.lg};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  min-width: 300px;

  input {
    flex: 1;
    border: none;
    background: none;
    outline: none;
    font-size: 1rem;
    color: ${({ theme }) => (theme as Theme).colors.text.primary};

    &::placeholder {
      color: ${({ theme }) => (theme as Theme).colors.text.tertiary};
    }
  }
`;

interface FilterButtonProps {
  active: boolean;
}

export const StyledFilterButton = styled.button<FilterButtonProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xs};
  padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  border: 1px solid
    ${({ active, theme }) =>
      active
        ? (theme as Theme).colors.interactive.primary
        : (theme as Theme).colors.border.primary};
  background-color: ${({ active, theme }) =>
    active
      ? (theme as Theme).colors.interactive.primary
      : (theme as Theme).colors.background.elevated};
  color: ${({ active, theme }) =>
    active ? (theme as Theme).colors.text.inverse : (theme as Theme).colors.text.primary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ active, theme }) =>
      active
        ? (theme as Theme).colors.interactive.primaryHover
        : (theme as Theme).colors.interactive.secondaryHover};
  }
`;

export const StyledCategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => (theme as Theme).spacing.xs};
  overflow: visible;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => (theme as Theme).colors.border.secondary};
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  }
`;

interface CategoryTabProps {
  active: boolean;
}

export const StyledCategoryTab = styled.button<CategoryTabProps>`
  padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.lg}`};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  border: none;
  background-color: ${({ active, theme }) =>
    active
      ? (theme as Theme).colors.interactive.primary
      : (theme as Theme).colors.background.elevated};
  color: ${({ active, theme }) =>
    active ? (theme as Theme).colors.text.inverse : (theme as Theme).colors.text.primary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  white-space: nowrap;
  font-weight: ${({ active }) => (active ? 600 : 400)};

  &:hover {
    background-color: ${({ active, theme }) =>
      active
        ? (theme as Theme).colors.interactive.primaryHover
        : (theme as Theme).colors.interactive.secondaryHover};
  }
`;

export const StyledStatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => (theme as Theme).spacing.xs};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => (theme as Theme).spacing.md};
  }
`;

export const StyledTestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => (theme as Theme).spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing['4xl']};
  text-align: center;
`;
