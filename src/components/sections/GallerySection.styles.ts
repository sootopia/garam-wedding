import { css } from '@emotion/react';

export const gallerySection = css`
  padding-bottom: 80px;
`;

export const gridWrapper = css`
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;

  &:not(.expanded) {
    height: 1000px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 90px;
      background-image: linear-gradient(
        0deg,
        #fff 20%,
        rgba(255, 255, 255, 0.3) 65%,
        rgba(255, 255, 255, 0) 100%
      );
      z-index: 1;
    }
  }
`;

export const gridItem = css`
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 8px;
  break-inside: avoid;

  figure {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    .overlay {
      position: absolute;
      inset: 0px;
      z-index: 10;
    }

    img {
      user-select: none;
      pointer-events: none;
    }
  }
`;
