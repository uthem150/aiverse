// src/utils/thumbnailGenerator.ts
import type { TestItem, TestCategory } from '@/types/test';

interface ThumbnailOptions {
  test: TestItem;
  category?: TestCategory;
  width?: number;
  height?: number;
}

export class ThumbnailGenerator {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
  }

  async generateThumbnail(options: ThumbnailOptions): Promise<string> {
    const { test, category, width = 1200, height = 630 } = options;

    this.canvas.width = width;
    this.canvas.height = height;

    // 카테고리별 기본 색상 및 아이콘
    const defaultColors = {
      'ai-analysis': '#6366F1',
      'romance-personality': '#F56565',
      entertainment: '#8B5CF6',
      'fun-tests': '#06B6D4',
      lifestyle: '#10B981',
      career: '#F59E0B',
      default: '#6B7280',
    };

    const defaultIcons = {
      'ai-analysis': '🤖',
      'romance-personality': '💕',
      entertainment: '🎭',
      'fun-tests': '🎪',
      lifestyle: '🌟',
      career: '💼',
      default: '🧩',
    };

    const backgroundColor =
      category?.color ||
      defaultColors[test.category as keyof typeof defaultColors] ||
      defaultColors.default;

    const icon =
      category?.icon ||
      defaultIcons[test.category as keyof typeof defaultIcons] ||
      defaultIcons.default;

    // 배경 그라디언트
    await this.drawBackground(backgroundColor);

    // 브랜딩
    await this.drawBranding();

    // 메인 아이콘
    await this.drawMainIcon(icon);

    // 테스트 제목
    await this.drawTestTitle(test.title);

    // 설명
    await this.drawDescription(test.description);

    // 참여자 수
    await this.drawParticipantCount(test.participantCount || 0);

    // 장식 요소들
    await this.drawDecorations();

    return this.canvas.toDataURL('image/png', 0.9);
  }

  private async drawBackground(backgroundColor: string) {
    // 그라디언트 배경
    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
    gradient.addColorStop(0, backgroundColor);
    gradient.addColorStop(1, this.adjustBrightness(backgroundColor, -20));

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // 패턴 오버레이
    this.ctx.save();
    this.ctx.globalAlpha = 0.1;
    this.ctx.fillStyle = '#FFFFFF';

    // 도트 패턴
    for (let x = 0; x < this.canvas.width; x += 60) {
      for (let y = 0; y < this.canvas.height; y += 60) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
    this.ctx.restore();
  }

  private async drawBranding() {
    // AIverse 로고
    this.ctx.save();
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 48px Pretendard, -apple-system, sans-serif';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('🤖 AIverse', 60, 80);
    this.ctx.restore();
  }

  private async drawMainIcon(icon: string) {
    this.ctx.save();
    this.ctx.font = '120px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(icon, this.canvas.width / 2, 250);
    this.ctx.restore();
  }

  private async drawTestTitle(title: string) {
    this.ctx.save();
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 64px Pretendard, -apple-system, sans-serif';
    this.ctx.textAlign = 'center';

    // 제목이 너무 길면 줄바꿈
    const maxWidth = this.canvas.width - 120;
    const words = title.split(' ');
    let line = '';
    let y = 350;

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = this.ctx.measureText(testLine);

      if (metrics.width > maxWidth && i > 0) {
        this.ctx.fillText(line.trim(), this.canvas.width / 2, y);
        line = words[i] + ' ';
        y += 70;
      } else {
        line = testLine;
      }
    }
    this.ctx.fillText(line.trim(), this.canvas.width / 2, y);
    this.ctx.restore();
  }

  private async drawDescription(description: string) {
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    this.ctx.font = '32px Pretendard, -apple-system, sans-serif';
    this.ctx.textAlign = 'center';

    // 설명 텍스트 줄바꿈
    const maxWidth = this.canvas.width - 120;
    const words = description.split(' ');
    let line = '';
    let y = 480;
    let lineCount = 0;
    const maxLines = 2;

    for (let i = 0; i < words.length && lineCount < maxLines; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = this.ctx.measureText(testLine);

      if (metrics.width > maxWidth && i > 0) {
        this.ctx.fillText(line.trim(), this.canvas.width / 2, y);
        line = words[i] + ' ';
        y += 40;
        lineCount++;
      } else {
        line = testLine;
      }
    }

    if (lineCount < maxLines) {
      // 마지막 줄에 "..." 추가 (필요시)
      let finalLine = line.trim();
      if (words.length > 15) {
        // 단어가 많으면 생략 표시
        finalLine += '...';
      }
      this.ctx.fillText(finalLine, this.canvas.width / 2, y);
    }

    this.ctx.restore();
  }

  private async drawParticipantCount(count: number) {
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.ctx.font = '28px Pretendard, -apple-system, sans-serif';
    this.ctx.textAlign = 'center';

    const formattedCount =
      count >= 1000000
        ? `${Math.floor(count / 100000) / 10}M`
        : count >= 1000
          ? `${Math.floor(count / 100) / 10}K`
          : count.toString();

    this.ctx.fillText(`👥 ${formattedCount}명 참여`, this.canvas.width / 2, 570);
    this.ctx.restore();
  }

  private async drawDecorations() {
    // 장식용 원형들
    const decorations = [
      { x: 100, y: 150, radius: 40, opacity: 0.1 },
      { x: this.canvas.width - 100, y: 200, radius: 30, opacity: 0.15 },
      { x: this.canvas.width - 80, y: this.canvas.height - 100, radius: 35, opacity: 0.1 },
      { x: 120, y: this.canvas.height - 120, radius: 25, opacity: 0.2 },
    ];

    decorations.forEach(decoration => {
      this.ctx.save();
      this.ctx.globalAlpha = decoration.opacity;
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.beginPath();
      this.ctx.arc(decoration.x, decoration.y, decoration.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  private adjustBrightness(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;

    return (
      '#' +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  }
}

// 헬퍼 함수
export const generateTestThumbnail = async (options: ThumbnailOptions): Promise<string> => {
  const generator = new ThumbnailGenerator();
  return generator.generateThumbnail(options);
};

// 테스트별 썸네일 URL 생성 함수
export const getTestThumbnailUrl = (testId: string): string => {
  // 이미 생성된 썸네일이 있다면 사용, 없다면 기본 이미지
  return `https://aiverse-phi.vercel.app/images/thumbnails/${testId}.png`;
};

// 기본 사이트 이미지 URL
export const getDefaultSiteImage = (): string => {
  return 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png';
};
