/** @jsxImportSource @emotion/react */
import * as S from './AccountSection.styles';
import BaseHeader from '../common/BaseHeader';
import AccountAccordion from '../accordions/AccountAccordion';
import BaseButton from '../common/BaseButton';

interface Account {
  accountBank: string;
  accountNumber: string;
  accountHolder: string;
}

const AccountSection = () => {
  const accountArray: Account[][] = [
    [
      {
        accountBank: '카카오뱅크',
        accountNumber: '3333-08-8564016',
        accountHolder: '신랑 아버지 김학삼',
      },
      {
        accountBank: '국민은행',
        accountNumber: '816501-01-239601',
        accountHolder: '신랑 어머니 이현희',
      },
      {
        accountBank: '농협은행',
        accountNumber: '302-1884-7604-61',
        accountHolder: '신랑 김기도',
      },
    ],
    [
      {
        accountBank: '신한은행',
        accountNumber: '110-503-912466',
        accountHolder: '신부 아버지 정운천',
      },
      {
        accountBank: '농협은행',
        accountNumber: '302-0605-5824-41',
        accountHolder: '신부 어머니 신수경',
      },
      {
        accountBank: '신한은행',
        accountNumber: '110-539-199662',
        accountHolder: '신부 정가람',
      },
    ],
  ];

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      alert('계좌번호가 복사되었습니다.');
    });
  };

  return (
    <section css={S.accountSection}>
      <div className="container">
        <BaseHeader title="마음 전하실 곳" engTitle="ACCOUNT" />
        <p css={S.notifyText} data-aos="fade-up">
          참석이 어려우신 분들을 위해 <br />
          계좌번호를 기재하였습니다. <br />
          너그러운 마음으로 양해 부탁드려요.
        </p>

        <AccountAccordion header="신랑측 계좌번호">
          {accountArray[0].map((account) => (
            <div css={S.accountGroup} key={account.accountHolder}>
              <div className="flex items-center justify-between">
                <p>{account.accountHolder}</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p>
                  {account.accountBank} {account.accountNumber}
                </p>
                <BaseButton
                  className="button"
                  variant="gray"
                  size="xs"
                  medium
                  onClick={() => handleCopy(account.accountNumber)}
                >
                  <img src="/static/images/button_icon_copy.svg" alt="복사 아이콘" />
                  복사
                </BaseButton>
              </div>
            </div>
          ))}
        </AccountAccordion>

        <AccountAccordion header="신부측 계좌번호" className="mt-3">
          {accountArray[1].map((account) => (
            <div css={S.accountGroup} key={account.accountHolder}>
              <div className="flex items-center justify-between">
                <p>{account.accountHolder}</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p>
                  {account.accountBank} {account.accountNumber}
                </p>
                <BaseButton
                  className="button"
                  variant="gray"
                  size="xs"
                  medium
                  onClick={() => handleCopy(account.accountNumber)}
                >
                  <img src="/static/images/button_icon_copy.svg" alt="복사 아이콘" />
                  복사
                </BaseButton>
              </div>
            </div>
          ))}
        </AccountAccordion>
      </div>
    </section>
  );
};

export default AccountSection;
