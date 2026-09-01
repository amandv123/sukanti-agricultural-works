/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#1E5631',
          deepDark: '#153F24',
          fresh: '#3E9142',
          dark: '#122B1B',
          gold: '#E0A83C',
          cream: '#FAF7EF',
          surface: '#F2F5EC',
          ink: '#181A16',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 20px -4px rgba(20, 40, 24, 0.08)',
        cardHover: '0 12px 30px -8px rgba(20, 40, 24, 0.18)',
      },
      maxWidth: {
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
