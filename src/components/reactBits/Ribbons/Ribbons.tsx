import React, { useEffect, useRef } from 'react';
import { Renderer, Transform, Vec3, Color, Polyline } from 'ogl';

import './Ribbons.css';

interface RibbonsProps {
  colors?: string[];
  baseSpring?: number;
  baseFriction?: number;
  baseThickness?: number;
  offsetFactor?: number;
  maxAge?: number;
  pointCount?: number;
  speedMultiplier?: number;
  enableFade?: boolean;
  enableShaderEffect?: boolean;
  effectAmplitude?: number;
  backgroundColor?: number[];
}

const Ribbons: React.FC<RibbonsProps> = ({
  colors = ['#ff9346', '#7cff67', '#ffee51', '#5227FF'],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ dpr: window.devicePixelRatio || 2, alpha: true });
    const gl = renderer.gl;
    if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
      gl.clearColor(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }

    // 캔버스 스타일 및 모바일 최적화 설정
    const canvasStyle = gl.canvas.style;
    canvasStyle.position = 'absolute';
    canvasStyle.top = '0';
    canvasStyle.left = '0';
    canvasStyle.width = '100%';
    canvasStyle.height = '100%';
    canvasStyle.touchAction = 'none';
    canvasStyle.userSelect = 'none';
    canvasStyle.setProperty('-webkit-user-select', 'none');
    canvasStyle.setProperty('-webkit-touch-callout', 'none');
    canvasStyle.setProperty('-webkit-user-drag', 'none');
    canvasStyle.setProperty('-webkit-tap-highlight-color', 'transparent');

    container.appendChild(gl.canvas);

    const scene = new Transform();
    const lines: {
      spring: number;
      friction: number;
      mouseVelocity: Vec3;
      mouseOffset: Vec3;
      points: Vec3[];
      polyline: Polyline;
    }[] = [];

    const vertex = `
      precision highp float;
      
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;
      
      varying vec2 vUV;
      
      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          if(uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
          }
          return current;
      }
      
      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `;

    const fragment = `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0;
          if(uEnableFade > 0.5) {
              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
          }
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `;

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      lines.forEach(line => line.polyline.resize());
    }
    window.addEventListener('resize', resize);

    const center = (colors.length - 1) / 2;
    colors.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.05;
      const friction = baseFriction + (Math.random() - 0.5) * 0.05;
      const thickness = baseThickness + (Math.random() - 0.5) * 3;
      const mouseOffset = new Vec3(
        (index - center) * offsetFactor + (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.1,
        0
      );

      const line = {
        spring,
        friction,
        mouseVelocity: new Vec3(),
        mouseOffset,
        points: [] as Vec3[],
        polyline: {} as Polyline,
      };

      const count = pointCount;
      const points: Vec3[] = [];
      for (let i = 0; i < count; i++) {
        points.push(new Vec3());
      }
      line.points = points;

      line.polyline = new Polyline(gl, {
        points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: thickness },
          uOpacity: { value: 1.0 },
          uTime: { value: 0.0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1.0 : 0.0 },
        },
      });
      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    let isInteracting = false;

    // 좌표 계산 함수
    function getCoordinates(clientX: number, clientY: number) {
      if (!container) return { x: 0, y: 0 };
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const width = container.clientWidth;
      const height = container.clientHeight;
      return {
        x: (x / width) * 2 - 1,
        y: (y / height) * -2 + 1,
      };
    }

    // 마우스 위치 업데이트 함수
    function updateMouse(x: number, y: number) {
      mouse.set(x, y, 0);
      if (!isInteracting) {
        isInteracting = true;
      }
    }

    // 마우스 이벤트 핸들러
    function handleMouseMove(e: MouseEvent) {
      const coords = getCoordinates(e.clientX, e.clientY);
      updateMouse(coords.x, coords.y);
    }

    function handleMouseEnter(e: MouseEvent) {
      const coords = getCoordinates(e.clientX, e.clientY);
      updateMouse(coords.x, coords.y);
    }

    function handleMouseLeave() {
      isInteracting = false;
    }

    // 터치 이벤트 핸들러 (passive 이벤트 문제 해결)
    function handleTouchStart(e: TouchEvent) {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }

      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const coords = getCoordinates(touch.clientX, touch.clientY);
        updateMouse(coords.x, coords.y);
      }
    }

    function handleTouchMove(e: TouchEvent) {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }

      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const coords = getCoordinates(touch.clientX, touch.clientY);
        updateMouse(coords.x, coords.y);
      }
    }

    function handleTouchEnd(e: TouchEvent) {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }
      isInteracting = false;
    }

    // 컨텍스트 메뉴 방지
    function handleContextMenu(e: Event) {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }
    }

    function handleSelectStart(e: Event) {
      try {
        e.preventDefault();
        e.stopPropagation();
      } catch (error) {
        // passive 이벤트인 경우 무시
      }
    }

    // 이벤트 리스너 등록
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 터치 이벤트는 passive: false로 등록하여 preventDefault 가능하게 함
    const touchOptions = { passive: false, capture: true };
    try {
      container.addEventListener('touchstart', handleTouchStart, touchOptions);
      container.addEventListener('touchmove', handleTouchMove, touchOptions);
      container.addEventListener('touchend', handleTouchEnd, touchOptions);
      container.addEventListener('contextmenu', handleContextMenu, touchOptions);
      container.addEventListener('selectstart', handleSelectStart, touchOptions);
    } catch (error) {
      // 일부 브라우저에서 지원하지 않는 경우 기본 등록
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
      container.addEventListener('touchend', handleTouchEnd);
      container.addEventListener('contextmenu', handleContextMenu);
      container.addEventListener('selectstart', handleSelectStart);
    }

    const tmp = new Vec3();
    let frameId: number;
    let lastTime = performance.now();

    function update() {
      frameId = requestAnimationFrame(update);
      const currentTime = performance.now();
      const dt = currentTime - lastTime;
      lastTime = currentTime;

      lines.forEach(line => {
        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);

        for (let i = 1; i < line.points.length; i++) {
          if (isFinite(maxAge) && maxAge > 0) {
            const segmentDelay = maxAge / (line.points.length - 1);
            const alpha = Math.min(1, (dt * speedMultiplier) / segmentDelay);
            line.points[i].lerp(line.points[i - 1], alpha);
          } else {
            line.points[i].lerp(line.points[i - 1], 0.9);
          }
        }
        if (line.polyline.mesh.program.uniforms.uTime) {
          line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
        }
        line.polyline.updateGeometry();
      });

      renderer.render({ scene });
    }
    update();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('contextmenu', handleContextMenu);
      container.removeEventListener('selectstart', handleSelectStart);
      cancelAnimationFrame(frameId);
      if (gl.canvas && gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    colors,
    baseSpring,
    baseFriction,
    baseThickness,
    offsetFactor,
    maxAge,
    pointCount,
    speedMultiplier,
    enableFade,
    enableShaderEffect,
    effectAmplitude,
    backgroundColor,
  ]);

  return <div ref={containerRef} className="ribbons-container" />;
};

export default Ribbons;
