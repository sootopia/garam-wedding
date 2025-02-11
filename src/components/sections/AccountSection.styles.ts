import { css } from '@emotion/react';

export const accountSection = css`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const notifyText = css`
  font-size: 15px;
  color: #666;
  line-height: 1.53;
  text-align: center;
  margin-bottom: 24px;
`;

export const accountGroup = css`
  padding: 16px 24px;

  p {
    font-size: 13px;
    color: #666;
  }

  .button__gray {
    width: 58px;
  }

  & + & {
    border-top: 1px dashed #e9e9e9;
  }
`;
