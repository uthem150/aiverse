/* eslint-disable react/no-unknown-property */
import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useThree, type CanvasProps, type ThreeEvent } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';

import './PixelTrail.css';

interface GooeyFilterProps {
  id?: string;
  strength?: number;
}

interface SceneProps {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  pixelColor: string;
}

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: Partial<CanvasProps>;
  glProps?: WebGLContextAttributes & { powerPreference?: string };
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
}

const GooeyFilter: React.FC<GooeyFilterProps> = ({ id = 'goo-filter', strength = 10 }) => {
  return (
    <svg className="goo-filter-container">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff'),
  },
  /* glsl vertex shader */ `
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl fragment shader */ `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  `
);

function Scene({
  gridSize,
  trailSize,
  maxAge,
  interpolate,
  easingFunction,
  pixelColor,
}: SceneProps) {
  const size = useThree(s => s.size);
  const viewport = useThree(s => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x: number) => x),
  }) as [THREE.Texture | null, (e: ThreeEvent<PointerEvent>) => void];

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  // 터치 및 포인터 이벤트 핸들러 (preventDefault 제거)
  const handlePointerEvent = (e: ThreeEvent<PointerEvent>) => {
    // React Three Fiber 이벤트에서는 preventDefault를 호출하지 않음
    // 대신 컨테이너 레벨에서 터치 이벤트를 처리
    onMove(e);
  };

  return (
    <mesh
      scale={[scale, scale, 1]}
      onPointerMove={handlePointerEvent}
      onPointerDown={handlePointerEvent}
    >
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x: number) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true,
  },
  gooeyFilter,
  color = '#ffffff',
  className = '',
}: PixelTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Canvas 요소 찾기 (Canvas 컴포넌트가 렌더링된 후)
    const findCanvas = () => {
      const canvas = container.querySelector('canvas');
      if (canvas) {
        canvasElementRef.current = canvas;

        // 모바일 최적화 스타일 적용
        const canvasStyle = canvas.style;
        canvasStyle.touchAction = 'none';
        canvasStyle.userSelect = 'none';
        canvasStyle.setProperty('-webkit-user-select', 'none');
        canvasStyle.setProperty('-webkit-touch-callout', 'none');
        canvasStyle.setProperty('-webkit-user-drag', 'none');
        canvasStyle.setProperty('-webkit-tap-highlight-color', 'transparent');

        return true;
      }
      return false;
    };

    // Canvas가 렌더링될 때까지 대기
    const intervalId = setInterval(() => {
      if (findCanvas()) {
        clearInterval(intervalId);
      }
    }, 100);

    // 5초 후 타임아웃
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  // 컨테이너 이벤트 핸들러들 (passive 이벤트 문제 해결)
  const handleTouchStart = (e: TouchEvent) => {
    try {
      e.preventDefault();
      e.stopPropagation();
    } catch (error) {
      // passive 이벤트인 경우 무시
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    try {
      e.preventDefault();
      e.stopPropagation();
    } catch (error) {
      // passive 이벤트인 경우 무시
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    try {
      e.preventDefault();
      e.stopPropagation();
    } catch (error) {
      // passive 이벤트인 경우 무시
    }
  };

  const handleContextMenu = (e: Event) => {
    try {
      e.preventDefault();
      e.stopPropagation();
    } catch (error) {
      // passive 이벤트인 경우 무시
    }
  };

  const handleSelectStart = (e: Event) => {
    try {
      e.preventDefault();
      e.stopPropagation();
    } catch (error) {
      // passive 이벤트인 경우 무시
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 더 안전한 이벤트 리스너 등록 방법
    const options = { passive: false, capture: true };

    // 컨테이너에 이벤트 리스너 추가 (Canvas보다 상위에서 처리)
    try {
      container.addEventListener('touchstart', handleTouchStart, options);
      container.addEventListener('touchmove', handleTouchMove, options);
      container.addEventListener('touchend', handleTouchEnd, options);
      container.addEventListener('contextmenu', handleContextMenu, options);
      container.addEventListener('selectstart', handleSelectStart, options);
    } catch (error) {
      // 일부 브라우저에서 지원하지 않는 경우 기본 등록
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
      container.addEventListener('touchend', handleTouchEnd);
      container.addEventListener('contextmenu', handleContextMenu);
      container.addEventListener('selectstart', handleSelectStart);
    }

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('contextmenu', handleContextMenu);
      container.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  const enhancedCanvasProps: Partial<CanvasProps> = {
    ...canvasProps,
    // Canvas 자체의 터치 동작 비활성화 (React 합성 이벤트)
    onTouchStart: e => {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }
    },
    onTouchMove: e => {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }
    },
    onTouchEnd: e => {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }
    },
    onContextMenu: e => {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }
    },
  };

  return (
    <div
      ref={containerRef}
      className="pixel-trail-container"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...enhancedCanvasProps}
        gl={glProps}
        className={`pixel-canvas ${className}`}
        style={gooeyFilter ? { filter: `url(#${gooeyFilter.id})` } : undefined}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </div>
  );
}
