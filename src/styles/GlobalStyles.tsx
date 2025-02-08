import { Global, css } from '@emotion/react';
import './fonts.css';

const baseStyles = css`
  * {
    margin: 0;
    padding: 0;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }
  html,
  body {
    height: 100%;
  }
  body {
    font-family: 'Eulyoo1945', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #efefef;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  dl,
  ol,
  ul {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
  }

  .font-playwrite {
    font-family: 'Playwrite CU', cursive;
    font-optical-sizing: auto;
  }

  .font-pr {
    font-family: 'Pretendard', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  }
`;

const GlobalStyles = () => <Global styles={baseStyles} />;

export default GlobalStyles;
