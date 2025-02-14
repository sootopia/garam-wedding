/** @jsxImportSource @emotion/react */
import * as S from './FooterLayout.styles';
import FooterButton from './FooterButton';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const FooterLayout = () => {
  // 카카오 공유 API 초기화
  useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
      script.async = true;
      script.onload = () => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
        }
      };
      document.head.appendChild(script);
    } else {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
      }
    }
  });

  const handleShareKakao = (): void => {
    window.Kakao.Share.sendCustom({
      templateId: 117427,
      templateArgs: {
        title: '김기도♥정가람 결혼합니다',
        description: '새로운 시작의 자리에 소중한 여러분을 모시고 싶습니다.',
      },
    });
  };

  const handleCopyURL = (): Promise<void> => {
    const url = window.location.href;

    return navigator.clipboard.writeText(url).then(() => {
      toast('청첩장 링크 주소가 복사되었습니다.');
    });
  };

  return (
    <footer>
      <div className="grid grid-cols-2">
        <FooterButton onClick={handleShareKakao}>
          <img src="/static/images/footer_icon_kakao.svg" alt="카카오톡 공유 아이콘" />
          카카오톡으로 공유하기
        </FooterButton>
        <FooterButton onClick={handleCopyURL}>
          <img src="/static/images/footer_icon_share.svg" alt="링크 복사 아이콘" />
          링크 복사하기
        </FooterButton>
      </div>

      <div css={S.copyright}>
        <p>Copyright 2025 Gido &amp; Garam All rights reserved.</p>
        <p className="opacity-50">Crafted with ❤️ by Noppy Lab</p>
      </div>
    </footer>
  );
};

export default FooterLayout;
