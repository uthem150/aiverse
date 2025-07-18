interface ResultImageOptions {
  testTitle: string;
  result: string;
  description: string;
  confidence?: number;
  userImage?: string;
  backgroundColor?: string;
  accentColor?: string;
  emoji?: string;
}

export class ResultImageGenerator {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext('2d')!;
  }

  async generateResultImage(options: ResultImageOptions): Promise<string> {
    const {
      testTitle,
      result,
      description,
      confidence,
      userImage,
      backgroundColor = '#6366F1',
      accentColor = '#FFFFFF',
      emoji = '✨',
    } = options;

    // 캔버스 초기화
    this.clearCanvas();

    // 배경 그라디언트
    await this.drawBackground(backgroundColor);

    // 로고/브랜딩
    await this.drawBranding();

    // 사용자 이미지 (있는 경우)
    if (userImage) {
      await this.drawUserImage(userImage);
    }

    // 결과 텍스트
    await this.drawResultText(result, emoji, accentColor);

    // 설명 텍스트
    await this.drawDescription(description, accentColor);

    // 신뢰도 (있는 경우)
    if (confidence) {
      await this.drawConfidence(confidence, accentColor);
    }

    // 테스트 제목
    await this.drawTestTitle(testTitle, accentColor);

    // 워터마크
    await this.drawWatermark();

    return this.canvas.toDataURL('image/png', 0.9);
  }

  private clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private async drawBackground(backgroundColor: string) {
    // 그라디언트 배경
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0, backgroundColor);
    gradient.addColorStop(1, this.adjustBrightness(backgroundColor, -20));

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // 장식적 요소들
    await this.drawDecorationElements();
  }

  private async drawDecorationElements() {
    // 원형 장식들
    const circles = [
      { x: 100, y: 100, radius: 50, opacity: 0.1 },
      { x: 700, y: 150, radius: 30, opacity: 0.15 },
      { x: 650, y: 500, radius: 40, opacity: 0.1 },
      { x: 150, y: 450, radius: 25, opacity: 0.2 },
    ];

    circles.forEach(circle => {
      this.ctx.save();
      this.ctx.globalAlpha = circle.opacity;
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  private async drawBranding() {
    // AIverse 로고
    this.ctx.save();
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 32px Pretendard, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('🤖 AIverse', this.canvas.width / 2, 60);
    this.ctx.restore();
  }

  private async drawUserImage(userImageSrc: string): Promise<void> {
    return new Promise(resolve => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        // 원형 마스크로 이미지 그리기
        const centerX = this.canvas.width / 2;
        const centerY = 220;
        const radius = 80;

        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx.clip();

        // 이미지 크기 조정
        const aspectRatio = img.width / img.height;
        let drawWidth = radius * 2;
        let drawHeight = radius * 2;

        if (aspectRatio > 1) {
          drawWidth = radius * 2 * aspectRatio;
        } else {
          drawHeight = (radius * 2) / aspectRatio;
        }

        this.ctx.drawImage(
          img,
          centerX - drawWidth / 2,
          centerY - drawHeight / 2,
          drawWidth,
          drawHeight
        );

        this.ctx.restore();

        // 원형 테두리
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius + 3, 0, Math.PI * 2);
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.lineWidth = 6;
        this.ctx.stroke();

        resolve();
      };
      img.onerror = () => resolve(); // 이미지 로드 실패시 무시
      img.src = userImageSrc;
    });
  }

  private async drawResultText(result: string, emoji: string, color: string) {
    // 이모지
    this.ctx.font = '48px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(emoji, this.canvas.width / 2, 350);

    // 결과 텍스트
    this.ctx.fillStyle = color;
    this.ctx.font = 'bold 42px Pretendard, sans-serif';
    this.ctx.fillText(result, this.canvas.width / 2, 420);
  }

  private async drawDescription(description: string, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.font = '24px Pretendard, sans-serif';
    this.ctx.textAlign = 'center';

    // 텍스트 줄바꿈 처리
    const words = description.split(' ');
    const lines = [];
    let currentLine = '';
    const maxWidth = 600;

    for (const word of words) {
      const testLine = currentLine + word + ' ';
      const metrics = this.ctx.measureText(testLine);

      if (metrics.width > maxWidth && currentLine !== '') {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine.trim());

    // 줄별로 그리기
    lines.forEach((line, index) => {
      this.ctx.fillText(line, this.canvas.width / 2, 460 + index * 35);
    });
  }

  private async drawConfidence(confidence: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.font = '18px Pretendard, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`신뢰도: ${confidence}%`, this.canvas.width / 2, 520);
  }

  private async drawTestTitle(testTitle: string, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.font = '20px Pretendard, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(testTitle, this.canvas.width / 2, 120);
  }

  private async drawWatermark() {
    this.ctx.save();
    this.ctx.globalAlpha = 0.6;
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = '14px Pretendard, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('aiverse.netlify.app', this.canvas.width / 2, this.canvas.height - 20);
    this.ctx.restore();
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

  downloadImage(filename: string = 'aiverse-result.png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = this.canvas.toDataURL();
    link.click();
  }
}

// 사용하기 쉬운 헬퍼 함수
export const generateResultImage = async (options: ResultImageOptions): Promise<string> => {
  const generator = new ResultImageGenerator();
  return generator.generateResultImage(options);
};
