/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as S from './InvitationSection.styles';
import BaseHeader from '../common/BaseHeader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BaseButton from '../common/BaseButton';
import ContactModal from '../modals/ContactModal';

gsap.registerPlugin(ScrollTrigger);

const InvitationSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wideImgRef = useRef<HTMLElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current && !wideImgRef.current) return;

    const timeline = gsap.timeline();
    timeline
      .add('timeline-01')
      .fromTo(
        wideImgRef.current,
        { clipPath: 'inset(0 50% 0 50%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 8 },
      );

    const trigger = ScrollTrigger.create({
      animation: timeline,
      trigger: sectionRef.current,
      start: 'top 60%',
      end: '+=900',
      pin: false,
      scrub: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <>
      <section css={S.invitationSection} ref={sectionRef}>
        <div className="container">
          {/* .greeting__text */}
          <div className="greeting__text">
            <BaseHeader title="소중한 분들을 초대합니다" engTitle="INVITATION" />
            <p data-aos="fade-up">선한 목자 되신 하나님의</p>
            <p data-aos="fade-up" data-aos-delay="50">
              부족함 없는 인도하심의 은혜로 만난 두 사람이
            </p>
            <p data-aos="fade-up" data-aos-delay="100">
              이제 하나님 앞에서 새로운 가정을 이루는
            </p>
            <p data-aos="fade-up" data-aos-delay="150">
              아름다운 약속을 하려 합니다.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              언제나 주 안에서 아름다운 사랑을 나누는
            </p>
            <p data-aos="fade-up" data-aos-delay="250">
              행복한 가정을 이루도록
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              오셔서 축복해 주시고 기도해 주세요.
            </p>
          </div>
          {/* .greeting__text */}

          <div css={S.heroWrapper}>
            <figure className="-mx-5" ref={wideImgRef}>
              <img className="w-full" src="/static/images/invitation_img.webp" alt="" />
            </figure>

            <div css={S.heroInfo}>
              <div data-aos="fade-up">
                <strong>김학삼&middot;이현희</strong>의 장남 <span css={S.hero}>김기도</span>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <strong>정운천&middot;신수경</strong>의 차녀 <span css={S.hero}>정가람</span>
              </div>
            </div>

            <BaseButton variant="secondary" bold onClick={() => setIsModalOpen(true)}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_59_58)">
                  <path
                    d="M3.65401 1.32799C3.59498 1.25205 3.52046 1.18954 3.43542 1.14461C3.35037 1.09969 3.25673 1.07337 3.16073 1.06741C3.06473 1.06145 2.96856 1.07599 2.87861 1.11005C2.78866 1.14412 2.70698 1.19693 2.63901 1.26499L1.60501 2.29999C1.12201 2.78399 0.944013 3.46899 1.15501 4.06999C2.03174 6.5571 3.45617 8.8154 5.32301 10.678C7.18561 12.5448 9.4439 13.9693 11.931 14.846C12.532 15.057 13.217 14.879 13.701 14.396L14.735 13.362C14.8031 13.294 14.8559 13.2123 14.8899 13.1224C14.924 13.0324 14.9385 12.9363 14.9326 12.8403C14.9266 12.7443 14.9003 12.6506 14.8554 12.5656C14.8105 12.4805 14.748 12.406 14.672 12.347L12.365 10.553C12.2838 10.4902 12.1895 10.4466 12.089 10.4255C11.9886 10.4043 11.8846 10.4062 11.785 10.431L9.59501 10.978C9.30267 11.0506 8.99654 11.0464 8.70626 10.966C8.41597 10.8856 8.15135 10.7316 7.93801 10.519L5.48201 8.06199C5.26919 7.84875 5.11503 7.58418 5.03444 7.29389C4.95386 7.0036 4.94957 6.69742 5.02201 6.40499L5.57001 4.21499C5.59477 4.11537 5.59666 4.01145 5.57553 3.911C5.5544 3.81055 5.51081 3.71619 5.44801 3.63499L3.65401 1.32799ZM1.88401 0.51099C2.05901 0.335939 2.26924 0.20012 2.50075 0.112551C2.73226 0.0249819 2.97976 -0.0123334 3.22679 0.00308286C3.47383 0.0184991 3.71477 0.0862943 3.93359 0.201967C4.15242 0.317639 4.34414 0.478541 4.49601 0.67399L6.29001 2.97999C6.61901 3.40299 6.73501 3.95399 6.60501 4.47399L6.05801 6.66399C6.02993 6.77743 6.03156 6.89619 6.06273 7.00882C6.09391 7.12145 6.15359 7.22414 6.23601 7.30699L8.69301 9.76399C8.77596 9.84658 8.87882 9.90636 8.99164 9.93754C9.10447 9.96872 9.22343 9.97026 9.33701 9.94199L11.526 9.39499C11.7827 9.3312 12.0504 9.3264 12.3092 9.38096C12.5679 9.43552 12.811 9.54801 13.02 9.70999L15.326 11.504C16.155 12.149 16.231 13.374 15.489 14.115L14.455 15.149C13.715 15.889 12.609 16.214 11.578 15.851C8.93869 14.9236 6.54255 13.4127 4.56801 11.431C2.58639 9.45674 1.07556 7.06096 0.148013 4.42199C-0.213987 3.39199 0.111013 2.28499 0.851013 1.54499L1.88401 0.51099Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_59_58">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              연락하기
            </BaseButton>
          </div>
        </div>
      </section>

      {isModalOpen &&
        ReactDOM.createPortal(
          <ContactModal onClose={() => setIsModalOpen(false)} />,
          document.getElementById('modal-root') as HTMLElement,
        )}
    </>
  );
};

export default InvitationSection;
