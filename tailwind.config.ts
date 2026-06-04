import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        jet: '#121212',
        carbon: '#1a1a1a',
        bone: '#f5f1ea',
        ivory: '#fdfaf5',
        champagne: {
          DEFAULT: '#c9a96a',
          light: '#e3c894',
          dim: '#8a7a52',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(201,169,106,0.65)' },
          '70%': { boxShadow: '0 0 0 14px rgba(201,169,106,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(201,169,106,0)' },
        },
        scrollLine: {
          '0%, 100%': { opacity: '0', transform: 'scaleY(0.4) translateY(-12px)' },
          '50%': { opacity: '1', transform: 'scaleY(1) translateY(0)' },
        },
      },
      animation: {
        pulse: 'pulse 2.2s infinite',
        scrollLine: 'scrollLine 2.5s infinite cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
