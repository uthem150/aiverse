import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock, Users } from 'lucide-react';
import {
  StyledTestListPage,
  StyledHeader,
  StyledFilters,
  StyledSearchBar,
  StyledFilterButton,
  StyledCategoryTabs,
  StyledCategoryTab,
  StyledTestGrid,
  StyledStatsBar,
  StyledEmptyState,
} from './TestListPage.style';
import Typography from '@/components/common/Typography/Typography';
import TestCard from '@/components/features/TestCard/TestCard';
import { testCategories } from '@/data/tests';
import type { TestItem } from '@/types/test';

const TestListPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'new' | 'time'>('popular');
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  // 모든 테스트 목록
  const allTests = useMemo(() => {
    return testCategories.flatMap(cat => cat.tests);
  }, []);

  // 필터링된 테스트들
  const filteredTests = useMemo(() => {
    let tests = allTests;

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      tests = tests.filter(test => test.category === selectedCategory);
    }

    // 검색 필터
    if (searchQuery) {
      tests = tests.filter(
        test =>
          test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          test.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 정렬
    switch (sortBy) {
      case 'popular':
        return tests.sort((a, b) => (b.participantCount || 0) - (a.participantCount || 0));
      case 'new':
        return tests.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return (b.participantCount || 0) - (a.participantCount || 0);
        });
      case 'time':
        return tests.sort((a, b) => a.estimatedTime - b.estimatedTime);
      default:
        return tests;
    }
  }, [allTests, selectedCategory, searchQuery, sortBy]);

  const handleTestClick = (testId: string) => {
    navigate(`/test/${testId}`);
  };

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    if (newCategory === 'all') {
      navigate('/tests');
    } else {
      navigate(`/tests/${newCategory}`);
    }
  };

  const totalParticipants = useMemo(() => {
    return filteredTests.reduce((sum, test) => sum + (test.participantCount || 0), 0);
  }, [filteredTests]);

  return (
    <StyledTestListPage>
      <StyledHeader>
        <Typography variant="h2" align="center">
          🧪 테스트 둘러보기
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          다양한 AI 테스트로 자신을 발견해보세요
        </Typography>
      </StyledHeader>

      <StyledFilters>
        <StyledSearchBar>
          <Search size={20} />
          <input
            type="text"
            placeholder="테스트 검색..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </StyledSearchBar>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <StyledFilterButton active={sortBy === 'popular'} onClick={() => setSortBy('popular')}>
            <TrendingUp size={16} />
            인기순
          </StyledFilterButton>
          <StyledFilterButton active={sortBy === 'new'} onClick={() => setSortBy('new')}>
            <Filter size={16} />
            최신순
          </StyledFilterButton>
          <StyledFilterButton active={sortBy === 'time'} onClick={() => setSortBy('time')}>
            <Clock size={16} />
            시간순
          </StyledFilterButton>
        </div>
      </StyledFilters>

      <StyledCategoryTabs>
        <StyledCategoryTab
          active={selectedCategory === 'all'}
          onClick={() => handleCategoryChange('all')}
        >
          전체
        </StyledCategoryTab>
        {testCategories.map(category => (
          <StyledCategoryTab
            key={category.id}
            active={selectedCategory === category.id}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.icon} {category.name}
          </StyledCategoryTab>
        ))}
      </StyledCategoryTabs>

      <StyledStatsBar>
        <div className="stat">
          <Typography variant="h5" color="#6366F1">
            {filteredTests.length}개
          </Typography>
          <Typography variant="caption" color="#6B7280">
            테스트
          </Typography>
        </div>
        <div className="stat">
          <Typography variant="h5" color="#8B5CF6">
            {Math.floor(totalParticipants / 10000)}만+
          </Typography>
          <Typography variant="caption" color="#6B7280">
            참여자
          </Typography>
        </div>
        <div className="stat">
          <Typography variant="h5" color="#06B6D4">
            {Math.round(
              filteredTests.reduce((sum, test) => sum + test.estimatedTime, 0) /
                filteredTests.length || 0
            )}
            분
          </Typography>
          <Typography variant="caption" color="#6B7280">
            평균 시간
          </Typography>
        </div>
      </StyledStatsBar>

      {filteredTests.length > 0 ? (
        <StyledTestGrid>
          {filteredTests.map(test => (
            <TestCard key={test.id} test={test} onClick={() => handleTestClick(test.id)} />
          ))}
        </StyledTestGrid>
      ) : (
        <StyledEmptyState>
          <Typography variant="h4">🔍 검색 결과가 없습니다</Typography>
          <Typography variant="body1" color="#6B7280">
            다른 키워드로 검색해보시거나 필터를 변경해보세요
          </Typography>
        </StyledEmptyState>
      )}
    </StyledTestListPage>
  );
};

export default TestListPage;
