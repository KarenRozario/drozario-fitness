/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#140D0B',
          surface: '#1E1412',
          card: '#251A17',
          elevated: '#2D1F1B',
          border: '#3D2A24',
          subtle: '#4A342D',
        },
        cream: {
          DEFAULT: '#F5EDE3',
          muted: '#D6C8B8',
          subtle: '#A89989',
          dark: '#7D7063',
        },
        burntOrange: {
          DEFAULT: '#E07A2E',
          hover: '#EE883D',
          active: '#C7631E',
          subtle: 'rgba(224, 122, 46, 0.15)',
          border: 'rgba(224, 122, 46, 0.35)',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widestDisplay: '0.08em',
      },
    },
  },
  plugins: [],
}
