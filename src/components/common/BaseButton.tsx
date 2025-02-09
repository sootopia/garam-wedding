/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useTheme } from '@emotion/react';

interface ButtonProps {
  tagType?: 'button' | 'a';
  href?: string;
  variant?: 'primary' | 'secondary' | 'teritiary' | 'default' | 'gray' | 'kakao';
  bold?: boolean;
  medium?: boolean;
  size?: 'sm' | 'xs' | '';
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

const BaseButton = ({
  tagType = 'button',
  href,
  variant = 'default',
  bold = false,
  medium = false,
  size = '',
  onClick,
  children,
}: ButtonProps) => {
  const theme = useTheme();

  const buttonStyles = css`
    position: relative;
    display: flex;
    width: 100%;
    height: 54px;
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    color: #000;
    column-gap: 8px;
    border: 1px solid transparent;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    outline: none;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.05);
      opacity: 0;
      z-index: 1;
      transition: opacity 0.2s;
    }

    &:not(.button__sm):not(.button__xs) {
      &:hover {
        transform: scale(1.02);
      }

      &:active {
        transform: scale(0.98);

        &::after {
          opacity: 1;
        }
      }
    }

    &.button__secondary {
      background-color: ${theme.colors.secondary};
    }

    &.button__default {
      border-color: #dee2e6;
      background-color: #fff;
    }

    &.button__gray {
      color: #666;
      background-color: #f1f3f5;
    }

    &.button__kakao {
      color: #000;
      background-color: #ffeb00;
    }

    &.button__sm {
      height: 40px;
      font-size: 13px;
      border-radius: 10px;
    }

    &.button__xs {
      height: 30px;
      font-size: 12px;
      column-gap: 5px;
      border-radius: 8px;
    }

    ${bold && 'font-weight: 700;'}
    ${medium && 'font-weight: 500;'}
  `;

  const Component = tagType === 'a' ? 'a' : 'button';

  return (
    <Component
      css={buttonStyles}
      className={`${variant ? `button__${variant}` : ''} ${size ? `button__${size}` : ''}`}
      {...(tagType === 'a' && href ? { href } : {})}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default BaseButton;
