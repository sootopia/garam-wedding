import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', '*.config.js'] }, // dist 및 기타 파일 무시
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:react/recommended', // React 기본 설정 추가
      'plugin:react-hooks/recommended', // React Hooks 기본 설정 추가
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript', // TypeScript 호환 import 규칙
      'prettier', // Prettier와 충돌 방지
    ],
    files: ['**/*.{ts,tsx,js,jsx}'], // JavaScript, TypeScript 파일에 대해 적용
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module', // ES 모듈 사용
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSX 지원
        },
      },
      globals: globals.browser, // 브라우저 글로벌 변수 지원
    },
    settings: {
      react: {
        version: 'detect', // React 버전 자동 탐지
      },
      'import/resolver': {
        typescript: {}, // TypeScript 경로 alias 지원
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin, // Import 관련 규칙
    },
    rules: {
      // 기본 ESLint 규칙
      'no-unused-vars': 'warn', // 사용하지 않는 변수 경고
      'no-console': 'warn', // console.log 사용 경고
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js 기본 모듈
            'external', // 외부 라이브러리
            'internal', // 내부 모듈
            'parent', // 상위 디렉토리
            'sibling', // 같은 디렉토리
            'index', // index 파일
            'object', // 객체 import
          ],
          alphabetize: { order: 'asc', caseInsensitive: true }, // 알파벳 순 정렬
          'newlines-between': 'always', // 그룹 사이에 빈 줄 추가
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-uses-react': 'off', // React 17+ JSX Transform 지원
      'react/react-in-jsx-scope': 'off', // React 17+ JSX Transform 지원
      'react/prop-types': 'off', // TypeScript로 대체
      'react-hooks/rules-of-hooks': 'error', // React Hooks 사용 규칙 강제
      'react-hooks/exhaustive-deps': 'warn', // 종속성 배열 검사
    },
  },
);
