/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'operiva-blue': '#1F5EFF',
        'operiva-navy': '#0F1E3A',
        'progress-green': '#12C48B',
        'amber-alert': '#F4A100',
        'charcoal': '#2A2E35',
        'light-gray': '#ECEFF4',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['Sora', 'Inter', 'Arial', 'sans-serif'],
      },
      spacing: {
        '8': '2rem', // 8-pt scale: 8px = 0.5rem, 16px = 1rem, 24px = 1.5rem, 32px = 2rem
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
      },
      borderRadius: {
        'lg': '8px',
      },
    },
  },
  plugins: [],
}
