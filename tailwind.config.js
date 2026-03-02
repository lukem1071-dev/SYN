/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': '#F8F6F2',
        'gold': '#D4AF37',
        'champagne': '#E8DFD0',
        'charcoal': '#1A1A1A',
        'goldWash': '#FBF7EE',
        'navy': '#0A1628',
        'emerald': '#2E7D52',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
