/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c2d8ff',
          300: '#9ebbff',
          400: '#7494ff',
          500: '#5272f7',
          600: '#3b55ec',
          700: '#3045d5',
          800: '#2c39a7',
          900: '#24307a',
          950: '#101742',
        },
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};