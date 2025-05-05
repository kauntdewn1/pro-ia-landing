/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        purple: {
          500: '#b026ff',
          600: '#9717e3',
        },
        magenta: {
          400: '#ff33ff',
          500: '#ff00ff',
          600: '#cc00cc',
        },
        gray: {
          850: '#1a1a1a',
          950: '#0a0a0a',
        },
      },
      animation: {
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        'neon': '0 0 8px rgba(255, 0, 255, 0.6), 0 0 16px rgba(176, 38, 255, 0.4)',
      },
    },
  },
  plugins: [],
};