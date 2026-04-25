/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8630A',
          dark: '#C45100',
          light: '#FFB693',
          bg: '#FFDBCC',
        },
        secondary: {
          DEFAULT: '#0A0A0A',
          light: '#1A1A1A',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          dim: '#F3F3F4',
          card: '#FFFFFF',
        },
        muted: '#5F5E5E',
        outline: {
          DEFAULT: '#8D7165',
          light: '#E1C0B2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
