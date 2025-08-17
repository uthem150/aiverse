// SplitText.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface SplitTextProps {
  text: string;
  className?: string;

  // timing / motion
  delay?: number; // ms between pieces
  duration?: number; // sec per piece
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;

  // viewport trigger
  threshold?: number; // 0~1
  rootMargin?: string; // e.g. "-100px"
  textAlign?: React.CSSProperties['textAlign'];

  // typography (Tailwind 없이 크게)
  fontSize?: React.CSSProperties['fontSize'];
  lineHeight?: React.CSSProperties['lineHeight'];
  fontWeight?: React.CSSProperties['fontWeight'];
  style?: React.CSSProperties;
  inheritTypography?: boolean; // 내부 span에 inherit 강제 (기본 true)

  // loop options (선택)
  loop?: boolean; // true면 무한반복
  repeat?: number; // 특정 횟수 반복(기본 0). loop가 true면 -1로 덮음
  yoyo?: boolean; // 왕복
  repeatDelay?: number; // 초 단위
  repeatRefresh?: boolean; // 반복마다 from 상태 재평가
  pauseWhenOffscreen?: boolean; // 화면 벗어나면 자동 일시정지 (기본 true)
  once?: boolean; // 트리거 1회만 (반복 없을 때 기본 true)

  // gradient (선택) — 전체 텍스트 기준 연속 매핑
  /** 예: 'linear-gradient(90deg,#6aa8ff 0%, #8e6cff 50%, #ff7ab9 100%)' */
  gradient?: string;

  onLetterAnimationComplete?: () => void;
  onRepeat?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',

  // typography
  fontSize,
  lineHeight,
  fontWeight,
  style,
  inheritTypography = true,

  // loop
  loop = false,
  repeat,
  yoyo = false,
  repeatDelay = 0,
  repeatRefresh = false,
  pauseWhenOffscreen = true,
  once,

  // gradient
  gradient,

  onLetterAnimationComplete,
  onRepeat,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    // SSR 가드
    if (typeof window === 'undefined' || !textRef.current || !text) return;

    const el = textRef.current;

    // lines absolute 옵션
    const absoluteLines = splitType === 'lines';
    if (absoluteLines) el.style.position = 'relative';

    let splitter: GSAPSplitText;
    try {
      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: 'split-line',
      });
    } catch (error) {
      console.error('Failed to create SplitText:', error);
      return;
    }

    let targets: Element[];
    switch (splitType) {
      case 'lines':
        targets = splitter.lines;
        break;
      case 'words':
        targets = splitter.words;
        break;
      case 'chars':
        targets = splitter.chars;
        break;
      default:
        targets = splitter.chars;
    }

    if (!targets || targets.length === 0) {
      console.warn('No targets found for SplitText animation');
      splitter.revert();
      return;
    }

    // 내부 span들이 래퍼의 타이포를 상속
    if (inheritTypography) {
      targets.forEach(t => {
        const h = t as HTMLElement;
        h.style.fontSize = 'inherit';
        h.style.lineHeight = 'inherit';
        h.style.fontWeight = 'inherit';
        h.style.textAlign = 'inherit';
      });
    }

    // 그라데이션을 "전체 텍스트 폭" 기준으로 연속 매핑
    const applyContinuousGradient = () => {
      if (!gradient) return;
      const wrap = containerRef.current ?? el;
      const wrapRect = wrap.getBoundingClientRect();
      const wrapW = Math.max(1, wrapRect.width);

      targets.forEach(node => {
        const h = node as HTMLElement;
        const r = h.getBoundingClientRect();
        const left = r.left - wrapRect.left; // 래퍼 기준 X좌표

        // 표준 속성
        h.style.backgroundImage = gradient;
        h.style.backgroundRepeat = 'no-repeat';
        h.style.backgroundSize = `${wrapW}px 100%`;
        h.style.backgroundPosition = `${-left}px 0px`;
        h.style.backgroundClip = 'text';
        h.style.color = 'transparent';
        h.style.display = 'inline-block';

        // WebKit 접두사 속성은 setProperty로 안전하게
        h.style.setProperty('-webkit-background-clip', 'text');
        h.style.setProperty('-webkit-text-fill-color', 'transparent');
      });
    };

    // 렌더링 힌트
    targets.forEach(t => {
      (t as HTMLElement).style.willChange = 'transform, opacity';
    });

    // ScrollTrigger 시작 지점 계산
    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
    const sign =
      marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    // 반복/트리거 정책
    const computedRepeat = loop ? -1 : (repeat ?? 0);
    const playOnce = typeof once === 'boolean' ? once : computedRepeat === 0;
    const toggleActions = pauseWhenOffscreen ? 'play pause resume pause' : 'play none none none';

    // 초기 그라데이션 매핑
    applyContinuousGradient();

    // 사이즈 변화 대응 (연속 매핑 유지)
    let ro: ResizeObserver | undefined;
    const handleResize = () => applyContinuousGradient();

    if (typeof ResizeObserver !== 'undefined') {
      const localRO = new ResizeObserver(() => applyContinuousGradient());
      const observed = containerRef.current ?? el;
      localRO.observe(observed);
      ro = localRO; // cleanup에서 사용
    } else if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('resize', handleResize);
    }

    const tl = gsap.timeline({
      repeat: computedRepeat,
      yoyo,
      repeatDelay,
      repeatRefresh,
      smoothChildTiming: true,
      scrollTrigger: {
        trigger: containerRef.current ?? el,
        start,
        toggleActions,
        once: playOnce,
        onToggle: self => {
          scrollTriggerRef.current = self;
        },
      },
      onRepeat: () => {
        onRepeat?.();
      },
      onComplete: () => {
        // 무한반복이면 실질적으로 도달하지 않음
        gsap.set(targets, { ...to, clearProps: 'willChange', immediateRender: true });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
      onUpdate: gradient ? applyContinuousGradient : undefined,
    });

    return () => {
      tl.kill();
      scrollTriggerRef.current?.kill();

      if (ro) {
        ro.disconnect();
      } else if (
        typeof window !== 'undefined' &&
        typeof window.removeEventListener === 'function'
      ) {
        window.removeEventListener('resize', handleResize);
      }

      gsap.killTweensOf(targets);
      splitter.revert();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    // typography
    inheritTypography,
    fontSize,
    lineHeight,
    fontWeight,
    // loop
    loop,
    repeat,
    yoyo,
    repeatDelay,
    repeatRefresh,
    pauseWhenOffscreen,
    once,
    // gradient
    gradient,
    // callbacks
    onLetterAnimationComplete,
    onRepeat,
  ]);

  return (
    <div
      ref={containerRef}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        margin: 0, // 기본 마진 제거 (연속 배치 시 과다 간격 방지)
        fontSize,
        lineHeight,
        fontWeight,
        ...style,
      }}
    >
      {/* 실제로 스플릿/애니메이션이 적용되는 노드 */}
      <span ref={textRef}>{text}</span>
    </div>
  );
};

export default SplitText;
