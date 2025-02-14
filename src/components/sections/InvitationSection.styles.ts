import { css } from '@emotion/react';

export const invitationSection = css`
  padding-top: 80px;
  text-align: center;

  p {
    color: #000;
    line-height: 2;
  }
`;

export const heroWrapper = css`
  position: relative;
  margin-top: 80px;

  figure {
    overflow: hidden;
  }
`;

export const heroInfo = css`
  margin-top: 35px;
  margin-bottom: 60px;
  text-align: center;
  color: #666;
  letter-spacing: 0.05em;
  line-height: 1.875;

  strong {
    font-weight: 700;
    color: #000;
  }
`;

export const hero = (theme: any) => css`
  display: inline-block;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-left: 8px;
`;
