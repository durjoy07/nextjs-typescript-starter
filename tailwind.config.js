const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}',
    './.storybook/preview.js',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    /**
     * WARNING: If you make changes to the breakpoints then,
     * please update the keys array/BREAKPOINTS object in 'src/themes/interface'.
     */
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
      secondary: ['var(--font-secondary)', ...fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#317AF5',
        DEFAULT: '#0C5EE8',
        medium: '#317AF5',
      },
      secondary: {
        light: '#16B8E1',
        DEFAULT: '#13A1C5',
        medium: '#13B1C6',
      },
      success: {
        light: '#6FD189',
        DEFAULT: '#35B958',
      },
      danger: {
        light: '#FA6B5F',
        DEFAULT: '#EA4335',
      },
      warning: {
        light: '#FCCB3C',
        DEFAULT: '#FBBC05',
      },
      black: {
        light: '#3D434F',
        DEFAULT: '#000000',
        medium: '#141D2E',
      },
      gray: {
        light: '#F8F9FA',
        DEFAULT: '#EFF4FA',
        medium: '#FBFBFB',
      },
      white: '#FFFFFF',
    },
    backgroundImage: {
      'primary-gradient-1':
        'linear-gradient(86.52deg, #0C5EE8 0.21%, #317AF5 100.21%)',
      'primary-gradient-2':
        'linear-gradient(198.61deg, #0C5EE8 12.59%, #317AF5 87.41%)',
      'secondary-gradient-1':
        'linear-gradient(180deg, #13A1C5 0%, #16B8E1 100%)',
      'secondary-gradient-2':
        'linear-gradient(270deg, #16B8E1 0%, #13A1C5 100%)',
      'link-gradient-1': 'linear-gradient(to right, #FBBC05, #FBBC05)',
    },
    fontSize: {
      sm: [
        '0.875rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.031em',
          fontWeight: '400',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.031em',
          fontWeight: '400',
        },
      ],
      lg: [
        '1.25rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.031em',
          fontWeight: '500',
        },
      ],
      xl: [
        '1.5rem',
        {
          lineHeight: '1.4',
          fontWeight: '600',
        },
      ],
      '2xl': [
        '1.75rem',
        {
          lineHeight: '1.3',
          fontWeight: '500',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '1.2',
          fontWeight: '600',
        },
      ],
      '4xl': [
        '3rem',
        {
          lineHeight: '1.1',
          fontWeight: '700',
        },
      ],
      '5xl': [
        '5rem',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
    },
    boxShadow: {
      1: '0 0 16px 0px rgba(12, 94, 232, 0.1)',
      2: '0px 11px 20px rgba(12, 94, 232, 0.16)',
      none: 'none',
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        DEFAULT: '350ms',
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        toRightFromLeft: {
          '49%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)', opacity: '0' },
          '51%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .4s both',
        fadeInUp: 'fadeInUp .4s both',
        fadeInDown: 'fadeInDown .4s both',
        fadeInLeft: 'fadeInLeft .4s both',
        fadeInRight: 'fadeInRight .4s both',
        toRightFromLeft: 'toRightFromLeft 0.5s forwards',
      },
      borderRadius: {
        5: '.3125rem',
        10: '.625rem',
        20: '1.25rem',
        30: '1.875rem',
        40: '2.5rem',
      },
      zIndex: {
        1: '1',
        99: '99',
        111: '111',
        444: '444',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
