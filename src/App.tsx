/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import { css } from '@emotion/react';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import HeroSection from './components/sections/HeroSection';
import InvitationSection from './components/sections/InvitationSection';
import AccountSection from './components/sections/AccountSection';
import GallerySection from './components/sections/GallerySection';

const WrapperStyle = css`
  position: relative;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div css={WrapperStyle}>
          <HeroSection />
          <InvitationSection />
          <AccountSection />
          <GallerySection />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
