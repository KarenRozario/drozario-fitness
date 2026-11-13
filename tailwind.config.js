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
          surface: '#1A1412',
          card: '#221B18',
          border: '#3D2F2A',
        },
        slateHeader: {
          DEFAULT: '#1E242B',
          dark: '#161B20',
          border: '#2E3742',
        },
        inspoBlue: {
          DEFAULT: '#3B6B96',
          dark: '#2A4E70',
          light: '#5B8AB8',
          subtle: '#EBF2F7',
        },
        burntOrange: {
          DEFAULT: '#E07A2E',
          hover: '#EE883D',
          active: '#C7631E',
          subtle: 'rgba(224, 122, 46, 0.12)',
          border: 'rgba(224, 122, 46, 0.35)',
        },
        cream: {
          DEFAULT: '#F5EDE3',
          muted: '#D6C8B8',
          dark: '#8C7E72',
        },
        neutralText: {
          heading: '#1E293B',
          body: '#475569',
          muted: '#64748B',
          light: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
