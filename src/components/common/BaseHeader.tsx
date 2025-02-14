/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
  engTitle: string;
  title: string;
}

const BaseHeader = ({ engTitle, title }: HeaderProps) => {
  const theme = useTheme();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const processedSubTitle = engTitle.split('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const engHeader = css`
    font-size: 13px;
    font-weight: normal;
    color: ${theme.colors.primary};
    letter-spacing: 0.2em;
    opacity: 0.6;
    margin-bottom: 8px;

    span {
      display: inline-block;
      opacity: 0;
      filter: blur(6px);
      transform: rotate(-60deg);
      transition: opacity 0.6s ease-in, filter 0.6s ease-in, transform 0.6s ease-in;
    }
  `;

  const header = css`
    font-size: 20px;
    font-weight: normal;
    color: ${theme.colors.primary};
    letter-spacing: 0.2em;
    line-height: 1;
  `;

  const headerContainer = css`
    margin-bottom: 40px;
    text-align: center;

    &.animated {
      h3 {
        span {
          opacity: 1;
          filter: blur(0px);
          transform: rotate(0deg);
        }
      }
    }
  `;

  return (
    <div css={headerContainer} ref={headerRef} className={isAnimated ? 'animated' : ''}>
      <h3 css={engHeader}>
        {processedSubTitle.map((char, i) => (
          <span
            key={i}
            css={css`
              transition-delay: ${i * 75}ms !important;
            `}
          >
            {char}
          </span>
        ))}
      </h3>
      <h2 css={header}>{title}</h2>
    </div>
  );
};

export default BaseHeader;
