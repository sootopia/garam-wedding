import { css, keyframes } from '@emotion/react';

export const calendarSection = css`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f7f8f9;
`;

export const calendarWrapper = (theme: any) => css`
  margin-bottom: 40px;
  padding: 28px;
  border-radius: 16px;
  background-color: #fff;
  text-align: center;

  h2 {
    font-size: 20px;
    font-weight: normal;
    color: ${theme.colors.primary};
    margin-bottom: 16px;
  }
`;

export const calendarHeader = css`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;

  div {
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: center;
  }
`;

export const calendarDays = (theme: any) => css`
  row-gap: 10px;

  span {
    display: flex;
    width: 30px;
    height: 30px;
    margin: auto;
    font-size: 14px;
    color: #666;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }

  .other__month {
    span {
      opacity: 0.3;
    }
  }

  .sunday {
    span {
      color: #fa5252;
    }
  }

  .active {
    span {
      font-weight: 700;
      color: #fff;
      background-color: ${theme.colors.primary};
    }
  }
`;

export const countdownWrapper = css`
  text-align: center;
  margin-bottom: 26px;
`;

export const timer = keyframes`
  50% {
    opacity: 0;
  }
`;

export const countdownItem = (theme: any) => css`
  position: relative;

  & + &::before {
    content: ':';
    position: absolute;
    top: 32px;
    left: -13px;
    font-size: 18px;
    color: ${theme.colors.primary};
    pointer-events: none;
    animation: ${timer} 1s step-end infinite;
  }

  span {
    display: block;
    font-size: 10px;
    color: #868e96;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
  }
`;

export const countdownCircle = (theme: any) => css`
  display: flex;
  width: 48px;
  height: 48px;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${theme.colors.primary};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

export const bottomText = css`
  font-size: 14px;
  color: #666;
  text-align: center;

  strong {
    font-weight: 700;
    color: #000;
  }
`;
