/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:          '#060606',
        surface:     '#0e0e0e',
        'surface-2': '#141414',
        'surface-3': '#1c1c1c',
        border:      '#232323',
        'border-2':  '#2e2e2e',
        accent:      '#3BFFB0',
        'accent-2':  '#1adb8a',
        warning:     '#FFB347',
        danger:      '#FF5555',
        text:        '#F2F2F2',
        'text-2':    '#A8A8A8',
        'text-3':    '#5C5C5C',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up':    'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
