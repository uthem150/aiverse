import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock } from 'lucide-react';
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

type SortKey = 'popular' | 'new' | 'time';

const TestListPage = () => {
  // 1) 라우트 파라미터(예: /tests/:category)의 카테고리
  const { category: routeCategory } = useParams<{ category?: string }>();

  // 2) URL 쿼리스트링 객체
  const [searchParams, setSearchParams] = useSearchParams();

  // 3) 라우팅/네비게이션
  const navigate = useNavigate();

  // 4) 로컬 상태 (검색어/정렬/카테고리)
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('popular');
  const [selectedCategory, setSelectedCategory] = useState<string>(routeCategory || 'all');

  // 5) URL → 상태 초기 동기화 (+ 뒤로가기 등 URL 변동에도 대응)
  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    const catFromQuery = searchParams.get('cat') ?? '';
    const sort = (searchParams.get('sort') as SortKey) ?? 'popular';

    // 우선순위: 쿼리스트링 cat > 라우트 파라미터 > 'all'
    const nextCategory = catFromQuery || routeCategory || 'all';

    setSearchQuery(q);
    setSortBy(sort);
    setSelectedCategory(nextCategory);
  }, [routeCategory, searchParams]);

  // 6) 상태 → URL 동기화 (공유 가능한 검색 URL 생성)
  useEffect(() => {
    const next = new URLSearchParams();
    if (searchQuery) next.set('q', searchQuery);
    if (selectedCategory && selectedCategory !== 'all') next.set('cat', selectedCategory);
    if (sortBy !== 'popular') next.set('sort', sortBy);
    setSearchParams(next, { replace: true });
  }, [searchQuery, selectedCategory, sortBy, setSearchParams]);

  // 7) 모든 테스트 평탄화
  const allTests = useMemo(() => {
    return testCategories.flatMap(cat => cat.tests);
  }, []);

  // 8) 필터링/정렬
  const filteredTests = useMemo(() => {
    let tests = allTests;

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      tests = tests.filter(test => test.category === selectedCategory);
    }

    // 검색어 필터
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      tests = tests.filter(
        test => test.title.toLowerCase().includes(q) || test.description.toLowerCase().includes(q)
      );
    }

    // 정렬 (원본 변형 방지 위해 사본 정렬)
    switch (sortBy) {
      case 'popular':
        return [...tests].sort((a, b) => (b.participantCount || 0) - (a.participantCount || 0));
      case 'new':
        return [...tests].sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return (b.participantCount || 0) - (a.participantCount || 0);
        });
      case 'time':
        return [...tests].sort((a, b) => a.estimatedTime - b.estimatedTime);
      default:
        return tests;
    }
  }, [allTests, selectedCategory, searchQuery, sortBy]);

  // 9) 카드 클릭 → 카테고리 따라 라우팅 분기
  const handleTestClick = (testId: string) => {
    const test = allTests.find(t => t.id === testId);
    if (test?.category === 'interactive-experience') {
      navigate(`/interactive/${testId}`);
    } else {
      navigate(`/test/${testId}`);
    }
  };

  // 10) 카테고리 탭 변경
  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);

    // 라우트 경로: all 은 /tests, 그 외는 /tests/:category
    const pathname = newCategory === 'all' ? '/tests' : `/tests/${newCategory}`;

    // 기존 쿼리(q, sort)를 최대한 보존(선택)
    const next = new URLSearchParams();
    if (searchQuery) next.set('q', searchQuery);
    if (newCategory !== 'all') next.set('cat', newCategory);
    if (sortBy !== 'popular') next.set('sort', sortBy);

    navigate({ pathname, search: next.toString() }, { replace: true });
  };

  // 11) 통계
  const totalParticipants = useMemo(
    () => filteredTests.reduce((sum, test) => sum + (test.participantCount || 0), 0),
    [filteredTests]
  );

  const avgMinutes = useMemo(() => {
    if (!filteredTests.length) return 0;
    const total = filteredTests.reduce((sum, t) => sum + (t.estimatedTime || 0), 0);
    return Math.round(total / filteredTests.length);
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
        {/* 검색창 */}
        <StyledSearchBar>
          <Search size={20} />
          <input
            type="text"
            placeholder="테스트 검색..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </StyledSearchBar>

        {/* 정렬 */}
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

      {/* 카테고리 탭 */}
      <StyledCategoryTabs>
        <StyledCategoryTab
          active={selectedCategory === 'all'}
          onClick={() => handleCategoryChange('all')}
        >
          전체
        </StyledCategoryTab>
        {testCategories.map(cat => (
          <StyledCategoryTab
            key={cat.id}
            active={selectedCategory === cat.id}
            onClick={() => handleCategoryChange(cat.id)}
          >
            {cat.icon} {cat.name}
          </StyledCategoryTab>
        ))}
      </StyledCategoryTabs>

      {/* 요약 통계 */}
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
            {avgMinutes}분
          </Typography>
          <Typography variant="caption" color="#6B7280">
            평균 시간
          </Typography>
        </div>
      </StyledStatsBar>

      {/* 결과 그리드 */}
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
