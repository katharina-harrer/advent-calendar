/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f87171',
        secondary: '#000',
        bgLight: '#f3f4f6',
        textDark: '#f3f4f6',
        secondaryDark: '#ef4444',
        bgDark: {
          50: '#1e293b',
          100: '#0f172a', 
          150: '#020617'
        }
      }
    },
    colors: {
      svg: {
        50: '#F2E9E9',
        100: '#E6D8D6'
      },
      svgDark: {
        50: '#4A4E60',
        100: '#3A3D4C'
      }
    },
  },
  plugins: []
}

