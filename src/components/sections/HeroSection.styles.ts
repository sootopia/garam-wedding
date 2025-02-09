import { css } from '@emotion/react';

export const heroStyle = css`
  position: relative;
  padding-top: 80px;
`;

export const svgElement = css`
  stroke-dashoffset: 2103.635009765625px;
  stroke-dasharray: 2103.635009765625px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
  transition: stroke-dashoffset 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
`;

export const svgContainer = css`
  position: absolute;
  top: -28px;
  right: 0;
  z-index: 5;

  &.active path {
    stroke-dashoffset: 0;
    fill: rgb(225, 194, 148);
  }
`;

export const greetingText = (theme: any) => css`
  text-align: center;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.primary};
    letter-spacing: 0.2em;
    line-height: 1;

    span {
      font-weight: normal;
      color: ${theme.colors.secondary};
    }
  }

  p {
    font-size: 15px;
    color: #495057;
    line-height: 1.66;
  }
`;
