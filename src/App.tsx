/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { css } from '@emotion/react';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import HeroSection from './components/sections/HeroSection';
import InvitationSection from './components/sections/InvitationSection';
import AccountSection from './components/sections/AccountSection';
import GallerySection from './components/sections/GallerySection';
import CalendarSection from './components/sections/CalendarSection';
import LocationSection from './components/sections/LocationSection';
import FooterLayout from './components/footer/FooterLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WrapperStyle = css`
  position: relative;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
`;

const contextClass = {
  success: 'p-6 bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.14)]',
  error: 'p-6 bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.14)]',
  info: 'p-6 bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.14)]',
  warning: 'p-6 bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.14)]',
  default:
    'p-6 bg-white text-sm font-bold text-gray-700 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.14)]',
  dark: 'p-6 bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.14)]',
};

const App = () => {
  // AOS 초기화
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div css={WrapperStyle}>
          <HeroSection />
          <InvitationSection />
          <AccountSection />
          <GallerySection />
          <CalendarSection />
          <LocationSection />
          <FooterLayout />
        </div>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          toastClassName={(context) => contextClass[context?.type || 'default']}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
