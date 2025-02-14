/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface FooterButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

const footerButton = css`
  position: relative;
  display: flex;
  column-gap: 6px;
  font-size: 13px;
  color: #666;
  height: 40px;
  background-color: rgba(225, 194, 148, 0.2);
  align-items: center;
  justify-content: center;

  & + &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(225, 194, 148, 0.2);
    z-index: 1;
  }
`;

const FooterButton = ({ className, onClick, children }: FooterButtonProps) => {
  return (
    <button css={footerButton} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default FooterButton;
