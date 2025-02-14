/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

interface Contact {
  title: string;
  name: string;
  tel: string;
}

type ContactGroup = Contact[][];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const modalDialog = (isClosing: boolean) => css`
  width: 420px;
  max-width: 100%;
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;
  opacity: 1;
  animation: ${isClosing ? fadeOut : fadeIn} 0.3s ease-in-out;
`;

const modalHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }

  .close {
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    outline: none;
  }
`;

const groupHeader = css`
  display: flex;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px dashed #ced4da;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 16px;
    font-weight: normal;
    color: #333;
  }

  p {
    font-size: 12px;
    color: #868e96;
    letter-spacing: 0.25em;
  }
`;

const groupItem = css`
  display: flex;
  column-gap: 16px;

  .title {
    flex: 0 0 120px;
    max-width: 120px;
    font-size: 14px;
    color: #666;
  }

  .name {
    flex: 0 0 80px;
    max-width: 80px;
    font-size: 15px;
    color: $black;
  }

  .contact {
    display: flex;
    column-gap: 24px;
    margin-left: auto;
    align-items: center;

    a {
      color: #999;
    }
  }

  & + div {
    margin-top: 10px;
  }
`;

const ContactModal = ({ onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  const contactInfo: ContactGroup = [
    [
      {
        title: '신랑',
        name: '김기도',
        tel: '010-9473-8324',
      },
      {
        title: '신랑 아버지',
        name: '김학삼',
        tel: '010-2558-1434',
      },
      {
        title: '신랑 어머니',
        name: '이현희',
        tel: '010-3628-1434',
      },
    ],
    [
      {
        title: '신부',
        name: '정가람',
        tel: '010-6711-6304',
      },
      {
        title: '신부 아버지',
        name: '정운천',
        tel: '010-7135-0293',
      },
      {
        title: '신부 어머니',
        name: '신수경',
        tel: '010-4797-6304',
      },
    ],
  ];

  return (
    <div
      className="fixed inset-0 flex px-5 justify-center items-center z-[1500] bg-gray-800/60"
      onClick={handleClose}
    >
      <div css={modalDialog(isClosing)} onClick={(e) => e.stopPropagation()}>
        <div css={modalHeader}>
          <h1>연락하기</h1>
          <button className="close" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>

        <div className="modal__content">
          <div className="mb-16">
            <div css={groupHeader}>
              <h3>신랑측</h3>
              <p>GROOM</p>
            </div>
            {contactInfo[0].map((contact) => (
              <div css={groupItem} key={contact.title}>
                <div className="title">{contact.title}</div>
                <div className="name">{contact.name}</div>
                <div className="contact">
                  <a href={`tel:${contact.tel}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                      />
                    </svg>
                  </a>
                  <a href={`sms: ${contact.tel}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div css={groupHeader}>
              <h3>신부측</h3>
              <p>BRIDE</p>
            </div>
            {contactInfo[1].map((contact) => (
              <div css={groupItem} key={contact.title}>
                <div className="title">{contact.title}</div>
                <div className="name">{contact.name}</div>
                <div className="contact">
                  <a href={`tel:${contact.tel}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                      />
                    </svg>
                  </a>
                  <a href={`sms: ${contact.tel}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
