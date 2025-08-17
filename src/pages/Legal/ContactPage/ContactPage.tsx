import { useState } from 'react';
import Typography from '@/components/common/Typography/Typography';
import Button from '@/components/common/Button/Button';
import SEO from '@/components/common/SEO/SEO';
import { StyledPage, StyledHero, StyledForm, Field, InfoBox } from './ContactPage.style';

const ContactPage = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // 실제 메일/백엔드 연동이 없다면 mailto 또는 폼 백엔드(폼스파크/폼케리 등) 사용 권장
    // 데모: 1.5초 후 완료 토스트 느낌
    setTimeout(() => {
      alert('문의가 제출되었습니다. 확인 후 연락드리겠습니다!');
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <StyledPage>
      <SEO
        title="연락처 | AIverse-phi"
        description="협업, 제안, 문의가 있으신가요? 아래 양식 또는 이메일로 연락주세요."
        keywords="연락처, 문의"
        type="website"
      />

      <StyledHero>
        <Typography variant="h1" align="center" responsive>
          연락하기
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          협업 제안, 파트너십, 일반 문의를 환영합니다.
        </Typography>
      </StyledHero>

      <StyledForm onSubmit={onSubmit}>
        <Field>
          <label htmlFor="name">이름</label>
          <input id="name" name="name" type="text" required placeholder="홍길동" />
        </Field>
        <Field>
          <label htmlFor="email">이메일</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
        </Field>
        <Field>
          <label htmlFor="subject">제목</label>
          <input id="subject" name="subject" type="text" required placeholder="문의 제목" />
        </Field>
        <Field>
          <label htmlFor="message">내용</label>
          <textarea id="message" name="message" required placeholder="문의 내용을 작성해 주세요" />
        </Field>

        <Button type="submit" variant="primary" size="large" disabled={sending}>
          {sending ? '전송 중...' : '문의 보내기'}
        </Button>
      </StyledForm>

      <InfoBox>
        <Typography variant="body2" color="#6B7280">
          또는 이메일: <a href="mailto:support@aiverse-phi.example">support@aiverse-phi.example</a>
        </Typography>
      </InfoBox>
    </StyledPage>
  );
};

export default ContactPage;
