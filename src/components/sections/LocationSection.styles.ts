import { css } from '@emotion/react';

export const locationSection = css`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const locationHeader = css`
  text-align: center;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000;
    line-height: 1;
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    color: #666;
    line-height: 1.53;
  }
`;

export const infoGroup = css`
  h4 {
    font-size: 15px;
    font-weight: 700;
    color: #000;
    line-height: 1.1;
    margin-bottom: 12px;
  }

  h5 {
    font-size: 14px;
    font-weight: normal;
    color: #000;
    line-height: 1.1;
    margin-bottom: 10px;
  }

  p,
  ul li {
    font-size: 14px;
    color: #666;
    line-height: 1.1;
  }

  ul li {
    position: relative;

    & + li {
      margin-top: 10px;
    }
  }
`;
