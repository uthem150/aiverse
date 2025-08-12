import React, { useEffect, useRef } from 'react';

interface ParticlesProps {
  count?: number;
  color?: string;
  mouseInteraction?: boolean;
  mouseRadius?: number;
  mouseForce?: number;
}

const Particles: React.FC<ParticlesProps> = ({
  count = 50,
  color = '#ffffff',
  mouseInteraction = true,
  mouseRadius = 150,
  mouseForce = 0.8,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      originalVx: number;
      originalVy: number;
      size: number;
      opacity: number;
      originalX: number;
      originalY: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles.length = 0; // 기존 파티클 제거
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const vx = (Math.random() - 0.5) * 0.5;
        const vy = (Math.random() - 0.5) * 0.5;

        particles.push({
          x,
          y,
          vx,
          vy,
          originalVx: vx,
          originalVy: vy,
          originalX: x,
          originalY: y,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction) return;

      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!mouseInteraction || e.touches.length === 0) return;

      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.touches[0].clientX - rect.left;
      mouseRef.current.y = e.touches[0].clientY - rect.top;
      mouseRef.current.isActive = true;
    };

    const handleTouchEnd = () => {
      mouseRef.current.isActive = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // 마우스 인터랙션
        if (mouseInteraction && mouseRef.current.isActive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius;
            const angle = Math.atan2(dy, dx);

            // 마우스로부터 밀어내는 효과
            particle.vx -= Math.cos(angle) * force * mouseForce;
            particle.vy -= Math.sin(angle) * force * mouseForce;

            // 파티클 크기와 투명도 증가
            particle.size = Math.min(particle.size * 1.02, 8);
            particle.opacity = Math.min(particle.opacity * 1.1, 1);
          } else {
            // 원래 속도로 서서히 복원
            particle.vx += (particle.originalVx - particle.vx) * 0.02;
            particle.vy += (particle.originalVy - particle.vy) * 0.02;

            // 크기와 투명도 복원
            particle.size += (Math.random() * 3 + 1 - particle.size) * 0.02;
            particle.opacity += (Math.random() * 0.5 + 0.2 - particle.opacity) * 0.02;
          }
        } else {
          // 원래 상태로 복원
          particle.vx += (particle.originalVx - particle.vx) * 0.02;
          particle.vy += (particle.originalVy - particle.vy) * 0.02;
          particle.size += (Math.random() * 3 + 1 - particle.size) * 0.02;
          particle.opacity += (Math.random() * 0.5 + 0.2 - particle.opacity) * 0.02;
        }

        // 속도 제한
        const maxSpeed = 5;
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // 위치 업데이트
        particle.x += particle.vx;
        particle.y += particle.vy;

        // 경계 충돌 처리
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // 파티클 그리기
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // 마우스 근처에서 글로우 효과
        if (mouseInteraction && mouseRef.current.isActive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            const glowIntensity = (mouseRadius - distance) / mouseRadius;
            ctx.shadowBlur = 20 * glowIntensity;
            ctx.shadowColor = color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    // 이벤트 리스너 추가
    window.addEventListener('resize', resizeCanvas);
    if (mouseInteraction) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
      canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
      canvas.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (mouseInteraction) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchend', handleTouchEnd);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count, color, mouseInteraction, mouseRadius, mouseForce]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: mouseInteraction ? 'auto' : 'none',
        zIndex: 1,
      }}
    />
  );
};

export default Particles;
