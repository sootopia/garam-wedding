/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';

interface AccordionProps {
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const AccountAccordion = ({ header, children, className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (bodyRef.current) {
      if (isOpen) {
        bodyRef.current.style.height = `${bodyRef.current.scrollHeight}px`;
      } else {
        bodyRef.current.style.height = '0px';
      }
    }
  }, [isOpen]);

  const accordionStyles = (isOpen: boolean) => css`
    .accordion__header {
      position: relative;
      width: 100%;
      height: 50px;
      font-size: 15px;
      color: #333;
      text-align: left;
      padding: 0 24px;
      border-radius: 12px;
      background-color: #f1f3f5;
      outline: none;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 24px;
        width: 12px;
        height: 6.5px;
        margin-top: -3px;
        background-image: url(/static/images/accordion_arrow.svg);
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        transition: transform 0.3s ease;
        transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
      }
    }

    .accordion__body {
      height: 0;
      border: 1px solid transparent;
      border-radius: 12px;
      background-color: #fff;
      overflow: hidden;
      transition: margin-top 0.3s ease, height 0.3s ease, border-color 0.3s ease;
    }

    &.accordion--open {
      .accordion__body {
        margin-top: 8px;
        border-color: #dee2e6;
      }
    }
  `;

  return (
    <div
      css={accordionStyles(isOpen)}
      className={`${isOpen ? 'accordion--open' : ''} ${className || ''}`}
    >
      <button className="accordion__header" onClick={toggleAccordion}>
        {header}
      </button>
      <div className="accordion__body" ref={bodyRef}>
        {isOpen && children}
      </div>
    </div>
  );
};

export default AccountAccordion;
