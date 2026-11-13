/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          light: '#FFFDF9',
        },
        sand: {
          DEFAULT: '#F2ECE3',
          dark: '#E7DFD4',
        },
        ink: {
          DEFAULT: '#1A1714',
          muted: '#4A4540',
          subtle: '#78716A',
          faint: 'rgba(26, 23, 20, 0.15)',
        },
        terracotta: {
          DEFAULT: '#B4532A',
          hover: '#9A421D',
          light: '#F8EFEA',
          subtle: 'rgba(180, 83, 42, 0.12)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}
